if (!window.WheelCursor) {

window.WheelCursor = (() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return {};

    const DPR  = Math.min(window.devicePixelRatio || 1, 2);
    const SIZE = 28;
    const HALF = SIZE / 2;
    const RIM  = SIZE / 2;

    // ── Wheel canvas ──────────────────────────────────────────────────────
    function makeWheelCanvas() {
        const c = document.createElement('canvas');
        c.width  = SIZE * DPR;
        c.height = SIZE * DPR;
        c.style.position      = 'fixed';
        c.style.top           = '0px';
        c.style.left          = '0px';
        c.style.width         = SIZE + 'px';
        c.style.height        = SIZE + 'px';
        c.style.display       = 'block';
        c.style.pointerEvents = 'none';
        c.style.zIndex        = '99999';
        c.style.willChange    = 'transform';
        c.style.opacity       = '1';
        c.style.transform     = `translate3d(${-SIZE * 3}px,${-SIZE * 3}px,0)`;
        document.body.appendChild(c);
        return c;
    }

    function drawWheel(c, rot) {
        const ctx = c.getContext('2d');
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.save();
        ctx.scale(DPR, DPR);
        ctx.lineCap = 'round';

        // White halo — makes cursor pop on dark backgrounds
        ctx.shadowColor = 'rgba(255,255,255,0.9)';
        ctx.shadowBlur  = 4;
        ctx.strokeStyle = '#111';
        ctx.fillStyle   = '#111';

        // outer rim
        ctx.beginPath();
        ctx.arc(HALF, HALF, 12, 0, Math.PI * 2);
        ctx.lineWidth = 1.4;
        ctx.stroke();

        // inner dashed ring
        ctx.save();
        ctx.globalAlpha = 0.5;
        ctx.lineWidth   = 0.6;
        ctx.setLineDash([2.5, 3]);
        ctx.beginPath();
        ctx.arc(HALF, HALF, 8, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // spokes
        ctx.save();
        ctx.translate(HALF, HALF);
        ctx.rotate(rot * Math.PI / 180);
        ctx.lineWidth = 1.6;
        for (let i = 0; i < 5; i++) {
            ctx.save();
            ctx.rotate(i * 72 * Math.PI / 180);
            ctx.beginPath();
            ctx.moveTo(0, -3);
            ctx.lineTo(0, -11);
            ctx.stroke();
            ctx.restore();
        }
        // hub
        ctx.beginPath();
        ctx.arc(0, 0, 2.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        ctx.restore();
    }

    // ── Storm canvas ──────────────────────────────────────────────────────
    const stormCvs = document.createElement('canvas');
    stormCvs.style.position      = 'fixed';
    stormCvs.style.top           = '0px';
    stormCvs.style.left          = '0px';
    stormCvs.style.width         = '100%';
    stormCvs.style.height        = '100%';
    stormCvs.style.pointerEvents = 'none';
    stormCvs.style.zIndex        = '99996';
    document.body.appendChild(stormCvs);

    const sctx      = stormCvs.getContext('2d');
    let needsClear  = false;

    function resize() {
        stormCvs.width  = window.innerWidth  * DPR;
        stormCvs.height = window.innerHeight * DPR;
        needsClear = false;
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Sandy desert palette — warm tan/ochre
    const SAND = [
        [212, 178,  95],  // golden sand
        [195, 158,  72],  // mid ochre
        [228, 200, 130],  // pale dust
        [180, 145,  60],  // deep tan
    ];

    const MAX_P = 200;
    const pool  = [];

    function spawn(cx, cy, vel, dx, dy) {
        if (vel < 1.5) return;

        // More particles per frame = denser storm cloud
        const count = Math.min(Math.ceil(vel * 1.1), 11);
        const dir   = Math.atan2(dy, dx) + Math.PI;

        for (let i = 0; i < count && pool.length < MAX_P; i++) {
            // Tighter cone than smoke (±65°) so the storm stays together
            const spread  = (Math.random() - 0.5) * Math.PI * 0.72;
            const angle   = dir + spread;
            // Cluster spawn: tighter distance so puffs overlap and form one mass
            const spawnR  = RIM + Math.random() * 9;
            const col     = Math.floor(Math.random() * SAND.length);
            // Medium puffs — not as big as smoke, not as small as dust
            const r0      = 3.5 + Math.random() * Math.min(vel, 9) * 0.38;
            const r1      = r0  + 7  + Math.random() * Math.min(vel, 14) * 0.9;

            pool.push({
                x:    cx + Math.cos(angle) * spawnR,
                y:    cy + Math.sin(angle) * spawnR,
                // Moderate launch — stays clustered, doesn't scatter far
                vx:   Math.cos(angle) * (1.1 + Math.random() * Math.min(vel, 10) * 0.28),
                vy:   Math.sin(angle) * (1.1 + Math.random() * Math.min(vel, 10) * 0.28),
                r0, r1,
                // Lower alpha per particle — density comes from overlap, not opacity
                a:    0.28 + Math.random() * 0.22,
                col,
                age:  0,
                life: 52 + Math.floor(Math.random() * 44),
            });
        }
    }

    function spawnScroll(cx, cy, amount) {
        if (amount < 5 || pool.length >= MAX_P) return;
        const count = Math.min(Math.ceil(amount * 0.3), 5);
        for (let i = 0; i < count && pool.length < MAX_P; i++) {
            const angle = (Math.random() - 0.5) * Math.PI * 2;
            const col   = Math.floor(Math.random() * SAND.length);
            const r0    = 3 + Math.random() * 3;
            pool.push({
                x:    cx + Math.cos(angle) * (RIM + Math.random() * 10),
                y:    cy + Math.sin(angle) * (RIM + Math.random() * 10),
                vx:   Math.cos(angle) * (0.6 + Math.random() * 1.0),
                vy:   Math.sin(angle) * (0.6 + Math.random() * 1.0),
                r0, r1: r0 + 6 + Math.random() * 8,
                a:    0.2 + Math.random() * 0.18,
                col,
                age:  0,
                life: 40 + Math.floor(Math.random() * 30),
            });
        }
    }

    function drawStorm() {
        const hasP = pool.length > 0;
        if (!hasP && !needsClear) return;
        sctx.clearRect(0, 0, stormCvs.width, stormCvs.height);
        needsClear = hasP;
        if (!hasP) return;

        sctx.save();
        sctx.scale(DPR, DPR);

        for (let i = pool.length - 1; i >= 0; i--) {
            const p = pool[i];
            p.age++;
            if (p.age >= p.life) { pool.splice(i, 1); continue; }

            // ── Storm physics ──────────────────────────────────────────
            p.x  += p.vx;
            p.y  += p.vy;
            p.vy += 0.025;   // barely-there gravity — storm rolls low, not zero-G
            p.vx *= 0.968;   // very light drag — cloud keeps moving together
            p.vy *= 0.968;

            const t = p.age / p.life;
            // Fast expand early, hold size mid, shrink late
            const grow  = t < 0.35 ? t / 0.35 : t < 0.7 ? 1 : 1 - (t - 0.7) / 0.3;
            const r     = p.r0 + (p.r1 - p.r0) * Math.min(grow, 1);
            // Fade in quickly, hold, then fade out
            const alpha = p.a * (t < 0.12 ? t / 0.12 : Math.pow(1 - t, 1.2));

            const [R, G, B] = SAND[p.col];

            // Softer gradient than smoke but harder than nothing — gritty sand texture
            const g = sctx.createRadialGradient(p.x, p.y, r * 0.1, p.x, p.y, r);
            g.addColorStop(0,    `rgba(${R},${G},${B},${alpha.toFixed(3)})`);
            g.addColorStop(0.5,  `rgba(${R},${G},${B},${(alpha * 0.55).toFixed(3)})`);
            g.addColorStop(1,    `rgba(${R},${G},${B},0)`);

            sctx.fillStyle = g;
            sctx.beginPath();
            sctx.arc(p.x, p.y, r, 0, Math.PI * 2);
            sctx.fill();
        }

        sctx.restore();
    }

    // ── State & events ────────────────────────────────────────────────────
    const wheel = makeWheelCanvas();
    wheel.id    = 'wheel-cursor';

    const m = { x: -300, y: -300, tx: -300, ty: -300 };
    let rotation = 0, scrollSpin = 0, lastScrollY = window.scrollY;
    let prevX = m.x, prevY = m.y;
    let hovered = false;

    window.addEventListener('mousemove', e => { m.tx = e.clientX; m.ty = e.clientY; });

    window.addEventListener('scroll', () => {
        const d = Math.abs(window.scrollY - lastScrollY);
        lastScrollY = window.scrollY;
        scrollSpin += d * 0.65;
    }, { passive: true });

    const HIT = 'a, button, .art-parallax-img, .art-track-img, .art-spread-img, ' +
                '.art-scrub-video, .art-xray-container, .art-outro-cta, ' +
                '.sr-card, .catalog-card, [role="button"]';
    document.addEventListener('mouseover', e => { if (e.target.closest(HIT)) hovered = true; });
    document.addEventListener('mouseout',  e => { if (e.target.closest(HIT)) hovered = false; });

    // ── RAF loop ──────────────────────────────────────────────────────────
    function tick() {
        m.x += (m.tx - m.x) * 0.12;
        m.y += (m.ty - m.y) * 0.12;

        const dx  = m.x - prevX;
        const dy  = m.y - prevY;
        const vel = Math.sqrt(dx * dx + dy * dy);
        prevX = m.x;
        prevY = m.y;

        rotation  += vel * 0.45 + scrollSpin;
        scrollSpin *= 0.80;

        spawn(m.x, m.y, vel, dx, dy);
        if (scrollSpin > 5) spawnScroll(m.x, m.y, scrollSpin);

        drawStorm();

        const scale = hovered ? 1.5 : 1;
        wheel.style.transform = `translate3d(${Math.round(m.x - HALF)}px,${Math.round(m.y - HALF)}px,0) scale(${scale})`;
        drawWheel(wheel, rotation);

        requestAnimationFrame(tick);
    }

    tick();

    const old = document.getElementById('art-cursor');
    if (old) old.style.display = 'none';

    return { el: wheel };
})();

}
