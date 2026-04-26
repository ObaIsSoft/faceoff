
if (!window.ShowroomPage) {
var ShowroomPage = {
    _modalInterval: null,
    _currentUnit: null,

    init() {
        const params = new URLSearchParams(window.location.search);
        const from   = params.get('from');

        // Resolve unit — prefer ?unit=, fallback ?model=, legacy ?car=
        let unit = null;
        const unitId  = params.get('unit');
        const modelId = params.get('model');
        const carId   = params.get('car'); // legacy

        if (unitId) {
            unit = resolveUnit(unitId);
        } else if (modelId) {
            const units = getUnitsForModel(modelId);
            if (units.length > 0) unit = resolveUnit(units[0].id);
        } else if (carId) {
            // legacy: treat as model ID first, then try unit ID
            const units = getUnitsForModel(carId);
            if (units.length > 0) {
                unit = resolveUnit(units[0].id);
            } else {
                unit = resolveUnit(carId);
                if (!unit) unit = CARS[carId] ? { ...CARS[carId], id: carId } : null;
            }
        }

        if (!unit) {
            const el = document.getElementById('car-name');
            if (el) el.textContent = 'Vehicle not found';
            return;
        }

        this._currentUnit = unit;
        this._populate(unit, from);

        // Update document title
        const cond = unit.condition === 'new' ? 'New' : 'Pre-owned';
        document.title = `${unit.name} ${unit.year} · ${cond} · ${this.formatPrice(unit.price)} | Faceoff`;
    },

    // ─── Populate all DOM slots ────────────────────────────────────────────────
    _populate(unit, from) {
        const effectiveModelId = unit.modelId;
        const effectiveVariantId = unit.variantId;

        // Hero image
        const display = document.getElementById('car-display');
        if (display) {
            display.innerHTML = `<img src="${unit.img}" alt="${unit.name}" style="width:100%;object-fit:contain;">`;
            if (unit.facesRight === false) display.classList.add('flipped');
        }

        // Gallery
        this._renderGallery(unit);

        // Name + condition badge + price
        const nameEl  = document.getElementById('car-name');
        const condEl  = document.getElementById('car-condition');
        const priceEl = document.getElementById('car-price');
        if (nameEl)  nameEl.textContent = unit.name;
        if (priceEl) priceEl.textContent = this.formatPrice(unit.price);
        if (condEl) {
            if (unit.condition === 'used') {
                const gradeCopy = { excellent: 'Excellent', good: 'Good', fair: 'Fair' };
                const gradeDesc = {
                    excellent: 'Under 20,000 km · no accidents · full service history',
                    good:      '20,000–60,000 km · minor wear · serviced',
                    fair:      '60,000+ km or repaired damage · priced accordingly'
                };
                const grade = unit.grade || 'good';
                condEl.className = `sr-badge sr-badge--used`;
                condEl.style.display = '';
                condEl.innerHTML = `Pre-owned · ${gradeCopy[grade]}
                    <span class="sr-grade-help" tabindex="0" aria-label="Grade explanation">?
                        <span class="sr-grade-tip">${gradeDesc[grade]}</span>
                    </span>`;
            } else {
                condEl.className = 'sr-badge sr-badge--new';
                condEl.style.display = '';
                condEl.textContent = 'New';
            }
        }

        // CTAs
        const insp = document.getElementById('cta-inspection');
        const enq  = document.getElementById('cta-enquiry');
        if (insp) insp.href = `contact.html?type=inspection&unit=${unit.id}`;
        if (enq)  enq.href  = `contact.html?type=enquiry&unit=${unit.id}`;

        // Variant selector
        this._renderVariantSelector(effectiveModelId, effectiveVariantId);

        // Unit selector
        this._renderUnitSelector(effectiveModelId, unit.id);

        // Spec panels
        const sl = document.getElementById('specs-left');
        const sr = document.getElementById('specs-right');
        if (sl) sl.innerHTML = this._renderLeftSpecs(unit);
        if (sr) sr.innerHTML = this._renderRightSpecs(unit);

        // LACVIS
        this._renderLACVIS(unit);

        // Seller notes
        this._renderNotes(unit);

        // Back button
        if (['catalog', 'compare', 'saved'].includes(from)) {
            const backHref  = from === 'compare' ? 'compare.html' : 'catalog.html';
            const backLabel = from === 'compare' ? 'Compare' : 'Catalog';
            const backEl = document.createElement('a');
            backEl.className = 'sr-back';
            backEl.href = backHref;
            backEl.setAttribute('data-router-link', '');
            backEl.textContent = `← ${backLabel}`;
            const center = document.querySelector('.showroom-center');
            if (center) center.prepend(backEl);
        }

        // Save button
        this._renderSaveBtn(unit.id);

        // Mobile cycling modals
        if (window.innerWidth <= 768) this._initMobileCycling(unit);
    },

    // ─── Gallery ───────────────────────────────────────────────────────────────
    _renderGallery(unit) {
        const galleryEl = document.getElementById('car-gallery');
        if (!galleryEl) return;
        const imgs = unit.imgs || [];
        if (imgs.length <= 1) { galleryEl.style.display = 'none'; return; }

        const capped = imgs.slice(0, 8);
        galleryEl.style.display = '';
        galleryEl.innerHTML = capped.map((src, i) => `
            <button class="gallery-thumb ${i === 0 ? 'active' : ''}" data-src="${src}" data-index="${i}">
                <img src="${src}" alt="Photo ${i + 1}">
            </button>`).join('');

        galleryEl.addEventListener('click', e => {
            const btn = e.target.closest('.gallery-thumb');
            if (!btn) return;
            galleryEl.querySelectorAll('.gallery-thumb').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const display = document.getElementById('car-display');
            if (display) display.querySelector('img').src = btn.dataset.src;
        });

        // Mobile swipe
        const display = document.getElementById('car-display');
        if (display && window.innerWidth <= 768) {
            let touchX = 0;
            display.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
            display.addEventListener('touchend', e => {
                const dx = e.changedTouches[0].clientX - touchX;
                if (Math.abs(dx) < 40) return;
                const thumbs = [...galleryEl.querySelectorAll('.gallery-thumb')];
                const active = galleryEl.querySelector('.gallery-thumb.active');
                const idx = thumbs.indexOf(active);
                const next = dx < 0 ? Math.min(idx + 1, thumbs.length - 1) : Math.max(idx - 1, 0);
                thumbs[next]?.click();
            }, { passive: true });
        }
    },

    // ─── Variant selector ──────────────────────────────────────────────────────
    _renderVariantSelector(modelId, activeVariantId) {
        const el = document.getElementById('variant-selector');
        if (!el) return;
        const variants = getVariantsForModel(modelId);
        if (variants.length <= 1) { el.style.display = 'none'; return; }

        el.style.display = '';
        el.innerHTML = `
            <div class="sr-selector-label">Variant</div>
            <div class="sr-selector-chips">
                ${variants.map(v => {
                    const vId = Object.keys(VARIANTS).find(k => VARIANTS[k] === v);
                    const units = (typeof INVENTORY !== 'undefined')
                        ? INVENTORY.filter(u => u.variantId === vId && u.status === 'available')
                        : [];
                    const isActive = vId === activeVariantId;
                    const hasUnits = units.length > 0;
                    return `<button class="sr-chip ${isActive ? 'sr-chip--active' : ''} ${!hasUnits ? 'sr-chip--unavail' : ''}"
                        data-variant-id="${vId}" ${!hasUnits ? 'disabled title="No available units"' : ''}>
                        ${v.year} ${v.trim}
                    </button>`;
                }).join('')}
            </div>`;

        el.addEventListener('click', e => {
            const btn = e.target.closest('.sr-chip');
            if (!btn || btn.disabled) return;
            const vId = btn.dataset.variantId;
            const units = (typeof INVENTORY !== 'undefined')
                ? INVENTORY.filter(u => u.variantId === vId && u.status === 'available')
                : [];
            if (units.length === 0) return;
            const newUnit = resolveUnit(units[0].id);
            if (!newUnit) return;
            history.replaceState(null, '', `showroom.html?unit=${units[0].id}`);
            this._reset();
            this._currentUnit = newUnit;
            this._populate(newUnit, null);
        });
    },

    // ─── Unit selector ─────────────────────────────────────────────────────────
    _renderUnitSelector(modelId, activeUnitId) {
        const el = document.getElementById('unit-selector');
        if (!el) return;
        const allUnits = typeof getUnitsForModel === 'function' ? getUnitsForModel(modelId) : [];

        // Include sold/reserved for display (show badge)
        const allUnitsRaw = (typeof INVENTORY !== 'undefined')
            ? INVENTORY.filter(u => { const v = VARIANTS[u.variantId]; return v && v.modelId === modelId; })
            : allUnits;

        if (allUnitsRaw.length <= 1) { el.style.display = 'none'; return; }

        el.style.display = '';
        el.innerHTML = `
            <div class="sr-selector-label">Available Units</div>
            <div class="sr-unit-list">
                ${allUnitsRaw.map(u => {
                    const v = VARIANTS[u.variantId] || {};
                    const isActive = u.id === activeUnitId;
                    const isUnavail = u.status !== 'available';
                    const condLabel = u.condition === 'new' ? 'New' : `Pre-owned · ${u.grade || ''}`;
                    const mileage = u.mileage === 0 ? '0 km' : `${u.mileage.toLocaleString()} km`;
                    return `<button class="sr-unit-card ${isActive ? 'sr-unit-card--active' : ''} ${isUnavail ? 'sr-unit-card--sold' : ''}"
                        data-unit-id="${u.id}" ${isUnavail ? 'disabled' : ''}>
                        <div class="sr-unit-meta">
                            <span class="sr-unit-year">${v.year || ''} · ${u.color || ''}</span>
                            <span class="sr-unit-cond">${condLabel}</span>
                            <span class="sr-unit-miles">${mileage}</span>
                        </div>
                        <div class="sr-unit-price">
                            ${isUnavail
                                ? `<span class="sr-unit-sold-badge">${u.status.toUpperCase()}</span>`
                                : this.formatPrice(u.price)}
                        </div>
                    </button>`;
                }).join('')}
            </div>`;

        el.addEventListener('click', e => {
            const btn = e.target.closest('.sr-unit-card');
            if (!btn || btn.disabled) return;
            const newUnit = resolveUnit(btn.dataset.unitId);
            if (!newUnit) return;
            history.replaceState(null, '', `showroom.html?unit=${btn.dataset.unitId}`);
            this._reset();
            this._currentUnit = newUnit;
            this._populate(newUnit, null);
        });
    },

    // ─── Spec panels ──────────────────────────────────────────────────────────
    _renderLeftSpecs(unit) {
        const d = unit.details || {};
        const mileageLabel = unit.mileage === 0 ? '0 km · New' : `${unit.mileage.toLocaleString()} km`;
        const condLabel = unit.condition === 'new' ? 'New' : `Pre-owned · ${unit.grade || ''}`;
        return `
            <div class="sp-section-label">Identity</div>
            <div class="sp-row"><span class="sp-label">Manufacturer</span><span class="sp-val">${d.manufacturer || ''}</span></div>
            <div class="sp-row"><span class="sp-label">Model Year</span><span class="sp-val">${unit.year || ''}</span></div>
            <div class="sp-row"><span class="sp-label">Production</span><span class="sp-val">${d.production || ''}</span></div>
            <div class="sp-row"><span class="sp-label">Edition</span><span class="sp-val">${d.limited || ''}</span></div>
            <div class="sp-row"><span class="sp-label">Colour</span><span class="sp-val">${unit.color || '—'}</span></div>
            <div class="sp-row"><span class="sp-label">Condition</span><span class="sp-val">${condLabel}</span></div>
            <div class="sp-row"><span class="sp-label">Mileage</span><span class="sp-val">${mileageLabel}</span></div>
            <div class="sp-divider"></div>
            <div class="sp-section-label">Performance</div>
            <div class="sp-row"><span class="sp-label">0 – 60 mph</span><span class="sp-val">${d.zeroToSixty || ''}</span></div>
            <div class="sp-row"><span class="sp-label">0 – 100 km/h</span><span class="sp-val">${d.zeroToHundred || ''}</span></div>
            <div class="sp-row"><span class="sp-label">Top Speed</span><span class="sp-val">${unit.topSpeed || ''}</span></div>
            <div class="sp-row"><span class="sp-label">Power</span><span class="sp-val">${unit.power || ''}</span></div>
            <div class="sp-row"><span class="sp-label">Torque</span><span class="sp-val">${unit.torque || ''}</span></div>
            <div class="sp-row"><span class="sp-label">Engine</span><span class="sp-val">${d.engineFull || ''}</span></div>`;
    },

    _renderRightSpecs(unit) {
        const d = unit.details || {};
        return `
            <div class="sp-section-label">Interior</div>
            <div class="sp-row"><span class="sp-label">Seating</span><span class="sp-val">${d.seating || ''}</span></div>
            <div class="sp-row"><span class="sp-label">Cargo</span><span class="sp-val">${d.cargo || ''}</span></div>
            <div class="sp-row"><span class="sp-label">Leather</span><span class="sp-val">${d.leather || ''}</span></div>
            <div class="sp-row"><span class="sp-label">Heated Seats</span><span class="sp-val">${d.heatedSeats || ''}</span></div>
            <div class="sp-row"><span class="sp-label">Audio</span><span class="sp-val">${d.stereo || ''}</span></div>
            <div class="sp-divider"></div>
            <div class="sp-section-label">Technology</div>
            <div class="sp-row"><span class="sp-label">Headlights</span><span class="sp-val">${d.headlights || ''}</span></div>
            <div class="sp-row sp-row--block"><span class="sp-label">AI Systems</span><span class="sp-val">${d.ai || ''}</span></div>
            <div class="sp-divider"></div>
            <div class="sp-section-label">Fun Fact</div>
            <p class="sp-funfact">${d.funFact || ''}</p>`;
    },

    // ─── LACVIS block ─────────────────────────────────────────────────────────
    _renderLACVIS(unit) {
        const el = document.getElementById('lacvis-block');
        if (!el) return;
        const cert = unit.certificate;

        if (!cert) {
            // Only show "no cert" note for used cars
            if (unit.condition === 'used') {
                el.innerHTML = `<div class="sr-lacvis-none">No inspection certificate on file</div>`;
            } else {
                el.innerHTML = '';
            }
            return;
        }

        const expiry  = new Date(cert.expiryDate);
        const expired = expiry < new Date();
        const expiryStr = expiry.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

        if (expired) {
            el.innerHTML = `
                <div class="sr-lacvis-expired">
                    <span class="sr-lacvis-icon">⚠</span>
                    <span>Certificate Expired · ${expiryStr}</span>
                </div>`;
            return;
        }

        el.innerHTML = `
            <div class="sr-lacvis-valid">
                <div class="sr-lacvis-header">
                    <span class="sr-lacvis-check">✓</span>
                    <span class="sr-lacvis-title">LACVIS CERTIFIED</span>
                </div>
                <div class="sr-lacvis-rows">
                    <div class="sr-lacvis-row"><span>Cert No.</span><span>${cert.certNumber}</span></div>
                    <div class="sr-lacvis-row"><span>Expires</span><span>${expiryStr}</span></div>
                    <div class="sr-lacvis-row">
                        <span>Reg No.</span>
                        <span class="sr-lacvis-reg-wrap">
                            <span id="sr-regnumber">${cert.regNumber}</span>
                            <button class="sr-copy-btn" onclick="navigator.clipboard.writeText('${cert.regNumber}').then(() => { this.textContent = 'copied'; setTimeout(() => this.textContent = 'copy', 1500); })">copy</button>
                        </span>
                    </div>
                </div>
                <div class="sr-lacvis-actions">
                    <a href="${cert.scanPath}" target="_blank" class="sr-lacvis-btn">View Certificate</a>
                    <a href="${cert.verifyUrl}" target="_blank" class="sr-lacvis-btn sr-lacvis-btn--ghost">Verify Online</a>
                </div>
            </div>`;
    },

    // ─── Seller notes ─────────────────────────────────────────────────────────
    _renderNotes(unit) {
        const el = document.getElementById('seller-notes');
        if (!el || !unit.notes) { if (el) el.style.display = 'none'; return; }

        const LIMIT = 250;
        const full  = unit.notes;
        const short = full.length > LIMIT ? full.slice(0, LIMIT).trimEnd() + '…' : full;
        el.style.display = '';
        el.innerHTML = `
            <div class="sr-notes-label">Seller Notes</div>
            <p class="sr-notes-text" id="sr-notes-text">${short}</p>
            ${full.length > LIMIT ? `<button class="sr-notes-toggle" onclick="
                const t = document.getElementById('sr-notes-text');
                const btn = this;
                if (btn.dataset.open === 'true') {
                    t.textContent = ${JSON.stringify(short)};
                    btn.textContent = 'Show more'; btn.dataset.open = 'false';
                } else {
                    t.textContent = ${JSON.stringify(full)};
                    btn.textContent = 'Show less'; btn.dataset.open = 'true';
                }">Show more</button>` : ''}`;
    },

    // ─── Save button ──────────────────────────────────────────────────────────
    _renderSaveBtn(unitId) {
        const cta = document.querySelector('.showroom-cta');
        if (!cta) return;
        const saveBtn = document.createElement('button');
        saveBtn.className = 'sr-save';
        saveBtn.setAttribute('data-save-id', unitId);

        const update = () => {
            const saved = typeof FaceoffDrawer !== 'undefined' && FaceoffDrawer.isSaved(unitId);
            saveBtn.setAttribute('data-saved', saved ? 'true' : 'false');
            saveBtn.innerHTML = `<svg width="12" height="14" viewBox="0 0 12 14" fill="${saved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 1h8v12l-4-3-4 3V1z"/></svg> ${saved ? 'Saved' : 'Save Vehicle'}`;
        };
        saveBtn.addEventListener('click', () => {
            if (typeof FaceoffDrawer !== 'undefined') { FaceoffDrawer.toggle(unitId); update(); }
        });
        cta.insertAdjacentElement('afterend', saveBtn);
        update();
    },

    // ─── Mobile cycling modals ────────────────────────────────────────────────
    _initMobileCycling(unit) {
        document.querySelectorAll('.sr-modal').forEach(m => m.remove());
        if (this._modalInterval) { clearInterval(this._modalInterval); this._modalInterval = null; }

        const d = unit.details || {};
        const mileageLabel = unit.mileage === 0 ? '0 km · New' : `${unit.mileage.toLocaleString()} km`;
        const condLabel = unit.condition === 'new' ? 'New' : `Pre-owned · ${unit.grade || ''}`;
        const row = (k, v) => v
            ? `<div class="sr-modal-row"><span class="sr-modal-key">${k}</span><span class="sr-modal-val">${v}</span></div>`
            : '';

        let certStatus = '';
        if (unit.certificate) {
            const expired = new Date(unit.certificate.expiryDate) < new Date();
            certStatus = expired ? '⚠ Expired' : '✓ Valid';
        } else if (unit.condition === 'used') {
            certStatus = 'None on file';
        }

        const slides = [
            {
                top: { label: 'Identity', html: `<div class="sr-modal-grid">
                    ${row('Manufacturer', d.manufacturer)}${row('Year', unit.year)}
                    ${row('Colour', unit.color)}${row('Condition', condLabel)}
                    ${row('Mileage', mileageLabel)}</div>` },
                bot: { label: 'Performance', html: `<div class="sr-modal-grid">
                    ${row('Power', unit.power)}${row('Torque', unit.torque)}
                    ${row('0 – 100', d.zeroToHundred)}${row('Top Speed', unit.topSpeed)}
                    ${row('Engine', d.engineFull)}</div>` }
            },
            {
                top: { label: 'Interior', html: `<div class="sr-modal-grid">
                    ${row('Seating', d.seating)}${row('Leather', d.leather)}
                    ${row('Audio', d.stereo)}${row('Heated Seats', d.heatedSeats)}
                    ${row('Cargo', d.cargo)}</div>` },
                bot: { label: 'Technology', html: `<div class="sr-modal-grid">
                    ${row('Headlights', d.headlights)}${row('AI Systems', d.ai)}
                    </div>${d.funFact ? `<p class="sr-modal-funfact">${d.funFact}</p>` : ''}` }
            }
        ];

        const hasExtra = certStatus || unit.notes;
        if (hasExtra) {
            const notesExcerpt = unit.notes
                ? unit.notes.slice(0, 120) + (unit.notes.length > 120 ? '…' : '')
                : '';
            const certSlide = certStatus
                ? { label: 'Certificate', html: `<div class="sr-modal-grid">
                    ${row('LACVIS', certStatus)}
                    ${unit.certificate ? row('Cert No.', unit.certificate.certNumber) : ''}
                    ${unit.certificate ? row('Expires', new Date(unit.certificate.expiryDate).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })) : ''}
                    </div>` }
                : slides[0].top;
            const notesSlide = notesExcerpt
                ? { label: 'Seller Notes', html: `<p class="sr-modal-funfact">${notesExcerpt}</p>` }
                : slides[1].bot;
            slides.push({ top: certSlide, bot: notesSlide });
        }

        const topModal = document.createElement('div');
        topModal.className = 'sr-modal sr-modal--top';
        const botModal = document.createElement('div');
        botModal.className = 'sr-modal sr-modal--bot';
        document.body.appendChild(topModal);
        document.body.appendChild(botModal);

        let idx = 0;
        const show = () => {
            const s = slides[idx];
            topModal.innerHTML = `<div class="sr-modal-label">${s.top.label}</div>${s.top.html}`;
            botModal.innerHTML = `<div class="sr-modal-label">${s.bot.label}</div>${s.bot.html}`;
            topModal.classList.add('sr-modal--visible');
            botModal.classList.add('sr-modal--visible');
        };

        show();
        this._modalInterval = setInterval(() => {
            topModal.classList.remove('sr-modal--visible');
            botModal.classList.remove('sr-modal--visible');
            setTimeout(() => { idx = (idx + 1) % slides.length; show(); }, 400);
        }, 4500);
    },

    // ─── Helpers ──────────────────────────────────────────────────────────────
    formatPrice(str) {
        if (!str) return '';
        const val = parseInt(str.replace(/[^0-9]/g, ''), 10);
        const currency = localStorage.getItem('faceoff_currency') || 'NGN';
        const rates = { 'NGN': { symbol: '₦', rate: 1 }, 'GHS': { symbol: 'GH₵', rate: 0.012 }, 'XOF-TG': { symbol: 'CFA', rate: 0.52 }, 'XOF-BJ': { symbol: 'CFA', rate: 0.52 } };
        const cfg = rates[currency] || rates['NGN'];
        return cfg.symbol + Math.round(val * cfg.rate).toLocaleString();
    },

    _reset() {
        // Clear injected elements before re-populating
        document.querySelectorAll('.sr-back, .sr-save, .sr-modal, .spec-panel--mobile').forEach(el => el.remove());
        ['car-gallery', 'variant-selector', 'unit-selector', 'lacvis-block', 'seller-notes'].forEach(id => {
            const el = document.getElementById(id);
            if (el) { el.innerHTML = ''; el.style.display = 'none'; }
        });
        const display = document.getElementById('car-display');
        if (display) display.className = 'showroom-car';
    },

    destroy() {
        if (this._modalInterval) { clearInterval(this._modalInterval); this._modalInterval = null; }
        document.querySelectorAll('.sr-modal').forEach(m => m.remove());
        const player = document.querySelector('.music-player-pill');
        if (player && player.parentElement !== document.body) document.body.appendChild(player);
    }
};

window.ShowroomPage = ShowroomPage;
}
