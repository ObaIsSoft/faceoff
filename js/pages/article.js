if (!window.ArticlePage) {

const EDITORIAL_POOL = [
    // editorial — full-car & scene photography (WebP)
    'assets/editorial/webp/anthony-adu-2fJnO-DDE-w-unsplash.webp',
    'assets/editorial/webp/autotrader-uk-gjoO-I7-H_I-unsplash.webp',
    'assets/editorial/webp/bruno-guerrero-f22widk6gow-unsplash.webp',
    'assets/editorial/webp/carter-bilawchuk-kfSWl1EoadE-unsplash.webp',
    'assets/editorial/webp/cash-macanaya-P7jbC3FRgco-unsplash.webp',
    'assets/editorial/webp/caspar-rae-M09yaKs0z1I-unsplash.webp',
    'assets/editorial/webp/gleb-paniotov-vZfTIDV2qOY-unsplash.webp',
    'assets/editorial/webp/grahame-jenkins-p7tai9P7H-s-unsplash.webp',
    'assets/editorial/webp/ionut-vlad-Opu5OoMb1pU-unsplash.webp',
    'assets/editorial/webp/karthik-vadlamani-EsVrwFuIZNI-unsplash.webp',
    'assets/editorial/webp/kevin-bhagat-3cLpiv8h5so-unsplash.webp',
    'assets/editorial/webp/mdreza-jalali-1MNKzd0C2dM-unsplash.webp',
    'assets/editorial/webp/mehan-talukder-sX94ITfZXnY-unsplash.webp',
    'assets/editorial/webp/objecttype-raw-6R8L09tbjOo-unsplash.webp',
    'assets/editorial/webp/oli-woodman-2e07u8GXe3I-unsplash.webp',
    'assets/editorial/webp/peter-thomas-4lLOihvXrTk-unsplash.webp',
    'assets/editorial/premium_photo-1683134242640-fe6baaf4d5fc.avif',
    'assets/editorial/webp/rishab-lamichhane-iflRMZelx0M-unsplash.webp',
    'assets/editorial/webp/roger-starnes-sr-6gpPxhLAKJI-unsplash.webp',
    'assets/editorial/webp/roger-starnes-sr-UsMWE1VSW_0-unsplash.webp',
    'assets/editorial/webp/roman-LD8F38MI5So-unsplash.webp',
    'assets/editorial/webp/roman-uRbbJM3WL0g-unsplash.webp',
    'assets/editorial/webp/seungmin-yoon-87kzHSRwzj8-unsplash.webp',
    'assets/editorial/webp/seungmin-yoon-ZLJNkBcMa84-unsplash.webp',
    'assets/editorial/webp/vitali-adutskevich-f-Ob1ubCiIE-unsplash.webp',
    'assets/editorial/webp/vitaly-mazur-pvDQwb8Mnm8-unsplash.webp',
    'assets/editorial/webp/wes-hicks-mDASgFtuMRQ-unsplash.webp',
    'assets/editorial/webp/wesley-tingey-07DJcv5PXyY-unsplash.webp',
    'assets/editorial/webp/wolf-schram-19t6J2RVqQE-unsplash.webp',
    // parts — engines, exhaust, tyres, interiors, details (WebP; avif kept as-is)
    'assets/parts/webp/alex-pudov-o2m-IvJ7T50-unsplash.webp',
    'assets/parts/webp/apostolos-vamvouras-jnmGVg7GwTU-unsplash.webp',
    'assets/parts/webp/arteum-ro-SkKTh9ZyTxU-unsplash.webp',
    'assets/parts/webp/autotrader-uk-cxM8lR9TPBk-unsplash.webp',
    'assets/parts/webp/ben-griffiths-bjJ1ckzCcjI-unsplash.webp',
    'assets/parts/webp/benjamin-zhao-5DremXTTKE0-unsplash.webp',
    'assets/parts/boot.avif',
    'assets/parts/webp/bram-van-oost-4xM5cytsdMo-unsplash.webp',
    'assets/parts/webp/brock-wegner-pWGUMQSWBwI-unsplash.webp',
    'assets/parts/webp/cemrecan-yurtman-sk6fOQYIO1o-unsplash.webp',
    'assets/parts/webp/chad-kirchoff-xe-e69j6-Ds-unsplash.webp',
    'assets/parts/chasis.avif',
    'assets/parts/webp/chinmay-jade-XNN9C8MG4KM-unsplash.webp',
    'assets/parts/webp/daniela-p-YU9rbNLQxSY-unsplash.webp',
    'assets/parts/webp/dinuka-de-silva-jd_vMUyBGNc-unsplash.webp',
    'assets/parts/webp/dominik-garbera-2DrK_hrVsrk-unsplash.webp',
    'assets/parts/webp/erik-mclean-ioEjMWHn2nY-unsplash.webp',
    'assets/parts/exhaust.avif',
    'assets/parts/webp/frank-albrecht-eKHRJMdCi9A-unsplash.webp',
    'assets/parts/webp/gab-9P5Fbk6g6tA-unsplash.webp',
    'assets/parts/webp/gab-YSeNTqKhASc-unsplash.webp',
    'assets/parts/webp/igor-constantino-aXxu0nVMGmk-unsplash.webp',
    'assets/parts/webp/imaad-whd-T0LChgLV0Vc-unsplash.webp',
    'assets/parts/interior.avif',
    'assets/parts/webp/iridial-X4jAWbmsRCk-unsplash.webp',
    'assets/parts/webp/j-z-aKwjqJjpUBQ-unsplash.webp',
    'assets/parts/webp/jakob-rosen-FsBbavP9YA4-unsplash.webp',
    'assets/parts/webp/joshua-aragon-8vf8d5CVicw-unsplash.webp',
    'assets/parts/webp/joshua-aragon-SlgLD4_drDA-unsplash.webp',
    'assets/parts/webp/kahl-orr-ZdLFPE0AZBU-unsplash.webp',
    'assets/parts/webp/logan-weaver-lgnwvr-7VtjKFKkEAg-unsplash.webp',
    'assets/parts/webp/luca-hooijer-u3RhNe3QJeM-unsplash.webp',
    'assets/parts/webp/marc-grande-Zc8e11NhM1Q-unsplash.webp',
    'assets/parts/webp/markus-spiske-TKCcWZFdi-w-unsplash.webp',
    'assets/parts/webp/markus-spiske-fc3IaGfDATI-unsplash.webp',
    'assets/parts/webp/markus-spiske-tlHsaRcpLPw-unsplash.webp',
    'assets/parts/webp/mason-jones-9e_ssIz4jB4-unsplash.webp',
    'assets/parts/webp/mateusz-suski-nnZ6ORmjmew-unsplash.webp',
    'assets/parts/webp/maxim-hopman-FdAXItuGDnY-unsplash.webp',
    'assets/parts/webp/nick-ter-haar-gLxo-qpWiT0-unsplash.webp',
    'assets/parts/webp/nilayam-patel-29dTRsw-ZGU-unsplash.webp',
    'assets/parts/webp/obi-5nWB9sq6kiQ-unsplash.webp',
    'assets/parts/webp/obi-FmOdtM4KXhk-unsplash.webp',
    'assets/parts/webp/oliur-ovrOPhu8vSw-unsplash.webp',
    'assets/parts/webp/omer-haktan-bulut-JcN9DEzYsDg-unsplash.webp',
    'assets/parts/webp/omer-haktan-bulut-RFtokfwmCaA-unsplash.webp',
    'assets/parts/webp/philippe-Pqv3vISYlqU-unsplash.webp',
    'assets/parts/webp/portafolio-fotografico-automotriz-nNupvXbyif4-unsplash.webp',
    'assets/parts/webp/rahul-bhogal-ci5yx3gR-Vg-unsplash.webp',
    'assets/parts/webp/rhys-rainbow-mccormack-C9j3p_JHllQ-unsplash.webp',
    'assets/parts/webp/rktw-extend-2EHRBs1gefY-unsplash.webp',
    'assets/parts/webp/ryno-marais-l81o3kZe40c-unsplash.webp',
    'assets/parts/webp/serjan-midili-0ZZuVE0wJUE-unsplash.webp',
    'assets/parts/webp/serjan-midili-LgjAGsMTqAA-unsplash.webp',
    'assets/parts/webp/tim-mossholder-OwBRQ0bykX8-unsplash.webp',
    'assets/parts/webp/tim-mossholder-VurHDpO4VYI-unsplash.webp',
    'assets/parts/webp/umpholphat-dangam-fWB5QT4o18k-unsplash.webp',
    'assets/parts/webp/vadym-kudriavtsev-Xb6w0ywUvZk-unsplash.webp',
    'assets/parts/webp/viktor-theo-F_jI33ON9Fw-unsplash.webp',
    'assets/parts/webp/viktor-theo-wWN4AiGPscM-unsplash.webp',
    'assets/parts/webp/wesley-tingey-pyFcKnxyAW4-unsplash.webp',
    'assets/parts/webp/zack-szadurski-dRcoznrOhFQ-unsplash.webp',
    'assets/parts/webp/zoshua-colah-CKdTLYPfnX8-unsplash.webp',
    'assets/parts/webp/zoshua-colah-o1f1yOCUgH4-unsplash.webp',
];

function editorialHash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
    return Math.abs(h);
}

function pickVideo(unit) {
    const energy   = (unit.energy   || '').toUpperCase();
    const category = (unit.category || '').toUpperCase();
    const type     = (unit.type     || '').toUpperCase();
    const year     = parseInt(unit.year, 10) || 9999;

    if (energy === 'ELECTRIC')                             return 'assets/videos/ev.mp4';
    if (year < 2015)                                       return 'assets/videos/vintage-classics.mp4';
    if (category === 'SPORT' && type === 'SEDAN')          return 'assets/videos/supercars.mp4';
    if (category === 'SPORT' && type === 'SALOON')         return 'assets/videos/supercars.mp4';
    if (category === 'SPORT')                              return 'assets/videos/supercars.mp4';
    if (type === 'SEDAN' || type === 'SALOON')             return 'assets/videos/executive-sedans.mp4';
    if (category === 'ECONOMY' || category === 'FAMILY')   return 'assets/videos/family-cars.mp4';
    if (type === 'SUV' || type === 'TRUCK')                return 'assets/videos/suv.mp4';
    return 'assets/videos/istockphoto-1505840199-640_adpp_is.mp4';
}

function pickEditorial(unitId, count, offset) {
    const base = editorialHash(unitId + (offset || '')) % EDITORIAL_POOL.length;
    const picks = [];
    for (let i = 0; i < count; i++) picks.push(EDITORIAL_POOL[(base + i) % EDITORIAL_POOL.length]);
    return picks;
}

window.ArticlePage = {
    lenis: null,
    _scrollVel: 0,
    _cleanups: [], // all event-listener teardowns collected here

    init() {
        const titleEl = document.getElementById('article-title');
        if (!titleEl) return;

        const params = new URLSearchParams(window.location.search);
        const unitId = params.get('unit');

        const unit = typeof resolveUnit === 'function' ? resolveUnit(unitId) : null;
        if (!unit) { titleEl.textContent = 'Vehicle not found'; return; }

        const d = unit.details || {};

        // ── Video assignment ──────────────────────────────────────────────
        const videoSrc = pickVideo(unit);
        const videoEl  = document.getElementById('article-video');
        if (videoEl) { videoEl.src = videoSrc; videoEl.load(); }
        const xrayVid  = document.getElementById('article-xray-video');
        if (xrayVid)  { xrayVid.src = videoSrc; xrayVid.load(); xrayVid.play().catch(() => {}); }

        // ── Eyebrow + title ───────────────────────────────────────────────
        const eyebrow = document.getElementById('article-eyebrow');
        if (eyebrow) eyebrow.textContent = [unit.brand, unit.model].filter(Boolean).join(' ');
        titleEl.textContent = unit.name || unitId;

        // ── Brand logo ────────────────────────────────────────────────────
        const logoEl = document.getElementById('article-brand-logo');
        if (logoEl) {
            const logo = unit.logo || (window.MODELS || {})[unit.modelId]?.logo;
            if (logo) { logoEl.src = logo; logoEl.style.display = ''; }
            else logoEl.style.display = 'none';
        }

        // ── Hero ghost ────────────────────────────────────────────────────
        const ghostEl = document.getElementById('art-hero-ghost');
        if (ghostEl) {
            const ghostText = d.engineFull
                ? (d.engineFull.match(/\d+\.\d+/)?.[0]
                || d.engineFull.match(/[Vv]\d+/)?.[0]
                || d.engineFull.split(' ')[0])
                : (unit.trim || '').split(' ').slice(-1)[0];
            ghostEl.textContent = ghostText || '';
        }

        // ── Hero image ────────────────────────────────────────────────────
        const imgEl = document.getElementById('article-image');
        if (imgEl) {
            const src = (unit.imgs && unit.imgs.length) ? unit.imgs[0] : '';
            if (src) imgEl.src = src;
            else imgEl.style.display = 'none';
        }

        // ── Kinetic stats ─────────────────────────────────────────────────
        [
            { val: d.zeroToHundred, label: '0 – 100' },
            { val: unit.power,       label: 'Power'    },
            { val: unit.topSpeed,    label: 'Top Speed' },
        ].forEach((s, i) => {
            const numEl = document.getElementById(`kin-num-${i}`);
            const tagEl = document.getElementById(`kin-tag-${i}`);
            const item  = document.getElementById(`kin-${i}`);
            if (!item) return;
            if (s.val) {
                if (numEl) numEl.textContent = s.val;
                if (tagEl) tagEl.textContent = s.label;
            } else {
                item.style.display = 'none';
            }
        });

        // ── Editorial body ────────────────────────────────────────────────
        const bodyEl = document.getElementById('article-body');
        if (bodyEl) {
            let html = '';
            if (d.editorial && d.editorial.length) {
                d.editorial.forEach(block => {
                    if      (block.t === 'p') html += `<p class="art-para">${block.v}</p>`;
                    else if (block.t === 'q') html += `<blockquote class="art-inline-quote">${block.v}</blockquote>`;
                    else if (block.t === 'h') html += `<span class="art-micro-heading">${block.v}</span>`;
                });
            } else {
                const notes = unit.notes || '';
                if (notes) html += `<p class="art-para">${notes}</p>`;
                if (d.engineFull || unit.power) {
                    html += `<span class="art-micro-heading">Performance</span>`;
                    html += `<p class="art-para">${[
                        d.engineFull ? `Engine: ${d.engineFull}` : null,
                        unit.power   ? `Power: ${unit.power}`    : null,
                        unit.torque  ? `Torque: ${unit.torque}`  : null,
                    ].filter(Boolean).join(' · ')}</p>`;
                }
            }
            bodyEl.innerHTML = html;
        }

        // ── Spec data ─────────────────────────────────────────────────────
        const specsSection = document.getElementById('art-specs-data');
        const specsRows    = document.getElementById('art-specs-rows');
        if (d.specs && d.specs.length && specsSection && specsRows) {
            specsRows.innerHTML = d.specs.map(s =>
                `<div class="art-spec-row">
                    <span class="art-spec-key">${s.label}</span>
                    <span class="art-spec-val">${s.value}</span>
                </div>`
            ).join('');
            specsSection.style.display = '';
        }

        // ── Pull-quote ────────────────────────────────────────────────────
        const pqSection = document.getElementById('art-pullquote');
        const pqText    = document.getElementById('art-pullquote-text');
        if (d.funFact && pqSection && pqText) {
            pqText.textContent = d.funFact;
            pqSection.style.display = '';
        }

        // ── Editorial spread ──────────────────────────────────────────────
        const spreadPicks = pickEditorial(unitId, 3, 'spread');
        ['art-spread-img-0', 'art-spread-img-1', 'art-spread-img-2'].forEach((id, i) => {
            const el = document.getElementById(id);
            if (el) el.src = spreadPicks[i];
        });

        // ── Spread captions ───────────────────────────────────────────────
        const spreadCaps = [
            [unit.year, unit.brand, unit.trim].filter(Boolean).join(' · '),
            d.leather ? `Interior · ${d.leather}` : (d.seating ? `Seating · ${d.seating}` : `${unit.brand} · Cabin`),
            d.engineFull ? `Powertrain · ${d.engineFull}` : (unit.power ? `Output · ${unit.power}` : `${unit.brand} · Detail`),
        ];
        spreadCaps.forEach((cap, i) => {
            const el = document.getElementById(`art-spread-cap-${i}`);
            if (el) el.textContent = cap;
        });

        // ── X-ray background ──────────────────────────────────────────────
        const xrayBgImg = document.getElementById('art-xray-bg-img');
        if (xrayBgImg) xrayBgImg.src = pickEditorial(unitId, 1, 'xray')[0];

        // ── Horizontal gallery ────────────────────────────────────────────
        const track = document.getElementById('art-h-track');
        if (track) {
            let imgs = (unit.imgs || []).slice(0, 6);
            if (imgs.length < 6) imgs = imgs.concat(pickEditorial(unitId, 6 - imgs.length, 'gallery'));
            const trackLabels = ['Exterior', 'Profile', 'Detail', 'Interior', 'Rear', 'Motion'];
            if (imgs.length >= 2) {
                track.innerHTML = imgs.map((src, i) => `
                    <div class="art-track-item">
                        <span class="art-track-year">${trackLabels[i] || String(i + 1).padStart(2, '0')}</span>
                        <img src="${src}" class="art-track-img" alt="">
                    </div>`).join('');
            } else {
                const hs = document.getElementById('horizontal-trigger');
                if (hs) hs.style.display = 'none';
            }
        }

        // ── Back links ────────────────────────────────────────────────────
        ['article-back', 'art-outro-back'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.href = `showroom.html?unit=${unitId}`;
        });

        this._initCustomizationSections(unit);
        this._initScroll();
        this._initProgress();
        this._initAnimations();
        this._initLens();
        this._initXray();
        this._initFluid();

        // After one paint, recalculate all ScrollTrigger positions.
        // Essential after SPA navigation: body goes from position:fixed → position:relative
        // and the total scroll height isn't settled until after the first render cycle.
        requestAnimationFrame(() => {
            if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
        });
    },

    _initScroll() {
        if (typeof Lenis === 'undefined') return;
        this.lenis = new Lenis({
            duration: 1.0,
            easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            this.lenis.on('scroll', e => {
                ScrollTrigger.update();
                this._scrollVel = Math.abs(e.velocity || 0);
            });
            this._lenisRaf = t => { if (this.lenis) this.lenis.raf(t * 1000); };
            gsap.ticker.add(this._lenisRaf);
            gsap.ticker.lagSmoothing(0);
        } else {
            const raf = t => { this.lenis.raf(t); requestAnimationFrame(raf); };
            requestAnimationFrame(raf);
        }
    },

    _initProgress() {
        const fill = document.getElementById('art-progress-fill');
        if (!fill) return;
        const update = () => {
            const scrolled = window.scrollY || document.documentElement.scrollTop;
            const total    = document.documentElement.scrollHeight - window.innerHeight;
            fill.style.height = total > 0 ? `${(scrolled / total) * 100}%` : '0%';
        };
        if (this.lenis) {
            this.lenis.on('scroll', update);
        } else {
            window.addEventListener('scroll', update, { passive: true });
            this._cleanups.push(() => window.removeEventListener('scroll', update));
        }
    },

    _initAnimations() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
            document.querySelectorAll('.ln').forEach(el => el.classList.add('is-revealed'));
            document.querySelectorAll('.art-kinetic-item').forEach(el => el.classList.add('is-fired'));
            document.querySelectorAll('.art-spec-row').forEach(el => el.classList.add('is-revealed'));
            document.querySelectorAll('.art-pullquote-rule').forEach(el => el.classList.add('is-open'));
            return;
        }
        gsap.registerPlugin(ScrollTrigger);

        // ① Entry
        this._entryTl = gsap.timeline({ delay: 0.1 });
        this._entryTl.to('.art-mask-container', { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.8, ease: 'expo.inOut' });
        this._entryTl.fromTo('.art-parallax-img', { scale: 1.14 }, { scale: 1, duration: 1.8, ease: 'expo.inOut' }, '<');
        this._entryTl.fromTo('.art-hero-ghost', { opacity: 0 }, { opacity: 1, duration: 1.4, ease: 'power2.out' }, '-=1.2');
        this._entryTl.fromTo('#article-eyebrow', { yPercent: 110 }, { yPercent: 0, duration: 0.9, ease: 'power4.out' }, '-=0.7');
        this._entryTl.fromTo('#article-title',   { yPercent: 110 }, { yPercent: 0, duration: 1.2, ease: 'power4.out' }, '-=0.8');
        this._entryTl.call(() => {
            const mc = document.querySelector('.art-mask-container');
            if (mc) mc.style.willChange = 'auto';
        });

        // ② Kinetic
        document.querySelectorAll('.art-kinetic-item').forEach((el, i) => {
            ScrollTrigger.create({
                trigger: el, start: 'top 82%', end: 'bottom top',
                onEnter:     () => setTimeout(() => el.classList.add('is-fired'),    i * 120),
                onLeave:     () => el.classList.remove('is-fired'),
                onEnterBack: () => setTimeout(() => el.classList.add('is-fired'),    i * 120),
                onLeaveBack: () => el.classList.remove('is-fired'),
            });
        });

        // ③ Spec rows
        document.querySelectorAll('.art-spec-row').forEach((el, i) => {
            ScrollTrigger.create({
                trigger: el, start: 'top 88%', end: 'bottom top',
                onEnter:     () => setTimeout(() => el.classList.add('is-revealed'), i * 80),
                onLeave:     () => el.classList.remove('is-revealed'),
                onEnterBack: () => setTimeout(() => el.classList.add('is-revealed'), i * 80),
                onLeaveBack: () => el.classList.remove('is-revealed'),
            });
        });

        // ④ Pull-quote rules
        ScrollTrigger.create({
            trigger: '#art-pullquote', start: 'top 75%',
            onEnter: () => document.querySelectorAll('.art-pullquote-rule').forEach(r => r.classList.add('is-open')),
        });

        // ⑤ Line reveals
        document.querySelectorAll('.art-editorial .ln, .art-pullquote .ln, .art-outro .ln').forEach(el => {
            ScrollTrigger.create({
                trigger: el, start: 'top 90%',
                onEnter: () => el.classList.add('is-revealed'),
            });
        });

        // ⑥ Spread clip reveal
        document.querySelectorAll('.art-spread-img').forEach((el, i) => {
            gsap.fromTo(el,
                { clipPath: 'inset(0 0 100% 0)' },
                {
                    clipPath: 'inset(0 0 0% 0)',
                    duration: 1.3, ease: 'expo.inOut', delay: i * 0.1,
                    scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
                }
            );
        });

        // ⑦ Parallax — GSAP sets will-change while active
        gsap.to('.art-parallax-img', {
            yPercent: 18, ease: 'none',
            scrollTrigger: { trigger: '.art-hero-media', start: 'top bottom', end: 'bottom top', scrub: true },
        });

        // ⑧ Section index counter-scroll
        gsap.to('.art-section-index', {
            yPercent: -22, ease: 'none',
            scrollTrigger: { trigger: '.art-editorial', start: 'top bottom', end: 'bottom top', scrub: true },
        });

        // ⑨ Video scrub
        const video   = document.getElementById('article-video');
        const tachoEl = document.querySelector('.tacho-val');
        if (video) {
            video.pause();
            const proxy = { t: 0 };
            let lastSeekAt = 0;
            const commitTime = () => {
                const now = performance.now();
                if (now - lastSeekAt > 150 && video.readyState >= 2) {
                    lastSeekAt = now;
                    video.currentTime = proxy.t;
                }
                if (tachoEl) tachoEl.textContent =
                    Math.floor((proxy.t / (video.duration || 1)) * 8500).toLocaleString();
            };
            const setDuration = () => {
                gsap.to(proxy, {
                    t: video.duration, ease: 'none', onUpdate: commitTime,
                    scrollTrigger: {
                        trigger: '.art-video-scrub', start: 'top top', end: 'bottom top', scrub: 2,
                    },
                });
                // Recalculate after async video metadata arrives; layout may have settled
                requestAnimationFrame(() => ScrollTrigger.refresh());
            };
            if (video.readyState >= 1) {
                setDuration();
            } else {
                video.addEventListener('loadedmetadata', setDuration, { once: true });
                this._cleanups.push(() => video.removeEventListener('loadedmetadata', setDuration));
            }
        }

        // ⑩ Horizontal gallery
        const hTrack = document.getElementById('art-h-track');
        if (hTrack && hTrack.children.length > 1) {
            gsap.to(hTrack, {
                x: () => -(hTrack.scrollWidth - window.innerWidth),
                ease: 'none',
                scrollTrigger: {
                    trigger: '#horizontal-trigger', start: 'top top', end: 'bottom top',
                    scrub: 1, invalidateOnRefresh: true,
                },
            });
        } else {
            const hs = document.getElementById('horizontal-trigger');
            if (hs) hs.style.display = 'none';
        }
    },

    // ── Lens — rect cached; bg properties set once on enter ──────────────
    _initLens() {
        const imgEl  = document.getElementById('article-image');
        const media  = document.querySelector('.art-hero-media');
        const cursor = document.getElementById('wheel-cursor');
        if (!imgEl || !media) return;
        // No src means no image to magnify — skip entirely
        if (!imgEl.src || imgEl.style.display === 'none') return;
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

        const ZOOM = 2.8, LSIZE = 180;
        const lens = document.createElement('div');
        lens.className = 'art-lens';
        document.body.appendChild(lens);

        let imgRect = null;
        let lensRaf = null;
        let pendingE = null;

        const updateRect = () => { imgRect = imgEl.getBoundingClientRect(); };

        const onEnter = () => {
            updateRect();
            const src = imgEl.src || imgEl.currentSrc;
            if (src) {
                lens.style.backgroundImage = `url(${src})`;
                lens.style.backgroundSize  = `${imgRect.width * ZOOM}px ${imgRect.height * ZOOM}px`;
            }
            lens.style.opacity = '1';
            if (cursor) cursor.style.opacity = '0';
        };
        const onLeave = () => {
            lens.style.opacity = '0';
            if (cursor) cursor.style.opacity = '1';
        };

        // RAF-throttle the per-frame position update
        const applyLens = () => {
            lensRaf = null;
            if (!pendingE || !imgRect) return;
            const e = pendingE;
            const x = e.clientX - imgRect.left;
            const y = e.clientY - imgRect.top;
            lens.style.transform = `translate(${e.clientX - LSIZE / 2}px, ${e.clientY - LSIZE / 2}px)`;
            lens.style.backgroundPositionX = `${-(x * ZOOM - LSIZE / 2)}px`;
            lens.style.backgroundPositionY = `${-(y * ZOOM - LSIZE / 2)}px`;
        };
        const onMove = e => {
            pendingE = e;
            if (!lensRaf) lensRaf = requestAnimationFrame(applyLens);
        };

        const onResize = () => { if (imgRect) updateRect(); };

        media.addEventListener('mouseenter', onEnter);
        media.addEventListener('mouseleave', onLeave);
        media.addEventListener('mousemove',  onMove);
        window.addEventListener('resize', onResize, { passive: true });

        this._cleanups.push(() => {
            media.removeEventListener('mouseenter', onEnter);
            media.removeEventListener('mouseleave', onLeave);
            media.removeEventListener('mousemove',  onMove);
            window.removeEventListener('resize', onResize);
            if (lensRaf) cancelAnimationFrame(lensRaf);
            lens.remove();
        });
    },

    // ── X-ray — rect recomputed on every move (viewport-relative coords change on scroll)
    _initXray() {
        const reveal    = document.getElementById('xray-spotlight');
        const container = document.querySelector('.art-xray-container');
        if (!reveal || !container) return;

        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            reveal.style.clipPath = 'circle(38% at 50% 50%)';
            return;
        }

        let lastClip = '';

        const onMove = e => {
            const rect   = container.getBoundingClientRect();
            const inside = e.clientX >= rect.left && e.clientX <= rect.right
                        && e.clientY >= rect.top  && e.clientY <= rect.bottom;
            const clip = inside
                ? `circle(140px at ${e.clientX - rect.left}px ${e.clientY - rect.top}px)`
                : 'circle(0px at 50% 50%)';
            if (clip !== lastClip) { reveal.style.clipPath = clip; lastClip = clip; }
        };

        window.addEventListener('mousemove', onMove);
        this._cleanups.push(() => window.removeEventListener('mousemove', onMove));
    },

    // ── Fluid typography — only runs when scrolling, stops when idle ──────
    _initFluid() {
        const eyebrow = document.getElementById('article-eyebrow');
        const labels  = [...document.querySelectorAll(
            '.art-kinetic-tag, .art-micro-heading, .art-pullquote-tag, .art-xray-tag, .art-outro-label, .art-specs-label, .art-h-section-label'
        )];
        let current = 0;
        let rafId   = null;

        const decay = () => {
            current += (0 - current) * 0.07;
            const ls0 = (0.28 + current).toFixed(4) + 'em';
            const ls1 = (0.30 + current).toFixed(4) + 'em';
            if (eyebrow) eyebrow.style.letterSpacing = ls0;
            labels.forEach(el => { el.style.letterSpacing = ls1; });
            // Stop the loop once the value is imperceptibly small
            rafId = current > 0.0008 ? requestAnimationFrame(decay) : null;
        };

        const onScroll = e => {
            const vel    = Math.min(Math.abs(e.velocity || 0), 120);
            const target = (vel / 120) * 0.16;
            current = Math.max(current, target * 0.6); // blend toward target
            if (!rafId) rafId = requestAnimationFrame(decay);
        };

        if (this.lenis) {
            this.lenis.on('scroll', onScroll);
            this._cleanups.push(() => {
                this.lenis && this.lenis.off('scroll', onScroll);
                if (rafId) cancelAnimationFrame(rafId);
            });
        }
    },

    _initCustomizationSections(unit) {
        const modelId = unit.modelId;
        const key = modelId + ':' + unit.year;
        const customData = (window.CUSTOMIZATION || {})[key];

        // ── Variants & Editions ───────────────────────────────────────────
        const allVariants = typeof getVariantsForModel === 'function'
            ? getVariantsForModel(modelId) : [];
        const variantsSection = document.getElementById('art-variants');
        const variantsGrid    = document.getElementById('art-variants-grid');
        if (allVariants.length > 1 && variantsSection && variantsGrid) {
            const specialLabel = customData?.specialLabel || '';
            variantsGrid.innerHTML = allVariants.map(v => {
                const isCurrent = v.year === unit.year && v.trim === unit.trim;
                return `<div class="art-variant-card${isCurrent ? ' art-variant-card--active' : ''}">
                    <div class="art-variant-top">
                        <span class="art-variant-year">${v.year}</span>
                        ${v.energy ? `<span class="art-variant-energy">${v.energy}</span>` : ''}
                    </div>
                    <span class="art-variant-trim">${v.trim || ''}</span>
                    <div class="art-variant-stats">
                        ${v.power ? `<span class="art-variant-stat">${v.power}</span>` : ''}
                        ${v.details?.engineFull ? `<span class="art-variant-stat">${v.details.engineFull}</span>` : ''}
                    </div>
                </div>`;
            }).join('');
            variantsSection.style.display = '';
        }

        if (!customData) return;

        // ── Colour Palette ────────────────────────────────────────────────
        const paints = customData.paints || {};
        const allPaints = [...(paints.standard || []), ...(paints.special || [])];
        const paintHexFn = typeof window._paintNameToHex === 'function'
            ? window._paintNameToHex : () => null;
        const validSwatches = allPaints
            .map(name => ({ name, hex: paintHexFn(name) }))
            .filter(p => p.hex);

        const paletteSection = document.getElementById('art-palette');
        const swatchesEl     = document.getElementById('art-palette-swatches');
        const finishesEl     = document.getElementById('art-palette-finishes');
        if (validSwatches.length > 0 && paletteSection && swatchesEl) {
            swatchesEl.innerHTML = validSwatches.map(p => `
                <div class="art-palette-swatch">
                    <span class="art-palette-dot" style="background:${p.hex}"></span>
                    <span class="art-palette-name">${p.name}</span>
                </div>`).join('');
            if (finishesEl && paints.finishes?.length) {
                finishesEl.innerHTML = paints.finishes.map(f =>
                    `<span class="art-palette-finish">${f}</span>`).join('');
            }
            paletteSection.style.display = '';
            requestAnimationFrame(() => this._initPaletteCarousel(paletteSection));
        }

        // ── Interior & Options ─────────────────────────────────────────────
        const optionsSection = document.getElementById('art-options');
        const optionsBody    = document.getElementById('art-options-body');
        const optionsTabs    = document.getElementById('art-opt-tabs');
        const panels         = [];

        if (customData.interior?.packages?.length) {
            panels.push({
                id: 'packages', label: 'Packages',
                html: `<div class="art-opt-packages">${
                    customData.interior.packages.map((pkg, i) => `
                        <div class="art-opt-pkg" style="--i:${i}">
                            <span class="art-opt-pkg-name">${pkg.name}</span>
                            ${pkg.desc ? `<p class="art-opt-pkg-desc">${pkg.desc}</p>` : ''}
                        </div>`).join('')
                }</div>`
            });
        }

        const intColors = [
            ...(customData.interior?.colors?.standard || []),
            ...(customData.interior?.colors?.special  || []),
        ];
        if (intColors.length) {
            const self = this;
            panels.push({
                id: 'colours', label: 'Colours',
                html: `<div class="art-opt-colours-grid">${
                    intColors.map(c => {
                        const bg = self._intColorHex(c);
                        const ac = self._intColorAccent(c);
                        return `<div class="art-opt-colour-card${ac ? ' has-accent' : ''}" style="--bg:${bg}${ac ? ';--ac:' + ac : ''}">
                            <div class="art-opt-colour-bg"></div>
                            <span class="art-opt-colour-name">${c}</span>
                        </div>`;
                    }).join('')
                }</div>`
            });
        }

        if (customData.rims?.length) {
            panels.push({
                id: 'wheels', label: 'Wheels',
                html: `<div class="art-opt-wheels">${
                    customData.rims.map((r, i) => {
                        const size  = typeof r === 'string' ? r  : (r.size  || '');
                        const style = typeof r === 'string' ? '' : (r.style || '');
                        const note  = typeof r === 'string' ? '' : (r.note  || '');
                        return `<div class="art-opt-wheel" style="--i:${i}">
                            <span class="art-opt-wheel-size">${size}</span>
                            <span class="art-opt-wheel-style">${style}</span>
                            ${note ? `<span class="art-opt-wheel-note">${note}</span>` : ''}
                        </div>`;
                    }).join('')
                }</div>`
            });
        }

        if (customData.interior?.trim?.length) {
            const self = this;
            panels.push({
                id: 'trim', label: 'Trim',
                html: `<div class="art-opt-trim-grid">${
                    customData.interior.trim.map((t, i) => {
                        const mat = self._trimMaterial(t);
                        return `<div class="art-opt-trim-card${mat.dark ? ' is-light-bg' : ''}" style="--i:${i};background:${mat.bg}">
                            <span class="art-opt-trim-name">${t}</span>
                        </div>`;
                    }).join('')
                }</div>`
            });
        }

        if (panels.length && optionsSection && optionsBody) {
            if (optionsTabs) {
                const indicator = optionsTabs.querySelector('.art-opt-indicator');
                optionsTabs.insertAdjacentHTML('afterbegin',
                    panels.map((p, i) =>
                        `<button class="art-opt-tab${i === 0 ? ' is-active' : ''}" data-panel="${p.id}">${p.label}</button>`
                    ).join('')
                );
                if (indicator) optionsTabs.appendChild(indicator);
            }
            optionsBody.innerHTML = panels.map((p, i) =>
                `<div class="art-opt-panel${i === 0 ? ' is-active' : ''}" data-panel="${p.id}">${p.html}</div>`
            ).join('');
            optionsSection.style.display = '';
            requestAnimationFrame(() => this._initOptionsCarousel(optionsSection));
        }
    },

    _initPaletteCarousel(section) {
        const track = section.querySelector('.art-palette-swatches');
        const wrap  = section.querySelector('.art-palette-track-wrap');
        const prev  = section.querySelector('.art-palette-arrow--prev');
        const next  = section.querySelector('.art-palette-arrow--next');
        if (!track || !wrap || !prev || !next) return;

        let offset = 0;

        const getStep = () => {
            const first = track.firstElementChild;
            if (!first) return 240;
            const gap = parseFloat(getComputedStyle(track).gap) || 44;
            return (first.offsetWidth + gap) * 5;
        };

        const update = () => {
            const maxOffset = Math.max(0, track.scrollWidth - wrap.offsetWidth);
            offset = Math.max(0, Math.min(offset, maxOffset));
            track.style.transform = `translateX(${-offset}px)`;
            prev.disabled = offset <= 0;
            next.disabled = offset >= maxOffset - 1;
        };

        prev.addEventListener('click', () => { offset -= getStep(); update(); });
        next.addEventListener('click', () => { offset += getStep(); update(); });

        update();

        const ro = new ResizeObserver(update);
        ro.observe(wrap);
        this._cleanups.push(() => ro.disconnect());
    },

    _trimMaterial(name) {
        const n = name.toLowerCase();

        if (/carbon/.test(n)) return { dark: false, bg:
            `repeating-linear-gradient(45deg,rgba(255,255,255,.032) 0,rgba(255,255,255,.032) 1px,transparent 1px,transparent 7px),` +
            `repeating-linear-gradient(-45deg,rgba(255,255,255,.032) 0,rgba(255,255,255,.032) 1px,transparent 1px,transparent 7px),` +
            `#161819`
        };

        if (/piano\s*black|lacquer/.test(n)) return { dark: false, bg:
            `linear-gradient(135deg,rgba(255,255,255,.12) 0%,rgba(255,255,255,.04) 30%,transparent 60%),` +
            `#060608`
        };

        if (/chrome|silver/.test(n)) return { dark: true, bg:
            `linear-gradient(135deg,#c8d0da 0%,#eef0f4 35%,#9098a8 60%,#c0c8d2 100%)`
        };

        if (/alumin/.test(n)) return { dark: false, bg:
            `repeating-linear-gradient(90deg,rgba(255,255,255,.06) 0,rgba(255,255,255,.06) 1px,transparent 1px,transparent 5px),` +
            `linear-gradient(135deg,#485060 0%,#6a7480 45%,#485060 100%)`
        };

        if (/high[\s-]*gloss.*walnut|burr\s*walnut/.test(n)) return { dark: false, bg:
            `repeating-linear-gradient(91deg,rgba(0,0,0,.14) 0,rgba(0,0,0,.14) 1px,transparent 1px,transparent 16px),` +
            `linear-gradient(175deg,rgba(255,255,255,.08) 0%,transparent 40%),` +
            `linear-gradient(180deg,#7a4a22 0%,#5a3014 55%,#6e3e1a 100%)`
        };

        if (/natural.*walnut|walnut/.test(n)) return { dark: false, bg:
            `repeating-linear-gradient(87deg,rgba(0,0,0,.1) 0,rgba(0,0,0,.1) 1px,transparent 1px,transparent 20px),` +
            `linear-gradient(180deg,#6a3e1a 0%,#4e2c10 55%,#5e3818 100%)`
        };

        if (/ash\s*wood|black\s*ash/.test(n)) return { dark: false, bg:
            `repeating-linear-gradient(89deg,rgba(255,255,255,.04) 0,rgba(255,255,255,.04) 1px,transparent 1px,transparent 18px),` +
            `linear-gradient(180deg,#2e2a20 0%,#1c1814 55%,#262218 100%)`
        };

        if (/open[\s-]*pore|takahona|wood/.test(n)) return { dark: false, bg:
            `repeating-linear-gradient(88deg,rgba(0,0,0,.1) 0,rgba(0,0,0,.1) 1px,transparent 1px,transparent 22px),` +
            `linear-gradient(180deg,#6a4020 0%,#4e2c0e 55%,#5c3618 100%)`
        };

        if (/diamond[\s-]*stitch|nappa|leather/.test(n)) return { dark: false, bg:
            `repeating-linear-gradient(45deg,rgba(255,255,255,.025) 0,rgba(255,255,255,.025) 1px,transparent 1px,transparent 10px),` +
            `repeating-linear-gradient(-45deg,rgba(255,255,255,.025) 0,rgba(255,255,255,.025) 1px,transparent 1px,transparent 10px),` +
            `linear-gradient(135deg,rgba(255,255,255,.06) 0%,transparent 50%),` +
            `#2a1808`
        };

        return { dark: false, bg: `#141414` };
    },

    _intColorHex(name) {
        const n = name.toLowerCase().replace(/[,\/]/g, ' ');
        if (/platinum\s*white|ivory|cream/.test(n))        return '#ccc8b4';
        if (/macchiato|beige|sand|champagne/.test(n))      return '#a87840';
        if (/tartufo/.test(n))                             return '#2c1308';
        if (/espresso/.test(n))                            return '#1c0c02';
        if (/nut\s*brown/.test(n))                         return '#5e3218';
        if (/saddle\s*brown/.test(n))                      return '#6e3010';
        if (/brown/.test(n))                               return '#40200c';
        if (/classic\s*red|bengal\s*red/.test(n))          return '#5c0e0e';
        if (/red/.test(n))                                 return '#400808';
        if (/yacht\s*blue|blue/.test(n))                   return '#0e2035';
        if (/titanium\s*grey|grey|gray/.test(n))           return '#383e48';
        if (/lime\s*green|green/.test(n))                  return '#162508';
        return '#111111';
    },

    _intColorAccent(name) {
        const n = name.toLowerCase();
        if (/w\/bronze|bronze\s*stitch/.test(n))            return '#b87333';
        if (/w\/gold|gold\s*stitch/.test(n))                return '#c8980c';
        if (/w\/red[\s-]stitch|red\s*stitch/.test(n))       return '#c01010';
        if (/w\/lime|lime[\s-]green\s*(stitch|a-band)/.test(n)) return '#58a010';
        if (/w\/white\s*stitch/.test(n))                    return '#c8c8c0';
        if (/w\/yacht|yacht[\s-]blue\s*(stitch|a-band)/.test(n)) return '#1e5090';
        if (/w\/bengal|bengal[\s-]red\s*(stitch|a-band)/.test(n)) return '#a01818';
        return null;
    },

    _initOptionsCarousel(section) {
        const tabs      = Array.from(section.querySelectorAll('.art-opt-tab'));
        const panels    = Array.from(section.querySelectorAll('.art-opt-panel'));
        const indicator = section.querySelector('.art-opt-indicator');
        const body      = section.querySelector('.art-options-body');
        if (!tabs.length || !panels.length) return;

        let current = 0;
        let touchX  = 0;

        const updateIndicator = () => {
            if (!indicator || !tabs[current]) return;
            const t = tabs[current];
            indicator.style.left  = t.offsetLeft + 'px';
            indicator.style.width = t.offsetWidth + 'px';
        };

        const replayAnims = (panel) => {
            panel.querySelectorAll('.art-opt-pkg, .art-opt-wheel, .art-opt-trim-card').forEach(el => {
                el.style.animation = 'none';
                void el.offsetWidth;
                el.style.animation = '';
            });
        };

        const goTo = (idx) => {
            if (idx < 0 || idx >= panels.length || idx === current) return;
            panels[current].classList.remove('is-active');
            tabs[current].classList.remove('is-active');
            current = idx;
            panels[current].classList.add('is-active');
            tabs[current].classList.add('is-active');
            tabs[current].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            updateIndicator();
            replayAnims(panels[current]);
        };

        tabs.forEach((tab, i) => tab.addEventListener('click', () => goTo(i)));

        if (body) {
            body.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
            body.addEventListener('touchend',   e => {
                const dx = e.changedTouches[0].clientX - touchX;
                if (Math.abs(dx) > 44) dx < 0 ? goTo(current + 1) : goTo(current - 1);
            }, { passive: true });
        }

        updateIndicator();
        replayAnims(panels[0]);
        const ro = new ResizeObserver(updateIndicator);
        ro.observe(section);
        this._cleanups.push(() => ro.disconnect());
    },

    destroy() {
        // Restore cursor if it was hidden by the lens interaction
        const wc = document.getElementById('wheel-cursor');
        if (wc) wc.style.opacity = '1';

        if (this._entryTl) { this._entryTl.kill(); this._entryTl = null; }
        if (this._lenisRaf && typeof gsap !== 'undefined') {
            gsap.ticker.remove(this._lenisRaf);
            this._lenisRaf = null;
        }
        if (this.lenis) { this.lenis.destroy(); this.lenis = null; }
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.getAll().forEach(t => t.kill());
        this._cleanups.forEach(fn => fn());
        this._cleanups = [];
        this._scrollVel = 0;
    },
};

document.addEventListener('DOMContentLoaded', () => window.ArticlePage.init());
}
