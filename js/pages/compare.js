
if (!window.ComparePage) {
var ComparePage = {
    stacks: { left: null, right: null },

    init() {
        document.body.classList.add('compare-page');
        const tryInit = (retries = 0) => {
            const leftStack  = document.getElementById('left-stack');
            const rightStack = document.getElementById('right-stack');
            if (leftStack && rightStack) {
                this._populateYearFilters();
                this.updateSliderBounds();
                this.initStacks();
                this.setupListeners();
            } else if (retries < 10) {
                setTimeout(() => tryInit(retries + 1), 100);
            }
        };
        tryInit();
    },

    // ─── Currency helpers ──────────────────────────────────────────────────────
    formatNaira(val) {
        const currency = localStorage.getItem('faceoff_currency') || 'NGN';
        const rates = {
            'NGN':    { symbol: '₦',   rate: 1 },
            'GHS':    { symbol: 'GH₵', rate: 0.012 },
            'XOF-TG': { symbol: 'CFA', rate: 0.52 },
            'XOF-BJ': { symbol: 'CFA', rate: 0.52 }
        };
        const cfg = rates[currency] || rates['NGN'];
        const v = val * cfg.rate;
        if (v >= 1e9) return cfg.symbol + (v / 1e9).toFixed(1) + 'B';
        if (v >= 1e6) return cfg.symbol + Math.round(v / 1e6) + 'M';
        if (v >= 1e3) return cfg.symbol + Math.round(v / 1e3) + 'K';
        return cfg.symbol + Math.round(v);
    },

    parseNaira(str) {
        if (!str) return 0;
        const currency = localStorage.getItem('faceoff_currency') || 'NGN';
        const rates = {
            'NGN':    { rate: 1 },
            'GHS':    { rate: 0.012 },
            'XOF-TG': { rate: 0.52 },
            'XOF-BJ': { rate: 0.52 }
        };
        const cfg = rates[currency] || rates['NGN'];
        str = str.replace(/[₦₵,CF\s]/g, '').toUpperCase();
        let val = 0;
        if (str.endsWith('B'))      val = parseFloat(str) * 1e9;
        else if (str.endsWith('M')) val = parseFloat(str) * 1e6;
        else if (str.endsWith('K')) val = parseFloat(str) * 1e3;
        else                        val = parseFloat(str);
        return val / cfg.rate;
    },

    // ─── Populate year dropdowns dynamically from available inventory ──────────
    _populateYearFilters() {
        if (typeof INVENTORY === 'undefined' || typeof VARIANTS === 'undefined') return;
        const years = [...new Set(
            INVENTORY
                .filter(u => u.status === 'available')
                .map(u => VARIANTS[u.variantId]?.year)
                .filter(Boolean)
        )].sort((a, b) => b - a); // newest first

        document.querySelectorAll('.sf-year-select').forEach(sel => {
            const current = sel.value;
            sel.innerHTML = `<option value="ALL">ALL</option>` +
                years.map(y => `<option value="${y}">${y}</option>`).join('');
            if (years.includes(current)) sel.value = current;
        });
    },

    updateSliderBounds() {
        document.querySelectorAll('.sf-group').forEach(group => {
            const min    = group.querySelector('.min-bound');
            const max    = group.querySelector('.max-bound');
            const slider = group.querySelector('.sf-range');
            const input  = group.querySelector('.sf-price-input');
            if (min && max && slider && input) {
                min.textContent   = this.formatNaira(100000);
                max.textContent   = this.formatNaira(1000000000);
                input.value       = this.formatNaira(slider.value);
            }
        });
    },

    getOrientation(id, columnSide) {
        const resolved = (typeof resolveUnit === 'function' ? resolveUnit(id) : null) || CARS[id];
        const facesRight  = resolved?.facesRight ?? false;
        const isRightSide = columnSide === 'right' || columnSide === true;
        return isRightSide ? facesRight : !facesRight;
    },

    // ─── Build filtered unit pool from INVENTORY ───────────────────────────────
    getFilteredCars(stackSide) {
        const columns = document.querySelectorAll('.faceoff-col');
        const col = stackSide === 'left' ? columns[0] : columns[1];

        const otherSide    = stackSide === 'left' ? 'right' : 'left';
        const otherStackEl = document.getElementById(`${otherSide}-stack`);
        const excludeId    = otherStackEl ? otherStackEl.getAttribute('data-foreground-id') : null;

        const getSelectByLabel = labelText => {
            const g = Array.from(col.querySelectorAll('.sf-group'))
                .find(g => g.querySelector('.sf-label')?.textContent.trim().includes(labelText));
            return g ? g.querySelector('select') : null;
        };

        const type      = getSelectByLabel('VEHICLE TYPE')?.value || 'ALL';
        const category  = getSelectByLabel('CATEGORY')?.value    || 'ALL';
        const mileage   = getSelectByLabel('MAX MILEAGE')?.value  || 'ANY';
        const energy    = getSelectByLabel('ENERGY')?.value       || 'ALL';
        const condition = getSelectByLabel('CONDITION')?.value    || 'ALL';
        const year      = getSelectByLabel('YEAR')?.value         || 'ALL';

        const brand = (col.querySelector('.sf-input')?.value || '').toLowerCase();
        const price = this.parseNaira(col.querySelector('.sf-price-input')?.value || '') || 1e12;

        if (typeof INVENTORY === 'undefined') return [];

        return INVENTORY
            .filter(u => u.status === 'available')
            .map(u => {
                const resolved = typeof resolveUnit === 'function' ? resolveUnit(u.id) : null;
                return resolved || null;
            })
            .filter(Boolean)
            .filter(car => {
                if (car.id === excludeId) return false;
                if (type      !== 'ALL' && car.type      !== type)      return false;
                if (category  !== 'ALL' && car.category  !== category)  return false;
                if (energy    !== 'ALL' && car.energy     !== energy)    return false;
                if (condition !== 'ALL' && car.condition  !== condition) return false;
                if (year      !== 'ALL' && car.year       !== year)      return false;
                if (brand && ![car.name, car.brand, car.details?.manufacturer]
                    .some(s => s?.toLowerCase().includes(brand))) return false;
                if (price < 1e9 && this.parseNaira(car.price) > price)  return false;
                if (mileage !== 'ANY' && car.mileage > parseInt(mileage.replace(/,/g, ''))) return false;
                return true;
            })
            .map(car => ({
                id:        car.id,
                name:      car.name,
                img:       car.img,
                price:     car.price,
                condition: car.condition,
                grade:     car.grade || '',
                mileage:   car.mileage,
                year:      car.year,
                specs: {
                    power:  car.power || '—',
                    speed:  car.details?.zeroToSixty || '—',
                    engine: car.details?.engineFull  || '—'
                },
                flipped: this.getOrientation(car.id, stackSide)
            }));
    },

    initStacks() {
        const leftPool  = this.getFilteredCars('left');
        const rightPool = this.getFilteredCars('right');
        const leftEl    = document.getElementById('left-stack');
        const rightEl   = document.getElementById('right-stack');

        if (leftEl) {
            this.stacks.left = new CarStack('left-stack', leftPool, this);
            if (leftPool.length > 0) leftEl.setAttribute('data-foreground-id', leftPool[0].id);
        }
        if (rightEl) {
            this.stacks.right = new CarStack('right-stack', rightPool, this);
            if (rightPool.length > 0) rightEl.setAttribute('data-foreground-id', rightPool[0].id);
        }
    },

    setupListeners() {
        document.querySelectorAll('.faceoff-col').forEach(col => {
            col.querySelectorAll('.sf-select, .sf-input, .sf-range').forEach(el => {
                el.addEventListener('change', () => this.handleFilterChange(el));
                if (el.classList.contains('sf-input') || el.classList.contains('sf-range')) {
                    el.addEventListener('input', () => this.handleFilterChange(el));
                }
            });
        });

        document.querySelectorAll('.sf-toggle').forEach(btn => {
            btn.addEventListener('click', () => {
                const col     = btn.closest('.faceoff-col');
                const panel   = col.querySelector('.stack-filter');
                const overlay = document.getElementById('sf-overlay');
                this._closeAllFilters();
                panel.classList.add('sf-open');
                if (overlay) overlay.classList.add('sf-overlay-open');
            });
        });

        document.querySelectorAll('.sf-close').forEach(btn => {
            btn.addEventListener('click', () => this._closeAllFilters());
        });

        const overlay = document.getElementById('sf-overlay');
        if (overlay) overlay.addEventListener('click', () => this._closeAllFilters());
    },

    _closeAllFilters() {
        document.querySelectorAll('.stack-filter').forEach(p => p.classList.remove('sf-open'));
        const overlay = document.getElementById('sf-overlay');
        if (overlay) overlay.classList.remove('sf-overlay-open');
    },

    destroy() {
        this._closeAllFilters();
        document.body.classList.remove('compare-page');
        this.stacks.left  = null;
        this.stacks.right = null;
    },

    handleFilterChange(el) {
        const col      = el.closest('.faceoff-col');
        const stackEl  = col.querySelector('.car-stack');
        const stackSide = stackEl.id === 'left-stack' ? 'left' : 'right';

        if (el.classList.contains('sf-range')) {
            const input = el.closest('.sf-group').querySelector('.sf-price-input');
            if (input) input.value = this.formatNaira(el.value);
        } else if (el.classList.contains('sf-price-input')) {
            const raw   = this.parseNaira(el.value);
            const range = el.closest('.sf-group').querySelector('.sf-range');
            if (range && !isNaN(raw)) range.value = Math.min(1e9, Math.max(1e5, raw));
        }

        const newPool = this.getFilteredCars(stackSide);
        const stack   = this.stacks[stackSide];

        stack.cars  = newPool;
        stack.index = 0;
        stack.render();
        if (newPool.length > 0) stackEl.setAttribute('data-foreground-id', newPool[0].id);

        const otherSide = stackSide === 'left' ? 'right' : 'left';
        if (this.stacks[otherSide]) this.stacks[otherSide].refreshAvailablePool();
    }
};

// ─── CarStack class ────────────────────────────────────────────────────────────
class CarStack {
    constructor(containerId, carData, page) {
        this.container = document.getElementById(containerId);
        this.cars      = carData;
        this.page      = page;
        this.index     = 0;
        this.isTransitioning = false;
        this.render();
        this.setupEvents();
    }

    render() {
        if (!this.container) return;
        this.container.innerHTML = '';
        if (!this.cars || this.cars.length === 0) {
            this.container.innerHTML = '<div class="depth-item foreground"><span class="depth-label">NO MATCHES</span></div>';
            return;
        }
        ['foreground', 'background', 'background-2', 'background-3', 'background-4'].forEach((cls, i) => {
            if (i >= this.cars.length) return;
            const idx = (this.index + i) % this.cars.length;
            this.container.appendChild(this.createItem(idx, cls));
        });
    }

    createItem(idx, stateClass) {
        const car          = this.cars[idx];
        const isForeground = stateClass === 'foreground';
        const div          = document.createElement('div');
        div.className      = `depth-item ${stateClass}`;

        const columnSide = this.container.id === 'left-stack' ? 'left' : 'right';
        const isFlipped  = this.page.getOrientation(car.id, columnSide);

        const condBadge = car.condition === 'used'
            ? `<span class="depth-condition depth-condition--used">Pre-owned</span>`
            : `<span class="depth-condition depth-condition--new">New</span>`;

        const mileageLabel = car.mileage === 0 ? '0 km' : `${car.mileage.toLocaleString()} km`;

        div.innerHTML = `
            ${isForeground ? `
                <div class="car-specs-overlay">
                    <div class="spec-pill"><span class="spec-val">${car.specs.power}</span><span class="spec-label">POWER</span></div>
                    <div class="spec-pill"><span class="spec-val">${car.specs.speed}</span><span class="spec-label">0-100</span></div>
                    <div class="spec-pill"><span class="spec-val">${car.specs.engine}</span><span class="spec-label">ENGINE</span></div>
                </div>
                <button class="fd-save-btn" data-save-id="${car.id}" aria-label="Save vehicle"
                    onclick="event.stopPropagation(); FaceoffDrawer.toggle('${car.id}');">
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 1h8v12l-4-3-4 3V1z"/></svg>
                </button>` : ''}
            <div class="car-visual ${isFlipped ? 'flipped' : ''}"
                onclick="window.Router.navigate('showroom.html?unit=${car.id}&from=compare')">
                <img src="${car.img}" alt="${car.name}" class="car-image">
            </div>
            <span class="depth-label">${car.name}</span>
            <div class="depth-meta">
                ${condBadge}
                <span class="depth-price">${this.page.formatNaira(this.page.parseNaira(car.price))}</span>
            </div>
            <span class="depth-mileage">${mileageLabel}</span>`;

        return div;
    }

    swap() {
        if (this.isTransitioning || this.cars.length < 2) return;
        this.isTransitioning = true;

        const fg = this.container.querySelector('.foreground');
        const b1 = this.container.querySelector('.background');
        const b2 = this.container.querySelector('.background-2');
        if (!fg || !b1) { this.isTransitioning = false; return; }

        fg.classList.replace('foreground', 'exiting');
        b1.classList.replace('background', 'foreground');

        // Inject foreground elements into newly promoted card
        const car = this.cars[(this.index + 1) % this.cars.length];

        const condBadge    = car.condition === 'used'
            ? `<span class="depth-condition depth-condition--used">Pre-owned</span>`
            : `<span class="depth-condition depth-condition--new">New</span>`;
        const mileageLabel = car.mileage === 0 ? '0 km' : `${car.mileage.toLocaleString()} km`;

        const specsEl = document.createElement('div');
        specsEl.className = 'car-specs-overlay';
        specsEl.innerHTML = `
            <div class="spec-pill"><span class="spec-val">${car.specs.power}</span><span class="spec-label">POWER</span></div>
            <div class="spec-pill"><span class="spec-val">${car.specs.speed}</span><span class="spec-label">0-100</span></div>
            <div class="spec-pill"><span class="spec-val">${car.specs.engine}</span><span class="spec-label">ENGINE</span></div>`;

        const saveBtn = document.createElement('button');
        saveBtn.className = 'fd-save-btn';
        saveBtn.setAttribute('data-save-id', car.id);
        saveBtn.setAttribute('aria-label', 'Save vehicle');
        saveBtn.onclick = e => { e.stopPropagation(); if (typeof FaceoffDrawer !== 'undefined') FaceoffDrawer.toggle(car.id); };
        saveBtn.innerHTML = `<svg width="12" height="14" viewBox="0 0 12 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 1h8v12l-4-3-4 3V1z"/></svg>`;

        const metaEl = document.createElement('div');
        metaEl.className = 'depth-meta';
        metaEl.innerHTML = `${condBadge}<span class="depth-price">${this.page.formatNaira(this.page.parseNaira(car.price))}</span>`;

        const mileEl = document.createElement('span');
        mileEl.className = 'depth-mileage';
        mileEl.textContent = mileageLabel;

        // Replace existing meta/mileage in promoted card
        b1.querySelector('.depth-meta')?.remove();
        b1.querySelector('.depth-mileage')?.remove();
        b1.querySelector('.car-specs-overlay')?.remove();
        b1.querySelector('.fd-save-btn')?.remove();

        b1.prepend(saveBtn);
        b1.prepend(specsEl);
        b1.appendChild(metaEl);
        b1.appendChild(mileEl);

        if (typeof FaceoffDrawer !== 'undefined') requestAnimationFrame(() => FaceoffDrawer.refresh());
        if (b2) b2.classList.replace('background-2', 'background');

        this.index = (this.index + 1) % this.cars.length;
        this.container.setAttribute('data-foreground-id', this.cars[this.index].id);

        if (this.cars.length > 2) {
            const nextB2 = this.createItem((this.index + 2) % this.cars.length, 'background-2 hidden');
            this.container.appendChild(nextB2);
            requestAnimationFrame(() => nextB2.classList.remove('hidden'));
        }

        const side      = this.container.id === 'left-stack' ? 'left' : 'right';
        const otherSide = side === 'left' ? 'right' : 'left';
        if (this.page.stacks[otherSide]) this.page.stacks[otherSide].refreshAvailablePool();

        setTimeout(() => { fg.remove(); this.isTransitioning = false; }, 1000);
    }

    refreshAvailablePool() {
        const side    = this.container.id === 'left-stack' ? 'left' : 'right';
        const newCars = this.page.getFilteredCars(side);
        if (newCars.length === 0) return;
        const currentId = this.container.getAttribute('data-foreground-id');
        this.cars = newCars;
        const newIdx = this.cars.findIndex(c => c.id === currentId);
        if (newIdx !== -1) {
            this.index = newIdx;
        } else {
            this.index = 0;
            this.container.setAttribute('data-foreground-id', this.cars[0].id);
            this.render();
        }
    }

    setupEvents() {
        this.container.addEventListener('wheel', e => {
            if (Math.abs(e.deltaY) > 50) this.swap();
        }, { passive: true });

        let touchStartY = 0;
        this.container.addEventListener('touchstart', e => {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        this.container.addEventListener('touchend', e => {
            const delta = touchStartY - e.changedTouches[0].clientY;
            if (Math.abs(delta) > 40) this.swap();
        }, { passive: true });
    }
}

window.ComparePage = ComparePage;
}
