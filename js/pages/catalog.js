
if (!window.CatalogPage) {
var CatalogPage = {
    order: Object.keys(MODELS),
    state: {
        engine: '',
        sort: '',
        search: '',
        condition: ''   // "" = all, "new", "used"
    },

    init() {
        const tryRender = (retries = 0) => {
            if (document.getElementById('catalog-grid')) {
                this.renderGrid();
                this.setupListeners();
            } else if (retries < 10) {
                setTimeout(() => tryRender(retries + 1), 100);
            }
        };
        tryRender();
    },

    parsePrice(str) {
        if (!str) return 0;
        return parseInt(str.replace(/[^0-9]/g, ''), 10);
    },

    formatPrice(nairaString) {
        const nairaValue = this.parsePrice(nairaString);
        const currency = localStorage.getItem('faceoff_currency') || 'NGN';
        
        const rates = {
            'NGN': { symbol: '₦', rate: 1 },
            'GHS': { symbol: 'GH₵', rate: 0.012 },
            'XOF-TG': { symbol: 'CFA', rate: 0.52 },
            'XOF-BJ': { symbol: 'CFA', rate: 0.52 }
        };

        const config = rates[currency] || rates['NGN'];
        const converted = nairaValue * config.rate;
        
        return config.symbol + Math.round(converted).toLocaleString();
    },

    /**
     * Build a model-level card dataset from the 3-tier data.
     * Each entry represents one MODEL with aggregated info from its units.
     */
    buildModelCards() {
        return this.order.map(modelId => {
            const model = MODELS[modelId];
            if (!model) return null;

            const units = getUnitsForModel(modelId);
            if (units.length === 0) return null;  // no available units → hide model

            const conditions = getConditions(modelId);
            const fromPrice = getFromPrice(modelId);
            const variants = getVariantsForModel(modelId);

            // Cheapest unit to determine "From" label context
            const cheapestUnit = units.reduce((min, u) =>
                this.parsePrice(u.price) < this.parsePrice(min.price) ? u : min
            , units[0]);

            // Determine the hero image:
            // If model has only used units, use the cheapest unit's first image
            // Otherwise use the model's studio heroImg
            const hasNew = conditions.includes('new');
            const heroImg = hasNew ? model.heroImg : (cheapestUnit.imgs?.[0] || model.heroImg);

            // Get the most representative variant for power display
            const primaryVariant = variants[0]; // newest year first

            // Get energy types across all variants
            const energyTypes = [...new Set(variants.map(v => v.energy))];

            return {
                modelId,
                name: model.name,
                brand: model.brand,
                type: model.type,
                category: model.category,
                heroImg,
                fromPrice,
                fromPriceNum: this.parsePrice(fromPrice),
                cheapestCondition: cheapestUnit.condition,
                conditions,
                unitCount: units.length,
                power: primaryVariant?.power || '',
                energy: energyTypes,
                engine: primaryVariant?.details?.engineFull || '',
                manufacturer: primaryVariant?.details?.manufacturer || model.brand,
                lowestMileage: Math.min(...units.map(u => u.mileage))
            };
        }).filter(Boolean);
    },

    renderGrid() {
        if (!document.getElementById('catalog-grid')) return;

        let results = this.buildModelCards();

        // Search
        if (this.state.search) {
            const q = this.state.search.toLowerCase();
            results = results.filter(c =>
                c.name.toLowerCase().includes(q) ||
                c.manufacturer.toLowerCase().includes(q) ||
                c.brand.toLowerCase().includes(q) ||
                c.power.toLowerCase().includes(q)
            );
        }

        // Engine filter (legacy — matches engine string)
        if (this.state.engine) {
            results = results.filter(c => c.engine.includes(this.state.engine));
        }

        // Condition filter
        if (this.state.condition) {
            results = results.filter(c => c.conditions.includes(this.state.condition));
        }

        // Sort
        if (this.state.sort === 'asc')  results.sort((a, b) => a.fromPriceNum - b.fromPriceNum);
        if (this.state.sort === 'desc') results.sort((a, b) => b.fromPriceNum - a.fromPriceNum);

        const grid  = document.getElementById('catalog-grid');
        const empty = document.getElementById('catalog-empty');
        const count = document.querySelector('.catalog-count');

        if (results.length === 0) {
            grid.innerHTML = '';
            empty.style.display = 'flex';
        } else {
            empty.style.display = 'none';
            grid.innerHTML = results.map(card => {
                // Condition badges
                const badges = card.conditions.map(c =>
                    c === 'new'
                        ? '<span class="catalog-badge catalog-badge--new">NEW</span>'
                        : '<span class="catalog-badge catalog-badge--used">PRE-OWNED</span>'
                ).join('');

                // "From" price label
                const fromLabel = card.cheapestCondition === 'used'
                    ? `From ${this.formatPrice(card.fromPrice)} <span class="catalog-from-condition">· Pre-owned</span>`
                    : `From ${this.formatPrice(card.fromPrice)}`;

                // Unit count
                const unitLabel = card.unitCount === 1
                    ? '1 available'
                    : `${card.unitCount} available`;

                return `
                <a href="showroom.html?model=${card.modelId}&from=catalog" class="catalog-card" data-router-link>
                    <button class="fd-save-btn" data-save-id="${card.modelId}" aria-label="Save vehicle"
                        onclick="event.preventDefault(); event.stopPropagation(); FaceoffDrawer.toggle('${card.modelId}');">
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 1h8v12l-4-3-4 3V1z"/></svg>
                    </button>
                    <div class="catalog-visual">
                        <img src="${card.heroImg}" alt="${card.name}">
                    </div>
                    <div class="catalog-item-info">
                        <div>
                            <h2 class="catalog-item-name">${card.name}</h2>
                            <p class="catalog-item-meta">${card.power} ${badges}</p>
                        </div>
                        <div class="catalog-item-pricing">
                            <span class="catalog-item-price">${fromLabel}</span>
                            <span class="catalog-item-units">${unitLabel}</span>
                        </div>
                    </div>
                </a>
            `}).join('');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        e.target.style.opacity  = '1';
                        e.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.05 });

            document.querySelectorAll('.catalog-card').forEach(card => {
                card.style.opacity   = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
                observer.observe(card);
            });
        }

        const n = results.length;
        if (count) count.textContent = `[ ${String(n).padStart(2, '0')} VEHICLE${n !== 1 ? 'S' : ''} ]`;

        if (typeof FaceoffDrawer !== 'undefined') FaceoffDrawer.refresh();
    },

    setupListeners() {
        const searchInput = document.getElementById('caf-search');
        const clearBtn = document.getElementById('caf-clear');
        const enginePills = document.getElementById('caf-engine');
        const sortPills = document.getElementById('caf-sort');
        const conditionPills = document.getElementById('caf-condition');

        if (searchInput) {
            searchInput.addEventListener('input', e => {
                this.state.search = e.target.value.trim();
                if (clearBtn) clearBtn.style.opacity = this.state.search ? '1' : '0';
                this.renderGrid();
            });
        }

        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                if (searchInput) searchInput.value = '';
                this.state.search = '';
                clearBtn.style.opacity = '0';
                this.renderGrid();
            });
        }

        if (enginePills) {
            enginePills.addEventListener('click', e => {
                const pill = e.target.closest('.caf-pill');
                if (!pill) return;
                enginePills.querySelectorAll('.caf-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                this.state.engine = pill.dataset.val;
                this.renderGrid();
            });
        }

        if (sortPills) {
            sortPills.addEventListener('click', e => {
                const pill = e.target.closest('.caf-pill');
                if (!pill) return;
                sortPills.querySelectorAll('.caf-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                this.state.sort = pill.dataset.val;
                this.renderGrid();
            });
        }

        if (conditionPills) {
            conditionPills.addEventListener('click', e => {
                const pill = e.target.closest('.caf-pill');
                if (!pill) return;
                conditionPills.querySelectorAll('.caf-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                this.state.condition = pill.dataset.val;
                this.renderGrid();
            });
        }
    },

    resetFilters() {
        this.state = { search: '', engine: '', sort: '', condition: '' };
        const searchInput = document.getElementById('caf-search');
        if (searchInput) searchInput.value = '';
        document.querySelectorAll('.caf-pill').forEach(p => {
            p.classList.toggle('active', p.dataset.val === '');
        });
        this.renderGrid();
    }
};

window.CatalogPage = CatalogPage;
}
