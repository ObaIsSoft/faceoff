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

        // ── X-ray background ──────────────────────────────────────────────
        const xrayBgImg = document.getElementById('art-xray-bg-img');
        if (xrayBgImg) xrayBgImg.src = pickEditorial(unitId, 1, 'xray')[0];

        // ── Horizontal gallery ────────────────────────────────────────────
        const track = document.getElementById('art-h-track');
        if (track) {
            let imgs = (unit.imgs || []).slice(0, 6);
            if (imgs.length < 6) imgs = imgs.concat(pickEditorial(unitId, 6 - imgs.length, 'gallery'));
            if (imgs.length >= 2) {
                track.innerHTML = imgs.map((src, i) => `
                    <div class="art-track-item">
                        <span class="art-track-year">${String(i + 1).padStart(2, '0')}</span>
                        <img src="${src}" class="art-track-img" alt="">
                    </div>`).join('');
            } else {
                const hs = document.getElementById('horizontal-trigger');
                if (hs) hs.style.display = 'none';
            }
        }

        // ── Outro marquee ─────────────────────────────────────────────────
        const marqueeInner = document.getElementById('art-outro-marquee-inner');
        if (marqueeInner) {
            const label = [unit.name, d.engineFull, unit.power, unit.topSpeed]
                .filter(Boolean).join(' · ') + ' · ';
            const repeated = label.repeat(8);
            marqueeInner.innerHTML = `<span>${repeated}</span><span>${repeated}</span>`;
        }

        // ── Back links ────────────────────────────────────────────────────
        ['article-back', 'art-outro-back'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.href = `showroom.html?unit=${unitId}`;
        });

        this._initScroll();
        this._initProgress();
        this._initAnimations();
        this._initLens();
        this._initXray();
        this._initFluid();
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
        const tl = gsap.timeline({ delay: 0.1 });
        tl.to('.art-mask-container', { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.8, ease: 'expo.inOut' });
        tl.fromTo('.art-parallax-img', { scale: 1.14 }, { scale: 1, duration: 1.8, ease: 'expo.inOut' }, '<');
        tl.fromTo('.art-hero-ghost', { opacity: 0 }, { opacity: 1, duration: 1.4, ease: 'power2.out' }, '-=1.2');
        tl.fromTo('#article-eyebrow', { yPercent: 110 }, { yPercent: 0, duration: 0.9, ease: 'power4.out' }, '-=0.7');
        tl.fromTo('#article-title',   { yPercent: 110 }, { yPercent: 0, duration: 1.2, ease: 'power4.out' }, '-=0.8');
        // Remove will-change after entry completes
        tl.call(() => {
            const mc = document.querySelector('.art-mask-container');
            if (mc) mc.style.willChange = 'auto';
        });

        // ② Kinetic
        document.querySelectorAll('.art-kinetic-item').forEach((el, i) => {
            ScrollTrigger.create({
                trigger: el, start: 'top 82%',
                onEnter: () => setTimeout(() => el.classList.add('is-fired'), i * 120),
            });
        });

        // ③ Spec rows
        document.querySelectorAll('.art-spec-row').forEach((el, i) => {
            ScrollTrigger.create({
                trigger: el, start: 'top 88%',
                onEnter: () => setTimeout(() => el.classList.add('is-revealed'), i * 80),
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
            };
            if (video.readyState >= 1) setDuration();
            else video.addEventListener('loadedmetadata', setDuration, { once: true });
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

    destroy() {
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
