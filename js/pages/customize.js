import * as THREE from 'three';
import { OrbitControls }  from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader }     from 'three/addons/loaders/GLTFLoader.js';

// ── Lookup tables ─────────────────────────────────────────────────────────────
const PAINT_TYPE_PROPS = {
    gloss:    { roughness: 0.08, metalness: 0.15 },
    matte:    { roughness: 0.88, metalness: 0.02 },
    satin:    { roughness: 0.42, metalness: 0.08 },
    metallic: { roughness: 0.25, metalness: 0.85 },
};

const PAINT_TYPE_LABELS = [
    { id: 'gloss',    label: 'Gloss'    },
    { id: 'matte',    label: 'Matte'    },
    { id: 'satin',    label: 'Satin'    },
    { id: 'metallic', label: 'Metallic' },
];

const CALIPER_COLORS = [
    { id: 'red',    label: 'Red',    hex: '#cc2200' },
    { id: 'black',  label: 'Black',  hex: '#111111' },
    { id: 'yellow', label: 'Yellow', hex: '#d4aa00' },
    { id: 'blue',   label: 'Blue',   hex: '#1a44cc' },
];

// ── State ─────────────────────────────────────────────────────────────────────
let config = {
    unitId:      '',
    modelId:     '',
    spec:        null,
    paint:       null,
    rimId:       null,
    tint:        20,
    caliperId:   'red',
    interiorId:  null,
    extras:      {},   // { sectionId: selectedOptionId } for all non-3D option sections
    addons:      [],
    currentStep: 0,
};

// Material buckets — store THREE.Material refs (works for both placeholder and GLTF)
const mats = { body: [], glass: [], rims: [], calipers: [] };

let scene, camera, renderer, controls, carGroup;
let revealPhase = false, revealStart = 0;

// ── Material classifier ───────────────────────────────────────────────────────
function classifyMat(meshName, mat) {
    const n = ((meshName || '') + ' ' + (mat.name || '')).toLowerCase();

    if (/glass|window|vidro|windscreen|windshield|vitre/.test(n)) return 'glass';
    if (/\btire\b|\btires\b|\btyre\b|\bpneu\b|\brubber\b|carro_pneu|gum_0/.test(n)) return 'skip';
    if (/\bcaliper\b|\bbrake\b|\bfreio\b|breaksred|break_disc/.test(n)) return 'caliper';
    if (/\bchrome\b|galvano_chrome|chrome_bright|\bwhl_|\brim\b|\broda\b|wheel_\w+_wheel|carro_cromado|carro_roda/.test(n)) return 'rim';
    if (/\blight\b|\blamp\b|emissive|taillight|headlight|taillights|red_light/.test(n)) return 'skip';
    if (/interior|leather|alcantara|int_plastic|int_carpet|\bseat\b|\bdash\b|carro_interno/.test(n)) return 'skip';
    if (/paint|carpaint|\bbody\b|colored|pintura|main_col|kit1_paint|base_geo|color_b04|marina_bay|bmw7g70_body|carro_pintura/.test(n)) return 'body';

    // Property-based fallback
    if (mat.transparent && mat.opacity < 0.88) return 'glass';
    if (mat.metalness > 0.85 && mat.roughness < 0.25) return 'rim';

    return 'body';
}

// ── Loader wave animation ─────────────────────────────────────────────────────
let _fillTarget  = 0;
let _fillCurrent = 0;
let _loaderRafId = null;

function _tickWave(now) {
    const wavePath = document.getElementById('cz-wave-path');
    const pctEl    = document.getElementById('cz-loader-pct');
    if (!wavePath) return;

    _fillCurrent += (_fillTarget - _fillCurrent) * 0.04;

    const W = 540, H = 88;
    const surfaceY = H * (1 - _fillCurrent / 100);
    const t = now * 0.001;

    let d = `M 0 ${H} L 0 ${surfaceY + 2.4 * Math.sin(t * 0.7)} `;
    for (let x = 5; x <= W; x += 5) {
        const y = surfaceY
            + 2.4 * Math.sin(x * 0.022 - t * 0.9)
            + 1.4 * Math.sin(x * 0.041 + t * 0.55);
        d += `L ${x} ${y} `;
    }
    d += `L ${W} ${H} Z`;
    wavePath.setAttribute('d', d);

    if (pctEl) pctEl.textContent = Math.round(_fillCurrent) + '%';

    _loaderRafId = requestAnimationFrame(_tickWave);
}

function startLoaderWave() {
    if (_loaderRafId) return;
    _loaderRafId = requestAnimationFrame(_tickWave);
}

function stopLoaderWave() {
    if (_loaderRafId) { cancelAnimationFrame(_loaderRafId); _loaderRafId = null; }
}

function setLoaderProgress(pct) {
    _fillTarget = pct;
}

function revealCanvas() {
    stopLoaderWave();
    const loader = document.getElementById('cz-loader');
    const canvas = document.getElementById('cz-canvas');
    if (loader) loader.classList.add('is-hidden');
    if (canvas) canvas.style.opacity = '1';
}

// ── GLTF loader ───────────────────────────────────────────────────────────────
function loadModel(modelId) {
    const modelDef    = (window.MODELS || {})[modelId];
    const model3dPath = modelDef?.model3d;

    if (model3dPath) {
        setLoaderProgress(0);
        const loader = new GLTFLoader();
        loader.load(
            model3dPath,
            (gltf) => {
                setLoaderProgress(100);
                carGroup = gltf.scene;
                fitAndCenter(carGroup);
                classifyGLTF(carGroup);
                carGroup.rotation.y = Math.PI / 5;
                scene.add(carGroup);
                applyAll();
                revealCanvas();
                revealPhase = true;
                revealStart = performance.now();
            },
            (xhr) => {
                if (xhr.total > 0) {
                    const pct = Math.round((xhr.loaded / xhr.total) * 95);
                    setLoaderProgress(pct);
                } else {
                    setLoaderProgress(40);
                }
            },
            (err) => {
                console.warn('GLTF load failed, using placeholder:', err);
                buildPlaceholder();
                revealCanvas();
                revealPhase = true;
                revealStart = performance.now();
            }
        );
    } else {
        buildPlaceholder();
        revealCanvas();
        revealPhase = true;
        revealStart = performance.now();
    }
}

function fitAndCenter(model) {
    const box    = new THREE.Box3().setFromObject(model);
    const size   = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 0) model.scale.setScalar(4.0 / maxDim);

    const box2    = new THREE.Box3().setFromObject(model);
    const size2   = box2.getSize(new THREE.Vector3());
    const center2 = box2.getCenter(new THREE.Vector3());
    model.position.set(-center2.x, -box2.min.y, -center2.z);

    const dist = Math.max(size2.x, size2.z) * 1.6;
    camera.position.set(dist, size2.y * 0.9, dist);
    controls.target.set(0, size2.y * 0.38, 0);
    controls.update();
}

function classifyGLTF(root) {
    mats.body     = [];
    mats.glass    = [];
    mats.rims     = [];
    mats.calipers = [];

    root.traverse(node => {
        if (!node.isMesh) return;
        node.castShadow    = true;
        node.receiveShadow = true;

        const src    = Array.isArray(node.material) ? node.material : [node.material];
        const cloned = src.map(m => m.clone());
        node.material = cloned.length === 1 ? cloned[0] : cloned;

        cloned.forEach(mat => {
            const cat = classifyMat(node.name, mat);
            if (cat === 'body')         mats.body.push(mat);
            else if (cat === 'glass')   mats.glass.push(mat);
            else if (cat === 'rim')     mats.rims.push(mat);
            else if (cat === 'caliper') mats.calipers.push(mat);
        });
    });
}

// ── Placeholder car ───────────────────────────────────────────────────────────
function buildPlaceholder() {
    carGroup = new THREE.Group();

    const mkBody = () => new THREE.MeshStandardMaterial({ color: 0x1a1a2e, roughness: 0.08, metalness: 0.15 });
    const mkRim  = () => new THREE.MeshStandardMaterial({ color: 0xd8d8e0, roughness: 0.1,  metalness: 0.95 });
    const mkCal  = () => new THREE.MeshStandardMaterial({ color: 0xcc2200, roughness: 0.3,  metalness: 0.2  });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x111828, transparent: true, opacity: 0.72, roughness: 0.02, metalness: 0.08 });
    const tireMat  = new THREE.MeshStandardMaterial({ color: 0x0e0e0e, roughness: 0.92 });
    const emitW    = new THREE.MeshStandardMaterial({ color: 0xffffee, emissive: 0xffffaa, emissiveIntensity: 0.6 });
    const emitR    = new THREE.MeshStandardMaterial({ color: 0xff1100, emissive: 0xff1100, emissiveIntensity: 0.6 });

    function add(geo, mat, x, y, z, rx) {
        const m = new THREE.Mesh(geo, mat);
        m.position.set(x, y, z);
        if (rx) m.rotation.x = rx;
        m.castShadow = true;
        carGroup.add(m);
        return m;
    }

    const bm1 = mkBody(); add(new THREE.BoxGeometry(1.82, 0.70, 3.82), bm1, 0, 0.84, 0);       mats.body.push(bm1);
    const bm2 = mkBody(); add(new THREE.BoxGeometry(1.74, 0.64, 2.28), bm2, 0, 1.54, -0.08);   mats.body.push(bm2);
    const bm3 = mkBody(); add(new THREE.BoxGeometry(1.80, 0.42, 0.44), bm3, 0, 0.70,  2.13);   mats.body.push(bm3);
    const bm4 = mkBody(); add(new THREE.BoxGeometry(1.80, 0.42, 0.44), bm4, 0, 0.70, -2.13);   mats.body.push(bm4);
    const bm5 = mkBody(); add(new THREE.BoxGeometry(1.78, 0.14, 0.66), bm5, 0, 1.22,  1.72, 0.20);  mats.body.push(bm5);
    const bm6 = mkBody(); add(new THREE.BoxGeometry(1.78, 0.14, 0.66), bm6, 0, 1.22, -1.74, -0.20); mats.body.push(bm6);

    add(new THREE.BoxGeometry(1.76, 0.46, 2.08), glassMat, 0, 1.57, -0.06); mats.glass.push(glassMat);

    add(new THREE.BoxGeometry(0.56, 0.10, 0.04), emitW, -0.62, 0.98,  2.36);
    add(new THREE.BoxGeometry(0.56, 0.10, 0.04), emitW,  0.62, 0.98,  2.36);
    add(new THREE.BoxGeometry(0.56, 0.08, 0.04), emitR, -0.62, 0.94, -2.36);
    add(new THREE.BoxGeometry(0.56, 0.08, 0.04), emitR,  0.62, 0.94, -2.36);

    [[-0.94, 0.38, 1.52], [0.94, 0.38, 1.52], [-0.94, 0.38, -1.52], [0.94, 0.38, -1.52]].forEach(([x, y, z]) => {
        add(new THREE.CylinderGeometry(0.38, 0.38, 0.28, 24), tireMat, x, y, z).rotation.z = Math.PI / 2;

        const rm1 = mkRim(); const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.265, 0.265, 0.29, 16), rm1);
        rim.rotation.z = Math.PI / 2; rim.position.set(x, y, z); rim.castShadow = true;
        carGroup.add(rim); mats.rims.push(rm1);

        const rm2 = mkRim(); const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.30, 8), rm2);
        hub.rotation.z = Math.PI / 2; hub.position.set(x, y, z);
        carGroup.add(hub); mats.rims.push(rm2);

        const cm = mkCal(); const cx = x > 0 ? x - 0.20 : x + 0.20;
        const cal = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.13, 0.17), cm);
        cal.position.set(cx, y + 0.02, z); carGroup.add(cal); mats.calipers.push(cm);
    });

    carGroup.rotation.y = Math.PI / 5;
    scene.add(carGroup);
}

// ── Scene setup ───────────────────────────────────────────────────────────────
function initScene() {
    const canvas = document.getElementById('cz-canvas');

    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type    = THREE.PCFSoftShadowMap;
    renderer.toneMapping       = THREE.LinearToneMapping;
    renderer.toneMappingExposure = 1.0;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfafafa);

    camera = new THREE.PerspectiveCamera(38, 1, 0.1, 200);
    camera.position.set(5.5, 2.8, 5.5);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.8, 0);
    controls.enableDamping  = true;
    controls.dampingFactor  = 0.06;
    controls.minDistance    = 2;
    controls.maxDistance    = 20;
    controls.maxPolarAngle  = Math.PI * 0.48;
    controls.enabled        = false;

    scene.add(new THREE.AmbientLight(0xffffff, 3.5));

    const key = new THREE.DirectionalLight(0xfff8f0, 4.0);
    key.position.set(6, 9, 6);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.near = 1; key.shadow.camera.far = 30;
    key.shadow.camera.left = key.shadow.camera.bottom = -6;
    key.shadow.camera.right = key.shadow.camera.top   =  6;
    key.shadow.bias = -0.0005;
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xf0f8ff, 2.5); fill.position.set(-7, 4, 2); scene.add(fill);
    const back = new THREE.DirectionalLight(0xeef4ff, 2.0); back.position.set(-2, 7, -9); scene.add(back);
    const front = new THREE.DirectionalLight(0xffffff, 1.5); front.position.set(0, 3, 10); scene.add(front);

    const ground = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.ShadowMaterial({ opacity: 0.08 }));
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    onResize();
}

// ── Render loop ───────────────────────────────────────────────────────────────
function animate(now) {
    requestAnimationFrame(animate);

    if (revealPhase && carGroup) {
        const t = Math.min((now - revealStart) / 2400, 1);
        const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        carGroup.rotation.y = (Math.PI / 5) + eased * Math.PI * 2;
        if (t >= 1) {
            revealPhase = false;
            carGroup.rotation.y = Math.PI / 5;
            controls.enabled = true;
        }
    } else {
        controls.update();
    }

    renderer.render(scene, camera);
}

// ── Material updaters ─────────────────────────────────────────────────────────
function applyPaint() {
    if (!config.paint) return;
    const props = PAINT_TYPE_PROPS[config.paint.type] || PAINT_TYPE_PROPS.gloss;
    const col   = new THREE.Color(config.paint.hex);
    mats.body.forEach(m => {
        m.color.set(col);
        m.roughness   = props.roughness;
        m.metalness   = props.metalness;
        m.needsUpdate = true;
    });
}

function applyRims() {
    const opts = config.spec?.exterior?.rims?.options;
    if (!opts) return;
    const rf = opts.find(r => r.id === config.rimId) || opts[0];
    if (!rf) return;
    mats.rims.forEach(m => {
        m.color.set(rf.color);
        m.roughness   = rf.roughness;
        m.metalness   = rf.metalness;
        m.needsUpdate = true;
    });
}

function applyTint() {
    const t = config.tint / 100;
    mats.glass.forEach(m => {
        m.transparent = true;
        m.opacity     = Math.max(0.18, 0.78 - t * 0.60);
        m.color.setRGB(0.08 - t * 0.06, 0.09 - t * 0.07, 0.14 - t * 0.11);
        m.needsUpdate = true;
    });
}

function applyCalipers() {
    const c   = CALIPER_COLORS.find(c => c.id === config.caliperId) || CALIPER_COLORS[0];
    const col = new THREE.Color(c.hex);
    mats.calipers.forEach(m => {
        m.color.set(col);
        m.needsUpdate = true;
    });
}

function applyAll() {
    applyPaint();
    applyRims();
    applyTint();
    applyCalipers();
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function resolveSpec(modelId) {
    if ((window.MODEL_SPECS || {})[modelId]) return window.MODEL_SPECS[modelId];
    const model = (window.MODELS || {})[modelId];
    if (!model?.specProfile) return null;
    return (window.CUSTOM_SPEC_PROFILES || {})[model.specProfile] || null;
}

function getCurrencyConfig() {
    const currency = localStorage.getItem('faceoff_currency') || 'NGN';
    const rates = {
        'NGN':    { symbol: '₦',   rate: 1     },
        'GHS':    { symbol: 'GH₵', rate: 0.012 },
        'XOF-TG': { symbol: 'CFA', rate: 0.52  },
        'XOF-BJ': { symbol: 'CFA', rate: 0.52  },
    };
    return rates[currency] || rates['NGN'];
}

function shortPrice(priceStr) {
    if (!priceStr) return '';
    const num = parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
    if (isNaN(num)) return priceStr;
    const { symbol, rate } = getCurrencyConfig();
    const converted = Math.round(num * rate);
    if (converted >= 1000000) return '+' + symbol + (converted / 1000000).toFixed(1).replace('.0', '') + 'M';
    if (converted >= 1000)    return '+' + symbol + Math.round(converted / 1000) + 'K';
    return '+' + symbol + converted.toLocaleString();
}

function fmtNaira(num) {
    const { symbol, rate } = getCurrencyConfig();
    return symbol + Math.round(num * rate).toLocaleString();
}

function displayPrice(priceStr) {
    if (!priceStr) return '';
    const num = parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
    if (isNaN(num)) return priceStr;
    const { symbol, rate } = getCurrencyConfig();
    const converted = Math.round(num * rate);
    if (converted >= 1000000) return symbol + (converted / 1000000).toFixed(1).replace('.0', '') + 'M';
    if (converted >= 1000)    return symbol + Math.round(converted / 1000) + 'K';
    return symbol + converted.toLocaleString();
}

function calcAddonsTotal() {
    if (!config.spec || !config.addons.length) return 0;
    return config.addons.reduce((sum, id) => {
        const addon = config.spec.addons.find(a => a.id === id);
        if (!addon?.price) return sum;
        const num = parseInt(addon.price.replace(/[^0-9]/g, ''), 10);
        return sum + (isNaN(num) ? 0 : num);
    }, 0);
}

// ── UI ────────────────────────────────────────────────────────────────────────
function buildStepContent(step) {
    const el = document.getElementById('cz-step-content');
    if (!el) return;

    document.querySelectorAll('.cz-step').forEach((btn, i) => {
        btn.classList.toggle('active', i === step);
        btn.classList.toggle('completed', i < step);
    });

    el.innerHTML = '';
    _updateFooterNav(step);

    if (!config.spec) {
        el.innerHTML = '<div class="cz-section"><p style="color:#999;font-size:0.8rem;line-height:1.5;">Select a vehicle from the showroom to configure.</p></div>';
        return;
    }

    switch (step) {
        case 0: _buildExteriorStep(el); break;
        case 1: _buildInteriorStep(el); break;
        case 2: _buildAddonsStep(el);   break;
        case 3: _buildSummaryStep(el);  break;
    }
}

function _updateFooterNav(step) {
    const prevBtn = document.getElementById('cz-prev');
    const nextBtn = document.getElementById('cz-next');
    if (!prevBtn || !nextBtn) return;

    prevBtn.style.visibility = step === 0 ? 'hidden' : 'visible';

    if (step === 3) {
        nextBtn.textContent  = 'Showroom →';
        nextBtn.dataset.action = 'done';
    } else {
        nextBtn.textContent  = step === 2 ? 'Review →' : 'Next →';
        nextBtn.dataset.action = 'next';
    }
}

function _buildOptionCards(sectionId, section) {
    return section.options.map(opt => {
        const sel        = config.extras[sectionId] === opt.id ? ' active' : '';
        const priceLabel = opt.price ? shortPrice(opt.price) : 'Included';
        return `<button class="cz-interior-option${sel}" data-sec="${sectionId}" data-oid="${opt.id}">
            <div class="cz-interior-info">
                <span class="cz-interior-title">${opt.label}</span>
                <span class="cz-interior-desc">${opt.desc || ''}</span>
            </div>
            <span class="cz-option-price${sel ? ' cz-option-price--active' : ''}">${priceLabel}</span>
        </button>`;
    }).join('');
}

function _wireOptionCards(el) {
    el.querySelectorAll('[data-sec]').forEach(btn => {
        btn.addEventListener('click', () => {
            const sec = btn.dataset.sec;
            config.extras[sec] = btn.dataset.oid;
            el.querySelectorAll(`[data-sec="${sec}"]`).forEach(b => {
                b.classList.remove('active');
                b.querySelector('.cz-option-price')?.classList.remove('cz-option-price--active');
            });
            btn.classList.add('active');
            btn.querySelector('.cz-option-price')?.classList.add('cz-option-price--active');
        });
    });
}

function _buildExteriorStep(el) {
    const ext = config.spec.exterior;
    let html  = '';

    if (ext.paint) {
        const swatches = ext.paint.options.map(p => {
            const active    = config.paint?.id === p.id ? ' active' : '';
            const priceHtml = p.price ? `<span class="cz-swatch-price">${shortPrice(p.price)}</span>` : '';
            return `<button class="cz-swatch-btn${active}" data-pid="${p.id}" title="${p.label}">
                <span class="cz-swatch-circle" style="background:${p.hex};"></span>
                ${priceHtml}
            </button>`;
        }).join('');
        const typeButtons = PAINT_TYPE_LABELS.map(t =>
            `<button class="cz-type-btn${config.paint?.type === t.id ? ' active' : ''}" data-type="${t.id}">${t.label}</button>`
        ).join('');
        html += `<div class="cz-section">
            <h3 class="cz-section-title">${ext.paint.label}</h3>
            <div class="cz-paint-grid">${swatches}</div>
            <div class="cz-paint-sel-info" id="cz-paint-sel-info">${config.paint?.label || ''}</div>
            <div class="cz-paint-types">${typeButtons}</div>
        </div>`;
    }

    if (ext.rims) {
        const rimOpts = ext.rims.options.map(r => {
            const active     = config.rimId === r.id ? ' active' : '';
            const hexColor   = '#' + r.color.toString(16).padStart(6, '0');
            const priceLabel = r.price ? shortPrice(r.price) : 'Included';
            return `<button class="cz-rim-option${active}" data-rid="${r.id}">
                <span class="cz-rim-swatch" style="background:${hexColor};"></span>
                <span class="cz-rim-name">${r.label}</span>
                <span class="cz-option-price">${priceLabel}</span>
            </button>`;
        }).join('');
        html += `<div class="cz-section">
            <h3 class="cz-section-title">${ext.rims.label}</h3>
            <div class="cz-rims-grid">${rimOpts}</div>
        </div>`;
    }

    if (ext.tint) {
        html += `<div class="cz-section">
            <h3 class="cz-section-title">Window Tint</h3>
            <div class="cz-tint-row">
                <input type="range" id="cz-tint-slider" min="0" max="90" value="${config.tint}" class="cz-slider">
                <span id="cz-tint-val" class="cz-slider-val">${config.tint}%</span>
            </div>
        </div>`;
    }

    if (ext.calipers) {
        html += `<div class="cz-section">
            <h3 class="cz-section-title">Brake Calipers</h3>
            <div class="cz-calipers-grid">
                ${CALIPER_COLORS.map(c =>
                    `<button class="cz-caliper-option${c.id === config.caliperId ? ' active' : ''}" data-cid="${c.id}">
                        <span class="cz-caliper-swatch" style="background:${c.hex};"></span>
                        <span>${c.label}</span>
                    </button>`
                ).join('')}
            </div>
        </div>`;
    }

    // Any extra option sections defined on this model's exterior
    Object.entries(ext).forEach(([key, section]) => {
        if (['paint', 'rims', 'tint', 'calipers'].includes(key)) return;
        if (!section || section.type !== 'options') return;
        html += `<div class="cz-section">
            <h3 class="cz-section-title">${section.label}</h3>
            <div class="cz-interior-grid">${_buildOptionCards(key, section)}</div>
        </div>`;
    });

    el.innerHTML = html;

    el.querySelectorAll('.cz-swatch-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const preset = ext.paint.options.find(p => p.id === btn.dataset.pid);
            if (!preset) return;
            config.paint = { ...preset };
            el.querySelectorAll('.cz-swatch-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            el.querySelectorAll('.cz-type-btn').forEach(b =>
                b.classList.toggle('active', b.dataset.type === config.paint.type)
            );
            const infoEl = document.getElementById('cz-paint-sel-info');
            if (infoEl) infoEl.textContent = config.paint.label;
            applyPaint();
        });
    });

    el.querySelectorAll('.cz-type-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (!config.paint) return;
            config.paint = { ...config.paint, type: btn.dataset.type };
            el.querySelectorAll('.cz-type-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyPaint();
        });
    });

    el.querySelectorAll('.cz-rim-option').forEach(btn => {
        btn.addEventListener('click', () => {
            config.rimId = btn.dataset.rid;
            el.querySelectorAll('.cz-rim-option').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyRims();
        });
    });

    const slider = document.getElementById('cz-tint-slider');
    const valEl  = document.getElementById('cz-tint-val');
    if (slider) {
        slider.addEventListener('input', () => {
            config.tint = +slider.value;
            if (valEl) valEl.textContent = `${config.tint}%`;
            applyTint();
        });
    }

    if (ext.calipers) {
        el.querySelectorAll('.cz-caliper-option').forEach(btn => {
            btn.addEventListener('click', () => {
                config.caliperId = btn.dataset.cid;
                el.querySelectorAll('.cz-caliper-option').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                applyCalipers();
            });
        });
    }

    _wireOptionCards(el);
}

function _buildInteriorStep(el) {
    const int = config.spec.interior;
    if (!int) {
        el.innerHTML = '<div class="cz-section"><p style="color:#999;font-size:0.8rem;">No interior options for this vehicle.</p></div>';
        return;
    }

    let html = '';

    if (int.trim) {
        const options = int.trim.options.map(t => {
            const active     = config.interiorId === t.id ? ' active' : '';
            const priceLabel = t.price ? shortPrice(t.price) : 'Included';
            return `<button class="cz-interior-option${active}" data-iid="${t.id}">
                <div class="cz-interior-info">
                    <span class="cz-interior-title">${t.label}</span>
                    <span class="cz-interior-desc">${t.desc}</span>
                </div>
                <span class="cz-option-price${active ? ' cz-option-price--active' : ''}">${priceLabel}</span>
            </button>`;
        }).join('');
        html += `<div class="cz-section">
            <h3 class="cz-section-title">${int.trim.label}</h3>
            <div class="cz-interior-grid">${options}</div>
        </div>`;
    }

    // Any extra option sections on this model's interior
    Object.entries(int).forEach(([key, section]) => {
        if (key === 'trim') return;
        if (!section || section.type !== 'options') return;
        html += `<div class="cz-section">
            <h3 class="cz-section-title">${section.label}</h3>
            <div class="cz-interior-grid">${_buildOptionCards(key, section)}</div>
        </div>`;
    });

    el.innerHTML = html;

    el.querySelectorAll('[data-iid]').forEach(btn => {
        btn.addEventListener('click', () => {
            config.interiorId = btn.dataset.iid;
            el.querySelectorAll('[data-iid]').forEach(b => {
                b.classList.remove('active');
                b.querySelector('.cz-option-price')?.classList.remove('cz-option-price--active');
            });
            btn.classList.add('active');
            btn.querySelector('.cz-option-price')?.classList.add('cz-option-price--active');
        });
    });

    _wireOptionCards(el);
}

function _buildAddonsStep(el) {
    const addons = config.spec.addons;
    if (!addons?.length) {
        el.innerHTML = '<div class="cz-section"><p style="color:#999;font-size:0.8rem;">No add-ons available.</p></div>';
        return;
    }

    const cards = addons.map(a => {
        const selected  = config.addons.includes(a.id) ? ' selected' : '';
        const checkIcon = selected ? '&#10003;' : '';
        return `<button class="cz-addon-card${selected}" data-aid="${a.id}">
            <span class="cz-addon-check">${checkIcon}</span>
            <div class="cz-addon-info">
                <span class="cz-addon-label">${a.label}</span>
                <span class="cz-addon-desc">${a.desc}</span>
            </div>
            <span class="cz-addon-price">${shortPrice(a.price)}</span>
        </button>`;
    }).join('');

    el.innerHTML = `
        <div class="cz-section">
            <h3 class="cz-section-title">Select Packages</h3>
            <div class="cz-addons-list">${cards}</div>
        </div>
    `;

    el.querySelectorAll('.cz-addon-card').forEach(btn => {
        btn.addEventListener('click', () => {
            const id      = btn.dataset.aid;
            const idx     = config.addons.indexOf(id);
            const checkEl = btn.querySelector('.cz-addon-check');
            if (idx === -1) {
                config.addons.push(id);
                btn.classList.add('selected');
                if (checkEl) checkEl.innerHTML = '&#10003;';
            } else {
                config.addons.splice(idx, 1);
                btn.classList.remove('selected');
                if (checkEl) checkEl.innerHTML = '';
            }
        });
    });
}

function _buildSummaryStep(el) {
    const spec     = config.spec;
    const paint    = config.paint;
    const rimOpt   = spec.exterior.rims.options.find(r => r.id === config.rimId);
    const intOpt   = spec.interior?.trim?.options?.find(t => t.id === config.interiorId);
    const selAddons = (spec.addons || []).filter(a => config.addons.includes(a.id));
    const total    = calcAddonsTotal();

    const row = (label, value, price) => `
        <div class="cz-summary-row">
            <span class="cz-summary-row-label">${label}</span>
            <span class="cz-summary-row-right">
                <span class="cz-summary-row-value">${value}</span>
                <span class="cz-summary-row-price">${price}</span>
            </span>
        </div>`;

    const p = str => str ? displayPrice(str) : 'Included';

    // Collect extra exterior option selections
    const extOptRows = Object.entries(spec.exterior)
        .filter(([k, s]) => !['paint','rims','tint','calipers'].includes(k) && s?.type === 'options')
        .map(([k, s]) => {
            const sel = s.options.find(o => o.id === config.extras[k]);
            return sel ? row(s.label, sel.label, p(sel.price)) : '';
        }).join('');

    const exteriorRows = [
        row('Paint',  paint    ? paint.label    : '—', p(paint?.price)),
        row('Wheels', rimOpt   ? rimOpt.label   : '—', p(rimOpt?.price)),
        row('Tint',   `${config.tint}%`,                    'Included'),
        spec.exterior.calipers
            ? row('Calipers', CALIPER_COLORS.find(c => c.id === config.caliperId)?.label || '—', 'Included')
            : '',
        extOptRows,
    ].join('');

    // Collect extra interior option selections
    const intOptRows = Object.entries(spec.interior || {})
        .filter(([k, s]) => k !== 'trim' && s?.type === 'options')
        .map(([k, s]) => {
            const sel = s.options.find(o => o.id === config.extras[k]);
            return sel ? row(s.label, sel.label, p(sel.price)) : '';
        }).join('');

    const interiorRows = (intOpt ? row(intOpt.label, intOpt.desc.split(' · ')[0], p(intOpt.price)) : '')
        + intOptRows;

    const addonRows = selAddons.map(a => row(a.label, '', p(a.price))).join('');

    const totalHtml = total > 0 ? `
        <div class="cz-summary-total">
            <span class="cz-summary-total-label">Add-ons Total</span>
            <span class="cz-summary-total-amount">${fmtNaira(total)}</span>
        </div>` : '';

    el.innerHTML = `
        <div class="cz-section cz-summary">
            <div class="cz-summary-group">
                <div class="cz-summary-section-label">Exterior</div>
                ${exteriorRows}
            </div>
            ${intOpt ? `<div class="cz-summary-group">
                <div class="cz-summary-section-label">Interior</div>
                ${interiorRows}
            </div>` : ''}
            ${selAddons.length ? `<div class="cz-summary-group">
                <div class="cz-summary-section-label">Add-ons</div>
                ${addonRows}
            </div>` : ''}
            ${totalHtml}
            <button class="cz-btn cz-btn--primary cz-enquiry-full" id="cz-enquiry-btn">
                Send Enquiry
            </button>
        </div>
    `;

    document.getElementById('cz-enquiry-btn')?.addEventListener('click', () => {
        saveConfig();
        window.location.href = `contact.html?type=enquiry&unit=${config.unitId}`;
    });
}

// ── Persistence ───────────────────────────────────────────────────────────────
function saveConfig() {
    if (!config.unitId) return;
    const saveData = {
        unitId:     config.unitId,
        paint:      config.paint,
        rimId:      config.rimId,
        tint:       config.tint,
        caliperId:  config.caliperId,
        interiorId: config.interiorId,
        extras:     config.extras,
        addons:     config.addons,
    };
    localStorage.setItem(`faceoff_config_${config.unitId}`, JSON.stringify(saveData));

    const spec      = config.spec;
    const rimOpt    = spec?.exterior?.rims?.options?.find(r => r.id === config.rimId);
    const intOpt    = spec?.interior?.trim?.options?.find(t => t.id === config.interiorId);
    const selAddons = (spec?.addons || []).filter(a => config.addons.includes(a.id));
    const addonTotal = calcAddonsTotal();

    const paintLabel = config.paint
        ? `${config.paint.label} (${config.paint.type[0].toUpperCase() + config.paint.type.slice(1)})`
        : '';

    const parts = [
        paintLabel,
        rimOpt    ? `${rimOpt.label} Wheels`   : '',
        `${config.tint}% Window Tint`,
        intOpt    ? `${intOpt.label} Interior`  : '',
        ...selAddons.map(a => a.label),
    ].filter(Boolean);

    if (addonTotal > 0) parts.push(`Add-ons: ${fmtNaira(addonTotal)}`);

    localStorage.setItem('faceoff_last_config_summary', parts.join(' · '));
    localStorage.setItem('faceoff_last_config_unitId',  config.unitId);
}

function _initExtrasFromSpec(spec) {
    config.extras = {};
    const setDefaults = (sections, skip) => {
        Object.entries(sections || {}).forEach(([key, section]) => {
            if (skip.includes(key)) return;
            if (section?.type === 'options' && section.options?.length) {
                config.extras[key] = section.options[0].id;
            }
        });
    };
    setDefaults(spec.exterior, ['paint', 'rims', 'tint', 'calipers']);
    setDefaults(spec.interior, ['trim']);
}

function resetConfig() {
    if (!config.spec) return;
    const paintOpts = config.spec.exterior.paint?.options || [];
    const rimOpts   = config.spec.exterior.rims?.options  || [];
    const trimOpts  = config.spec.interior?.trim?.options || [];
    config.paint      = paintOpts.length ? { ...paintOpts[0] } : null;
    config.rimId      = rimOpts.length   ? rimOpts[0].id       : null;
    config.tint       = 20;
    config.caliperId  = 'red';
    config.interiorId = trimOpts.length  ? trimOpts[0].id      : null;
    config.addons     = [];
    config.currentStep = 0;
    _initExtrasFromSpec(config.spec);

    // Clear persisted config so it doesn't follow back to showroom
    if (config.unitId) {
        localStorage.removeItem(`faceoff_config_${config.unitId}`);
    }
    localStorage.removeItem('faceoff_last_config_summary');
    localStorage.removeItem('faceoff_last_config_unitId');

    buildStepContent(0);
    applyAll();
}

// ── Resize ────────────────────────────────────────────────────────────────────
function onResize() {
    const wrap = document.querySelector('.cz-canvas-wrap');
    if (!wrap || !renderer || !camera) return;
    const w = wrap.clientWidth, h = wrap.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
}

// ── Boot ──────────────────────────────────────────────────────────────────────
function init() {
    const params   = new URLSearchParams(window.location.search);
    config.unitId  = params.get('unit') || '';

    const unit     = config.unitId && window.resolveUnit ? window.resolveUnit(config.unitId) : null;
    config.modelId = unit?.modelId || '';
    config.spec    = resolveSpec(config.modelId);

    // Default selections from spec
    if (config.spec) {
        const paintOpts = config.spec.exterior.paint?.options || [];
        const rimOpts   = config.spec.exterior.rims?.options  || [];
        const trimOpts  = config.spec.interior?.trim?.options || [];
        config.paint      = paintOpts.length ? { ...paintOpts[0] } : null;
        config.rimId      = rimOpts.length   ? rimOpts[0].id       : null;
        config.interiorId = trimOpts.length  ? trimOpts[0].id      : null;
        _initExtrasFromSpec(config.spec);
    }

    // Restore saved config
    if (config.unitId) {
        try {
            const saved = JSON.parse(localStorage.getItem(`faceoff_config_${config.unitId}`) || 'null');
            if (saved) {
                if (saved.paint)              config.paint      = saved.paint;
                if (saved.rimId)              config.rimId      = saved.rimId;
                if (saved.tint != null)       config.tint       = saved.tint;
                if (saved.caliperId)          config.caliperId  = saved.caliperId;
                if (saved.interiorId)         config.interiorId = saved.interiorId;
                if (saved.extras && typeof saved.extras === 'object')
                                              Object.assign(config.extras, saved.extras);
                if (Array.isArray(saved.addons)) config.addons  = saved.addons;
            }
        } catch (_) {}
    }

    const nameEl = document.getElementById('cz-car-name');
    if (nameEl && unit) nameEl.textContent = unit.name;

    document.getElementById('cz-back')?.addEventListener('click', () => {
        window.location.href = config.unitId ? `showroom.html?unit=${config.unitId}` : 'showroom.html';
    });

    document.getElementById('cz-panel-back')?.addEventListener('click', () => {
        window.location.href = config.unitId ? `showroom.html?unit=${config.unitId}` : 'showroom.html';
    });

    document.getElementById('cz-reset')?.addEventListener('click', resetConfig);

    document.getElementById('cz-steps')?.querySelectorAll('.cz-step').forEach(btn => {
        btn.addEventListener('click', () => {
            config.currentStep = +btn.dataset.step;
            buildStepContent(config.currentStep);
        });
    });

    document.getElementById('cz-next')?.addEventListener('click', () => {
        const action = document.getElementById('cz-next')?.dataset.action;
        if (action === 'done') {
            saveConfig();
            window.location.href = config.unitId ? `showroom.html?unit=${config.unitId}` : 'showroom.html';
        } else if (config.currentStep < 3) {
            config.currentStep++;
            buildStepContent(config.currentStep);
        }
    });

    document.getElementById('cz-prev')?.addEventListener('click', () => {
        if (config.currentStep > 0) {
            config.currentStep--;
            buildStepContent(config.currentStep);
        }
    });

    initScene();
    buildStepContent(0);

    startLoaderWave();
    
    // Show global pills
    if (window.MusicPlayer) window.MusicPlayer.show();
    if (window.FaceoffDrawer) window.FaceoffDrawer.show();

    loadModel(config.modelId);

    window.addEventListener('resize', onResize);
    requestAnimationFrame(animate);
}

document.addEventListener('DOMContentLoaded', init);

window.addEventListener('storage', e => {
    if (e.key === 'faceoff_currency') buildStepContent(config.currentStep);
});
