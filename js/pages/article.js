if (!window.ArticlePage) {

const EDITORIAL_POOL = [
    'assets/editorial/anthony-adu-2fJnO-DDE-w-unsplash.jpg',
    'assets/editorial/autotrader-uk-gjoO-I7-H_I-unsplash.jpg',
    'assets/editorial/bruno-guerrero-f22widk6gow-unsplash.jpg',
    'assets/editorial/carter-bilawchuk-kfSWl1EoadE-unsplash.jpg',
    'assets/editorial/cash-macanaya-P7jbC3FRgco-unsplash.jpg',
    'assets/editorial/caspar-rae-M09yaKs0z1I-unsplash.jpg',
    'assets/editorial/gleb-paniotov-vZfTIDV2qOY-unsplash.jpg',
    'assets/editorial/grahame-jenkins-p7tai9P7H-s-unsplash.jpg',
    'assets/editorial/ionut-vlad-Opu5OoMb1pU-unsplash.jpg',
    'assets/editorial/karthik-vadlamani-EsVrwFuIZNI-unsplash.jpg',
    'assets/editorial/kevin-bhagat-3cLpiv8h5so-unsplash.jpg',
    'assets/editorial/mdreza-jalali-1MNKzd0C2dM-unsplash.jpg',
    'assets/editorial/mehan-talukder-sX94ITfZXnY-unsplash.jpg',
    'assets/editorial/objecttype-raw-6R8L09tbjOo-unsplash.jpg',
    'assets/editorial/oli-woodman-2e07u8GXe3I-unsplash.jpg',
    'assets/editorial/peter-thomas-4lLOihvXrTk-unsplash.jpg',
    'assets/editorial/premium_photo-1683134242640-fe6baaf4d5fc.avif',
    'assets/editorial/rishab-lamichhane-iflRMZelx0M-unsplash.jpg',
    'assets/editorial/roger-starnes-sr-6gpPxhLAKJI-unsplash.jpg',
    'assets/editorial/roger-starnes-sr-UsMWE1VSW_0-unsplash.jpg',
    'assets/editorial/roman-LD8F38MI5So-unsplash.jpg',
    'assets/editorial/roman-uRbbJM3WL0g-unsplash.jpg',
    'assets/editorial/seungmin-yoon-87kzHSRwzj8-unsplash.jpg',
    'assets/editorial/seungmin-yoon-ZLJNkBcMa84-unsplash.jpg',
    'assets/editorial/vitali-adutskevich-f-Ob1ubCiIE-unsplash.jpg',
    'assets/editorial/vitaly-mazur-pvDQwb8Mnm8-unsplash.jpg',
    'assets/editorial/wes-hicks-mDASgFtuMRQ-unsplash.jpg',
    'assets/editorial/wesley-tingey-07DJcv5PXyY-unsplash.jpg',
    'assets/editorial/wolf-schram-19t6J2RVqQE-unsplash.jpg',
];

function editorialHash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
    return Math.abs(h);
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
            gsap.ticker.add(t => this.lenis.raf(t * 1000));
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

    // ── X-ray — rect cached via IntersectionObserver ──────────────────────
    _initXray() {
        const reveal    = document.getElementById('xray-spotlight');
        const container = document.querySelector('.art-xray-container');
        if (!reveal || !container) return;

        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            reveal.style.clipPath = 'circle(38% at 50% 50%)';
            return;
        }

        let rect = null;
        let lastClip = '';

        // Update rect when section scrolls into view — avoids calling getBCR on every move
        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) rect = container.getBoundingClientRect();
        }, { threshold: 0 });
        io.observe(container);

        const onResize = () => { rect = null; }; // invalidate; recalculate on next intersection
        window.addEventListener('resize', onResize, { passive: true });

        const onMove = e => {
            if (!rect) return;
            const inside = e.clientX >= rect.left && e.clientX <= rect.right
                        && e.clientY >= rect.top  && e.clientY <= rect.bottom;
            const clip = inside
                ? `circle(140px at ${e.clientX - rect.left}px ${e.clientY - rect.top}px)`
                : 'circle(0px at 50% 50%)';
            if (clip !== lastClip) { reveal.style.clipPath = clip; lastClip = clip; }
        };

        window.addEventListener('mousemove', onMove);

        this._cleanups.push(() => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('resize', onResize);
            io.disconnect();
        });
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
        if (this.lenis) { this.lenis.destroy(); this.lenis = null; }
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.getAll().forEach(t => t.kill());
        this._cleanups.forEach(fn => fn());
        this._cleanups = [];
        this._scrollVel = 0;
    },
};

document.addEventListener('DOMContentLoaded', () => window.ArticlePage.init());
}
