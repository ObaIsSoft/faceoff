
const ComparePage = {
    stacks: {
        left: null,
        right: null
    },

    init() {
        this.updateSliderBounds();
        this.initStacks();
        this.setupListeners();
    },

    formatNaira(val) {
        const currency = localStorage.getItem('faceoff_currency') || 'NGN';
        const rates = {
            'NGN': { symbol: '₦', rate: 1 },
            'GHS': { symbol: 'GH₵', rate: 0.012 },
            'XOF-TG': { symbol: 'CFA', rate: 0.52 },
            'XOF-BJ': { symbol: 'CFA', rate: 0.52 }
        };
        const config = rates[currency] || rates['NGN'];
        const converted = val * config.rate;

        if (converted >= 1e9) return config.symbol + (converted / 1e9).toFixed(1) + 'B';
        if (converted >= 1e6) return config.symbol + Math.round(converted / 1e6) + 'M';
        if (converted >= 1e3) return config.symbol + Math.round(converted / 1e3) + 'K';
        return config.symbol + Math.round(converted);
    },

    parseNaira(str) {
        if (!str) return 0;
        const currency = localStorage.getItem('faceoff_currency') || 'NGN';
        const rates = {
            'NGN': { symbol: '₦', rate: 1 },
            'GHS': { symbol: 'GH₵', rate: 0.012 },
            'XOF-TG': { symbol: 'CFA', rate: 0.52 },
            'XOF-BJ': { symbol: 'CFA', rate: 0.52 }
        };
        const config = rates[currency] || rates['NGN'];
        
        str = str.replace(/[₦₵,CF\s]/g, '').toUpperCase();
        let val = 0;
        if (str.endsWith('B')) val = parseFloat(str) * 1e9;
        else if (str.endsWith('M')) val = parseFloat(str) * 1e6;
        else if (str.endsWith('K')) val = parseFloat(str) * 1e3;
        else val = parseFloat(str);

        return val / config.rate;
    },

    updateSliderBounds() {
        document.querySelectorAll('.sf-group').forEach(group => {
            const min = group.querySelector('.min-bound');
            const max = group.querySelector('.max-bound');
            const slider = group.querySelector('.sf-range');
            const input = group.querySelector('.sf-price-input');

            if (min && max && slider && input) {
                min.textContent = this.formatNaira(100000);
                max.textContent = this.formatNaira(1000000000);
                input.value = this.formatNaira(slider.value);
            }
        });
    },

    getOrientation(id, columnSide) {
        const ASSET_FACES_RIGHT = {
            "mercedes-g-wagon": true, "lexus-lx-600": false, "range-rover": false,
            "escalade-v": false, "_2026cadillac": true, "byd-ato3": false,
            "camry2025hybrid": false, "corolla2025": false, "cybertruck": false,
            "kia2023sportage": true, "mercedes2025sclass": true
        };
        const facesRight = ASSET_FACES_RIGHT[id] ?? false;
        const isRightSide = columnSide === 'right' || columnSide === true;
        
        return isRightSide ? facesRight : !facesRight;
    },

    getFilteredCars(stackSide) {
        const col = stackSide === 'left' ? document.querySelectorAll('.faceoff-col')[0] : document.querySelectorAll('.faceoff-col')[1];
        const otherStackEl = document.getElementById(stackSide === 'left' ? 'right-stack' : 'left-stack');
        const excludeId = otherStackEl ? otherStackEl.getAttribute('data-foreground-id') : null;

        const getSelectByLabel = (labelText) => {
            const groups = Array.from(col.querySelectorAll('.sf-group'));
            const group = groups.find(g => g.querySelector('.sf-label').textContent.trim().includes(labelText));
            return group ? group.querySelector('select') : null;
        };

        const type     = getSelectByLabel('VEHICLE TYPE')?.value || 'ALL';
        const category = getSelectByLabel('CATEGORY')?.value || 'ALL';
        const mileage  = getSelectByLabel('MAX MILEAGE')?.value || 'ANY';
        const energy   = getSelectByLabel('ENERGY')?.value || 'ALL';
        const brand    = col.querySelector('.sf-input').value.toLowerCase();
        const price    = this.parseNaira(col.querySelector('.sf-price-input').value);

        return Object.keys(CARS).filter(id => {
            const car = CARS[id];
            return (id !== excludeId) &&
                   (type === 'ALL' || car.type === type) &&
                   (category === 'ALL' || car.category === category) &&
                   (!brand || [car.name, car.brand, car.details?.manufacturer].some(s => s && s.toLowerCase().includes(brand))) &&
                   (price >= 1e9 || this.parseNaira(car.price) <= price) &&
                   (energy === 'ALL' || car.energy === energy) &&
                   (mileage === 'ANY' || car.mileage <= parseInt(mileage.replace(/,/g, '')));
        }).map(id => ({
            id,
            name: CARS[id].name,
            img: CARS[id].img,
            price: CARS[id].price,
            specs: { power: CARS[id].power, speed: CARS[id].details?.zeroToSixty || 'N/A', engine: CARS[id].details?.engineFull || 'N/A' },
            flipped: this.getOrientation(id, stackSide)
        }));
    },

    initStacks() {
        const leftPool = this.getFilteredCars('left');
        const rightPool = this.getFilteredCars('right');
        
        this.stacks.left = new CarStack("left-stack", leftPool, this);
        this.stacks.right = new CarStack("right-stack", rightPool, this);
        
        document.getElementById('left-stack').setAttribute('data-foreground-id', leftPool[0].id);
        document.getElementById('right-stack').setAttribute('data-foreground-id', rightPool[0].id);
    },

    setupListeners() {
        document.querySelectorAll('.sf-select, .sf-input, .sf-range').forEach(el => {
            const handleChange = () => this.handleFilterChange(el);
            el.addEventListener('change', handleChange);
            if (el.classList.contains('sf-input') || el.classList.contains('sf-range')) {
                el.addEventListener('input', handleChange);
            }
        });
    },

    handleFilterChange(el) {
        const col = el.closest('.faceoff-col');
        const stackEl = col.querySelector('.car-stack');
        const stackSide = stackEl.id === 'left-stack' ? 'left' : 'right';
        
        if (el.classList.contains('sf-range')) {
            el.closest('.sf-group').querySelector('.sf-price-input').value = this.formatNaira(el.value);
        } else if (el.classList.contains('sf-price-input')) {
            const raw = this.parseNaira(el.value);
            if (!isNaN(raw)) el.closest('.sf-group').querySelector('.sf-range').value = Math.min(1e9, Math.max(1e5, raw));
        }

        const newPool = this.getFilteredCars(stackSide);
        if (newPool.length === 0) return;

        const stack = this.stacks[stackSide];
        stack.cars = newPool;
        stack.index = 0;
        stack.render();
        stackEl.setAttribute('data-foreground-id', newPool[0].id);
    }
};

class CarStack {
    constructor(containerId, carData, page) {
        this.container = document.getElementById(containerId);
        this.cars = carData;
        this.page = page;
        this.index = 0;
        this.isTransitioning = false;
        this.render();
        this.setupEvents();
    }

    render() {
        this.container.innerHTML = '';
        ['foreground', 'background', 'background-2', 'background-3', 'background-4'].forEach((cls, i) => {
            const idx = (this.index + i) % this.cars.length;
            this.container.appendChild(this.createItem(idx, cls));
        });
    }

    createItem(idx, stateClass) {
        const car = this.cars[idx];
        const isForeground = stateClass === 'foreground';
        const div = document.createElement('div');
        div.className = `depth-item ${stateClass}`;
        
        const columnSide = this.container.id === 'left-stack' ? 'left' : 'right';
        const isFlipped = this.page.getOrientation(car.id, columnSide);

        div.innerHTML = `
            ${isForeground ? `
                <div class="car-specs-overlay">
                    <div class="spec-pill"><span class="spec-val">${car.specs.power}</span><span class="spec-label">POWER</span></div>
                    <div class="spec-pill"><span class="spec-val">${car.specs.speed}</span><span class="spec-label">0-100</span></div>
                    <div class="spec-pill"><span class="spec-val">${car.specs.engine}</span><span class="spec-label">ENGINE</span></div>
                </div>
                <button class="fd-save-btn" data-save-id="${car.id}" aria-label="Save vehicle" onclick="event.stopPropagation(); FaceoffDrawer.toggle('${car.id}');">
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 1h8v12l-4-3-4 3V1z"/></svg>
                </button>` : ''}
            <div class="car-visual ${isFlipped ? 'flipped' : ''}" onclick="window.Router.navigate('showroom.html?car=${car.id}${isFlipped ? '&flipped=true' : ''}&from=compare')">
                <img src="${car.img}" alt="${car.name}" class="car-image">
            </div>
            <span class="depth-label">${car.name}</span>
            <span class="depth-price">${this.page.formatNaira(this.page.parseNaira(car.price))}</span>
        `;
        return div;
    }

    swap() {
        if (this.isTransitioning || this.cars.length < 2) return;
        this.isTransitioning = true;

        const fg = this.container.querySelector('.foreground');
        const b1 = this.container.querySelector('.background');
        const b2 = this.container.querySelector('.background-2');

        fg.classList.replace('foreground', 'exiting');
        b1.classList.replace('background', 'foreground');
        
        const car = this.cars[(this.index + 1) % this.cars.length];
        const specs = document.createElement('div');
        specs.className = 'car-specs-overlay';
        specs.innerHTML = `<div class="spec-pill"><span class="spec-val">${car.specs.power}</span><span class="spec-label">POWER</span></div><div class="spec-pill"><span class="spec-val">${car.specs.speed}</span><span class="spec-label">0-100</span></div><div class="spec-pill"><span class="spec-val">${car.specs.engine}</span><span class="spec-label">ENGINE</span></div>`;
        b1.prepend(specs);

        b2.classList.replace('background-2', 'background');
        this.index = (this.index + 1) % this.cars.length;
        const nextB2 = this.createItem((this.index + 2) % this.cars.length, 'background-2 hidden');
        this.container.appendChild(nextB2);

        const otherStack = this.container.id === 'left-stack' ? this.page.stacks.right : this.page.stacks.left;
        if (otherStack) {
            this.container.setAttribute('data-foreground-id', this.cars[this.index].id);
            otherStack.refreshAvailablePool();
        }

        requestAnimationFrame(() => nextB2.classList.remove('hidden'));
        setTimeout(() => { fg.remove(); this.isTransitioning = false; }, 1000);
    }

    refreshAvailablePool() {
        const side = this.container.id === 'left-stack' ? 'left' : 'right';
        const other = side === 'left' ? this.page.stacks.right : this.page.stacks.left;
        const forbidden = other ? other.container.getAttribute('data-foreground-id') : null;
        const newCars = this.page.getFilteredCars(side).filter(c => c.id !== forbidden);
        
        if (newCars.length > 0) {
            this.cars = newCars;
            const currentId = this.container.getAttribute('data-foreground-id');
            const newIdx = this.cars.findIndex(c => c.id === currentId);
            this.index = newIdx !== -1 ? newIdx : 0;
            if (newIdx === -1) this.render();
        }
    }

    setupEvents() {
        this.container.addEventListener('wheel', e => { if (Math.abs(e.deltaY) > 50) this.swap(); }, { passive: true });
    }
}

window.ComparePage = ComparePage;
