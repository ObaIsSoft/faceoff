
const CatalogPage = {
    order: [
        "mercedes-g-wagon", "lexus-lx-600", "range-rover", "escalade-v",
        "_2026cadillac", "byd-ato3", "camry2025hybrid", "corolla2025",
        "cybertruck", "kia2023sportage", "mercedes2025sclass"
    ],
    state: {
        engine: '',
        sort: '',
        search: ''
    },

    init() {
        this.renderGrid();
        this.setupListeners();
    },

    parsePrice(str) {
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

    renderGrid() {
        if (!document.getElementById('catalog-grid')) return;

        let results = this.order.map(id => ({ id, ...CARS[id] }));

        // Search
        if (this.state.search) {
            const q = this.state.search.toLowerCase();
            results = results.filter(c =>
                c.name.toLowerCase().includes(q) ||
                (c.details && c.details.manufacturer.toLowerCase().includes(q)) ||
                c.power.toLowerCase().includes(q)
            );
        }

        // Engine filter
        if (this.state.engine) {
            results = results.filter(c => c.engine === this.state.engine);
        }

        // Sort
        if (this.state.sort === 'asc')  results.sort((a, b) => this.parsePrice(a.price) - this.parsePrice(b.price));
        if (this.state.sort === 'desc') results.sort((a, b) => this.parsePrice(b.price) - this.parsePrice(a.price));

        const grid  = document.getElementById('catalog-grid');
        const empty = document.getElementById('catalog-empty');
        const count = document.querySelector('.catalog-count');

        if (results.length === 0) {
            grid.innerHTML = '';
            empty.style.display = 'flex';
        } else {
            empty.style.display = 'none';
            grid.innerHTML = results.map(car => `
                <a href="showroom.html?car=${car.id}&from=catalog" class="catalog-card" data-router-link>
                    <button class="fd-save-btn" data-save-id="${car.id}" aria-label="Save vehicle"
                        onclick="event.preventDefault(); event.stopPropagation(); FaceoffDrawer.toggle('${car.id}');">
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 1h8v12l-4-3-4 3V1z"/></svg>
                    </button>
                    <div class="catalog-visual">
                        <img src="${car.img}" alt="${car.name}">
                    </div>
                    <div class="catalog-item-info">
                        <div>
                            <h2 class="catalog-item-name">${car.name}</h2>
                            <p class="catalog-item-meta">${car.details ? car.details.year : ''} — ${car.power}</p>
                        </div>
                        <span class="catalog-item-price">${this.formatPrice(car.price)}</span>
                    </div>
                </a>
            `).join('');

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
        if (count) count.textContent = `[ 0${n} VEHICLE${n !== 1 ? 'S' : ''} ]`;

        if (typeof FaceoffDrawer !== 'undefined') FaceoffDrawer.refresh();
    },

    setupListeners() {
        const searchInput = document.getElementById('caf-search');
        const clearBtn = document.getElementById('caf-clear');
        const enginePills = document.getElementById('caf-engine');
        const sortPills = document.getElementById('caf-sort');

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
    },

    resetFilters() {
        this.state = { search: '', engine: '', sort: '' };
        const searchInput = document.getElementById('caf-search');
        if (searchInput) searchInput.value = '';
        document.querySelectorAll('.caf-pill').forEach(p => {
            p.classList.toggle('active', p.dataset.val === '');
        });
        this.renderGrid();
    }
};

window.CatalogPage = CatalogPage;
