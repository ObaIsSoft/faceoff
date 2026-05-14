if (!window.PageTransition) {

window.PageTransition = (() => {
    // ── Build overlay ──────────────────────────────────────────────────────
    const overlay = document.createElement('div');
    overlay.id = 'page-transition';
    overlay.innerHTML = `
        <div class="pt-top"><span class="pt-word">FACEOFF</span></div>
        <div class="pt-bot"><span class="pt-word">FACEOFF</span></div>`;
    document.body.appendChild(overlay);

    const top = overlay.querySelector('.pt-top');
    const bot = overlay.querySelector('.pt-bot');

    const EASE    = 'cubic-bezier(0.76, 0, 0.24, 1)';
    const EXIT_T  = 680;
    const ENTER_T = 620;

    function setInstant(el, y) {
        el.style.transition = 'none';
        el.style.transform  = `translateY(${y})`;
    }

    function animate(el, y, duration, delay = 0) {
        return new Promise(resolve => {
            requestAnimationFrame(() => {
                el.style.transition = `transform ${duration}ms ${EASE} ${delay}ms`;
                el.style.transform  = `translateY(${y})`;
                setTimeout(resolve, duration + delay);
            });
        });
    }

    // ── Exit: panels close toward center ──────────────────────────────────
    function exit() {
        return new Promise(resolve => {
            // bot leads by 60ms — bottom rises first, then top drops
            animate(bot, '0%', EXIT_T, 0);
            animate(top, '0%', EXIT_T, 60).then(resolve);
        });
    }

    // ── Enter: panels split open ───────────────────────────────────────────
    function enter() {
        // Ensure panels are covering the screen before we animate
        setInstant(top, '0%');
        setInstant(bot, '0%');

        return new Promise(resolve => {
            requestAnimationFrame(() => requestAnimationFrame(() => {
                // top leads on entry
                animate(top, '-100%', ENTER_T, 0);
                animate(bot, '100%',  ENTER_T, 60).then(resolve);
            }));
        });
    }

    // ── Initial page load enter ────────────────────────────────────────────
    // Panels start covering screen and open as soon as DOM is ready
    setInstant(top, '0%');
    setInstant(bot, '0%');

    const onReady = () => {
        // Small delay so the page has painted before revealing
        setTimeout(enter, 60);
    };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', onReady);
    } else {
        onReady();
    }

    // ── Intercept local links on standalone pages (no router) ─────────────
    document.addEventListener('click', e => {
        // Only intercept if Router hasn't handled it
        if (window.Router) return;

        const link = e.target.closest('a');
        if (!link) return;

        const isSameOrigin = link.hostname === location.hostname;
        const isBlank      = link.target === '_blank';
        const isHash       = link.href.startsWith('#') || (link.getAttribute('href') || '').startsWith('#');
        if (!isSameOrigin || isBlank || isHash) return;

        const href = link.getAttribute('href');
        if (!href || href === location.pathname + location.search) return;

        e.preventDefault();
        exit().then(() => { window.location.href = href; });
    }, true);

    return { exit, enter };
})();

}
