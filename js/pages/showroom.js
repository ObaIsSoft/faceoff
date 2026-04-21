
if (!window.ShowroomPage) {
var ShowroomPage = {
    init() {
        const params = new URLSearchParams(window.location.search);
        const carId = params.get('car') || "mercedes-g-wagon";
        const isFlipped = params.get('flipped') === 'true';
        const from = params.get('from');
        const car = CARS[carId];

        if (!car) {
            const nameEl = document.getElementById('car-name');
            if (nameEl) nameEl.innerText = "Vehicle not found";
            return;
        }

        const nameEl = document.getElementById('car-name');
        const priceEl = document.getElementById('car-price');
        const inspEl = document.getElementById('cta-inspection');
        const enqEl = document.getElementById('cta-enquiry');
        const display = document.getElementById('car-display');

        if (nameEl) nameEl.innerText = car.name;
        if (priceEl) priceEl.innerText = this.formatPrice(car.price);
        if (inspEl) inspEl.href = `contact.html?type=inspection&car=${carId}`;
        if (enqEl) enqEl.href   = `contact.html?type=enquiry&car=${carId}`;
        
        if (display) {
            display.innerHTML = `<img src="${car.img}" style="width:100%; object-fit:contain;">`;
            display.classList.toggle('flipped', isFlipped);
        }

        if (car.details) {
            const sl = document.getElementById('specs-left');
            const sr = document.getElementById('specs-right');
            if (sl) sl.innerHTML = this.renderLeftSpecs(car);
            if (sr) sr.innerHTML = this.renderRightSpecs(car);
        }

        // Back button
        if (['catalog', 'compare', 'saved'].includes(from)) {
            const backHref = from === 'compare' ? 'compare.html' : 'catalog.html';
            const backLabel = from === 'compare' ? 'Compare' : 'Catalog';
            const backEl = document.createElement('a');
            backEl.className = 'sr-back';
            backEl.href = backHref;
            backEl.innerHTML = `← ${backLabel}`;
            const stage = document.querySelector('.showroom-stage');
            if (stage) stage.prepend(backEl);
        }

        // Save button
        const saveBtn = document.createElement('button');
        saveBtn.className = 'sr-save';
        saveBtn.setAttribute('data-save-id', carId);

        const updateBtn = () => {
            const saved = typeof FaceoffDrawer !== 'undefined' && FaceoffDrawer.isSaved(carId);
            saveBtn.setAttribute('data-saved', saved ? 'true' : 'false');
            saveBtn.innerHTML = `<svg width="12" height="14" viewBox="0 0 12 14" fill="${saved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 1h8v12l-4-3-4 3V1z"/></svg> ${saved ? 'Saved' : 'Save Vehicle'}`;
        };

        saveBtn.addEventListener('click', () => {
            if (typeof FaceoffDrawer !== 'undefined') {
                FaceoffDrawer.toggle(carId);
                updateBtn();
            }
        });

        const cta = document.querySelector('.showroom-cta');
        if (cta) cta.appendChild(saveBtn);
        updateBtn();

        if (car.details) this.initMobileModals(car);
    },

    formatPrice(nairaString) {
        const val = parseInt(nairaString.replace(/[^0-9]/g, ''), 10);
        const currency = localStorage.getItem('faceoff_currency') || 'NGN';
        const rates = { 'NGN': { symbol: '₦', rate: 1 }, 'GHS': { symbol: 'GH₵', rate: 0.012 }, 'XOF-TG': { symbol: 'CFA', rate: 0.52 }, 'XOF-BJ': { symbol: 'CFA', rate: 0.52 } };
        const cfg = rates[currency] || rates['NGN'];
        return cfg.symbol + Math.round(val * cfg.rate).toLocaleString();
    },

    renderLeftSpecs(car) {
        const d = car.details;
        return `
            <div class="sp-section-label">Identity</div>
            <div class="sp-row"><span class="sp-label">Manufacturer</span><span class="sp-val">${d.manufacturer}</span></div>
            <div class="sp-row"><span class="sp-label">Model Year</span><span class="sp-val">${d.year}</span></div>
            <div class="sp-row"><span class="sp-label">Production</span><span class="sp-val">${d.production}</span></div>
            <div class="sp-row"><span class="sp-label">Edition</span><span class="sp-val">${d.limited}</span></div>
            <div class="sp-divider"></div>
            <div class="sp-section-label">Performance</div>
            <div class="sp-row"><span class="sp-label">0 – 60 mph</span><span class="sp-val">${d.zeroToSixty}</span></div>
            <div class="sp-row"><span class="sp-label">0 – 100 km/h</span><span class="sp-val">${d.zeroToHundred}</span></div>
            <div class="sp-row"><span class="sp-label">Top Speed</span><span class="sp-val">${car.topSpeed}</span></div>
            <div class="sp-row"><span class="sp-label">Power</span><span class="sp-val">${car.power}</span></div>
            <div class="sp-row"><span class="sp-label">Torque</span><span class="sp-val">${car.torque}</span></div>
            <div class="sp-row"><span class="sp-label">Engine</span><span class="sp-val">${d.engineFull}</span></div>`;
    },

    renderRightSpecs(car) {
        const d = car.details;
        return `
            <div class="sp-section-label">Interior</div>
            <div class="sp-row"><span class="sp-label">Seating</span><span class="sp-val">${d.seating}</span></div>
            <div class="sp-row"><span class="sp-label">Cargo</span><span class="sp-val">${d.cargo}</span></div>
            <div class="sp-row"><span class="sp-label">Leather</span><span class="sp-val">${d.leather}</span></div>
            <div class="sp-row"><span class="sp-label">Heated Seats</span><span class="sp-val">${d.heatedSeats}</span></div>
            <div class="sp-row"><span class="sp-label">Audio</span><span class="sp-val">${d.stereo}</span></div>
            <div class="sp-divider"></div>
            <div class="sp-section-label">Technology</div>
            <div class="sp-row"><span class="sp-label">Headlights</span><span class="sp-val">${d.headlights}</span></div>
            <div class="sp-row sp-row--block"><span class="sp-label">AI Systems</span><span class="sp-val">${d.ai}</span></div>
            <div class="sp-divider"></div>
            <div class="sp-section-label">Fun Fact</div>
            <p class="sp-funfact">${d.funFact}</p>`;
    },

    initMobileModals(car) {
        if (window.innerWidth > 768) return;
        const d = car.details;
        const CATEGORIES = [
            { label: 'Identity', rows: [['Manufacturer', d.manufacturer], ['Year', d.year], ['Production', d.production], ['Edition', d.limited]] },
            { label: 'Performance', rows: [['0–60 mph', d.zeroToSixty], ['0–100 km/h', d.zeroToHundred], ['Top Speed', car.topSpeed], ['Power', car.power], ['Torque', car.torque], ['Engine', d.engineFull]] },
            { label: 'Interior', rows: [['Seating', d.seating], ['Cargo', d.cargo], ['Leather', d.leather], ['Heated Seats', d.heatedSeats], ['Audio', d.stereo]] },
            { label: 'Technology', rows: [['Headlights', d.headlights], ['AI Systems', d.ai]] },
            { label: 'Fun Fact', funfact: d.funFact }
        ];

        const buildHTML = (cat) => {
            if (cat.funfact) return `<div class="sr-modal-label">${cat.label}</div><p class="sr-modal-funfact">"${cat.funfact}"</p>`;
            const rows = cat.rows.map(([k, v]) => `<div class="sr-modal-row"><span class="sr-modal-key">${k}</span><span class="sr-modal-val">${v}</span></div>`).join('');
            return `<div class="sr-modal-label">${cat.label}</div><div class="sr-modal-grid">${rows}</div>`;
        };

        const t = document.createElement('div'); t.className = 'sr-modal sr-modal--top';
        const b = document.createElement('div'); b.className = 'sr-modal sr-modal--bot';
        document.body.appendChild(t); document.body.appendChild(b);

        let idx = 0;
        const update = (animate) => {
            const tCat = CATEGORIES[idx % CATEGORIES.length];
            const bCat = CATEGORIES[(idx + 1) % CATEGORIES.length];
            if (animate) {
                t.classList.remove('sr-modal--visible'); b.classList.remove('sr-modal--visible');
                setTimeout(() => { t.innerHTML = buildHTML(tCat); b.innerHTML = buildHTML(bCat); t.classList.add('sr-modal--visible'); b.classList.add('sr-modal--visible'); }, 350);
            } else {
                t.innerHTML = buildHTML(tCat); b.innerHTML = buildHTML(bCat); t.classList.add('sr-modal--visible'); b.classList.add('sr-modal--visible');
            }
            idx = (idx + 1) % CATEGORIES.length;
        };
        update(false);
        this._modalInterval = setInterval(() => update(true), 4000);

        // Move music player below CTAs on mobile flow
        const player = document.querySelector('.music-player-pill');
        const center = document.querySelector('.showroom-center');
        if (player && center) {
            center.appendChild(player);
        }
    },

    destroy() {
        if (this._modalInterval) clearInterval(this._modalInterval);
        document.querySelectorAll('.sr-modal').forEach(m => m.remove());

        // Restore music player to body root for persistence on other pages
        const player = document.querySelector('.music-player-pill');
        if (player && player.parentElement !== document.body) {
            document.body.appendChild(player);
        }
    }
};

window.ShowroomPage = ShowroomPage;
}
