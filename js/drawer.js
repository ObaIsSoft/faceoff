(function () {
    const SAVED_KEY = 'faceoff_saved';

    function getSaved() {
        try { return JSON.parse(localStorage.getItem(SAVED_KEY)) || []; }
        catch { return []; }
    }

    function setSaved(arr) { localStorage.setItem(SAVED_KEY, JSON.stringify(arr)); }

    function isSaved(id) { return getSaved().includes(id); }

    function toggleSaved(id) {
        const saved = getSaved();
        const idx = saved.indexOf(id);
        if (idx === -1) saved.push(id);
        else saved.splice(idx, 1);
        setSaved(saved);
        refreshAll();
        return idx === -1;
    }

    function removeSaved(id) {
        setSaved(getSaved().filter(s => s !== id));
        refreshAll();
    }

    function formatPrice(str) {
        const val = parseInt(str.replace(/[^0-9]/g, ''), 10);
        const currency = localStorage.getItem('faceoff_currency') || 'NGN';
        const rates = { 'NGN': { symbol: '₦', rate: 1 }, 'GHS': { symbol: 'GH₵', rate: 0.012 }, 'XOF-TG': { symbol: 'CFA', rate: 0.52 }, 'XOF-BJ': { symbol: 'CFA', rate: 0.52 } };
        const cfg = rates[currency] || rates['NGN'];
        return cfg.symbol + Math.round(val * cfg.rate).toLocaleString();
    }

    const BOOKMARK_SVG = `<svg width="12" height="14" viewBox="0 0 12 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 1h8v12l-4-3-4 3V1z"/></svg>`;

    function renderList() {
        const list = document.getElementById('fd-list');
        const count = document.getElementById('fd-count');
        if (!list) return;

        const saved = getSaved();
        if (count) count.textContent = saved.length > 0 ? `${saved.length} vehicle${saved.length !== 1 ? 's' : ''}` : '';

        if (saved.length === 0) {
            list.innerHTML = '<p class="fd-empty">No vehicles saved yet.<br>Browse the catalog and bookmark ones you like.</p>';
            return;
        }

        if (typeof CARS === 'undefined') {
            list.innerHTML = '<p class="fd-empty">Loading…</p>';
            return;
        }

        list.innerHTML = saved.map(id => {
            const car = CARS[id];
            if (!car) return '';
            return `
                <div class="fd-item" data-id="${id}">
                    <a href="showroom.html?car=${id}&from=saved" class="fd-item-link">
                        <img src="${car.img}" alt="${car.name}" class="fd-item-img">
                        <div class="fd-item-info">
                            <span class="fd-item-name">${car.name}</span>
                            <span class="fd-item-price">${formatPrice(car.price)}</span>
                            <span class="fd-item-meta">${car.details?.year || ''} · ${car.type || ''} · ${car.energy || ''}</span>
                        </div>
                    </a>
                    <button class="fd-item-remove" onclick="FaceoffDrawer.remove('${id}')" aria-label="Remove">✕</button>
                </div>`;
        }).join('');
    }

    function updateBadge() {
        const badge = document.getElementById('fd-badge');
        if (!badge) return;
        const n = getSaved().length;
        badge.textContent = n;
        badge.style.display = n > 0 ? 'flex' : 'none';
    }

    function refreshSaveButtons() {
        document.querySelectorAll('[data-save-id]').forEach(btn => {
            const id = btn.dataset.saveId;
            const saved = isSaved(id);
            btn.setAttribute('data-saved', saved ? 'true' : 'false');
        });
    }

    function refreshAll() {
        updateBadge();
        renderList();
        refreshSaveButtons();
    }

    let autoCloseTimer;

    function resetAutoCloseTimer() {
        clearTimeout(autoCloseTimer);
        if (document.body.classList.contains('drawer-open')) {
            autoCloseTimer = setTimeout(closeDrawer, 30000); // 30 seconds
        }
    }

    function openDrawer() {
        const drawer = document.getElementById('fd-drawer');
        const overlay = document.getElementById('fd-overlay');
        if (!drawer) return;
        renderList();
        drawer.classList.add('fd-open');
        overlay.classList.add('fd-overlay--on');
        document.body.style.overflow = 'hidden';
        document.body.classList.add('drawer-open');
        resetAutoCloseTimer();
    }

    function closeDrawer() {
        const drawer = document.getElementById('fd-drawer');
        const overlay = document.getElementById('fd-overlay');
        if (!drawer) return;
        drawer.classList.remove('fd-open');
        overlay.classList.remove('fd-overlay--on');
        document.body.style.overflow = '';
        document.body.classList.remove('drawer-open');
        clearTimeout(autoCloseTimer);
    }

    function init() {
        // ... (trigger/overlay/drawer creation)
        document.body.addEventListener('mousemove', resetAutoCloseTimer);
        document.body.addEventListener('touchstart', resetAutoCloseTimer);
        document.body.addEventListener('scroll', resetAutoCloseTimer, true);
        
        refreshAll();
    }

    window.FaceoffDrawer = { toggle: toggleSaved, remove: removeSaved, isSaved, open: openDrawer, close: closeDrawer, refresh: refreshAll, bookmarkSVG: BOOKMARK_SVG };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
