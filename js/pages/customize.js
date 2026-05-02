import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

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
    { id: 'polished-silver', label: 'Polished Silver', color: 0xd8d8e0, roughness: 0.1,  metalness: 0.95 },
    { id: 'matte-black',     label: 'Matte Black',     color: 0x1a1a1a, roughness: 0.8,  metalness: 0.3  },
    { id: 'gunmetal',        label: 'Gunmetal',        color: 0x3c3c50, roughness: 0.3,  metalness: 0.8  },
    { id: 'satin-gold',      label: 'Satin Gold',      color: 0xb8920c, roughness: 0.4,  metalness: 0.7  },
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
    unitId: '',
    paint:      { ...PAINT_PRESETS[0] },
    rimId:      'polished-silver',
    tint:       20,
    caliperId:  'red',
    interiorId: 'obsidian',
};

const meshes = { body: [], rims: [], glass: [], calipers: [] };
let scene, camera, renderer, controls, carGroup;
let revealPhase = true, revealStart = 0;

// ── Scene ─────────────────────────────────────────────────────────────────────
function initScene() {
    const canvas = document.getElementById('cz-canvas');

    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfafafa);

    camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(5.5, 2.8, 5.5);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.8, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.minDistance = 3;
    controls.maxDistance = 14;
    controls.maxPolarAngle = Math.PI * 0.48;
    controls.enabled = false;

    scene.add(new THREE.AmbientLight(0xffffff, 0.8));

    const key = new THREE.DirectionalLight(0xfff8f0, 2.2);
    key.position.set(6, 9, 6);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.camera.near = 1;
    key.shadow.camera.far  = 30;
    key.shadow.camera.left = key.shadow.camera.bottom = -5;
    key.shadow.camera.right = key.shadow.camera.top   =  5;
    key.shadow.bias = -0.0005;
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xf0f8ff, 0.9);
    fill.position.set(-7, 4, 2);
    scene.add(fill);

    const rim = new THREE.DirectionalLight(0xeef4ff, 1.4);
    rim.position.set(-2, 7, -9);
    scene.add(rim);

    const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(20, 20),
        new THREE.ShadowMaterial({ opacity: 0.1 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    onResize();
}

// ── Car placeholder ───────────────────────────────────────────────────────────
function buildCar() {
    carGroup = new THREE.Group();

    const bodyMat  = () => new THREE.MeshStandardMaterial({ color: 0x1a1a2e, roughness: 0.08, metalness: 0.15 });
    const glassMat =       new THREE.MeshStandardMaterial({ color: 0x111828, transparent: true, opacity: 0.72, roughness: 0.02, metalness: 0.08 });
    const tireMat  =       new THREE.MeshStandardMaterial({ color: 0x0e0e0e, roughness: 0.92, metalness: 0.0  });
    const rimMat   = () => new THREE.MeshStandardMaterial({ color: 0xd8d8e0, roughness: 0.1,  metalness: 0.95 });
    const calMat   = () => new THREE.MeshStandardMaterial({ color: 0xcc2200, roughness: 0.3,  metalness: 0.2  });
    const emitW    =       new THREE.MeshStandardMaterial({ color: 0xffffee, emissive: 0xffffaa, emissiveIntensity: 0.6 });
    const emitR    =       new THREE.MeshStandardMaterial({ color: 0xff1100, emissive: 0xff1100, emissiveIntensity: 0.6 });

    function add(geo, mat, x, y, z, rx) {
        const m = new THREE.Mesh(geo, mat);
        m.position.set(x, y, z);
        if (rx) m.rotation.x = rx;
        m.castShadow = true;
        carGroup.add(m);
        return m;
    }

    // Body panels
    const body   = add(new THREE.BoxGeometry(1.82, 0.70, 3.82), bodyMat(), 0, 0.84, 0);
    const cabin  = add(new THREE.BoxGeometry(1.74, 0.64, 2.28), bodyMat(), 0, 1.54, -0.08);
    const fbump  = add(new THREE.BoxGeometry(1.80, 0.42, 0.44), bodyMat(), 0, 0.70,  2.13);
    const rbump  = add(new THREE.BoxGeometry(1.80, 0.42, 0.44), bodyMat(), 0, 0.70, -2.13);
    const fhood  = add(new THREE.BoxGeometry(1.78, 0.14, 0.66), bodyMat(), 0, 1.22,  1.72, 0.20);
    const rhatch = add(new THREE.BoxGeometry(1.78, 0.14, 0.66), bodyMat(), 0, 1.22, -1.74, -0.20);
    [body, cabin, fbump, rbump, fhood, rhatch].forEach(m => meshes.body.push(m));

    // Glass
    const glass = add(new THREE.BoxGeometry(1.76, 0.46, 2.08), glassMat, 0, 1.57, -0.06);
    meshes.glass.push(glass);

    // Lights (emissive, not customisable)
    add(new THREE.BoxGeometry(0.56, 0.10, 0.04), emitW, -0.62, 0.98,  2.36);
    add(new THREE.BoxGeometry(0.56, 0.10, 0.04), emitW,  0.62, 0.98,  2.36);
    add(new THREE.BoxGeometry(0.56, 0.08, 0.04), emitR, -0.62, 0.94, -2.36);
    add(new THREE.BoxGeometry(0.56, 0.08, 0.04), emitR,  0.62, 0.94, -2.36);

    // Wheels
    [
        [-0.94, 0.38,  1.52],
        [ 0.94, 0.38,  1.52],
        [-0.94, 0.38, -1.52],
        [ 0.94, 0.38, -1.52],
    ].forEach(([x, y, z]) => {
        const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.28, 24), tireMat);
        tire.rotation.z = Math.PI / 2;
        tire.position.set(x, y, z);
        tire.castShadow = true;
        carGroup.add(tire);

        const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.265, 0.265, 0.29, 16), rimMat());
        rim.rotation.z = Math.PI / 2;
        rim.position.set(x, y, z);
        rim.castShadow = true;
        carGroup.add(rim);
        meshes.rims.push(rim);

        const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.30, 8), rimMat());
        hub.rotation.z = Math.PI / 2;
        hub.position.set(x, y, z);
        carGroup.add(hub);
        meshes.rims.push(hub);

        const cx  = x > 0 ? x - 0.20 : x + 0.20;
        const cal = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.13, 0.17), calMat());
        cal.position.set(cx, y + 0.02, z);
        carGroup.add(cal);
        meshes.calipers.push(cal);
    });

    carGroup.rotation.y = Math.PI / 5;
    scene.add(carGroup);
}

// ── Render loop ───────────────────────────────────────────────────────────────
function animate(now) {
    requestAnimationFrame(animate);

    if (revealPhase) {
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
    meshes.body.forEach(m => {
        m.material.color.set(col);
        m.material.roughness  = typeObj.roughness;
        m.material.metalness  = typeObj.metalness;
        m.material.needsUpdate = true;
    });
}

function applyRims() {
    const rf = RIM_FINISHES.find(r => r.id === config.rimId) || RIM_FINISHES[0];
    meshes.rims.forEach(m => {
        m.material.color.set(rf.color);
        m.material.roughness  = rf.roughness;
        m.material.metalness  = rf.metalness;
        m.material.needsUpdate = true;
    });
}

function applyTint() {
    const t = config.tint / 100;
    meshes.glass.forEach(m => {
        m.material.opacity = Math.max(0.22, 0.78 - t * 0.56);
        m.material.color.setRGB(0.08 - t * 0.06, 0.09 - t * 0.07, 0.14 - t * 0.11);
        m.material.needsUpdate = true;
    });
}

function applyCalipers() {
    const c   = CALIPER_COLORS.find(c => c.id === config.caliperId) || CALIPER_COLORS[0];
    const col = new THREE.Color(c.hex);
    meshes.calipers.forEach(m => {
        m.material.color.set(col);
        m.material.needsUpdate = true;
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
            data-pid="${p.id}" title="${p.label}"
            style="background:${p.hex};"></button>`
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
    const typeLabel = config.paint.type[0].toUpperCase() + config.paint.type.slice(1);
    const summary = [
        `${config.paint.label} ${typeLabel}`,
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
    const w = wrap.clientWidth;
    const h = wrap.clientHeight;
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
        window.location.href = config.unitId
            ? `showroom.html?unit=${config.unitId}`
            : 'showroom.html';
    });

    const doneEl = document.getElementById('cz-done');
    if (doneEl) {
        if (config.unitId) doneEl.href = `showroom.html?unit=${config.unitId}`;
        doneEl.addEventListener('click', saveConfig);
    }

    document.getElementById('cz-reset')?.addEventListener('click', resetConfig);

    initScene();
    buildCar();
    applyAll();
    buildUI();

    window.addEventListener('resize', onResize);
    revealStart = performance.now();
    requestAnimationFrame(animate);
}

document.addEventListener('DOMContentLoaded', init);
