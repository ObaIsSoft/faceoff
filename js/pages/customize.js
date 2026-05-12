import * as THREE from 'three';
import { OrbitControls }  from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader }     from 'three/addons/loaders/GLTFLoader.js';

// ── Data ──────────────────────────────────────────────────────────────────────
const PAINT_PRESETS = [
    { id: 'midnight-navy',    label: 'Midnight Navy',    hex: '#1a1a2e', type: 'gloss'    },
    { id: 'arctic-white',     label: 'Arctic White',     hex: '#f0f0f0', type: 'gloss'    },
    { id: 'obsidian-black',   label: 'Obsidian Black',   hex: '#0a0a0a', type: 'gloss'    },
    { id: 'racing-red',       label: 'Racing Red',       hex: '#b81414', type: 'gloss'    },
    { id: 'racing-green',     label: 'Racing Green',     hex: '#14381e', type: 'satin'    },
    { id: 'lunar-silver',     label: 'Lunar Silver',     hex: '#8888a0', type: 'metallic' },
    { id: 'desert-gold',      label: 'Desert Gold',      hex: '#b8920c', type: 'metallic' },
    { id: 'glacier-blue',     label: 'Glacier Blue',     hex: '#1e3e8c', type: 'gloss'    },
    { id: 'burgundy',         label: 'Burgundy',         hex: '#5c1818', type: 'gloss'    },
    { id: 'champagne',        label: 'Champagne',        hex: '#c8aa72', type: 'metallic' },
    { id: 'volcanic-orange',  label: 'Volcanic Orange',  hex: '#c23800', type: 'gloss'    },
    { id: 'stealth-grey',     label: 'Stealth Grey',     hex: '#2a2a2e', type: 'matte'    },
];

const PAINT_TYPES = [
    { id: 'gloss',    label: 'Gloss',    roughness: 0.08, metalness: 0.15 },
    { id: 'matte',    label: 'Matte',    roughness: 0.88, metalness: 0.02 },
    { id: 'satin',    label: 'Satin',    roughness: 0.42, metalness: 0.08 },
    { id: 'metallic', label: 'Metallic', roughness: 0.25, metalness: 0.85 },
];

const RIM_FINISHES = [
    { id: 'polished-silver', label: 'Polished Silver', color: 0xd8d8e0, roughness: 0.1, metalness: 0.95 },
    { id: 'matte-black',     label: 'Matte Black',     color: 0x1a1a1a, roughness: 0.8, metalness: 0.3  },
    { id: 'gunmetal',        label: 'Gunmetal',        color: 0x3c3c50, roughness: 0.3, metalness: 0.8  },
    { id: 'satin-gold',      label: 'Satin Gold',      color: 0xb8920c, roughness: 0.4, metalness: 0.7  },
];

const CALIPER_COLORS = [
    { id: 'red',    label: 'Red',    hex: '#cc2200' },
    { id: 'black',  label: 'Black',  hex: '#111111' },
    { id: 'yellow', label: 'Yellow', hex: '#d4aa00' },
    { id: 'blue',   label: 'Blue',   hex: '#1a44cc' },
];

const INTERIOR_TRIMS = [
    { id: 'obsidian', label: 'Obsidian', desc: 'Black leather · carbon fibre inserts' },
    { id: 'cognac',   label: 'Cognac',   desc: 'Tan leather · brushed aluminium trim' },
    { id: 'ivory',    label: 'Ivory',    desc: 'Cream leather · piano black finish'   },
];

// ── State ─────────────────────────────────────────────────────────────────────
let config = {
    unitId:     '',
    paint:      { ...PAINT_PRESETS[0] },
    rimId:      'polished-silver',
    tint:       20,
    caliperId:  'red',
    interiorId: 'obsidian',
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
let _fillTarget  = 0;   // 0-100, set by progress
let _fillCurrent = 0;   // smoothly lerps toward target
let _loaderRafId = null;

function _tickWave(now) {
    const wavePath = document.getElementById('cz-wave-path');
    const pctEl    = document.getElementById('cz-loader-pct');
    if (!wavePath) return;

    // Lerp fill level toward target (viscous lag)
    _fillCurrent += (_fillTarget - _fillCurrent) * 0.04;

    const W = 540, H = 88;
    const surfaceY = H * (1 - _fillCurrent / 100);
    const t = now * 0.001;

    // Two overlapping slow sine waves = viscous surface
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
                    setLoaderProgress(pct, `Loading model — ${pct}%`);
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
        // No 3D model — build placeholder and reveal immediately
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

    // Re-measure after scale
    const box2    = new THREE.Box3().setFromObject(model);
    const size2   = box2.getSize(new THREE.Vector3());
    const center2 = box2.getCenter(new THREE.Vector3());
    model.position.set(-center2.x, -box2.min.y, -center2.z);

    // Reframe camera
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

        const src  = Array.isArray(node.material) ? node.material : [node.material];
        const cloned = src.map(m => m.clone());
        node.material = cloned.length === 1 ? cloned[0] : cloned;

        cloned.forEach(mat => {
            const cat = classifyMat(node.name, mat);
            if (cat === 'body')    mats.body.push(mat);
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

    const bm1 = mkBody(); const body   = add(new THREE.BoxGeometry(1.82, 0.70, 3.82), bm1, 0, 0.84, 0);       mats.body.push(bm1);
    const bm2 = mkBody(); const cabin  = add(new THREE.BoxGeometry(1.74, 0.64, 2.28), bm2, 0, 1.54, -0.08);   mats.body.push(bm2);
    const bm3 = mkBody(); const fbump  = add(new THREE.BoxGeometry(1.80, 0.42, 0.44), bm3, 0, 0.70,  2.13);   mats.body.push(bm3);
    const bm4 = mkBody(); const rbump  = add(new THREE.BoxGeometry(1.80, 0.42, 0.44), bm4, 0, 0.70, -2.13);   mats.body.push(bm4);
    const bm5 = mkBody(); const fhood  = add(new THREE.BoxGeometry(1.78, 0.14, 0.66), bm5, 0, 1.22,  1.72, 0.20);  mats.body.push(bm5);
    const bm6 = mkBody(); const rhatch = add(new THREE.BoxGeometry(1.78, 0.14, 0.66), bm6, 0, 1.22, -1.74, -0.20); mats.body.push(bm6);

    const gm = glassMat; add(new THREE.BoxGeometry(1.76, 0.46, 2.08), gm, 0, 1.57, -0.06); mats.glass.push(gm);

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
    const typeObj = PAINT_TYPES.find(t => t.id === config.paint.type) || PAINT_TYPES[0];
    const col     = new THREE.Color(config.paint.hex);
    mats.body.forEach(m => {
        m.color.set(col);
        m.roughness   = typeObj.roughness;
        m.metalness   = typeObj.metalness;
        m.needsUpdate = true;
    });
}

function applyRims() {
    const rf = RIM_FINISHES.find(r => r.id === config.rimId) || RIM_FINISHES[0];
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

// ── UI ────────────────────────────────────────────────────────────────────────
function buildUI() {
    _buildPaint();
    _buildRims();
    _buildTint();
    _buildCalipers();
    _buildInterior();
}

function _buildPaint() {
    const presetsEl = document.getElementById('cz-paint-presets');
    const typesEl   = document.getElementById('cz-paint-types');
    if (!presetsEl || !typesEl) return;

    presetsEl.innerHTML = PAINT_PRESETS.map(p =>
        `<button class="cz-color-swatch${p.id === config.paint.id ? ' active' : ''}"
            data-pid="${p.id}" title="${p.label}" style="background:${p.hex};"></button>`
    ).join('');

    typesEl.innerHTML = PAINT_TYPES.map(t =>
        `<button class="cz-type-btn${t.id === config.paint.type ? ' active' : ''}"
            data-type="${t.id}">${t.label}</button>`
    ).join('');

    presetsEl.querySelectorAll('.cz-color-swatch').forEach(btn => {
        btn.addEventListener('click', () => {
            const preset = PAINT_PRESETS.find(p => p.id === btn.dataset.pid);
            if (!preset) return;
            config.paint = { ...preset };
            presetsEl.querySelectorAll('.cz-color-swatch').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            typesEl.querySelectorAll('.cz-type-btn').forEach(b =>
                b.classList.toggle('active', b.dataset.type === config.paint.type)
            );
            applyPaint();
        });
    });

    typesEl.querySelectorAll('.cz-type-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            config.paint = { ...config.paint, type: btn.dataset.type };
            typesEl.querySelectorAll('.cz-type-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyPaint();
        });
    });
}

function _buildRims() {
    const el = document.getElementById('cz-rims-grid');
    if (!el) return;
    el.innerHTML = RIM_FINISHES.map(r =>
        `<button class="cz-rim-option${r.id === config.rimId ? ' active' : ''}" data-rid="${r.id}">
            <span class="cz-rim-swatch" style="background:#${r.color.toString(16).padStart(6, '0')};"></span>
            <span>${r.label}</span>
        </button>`
    ).join('');
    el.querySelectorAll('.cz-rim-option').forEach(btn => {
        btn.addEventListener('click', () => {
            config.rimId = btn.dataset.rid;
            el.querySelectorAll('.cz-rim-option').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyRims();
        });
    });
}

function _buildTint() {
    const slider = document.getElementById('cz-tint-slider');
    const val    = document.getElementById('cz-tint-val');
    if (!slider) return;
    slider.value = config.tint;
    if (val) val.textContent = `${config.tint}%`;
    slider.addEventListener('input', () => {
        config.tint = +slider.value;
        if (val) val.textContent = `${config.tint}%`;
        applyTint();
    });
}

function _buildCalipers() {
    const el = document.getElementById('cz-calipers-grid');
    if (!el) return;
    el.innerHTML = CALIPER_COLORS.map(c =>
        `<button class="cz-caliper-option${c.id === config.caliperId ? ' active' : ''}" data-cid="${c.id}">
            <span class="cz-caliper-swatch" style="background:${c.hex};"></span>
            <span>${c.label}</span>
        </button>`
    ).join('');
    el.querySelectorAll('.cz-caliper-option').forEach(btn => {
        btn.addEventListener('click', () => {
            config.caliperId = btn.dataset.cid;
            el.querySelectorAll('.cz-caliper-option').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyCalipers();
        });
    });
}

function _buildInterior() {
    const el = document.getElementById('cz-interior-grid');
    if (!el) return;
    el.innerHTML = INTERIOR_TRIMS.map(t =>
        `<button class="cz-interior-option${t.id === config.interiorId ? ' active' : ''}" data-iid="${t.id}">
            <span class="cz-interior-title">${t.label}</span>
            <span class="cz-interior-desc">${t.desc}</span>
        </button>`
    ).join('');
    el.querySelectorAll('.cz-interior-option').forEach(btn => {
        btn.addEventListener('click', () => {
            config.interiorId = btn.dataset.iid;
            el.querySelectorAll('.cz-interior-option').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

// ── Persistence ───────────────────────────────────────────────────────────────
function saveConfig() {
    if (!config.unitId) return;
    localStorage.setItem(`faceoff_config_${config.unitId}`, JSON.stringify(config));

    const rimObj = RIM_FINISHES.find(r => r.id === config.rimId);
    const calObj = CALIPER_COLORS.find(c => c.id === config.caliperId);
    const intObj = INTERIOR_TRIMS.find(t => t.id === config.interiorId);
    const tLabel = config.paint.type[0].toUpperCase() + config.paint.type.slice(1);
    const summary = [
        `${config.paint.label} ${tLabel}`,
        rimObj ? `${rimObj.label} Rims` : '',
        `${config.tint}% Window Tint`,
        calObj ? `${calObj.label} Calipers` : '',
        intObj ? `${intObj.label} Interior` : '',
    ].filter(Boolean).join(' · ');

    localStorage.setItem('faceoff_last_config_summary', summary);
    localStorage.setItem('faceoff_last_config_unitId',  config.unitId);
}

function resetConfig() {
    config.paint      = { ...PAINT_PRESETS[0] };
    config.rimId      = 'polished-silver';
    config.tint       = 20;
    config.caliperId  = 'red';
    config.interiorId = 'obsidian';
    buildUI();
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
    const params  = new URLSearchParams(window.location.search);
    config.unitId = params.get('unit') || '';

    if (config.unitId) {
        try {
            const saved = JSON.parse(localStorage.getItem(`faceoff_config_${config.unitId}`) || 'null');
            if (saved) Object.assign(config, saved);
        } catch (_) {}
    }

    const unit   = config.unitId && window.resolveUnit ? window.resolveUnit(config.unitId) : null;
    const nameEl = document.getElementById('cz-car-name');
    if (nameEl && unit) nameEl.textContent = unit.name;

    document.getElementById('cz-back')?.addEventListener('click', () => {
        window.location.href = config.unitId ? `showroom.html?unit=${config.unitId}` : 'showroom.html';
    });

    const doneEl = document.getElementById('cz-done');
    if (doneEl) {
        if (config.unitId) doneEl.href = `showroom.html?unit=${config.unitId}`;
        doneEl.addEventListener('click', saveConfig);
    }

    document.getElementById('cz-reset')?.addEventListener('click', resetConfig);

    initScene();
    buildUI();

    startLoaderWave();
    const modelId = unit?.modelId || '';
    loadModel(modelId);

    window.addEventListener('resize', onResize);
    requestAnimationFrame(animate);
}

document.addEventListener('DOMContentLoaded', init);
