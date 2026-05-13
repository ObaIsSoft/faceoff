
if (!window.DrumWheel) {
// Direct port of jquery.drum.js + jquery.watch-drag.js to vanilla JS.
// Logic and structure unchanged from the reference; only jQuery API replaced.
class DrumWheel {
    constructor(el, items, onChange) {
        this._viewport    = el;
        this.items        = items;
        this._onChange    = onChange;
        this._drumOffset  = 0;
        this._state       = 'standby';
        this._edgeLimit   = 0.8;
        this._acceleration = 300;
        this._maxSpinOffset = 500;
        this._minDragInterval = 100;
        this._render();
        this._bindDrag();
        this._bindWheel();
    }

    // ── _render: mirrors jquery.drum.js _render ──────────────────────────────
    _render() {
        this._viewport.innerHTML = '';
        this._drumEl = document.createElement('div');
        this._drumEl.style.cssText = 'position:relative;';
        this._drawItems();
        this._viewport.appendChild(this._drumEl);
    }

    // ── _drawItems: mirrors jquery.drum.js _drawItems ─────────────────────────
    _drawItems() {
        this._drumEl.innerHTML = this.items.map(item =>
            `<div class="drum-item${item.disabled ? ' drum-item--disabled' : ''}" data-value="${item.id}">${item.label}</div>`
        ).join('');
    }

    // ── _scrollToOffset: mirrors jquery.drum.js _scrollToOffset ──────────────
    _scrollToOffset(offset) {
        offset = this._processOffset(offset);
        this._drumOffset = offset;
        this._drumEl.style.transform = `translate(0,${offset}px)`;
    }

    // ── _processOffset: mirrors jquery.drum.js _processOffset ────────────────
    _processOffset(offset) {
        var q  = this._edgeLimit;
        var vh = this._viewport.clientHeight;
        var dh = this._drumEl.offsetHeight;
        return Math.max(Math.min(offset, q * vh), -dh + vh * (1 - q));
    }

    // ── _getCurrentOffset: mirrors jquery.drum.js _getCurrentOffset ──────────
    _getCurrentOffset() {
        return this._drumEl.getBoundingClientRect().top - this._viewport.getBoundingClientRect().top;
    }

    // ── _getItemInView: mirrors jquery.drum.js _getItemInView ─────────────────
    _getItemInView() {
        var vBB     = this._viewport.getBoundingClientRect();
        var vCenterY = vBB.top + vBB.height / 2;
        var dBB     = this._drumEl.getBoundingClientRect();
        var items   = this._drumEl.querySelectorAll('.drum-item');
        var i = Math.max(0, Math.min(
            items.length - 1,
            Math.floor((vCenterY - dBB.top) / dBB.height * items.length)
        ));
        var ret = items[i];
        if (!ret || !ret.classList.contains('drum-item')) {
            ret = this._drumOffset > 0 ? items[0] : items[items.length - 1];
        }
        return ret;
    }

    // ── _centerView: mirrors jquery.drum.js _centerView ───────────────────────
    _centerView(itemInView, animate) {
        animate = animate !== false;
        itemInView = itemInView || this._getItemInView();
        this._drumEl.querySelectorAll('.drum-item').forEach(el => el.classList.remove('drum-item-current'));
        itemInView.classList.add('drum-item-current');
        var offset = -itemInView.offsetTop + this._viewport.clientHeight / 2 - itemInView.offsetHeight / 2;
        clearTimeout(this._timer);
        if (animate) {
            this._drumEl.style.transition = 'transform .13s cubic-bezier(0,.5,.85,1)';
            this._timer = setTimeout(() => { this._drumEl.style.transition = 'none'; }, 200);
        } else {
            this._drumEl.style.transition = 'none';
        }
        this._scrollToOffset(offset);
        return itemInView;
    }

    // ── _stopRevolving: mirrors jquery.drum.js _stopRevolving ─────────────────
    _stopRevolving() {
        if (this._state === 'standby') return;
        var item = this._centerView();
        this._state = 'standby';
        if (item && !item.classList.contains('drum-item--disabled')) {
            this._onChange && this._onChange(item.dataset.value);
        }
    }

    // ── Public API ────────────────────────────────────────────────────────────
    setActive(id) {
        var items = this._drumEl.querySelectorAll('.drum-item');
        var target = null;
        items.forEach(el => { if (el.dataset.value === String(id)) target = el; });
        if (target) this._centerView(target, false);
    }

    setDisabled(predicate) {
        this.items.forEach(item => { item.disabled = !!predicate(item.id); });
        this._drumEl.querySelectorAll('.drum-item').forEach((el, i) => {
            if (this.items[i]) el.classList.toggle('drum-item--disabled', !!this.items[i].disabled);
        });
    }

    // ── _bindWheel: keyboard/mouse-wheel ─────────────────────────────────────
    _bindWheel() {
        this._viewport.addEventListener('wheel', e => {
            e.preventDefault();
            if (this._state === 'revolving') {
                this._scrollToOffset(this._getCurrentOffset());
                this._state = 'standby';
            }
            var all = [...this._drumEl.querySelectorAll('.drum-item')];
            var cur = this._getItemInView();
            var dir = e.deltaY > 0 ? 1 : -1;
            var next = all.indexOf(cur) + dir;
            while (next >= 0 && next < all.length && all[next].classList.contains('drum-item--disabled')) next += dir;
            if (next < 0 || next >= all.length) return;
            this._centerView(all[next], true);
            if (!all[next].classList.contains('drum-item--disabled'))
                this._onChange && this._onChange(all[next].dataset.value);
        }, { passive: false });
    }

    // ── _bindDrag: port of jquery.watch-drag.js ───────────────────────────────
    _bindDrag() {
        var that   = this;
        var coords = { x: null, y: null, t: null, dx: 0, dy: 0, dt: 0 };

        function getXY(ev) {
            var isTouch = /touch/.test(ev.type);
            return {
                x: isTouch ? ev.touches[0].pageX : ev.pageX,
                y: isTouch ? ev.touches[0].pageY : ev.pageY
            };
        }

        function onStart(ev) {
            if (ev.type === 'mousedown' && ev.which !== 1) return;
            ev.preventDefault();
            ev.stopPropagation();

            if (that._state === 'revolving') {
                that._scrollToOffset(that._getCurrentOffset());
            }
            that._state = 'dragging';
            that._drumEl.style.transition = 'none';

            var p = getXY(ev);
            coords = { x: p.x, y: p.y, t: Date.now(), dx: 0, dy: 0, dt: 0 };

            window.addEventListener('mousemove', onMove);
            window.addEventListener('touchmove', onMove, { passive: false });
            window.addEventListener('mouseup',   onEnd);
            window.addEventListener('touchend',  onEnd);
        }

        function onMove(ev) {
            var p  = getXY(ev);
            var t  = Date.now();
            var dx = p.x - coords.x;
            var dy = p.y - coords.y;
            var dt = t   - coords.t;
            coords = { x: p.x, y: p.y, t: t, dx: dx, dy: dy, dt: dt };
            that._scrollToOffset(that._drumOffset + dy);
        }

        function onEnd(ev) {
            ev.preventDefault();
            ev.stopPropagation();

            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('touchmove', onMove);
            window.removeEventListener('mouseup',   onEnd);
            window.removeEventListener('touchend',  onEnd);

            var vy = 0, vx = 0;
            if (Date.now() - coords.t <= that._minDragInterval) {
                vx = coords.dx / coords.dt * 1000;
                vy = coords.dy / coords.dt * 1000;
            }

            var v = Math.abs(vy);
            var a = that._acceleration;

            if (v) {
                var offset = Math.pow(v, 2) / (2 * a);
                if (offset > that._maxSpinOffset) offset = that._maxSpinOffset;
                offset = offset * Math.sign(vy);
                offset = that._drumOffset + offset;
                offset = that._processOffset(offset);
                var t = 2 * Math.abs(offset - that._drumOffset) / v;
                that._drumEl.style.transition = `transform ${t}s cubic-bezier(0.25,0.46,0.45,0.94)`;
                that._scrollToOffset(offset);
                that._state = 'revolving';
                setTimeout(() => that._stopRevolving(), t * 1000 + 40);
            } else {
                that._stopRevolving();
            }
        }

        this._viewport.addEventListener('mousedown',  onStart);
        this._viewport.addEventListener('touchstart', onStart, { passive: false });
    }
}
window.DrumWheel = DrumWheel;
}

if (!window.ShowroomPage) {
var ShowroomPage = {
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

        // Update document title + meta description
        const cond = unit.condition === 'new' ? 'New' : 'Pre-owned';
        document.title = `${unit.name} ${unit.year} · ${cond} · ${this.formatPrice(unit.price)} | Faceoff`;
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) { metaDesc = document.createElement('meta'); metaDesc.name = 'description'; document.head.appendChild(metaDesc); }
        const mileDesc = unit.mileage === 0 ? '0 km · New' : `${unit.mileage.toLocaleString()} km`;
        metaDesc.content = `${unit.year} ${unit.name} — ${cond} — ${this.formatPrice(unit.price)} — ${mileDesc}. Available at Faceoff Automotive.`;
    },

    // ─── Populate all DOM slots ────────────────────────────────────────────────
    _populate(unit, from) {
        const effectiveModelId = unit.modelId;
        const effectiveVariantId = unit.variantId;

        // Hero image
        const display = document.getElementById('car-display');
        if (display) {
            const configSummaryEarly = localStorage.getItem('faceoff_last_config_summary');
            const configUnitIdEarly  = localStorage.getItem('faceoff_last_config_unitId');
            const isConfiguredEarly  = !!(configSummaryEarly && configUnitIdEarly === unit.id);
            const isMobile = window.innerWidth <= 768;
            const dEarly   = unit.details || {};
            const leftChipHtml  = (isMobile && unit.power)    ? `<div class="sr-stat-chip sr-stat-chip--left" id="sr-chip-left"><span class="sr-chip-label">Power</span><span class="sr-chip-val">${unit.power}</span></div>` : '';
            const rightChipHtml = (isMobile && unit.topSpeed) ? `<div class="sr-stat-chip sr-stat-chip--right" id="sr-chip-right"><span class="sr-chip-label">Top Speed</span><span class="sr-chip-val">${unit.topSpeed}</span></div>` : '';
            display.innerHTML =
                leftChipHtml + rightChipHtml +
                `<img src="${unit.img}" alt="${unit.name}" style="width:100%;object-fit:contain;">` +
                (isConfiguredEarly ? `<div id="config-badge" class="sr-config-badge"><div class="sr-config-header"><span class="sr-config-dot"></span><span class="sr-config-label">Configured</span></div><span class="sr-config-summary">${configSummaryEarly}</span><a href="customize.html?unit=${unit.id}" class="sr-config-edit">Edit</a></div>` : '<div id="config-badge" class="sr-config-badge" style="display:none"></div>');
            if (unit.facesRight === false) display.classList.add('flipped');

            // Ghost backdrop injected into .showroom-center (bleeds behind car)
            if (isMobile) {
                document.querySelector('.sr-ghost-backdrop')?.remove();
                let ghostVal = '', ghostLbl = '';
                if (dEarly.zeroToHundred) {
                    ghostVal = dEarly.zeroToHundred;   // e.g. "4.5s"
                    ghostLbl = '0 — 100';
                } else if (unit.power) {
                    ghostVal = unit.power;              // e.g. "585 hp"
                    ghostLbl = 'Power';
                } else if (unit.topSpeed) {
                    ghostVal = unit.topSpeed;
                    ghostLbl = 'Top Speed';
                }
                if (ghostVal) {
                    const numMatch    = ghostVal.match(/^([\d]+)(\.\d+)?(.*)/);
                    const isDecimalV  = numMatch && parseFloat(numMatch[1] + (numMatch[2] || '')) < 30;
                    const suffix      = numMatch ? (numMatch[3] || '').trim() : '';
                    const initDec     = (isDecimalV && numMatch[2]) ? '.0' : '';
                    const ghostEl     = document.createElement('div');
                    ghostEl.id        = 'sr-ghost-backdrop';
                    ghostEl.className = 'sr-ghost-backdrop';
                    ghostEl.innerHTML = `
                        <span class="sr-ghost-label">${ghostLbl}</span>
                        <span class="sr-ghost-num">
                            <span class="sr-ghost-int">0</span><span class="sr-ghost-dec">${initDec}</span><span class="sr-ghost-suffix">${suffix}</span>
                        </span>`;
                    const center = document.querySelector('.showroom-center');
                    if (center) center.appendChild(ghostEl);
                }
            }
        }

        // Gallery
        this._renderGallery(unit);

        // Brand logo badge
        const logoEl = document.getElementById('car-brand-logo');
        if (logoEl) {
            const model = (window.MODELS || {})[effectiveModelId];
            if (model?.logo) {
                logoEl.src = model.logo;
                logoEl.alt = model.brand;
                logoEl.style.display = '';
            } else {
                logoEl.style.display = 'none';
            }
        }

        // Name + condition badge + price
        const nameEl  = document.getElementById('car-name');
        const condEl  = document.getElementById('car-condition');
        const priceEl = document.getElementById('car-price');
        if (nameEl) {
            nameEl.textContent = unit.name;
            let trimEl = document.getElementById('sr-trim-label');
            if (!trimEl) {
                trimEl = document.createElement('span');
                trimEl.id = 'sr-trim-label';
                trimEl.className = 'sr-trim-label';
                nameEl.insertAdjacentElement('afterend', trimEl);
            }
            trimEl.textContent = unit.trim || '';
            trimEl.style.display = unit.trim ? '' : 'none';
        }
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
        const cust = document.getElementById('cta-customize');
        if (insp) insp.href = `contact.html?type=inspection&unit=${unit.id}`;
        if (enq)  enq.href  = `contact.html?type=enquiry&unit=${unit.id}`;
        if (cust) cust.href = `customize.html?unit=${unit.id}`;

        // Customise button state
        const isConfigured = !!(localStorage.getItem('faceoff_last_config_summary') && localStorage.getItem('faceoff_last_config_unitId') === unit.id);
        if (cust) {
            if (isConfigured) {
                cust.textContent = 'Recustomise';
                cust.classList.add('cta-btn--configured');
            } else {
                cust.textContent = 'Customise';
                cust.classList.remove('cta-btn--configured');
            }
        }

        // Drum wheel selector (replaces year chips + unit cards)
        this._renderDrumSelector(effectiveModelId, unit.id);

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

        // Mobile bottom sheet
        if (window.innerWidth <= 768) this._buildSheet(unit);

        // Ghost counter animation (mobile only)
        if (window.innerWidth <= 768) {
            setTimeout(() => this._animateGhostCounter(unit), 500);
        }
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

        const setActive = (idx) => {
            const thumbs = [...galleryEl.querySelectorAll('.gallery-thumb')];
            thumbs.forEach((b, i) => b.classList.toggle('active', i === idx));
            const display = document.getElementById('car-display');
            if (display && thumbs[idx]) display.querySelector('img').src = thumbs[idx].dataset.src;
            // Update dots
            const dots = document.querySelectorAll('.sr-gallery-dot');
            dots.forEach((d, i) => d.classList.toggle('active', i === idx));
        };

        galleryEl.addEventListener('click', e => {
            const btn = e.target.closest('.gallery-thumb');
            if (!btn) return;
            const thumbs = [...galleryEl.querySelectorAll('.gallery-thumb')];
            setActive(thumbs.indexOf(btn));
        });

        // Mobile: dot indicators + swipe
        const display = document.getElementById('car-display');
        if (display && window.innerWidth <= 768) {
            // Inject dots below car image
            const dotsEl = document.createElement('div');
            dotsEl.className = 'sr-gallery-dots';
            dotsEl.innerHTML = capped.map((_, i) =>
                `<span class="sr-gallery-dot${i === 0 ? ' active' : ''}"></span>`
            ).join('');
            display.insertAdjacentElement('afterend', dotsEl);

            let touchX = 0;
            display.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
            display.addEventListener('touchend', e => {
                const dx = e.changedTouches[0].clientX - touchX;
                if (Math.abs(dx) < 40) return;
                const thumbs = [...galleryEl.querySelectorAll('.gallery-thumb')];
                const active = galleryEl.querySelector('.gallery-thumb.active');
                const idx = thumbs.indexOf(active);
                const next = dx < 0 ? Math.min(idx + 1, thumbs.length - 1) : Math.max(idx - 1, 0);
                setActive(next);
            }, { passive: true });
        }
    },

    // ─── Variant selector ──────────────────────────────────────────────────────
    // Year row: chips (≤5 years) or scrollable timeline with decade markers (>5 years).
    // Trim row: chip strip filtered to the selected year — shown only when year has >1 trim.
    _renderVariantSelector(modelId, activeVariantId) {
        const el = document.getElementById('variant-selector');
        if (!el) return;
        const variants = getVariantsForModel(modelId); // newest-first

        const vList = variants.map(v => ({
            ...v,
            id: Object.keys(VARIANTS).find(k => VARIANTS[k] === v)
        })).filter(v => v.id);

        if (vList.length <= 1) { el.style.display = 'none'; return; }

        const byYear = {};
        vList.forEach(v => {
            if (!byYear[v.year]) byYear[v.year] = [];
            byYear[v.year].push(v);
        });
        const yearsDesc = Object.keys(byYear);          // newest-first
        const yearsAsc  = [...yearsDesc].reverse();     // oldest-first for timeline L→R

        const activeYear   = (VARIANTS[activeVariantId]?.year) || yearsDesc[0];
        const trimsForYear = byYear[activeYear] || [];

        const hasMultipleYears = yearsDesc.length > 1;
        const hasMultipleTrims = trimsForYear.length > 1;

        if (!hasMultipleYears && !hasMultipleTrims) { el.style.display = 'none'; return; }

        const availUnits = id => (typeof INVENTORY !== 'undefined')
            ? INVENTORY.filter(u => u.variantId === id && u.status === 'available')
            : [];

        let html = '';

        if (hasMultipleYears) {
            if (yearsDesc.length > 5) {
                // ── Scrollable timeline with decade markers ─────────────────
                let lastDecade = null;
                const ticks = yearsAsc.map(y => {
                    const decade = Math.floor(parseInt(y) / 10) * 10;
                    let sep = '';
                    if (decade !== lastDecade) {
                        lastDecade = decade;
                        sep = `<span class="sr-year-decade">${decade}s</span>`;
                    }
                    const ok = byYear[y].some(v => availUnits(v.id).length > 0);
                    const active = y === activeYear;
                    return `${sep}<button class="sr-year-tick${active ? ' sr-year-tick--active' : ''}${!ok ? ' sr-year-tick--unavail' : ''}"
                        data-year="${y}"${!ok ? ' disabled' : ''}>${y}</button>`;
                }).join('');
                html += `<div class="sr-selector-label">Year</div>
                    <div class="sr-year-timeline"><div class="sr-year-track">${ticks}</div></div>`;
            } else {
                // ── Plain chips ─────────────────────────────────────────────
                html += `<div class="sr-selector-label">Year</div>
                    <div class="sr-selector-chips">
                        ${yearsDesc.map(y => {
                            const ok = byYear[y].some(v => availUnits(v.id).length > 0);
                            return `<button class="sr-chip${y === activeYear ? ' sr-chip--active' : ''}${!ok ? ' sr-chip--unavail' : ''}"
                                data-year="${y}"${!ok ? ' disabled' : ''}>${y}</button>`;
                        }).join('')}
                    </div>`;
            }
        }

        if (hasMultipleTrims) {
            html += `<div class="sr-selector-label" style="margin-top:0.65rem">Variant</div>
                <div class="sr-selector-chips">
                    ${trimsForYear.map(v => {
                        const units = availUnits(v.id);
                        const isActive = v.id === activeVariantId;
                        return `<button class="sr-chip${isActive ? ' sr-chip--active' : ''}${!units.length ? ' sr-chip--unavail' : ''}"
                            data-variant-id="${v.id}"${!units.length ? ' disabled title="No available units"' : ''}>${v.trim}</button>`;
                    }).join('')}
                </div>`;
        }

        el.style.display = '';
        el.innerHTML = html;

        // Auto-scroll timeline to active year tick
        requestAnimationFrame(() => {
            const track  = el.querySelector('.sr-year-track');
            const active = el.querySelector('.sr-year-tick--active');
            if (track && active) {
                track.scrollLeft = active.offsetLeft - track.clientWidth / 2 + active.offsetWidth / 2;
            }
        });

        // Year listeners — shared by chips and timeline ticks via [data-year]
        el.querySelectorAll('[data-year]').forEach(btn => {
            btn.addEventListener('click', () => {
                const yr  = btn.dataset.year;
                const first = (byYear[yr] || []).find(v => availUnits(v.id).length > 0);
                if (!first) return;
                const inv = availUnits(first.id)[0];
                if (!inv) return;
                const newUnit = resolveUnit(inv.id);
                if (!newUnit) return;
                history.replaceState(null, '', `showroom.html?unit=${inv.id}`);
                this._reset();
                this._currentUnit = newUnit;
                this._populate(newUnit, null);
            });
        });

        // Trim listeners
        el.querySelectorAll('[data-variant-id]').forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.disabled) return;
                const units = availUnits(btn.dataset.variantId);
                if (!units.length) return;
                const newUnit = resolveUnit(units[0].id);
                if (!newUnit) return;
                history.replaceState(null, '', `showroom.html?unit=${units[0].id}`);
                this._reset();
                this._currentUnit = newUnit;
                this._populate(newUnit, null);
            });
        });
    },

    // ─── Multi-column drum selector ────────────────────────────────────────────
    _renderDrumSelector(modelId, activeUnitId) {
        const varEl = document.getElementById('variant-selector');
        if (varEl) varEl.style.display = 'none';

        const el = document.getElementById('unit-selector');
        if (!el || typeof INVENTORY === 'undefined' || typeof VARIANTS === 'undefined') return;

        // Enrich all units for this model with variant fields
        const allUnits = INVENTORY
            .filter(u => { const v = VARIANTS[u.variantId]; return v && v.modelId === modelId; })
            .map(u => {
                const v = VARIANTS[u.variantId] || {};
                return { ...u, year: String(v.year || ''), trim: v.trim || '' };
            });

        if (allUnits.length <= 1) { el.style.display = 'none'; return; }

        // Which dimensions have multiple unique values?
        const dims = [
            { key: 'year',      label: 'Year'      },
            { key: 'trim',      label: 'Edition'   },
            { key: 'color',     label: 'Colour'    },
            { key: 'condition', label: 'Condition',
              fmt: v => v === 'new' ? 'New' : 'Pre-owned' }
        ].map(d => ({
            ...d,
            values: [...new Set(allUnits.map(u => u[d.key]).filter(Boolean))]
                .sort((a, b) => d.key === 'year' ? b - a : String(a).localeCompare(String(b)))
        })).filter(d => d.values.length > 1);

        if (dims.length === 0) { el.style.display = 'none'; return; }

        // Seed selection from active unit
        const activeRaw = allUnits.find(u => u.id === activeUnitId) || allUnits[0];
        const sel = {};
        dims.forEach(d => { sel[d.key] = activeRaw[d.key] || d.values[0]; });

        // Find best-matching available unit for current sel state
        const findMatch = () => {
            const avail = allUnits.filter(u => u.status === 'available');
            if (!avail.length) return allUnits[0];
            const score = u => dims.reduce((n, d) => n + (u[d.key] === sel[d.key] ? 1 : 0), 0);
            return avail.reduce((best, u) => score(u) > score(best) ? u : best, avail[0]);
        };

        const wheels = {};

        // After any sel change: disable invalid values in OTHER drums, snap if needed
        const refreshWheelStates = () => {
            dims.forEach(targetDim => {
                const otherFilters = dims.filter(d => d.key !== targetDim.key);
                const valid = new Set(
                    allUnits
                        .filter(u => u.status === 'available' &&
                            otherFilters.every(f => u[f.key] === sel[f.key]))
                        .map(u => u[targetDim.key]).filter(Boolean)
                );
                // Snap current selection if it's now invalid
                if (!valid.has(sel[targetDim.key])) {
                    const first = targetDim.values.find(v => valid.has(v));
                    if (first) {
                        sel[targetDim.key] = first;
                        wheels[targetDim.key]?.setActive(first);
                    }
                }
                wheels[targetDim.key]?.setDisabled(id => !valid.has(id));
            });
        };

        const navigate = () => {
            const match = findMatch();
            if (!match || match.id === activeUnitId) return;
            const newUnit = resolveUnit(match.id);
            if (!newUnit) return;
            history.replaceState(null, '', `showroom.html?unit=${match.id}`);
            this._reset();
            this._currentUnit = newUnit;
            this._populate(newUnit, null);
        };

        const onWheelChange = (key, val) => {
            sel[key] = val;
            refreshWheelStates();
            clearTimeout(this._drumNavTimer);
            this._drumNavTimer = setTimeout(navigate, 380);
        };

        // Render
        el.style.display = '';
        el.innerHTML = '<div class="multi-drum-row"></div>';
        const row = el.querySelector('.multi-drum-row');

        dims.forEach(d => {
            const col = document.createElement('div');
            col.className = 'multi-drum-col';

            const lbl = document.createElement('div');
            lbl.className = 'drum-col-label';
            lbl.textContent = d.label;
            col.appendChild(lbl);

            const wheelEl = document.createElement('div');
            wheelEl.className = 'drum-wheel';
            col.appendChild(wheelEl);
            row.appendChild(col);

            const items = d.values.map(v => ({
                id: v,
                label: d.fmt ? d.fmt(v) : v,
                sub: null,
                disabled: false
            }));

            const wheel = new DrumWheel(wheelEl, items, val => onWheelChange(d.key, val));
            wheel.setActive(sel[d.key]);
            wheels[d.key] = wheel;
        });

        // Set initial disabled states
        refreshWheelStates();
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
        saveBtn.setAttribute('aria-label', 'Save vehicle');

        const update = () => {
            const saved = typeof FaceoffDrawer !== 'undefined' && FaceoffDrawer.isSaved(unitId);
            saveBtn.setAttribute('data-saved', saved ? 'true' : 'false');
            saveBtn.innerHTML = `<svg width="13" height="15" viewBox="0 0 12 14" fill="${saved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 1h8v12l-4-3-4 3V1z"/></svg>`;
        };
        saveBtn.addEventListener('click', () => {
            if (typeof FaceoffDrawer !== 'undefined') { FaceoffDrawer.toggle(unitId); update(); }
        });
        cta.appendChild(saveBtn);
        update();
    },

    // ─── Ghost counter animation ──────────────────────────────────────────────
    _animateGhostCounter(unit) {
        const d    = unit.details || {};
        const back = document.getElementById('sr-ghost-backdrop');
        if (!back) return;

        const labelEl = back.querySelector('.sr-ghost-label');
        const numEl   = back.querySelector('.sr-ghost-num');
        const intEl   = back.querySelector('.sr-ghost-int');
        const decEl   = back.querySelector('.sr-ghost-dec');
        if (!numEl || !intEl) return;

        // Determine which stat we're showing and extract target number
        const raw = d.zeroToHundred || unit.power || unit.topSpeed || '';
        const m   = raw.match(/([\d.]+)/);
        if (!m) return;
        const target  = parseFloat(m[1]);
        const isTime  = !!d.zeroToHundred;
        const decimal = target < 30 && raw.includes('.');

        // Duration: 0-100 time uses actual value in ms (e.g. 4.5 → 4500ms),
        // power/speed uses a fixed 2s
        const dur = isTime ? Math.min(target * 1000, 8000) : 2000;

        // easeOutQuint: fast burst at start, decelerates hard at the end
        const ease = t => 1 - Math.pow(1 - t, 5);

        // Step 1: Fade in the label (CSS transition: 700ms)
        if (labelEl) labelEl.style.opacity = '1';

        // Step 2: After 450ms, fade in number and start counter
        setTimeout(() => {
            numEl.style.opacity = '1';

            const t0 = performance.now();
            const alphaStart = 0.08;
            const alphaEnd   = 1.0;
            const tick = now => {
                const p = Math.min((now - t0) / dur, 1);
                const e = ease(p);
                const current = target * e;

                // Interpolate color: gray → white as counter progresses
                const alpha = alphaStart + (alphaEnd - alphaStart) * e;
                numEl.style.color = `rgba(255,255,255,${alpha.toFixed(3)})`;

                // Update span contents (preserves structure)
                if (decimal) {
                    const val = current.toFixed(1);
                    const [whole, frac] = val.split('.');
                    intEl.textContent = whole;
                    if (decEl) decEl.textContent = '.' + frac;
                } else {
                    intEl.textContent = Math.round(current);
                    if (decEl) decEl.textContent = '';
                }

                if (p < 1) {
                    requestAnimationFrame(tick);
                    return;
                }

                // Counter landed — show chips after 200ms
                setTimeout(() => {
                    const cl = document.getElementById('sr-chip-left');
                    const cr = document.getElementById('sr-chip-right');
                    if (cl) cl.classList.add('visible');
                    if (cr) cr.classList.add('visible');
                }, 200);
            };
            requestAnimationFrame(tick);
        }, 450);
    },

    // ─── Mobile bottom sheet ──────────────────────────────────────────────────
    _buildSheet(unit) {
        document.querySelector('.sr-sheet')?.remove();
        document.querySelector('.sr-gallery-dots')?.remove();

        const d = unit.details || {};
        const mileageLabel = unit.mileage === 0 ? '0 km · New' : `${unit.mileage.toLocaleString()} km`;
        const condLabel = unit.condition === 'new' ? 'New' : `Pre-owned · ${unit.grade || ''}`;

        const specRow = (key, val, full) => val
            ? `<div class="sr-sheet-spec-row${full ? ' sr-sheet-spec-row--full' : ''}">
                <span class="sr-sheet-spec-label">${key}</span>
                <span class="sr-sheet-spec-val">${val}</span>
               </div>`
            : '';

        const specsHTML = `
            <div class="sr-sheet-section-label">Identity</div>
            <div class="sr-sheet-specs-grid">
                ${specRow('Manufacturer', d.manufacturer)}
                ${specRow('Year', unit.year)}
                ${specRow('Colour', unit.color)}
                ${specRow('Condition', condLabel)}
                ${specRow('Mileage', mileageLabel)}
                ${specRow('Edition', d.limited)}
                ${specRow('Production', d.production)}
            </div>
            <div class="sr-sheet-section-label">Performance</div>
            <div class="sr-sheet-specs-grid">
                ${specRow('Power', unit.power)}
                ${specRow('Torque', unit.torque)}
                ${specRow('0 – 100 km/h', d.zeroToHundred)}
                ${specRow('Top Speed', unit.topSpeed)}
                ${specRow('Engine', d.engineFull, true)}
            </div>
            <div class="sr-sheet-section-label">Interior</div>
            <div class="sr-sheet-specs-grid">
                ${specRow('Seating', d.seating)}
                ${specRow('Leather', d.leather)}
                ${specRow('Audio', d.stereo)}
                ${specRow('Heated Seats', d.heatedSeats)}
                ${specRow('Cargo', d.cargo)}
                ${specRow('Headlights', d.headlights)}
                ${specRow('AI Systems', d.ai, true)}
            </div>
            ${d.funFact ? `<p class="sr-sheet-funfact">${d.funFact}</p>` : ''}`;

        // Build sheet DOM
        const sheet = document.createElement('div');
        sheet.className = 'sr-sheet sr-sheet--collapsed';
        sheet.innerHTML = `
            <div class="sr-sheet-handle"></div>
            <div class="sr-sheet-tabs">
                <button class="sr-sheet-tab active" data-tab="overview">Overview</button>
                <button class="sr-sheet-tab" data-tab="specs">Specs</button>
                <button class="sr-sheet-tab" data-tab="docs">Docs</button>
            </div>
            <div class="sr-sheet-content">
                <div class="sr-sheet-panel active" data-panel="overview"></div>
                <div class="sr-sheet-panel" data-panel="specs">${specsHTML}</div>
                <div class="sr-sheet-panel" data-panel="docs"></div>
            </div>`;

        document.body.appendChild(sheet);

        // ── Populate Overview panel ─────────────────────────────────────────────
        const overviewPanel = sheet.querySelector('[data-panel="overview"]');

        const heroStats = [
            unit.power      ? { label: 'Power',   val: unit.power }      : null,
            d.zeroToHundred ? { label: '0 – 100', val: d.zeroToHundred } : null,
            unit.topSpeed   ? { label: 'Top Spd', val: unit.topSpeed }   : null,
        ].filter(Boolean);

        const secondaryStats = [
            d.engineFull ? ['Engine',    d.engineFull] : null,
            unit.color   ? ['Colour',    unit.color]   : null,
            ['Condition',  condLabel],
            ['Mileage',    mileageLabel],
        ].filter(Boolean);

        overviewPanel.innerHTML = `
            ${heroStats.length ? `
            <div class="sr-sheet-hero-stats">
                ${heroStats.map(s => `
                    <div class="sr-sheet-hero-stat">
                        <span class="sr-sheet-hero-label">${s.label}</span>
                        <span class="sr-sheet-hero-val">${s.val}</span>
                    </div>`).join('')}
            </div>` : ''}
            <div class="sr-sheet-specs-grid" style="margin-top:${heroStats.length ? '0.75rem' : '0.25rem'}">
                ${secondaryStats.map(([k, v]) => `
                    <div class="sr-sheet-spec-row">
                        <span class="sr-sheet-spec-label">${k}</span>
                        <span class="sr-sheet-spec-val">${v}</span>
                    </div>`).join('')}
            </div>
            ${d.funFact ? `
            <div class="sr-sheet-funfact-pull">
                <p>${d.funFact}</p>
            </div>` : ''}`;

        // Variant drum below highlights (optional — hidden if only one variant)
        const origEl = document.getElementById('unit-selector');
        if (origEl && unit.modelId) {
            const clone = document.createElement('div');
            clone.className = 'sr-unit-selector';
            overviewPanel.appendChild(clone);
            this._renderDrumSelectorInto(clone, unit.modelId, unit.id);
        }

        // ── Populate Docs panel with LACVIS + notes ─────────────────────────────
        const docsPanel = sheet.querySelector('[data-panel="docs"]');
        const lacvisWrap = document.createElement('div');
        lacvisWrap.className = 'sr-lacvis';
        lacvisWrap.id = 'sr-sheet-lacvis';
        docsPanel.appendChild(lacvisWrap);
        this._renderLACVISInto(lacvisWrap, unit);
        lacvisWrap.style.display = '';

        const notesWrap = document.createElement('div');
        notesWrap.className = 'sr-notes';
        notesWrap.id = 'sr-sheet-notes';
        docsPanel.appendChild(notesWrap);
        this._renderNotesInto(notesWrap, unit);
        notesWrap.style.display = '';

        // Show empty state in Docs if nothing available
        const hasDoc = lacvisWrap.innerHTML.trim() || notesWrap.innerHTML.trim();
        if (!hasDoc) {
            docsPanel.insertAdjacentHTML('beforeend',
                '<p class="sr-sheet-empty-docs">No documents on file for this vehicle.</p>');
        }

        // ── Tab switching ───────────────────────────────────────────────────────
        sheet.querySelectorAll('.sr-sheet-tab').forEach(btn => {
            btn.addEventListener('click', () => {
                sheet.querySelectorAll('.sr-sheet-tab').forEach(t => t.classList.remove('active'));
                sheet.querySelectorAll('.sr-sheet-panel').forEach(p => p.classList.remove('active'));
                btn.classList.add('active');
                sheet.querySelector(`[data-panel="${btn.dataset.tab}"]`).classList.add('active');
                // Expand to half if still collapsed
                if (sheet.classList.contains('sr-sheet--collapsed')) {
                    sheet.classList.remove('sr-sheet--collapsed');
                    sheet.classList.add('sr-sheet--half');
                    document.body.classList.remove('sr-sheet-half', 'sr-sheet-full');
                    document.body.classList.add('sr-sheet-half');
                }
            });
        });

        // ── Drag logic ──────────────────────────────────────────────────────────
        const handle = sheet.querySelector('.sr-sheet-handle');
        const SNAP = { collapsed: 'sr-sheet--collapsed', half: 'sr-sheet--half', full: 'sr-sheet--full' };
        let startY = 0, startTranslate = 0, currentTranslate = 0, lastTouchEnd = 0;

        const getTranslate = () => {
            if (sheet.classList.contains('sr-sheet--collapsed')) return window.innerHeight * 0.88 - 80;
            if (sheet.classList.contains('sr-sheet--half'))      return window.innerHeight * 0.38;
            return window.innerHeight * 0.12;
        };

        const snapTo = state => {
            sheet.classList.remove('sr-sheet--dragging');
            Object.values(SNAP).forEach(c => sheet.classList.remove(c));
            sheet.classList.add(SNAP[state]);
            sheet.style.transform = '';
            document.body.classList.remove('sr-sheet-half', 'sr-sheet-full');
            if (state !== 'collapsed') document.body.classList.add(`sr-sheet-${state}`);
        };

        handle.addEventListener('touchstart', e => {
            startY = e.touches[0].clientY;
            startTranslate = getTranslate();
            sheet.classList.add('sr-sheet--dragging');
        }, { passive: true });

        handle.addEventListener('touchmove', e => {
            const dy = e.touches[0].clientY - startY;
            currentTranslate = Math.max(0, startTranslate + dy);
            sheet.style.transform = `translateY(${currentTranslate}px)`;
        }, { passive: true });

        handle.addEventListener('touchend', e => {
            lastTouchEnd = Date.now();
            const dy = e.changedTouches[0].clientY - startY;
            if (dy < -60) {
                snapTo(sheet.classList.contains('sr-sheet--collapsed') ? 'half' : 'full');
            } else if (dy > 60) {
                snapTo(sheet.classList.contains('sr-sheet--full') ? 'half' : 'collapsed');
            } else if (Math.abs(dy) < 10) {
                // Tap: toggle open/closed
                if (sheet.classList.contains('sr-sheet--collapsed')) snapTo('half');
                else if (sheet.classList.contains('sr-sheet--half'))  snapTo('collapsed');
            } else {
                sheet.classList.remove('sr-sheet--dragging');
                sheet.style.transform = '';
            }
        }, { passive: true });

        // Mouse-only fallback; skip synthetic click that follows touchend
        handle.addEventListener('click', () => {
            if (Date.now() - lastTouchEnd < 500) return;
            if (sheet.classList.contains('sr-sheet--collapsed')) snapTo('half');
            else if (sheet.classList.contains('sr-sheet--half'))  snapTo('collapsed');
        });
    },

    // ─── Render drum selector into a given container ──────────────────────────
    _renderDrumSelectorInto(container, modelId, activeUnitId) {
        if (!modelId || typeof INVENTORY === 'undefined') return;
        // Reuse _renderDrumSelector logic but target custom container
        const origId = 'unit-selector';
        const orig = document.getElementById(origId);
        // Temporarily swap target
        if (orig) orig.id = '__unit-selector-hidden';
        container.id = origId;
        this._renderDrumSelector(modelId, activeUnitId);
        container.id = 'sr-sheet-drum';
        if (orig) orig.id = origId;
    },

    // ─── LACVIS render into arbitrary element ─────────────────────────────────
    _renderLACVISInto(el, unit) {
        const origId = document.getElementById('lacvis-block');
        if (origId) origId.id = '__lacvis-hidden';
        el.id = 'lacvis-block';
        this._renderLACVIS(unit);
        el.id = 'sr-sheet-lacvis';
        if (origId) origId.id = 'lacvis-block';
    },

    // ─── Notes render into arbitrary element ─────────────────────────────────
    _renderNotesInto(el, unit) {
        const origId = document.getElementById('seller-notes');
        if (origId) origId.id = '__notes-hidden';
        el.id = 'seller-notes';
        this._renderNotes(unit);
        el.id = 'sr-sheet-notes';
        if (origId) origId.id = 'seller-notes';
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
        clearTimeout(this._drumNavTimer);
        document.body.classList.remove('sr-sheet-half', 'sr-sheet-full');
        document.querySelectorAll('.sr-back, .sr-save, .sr-sheet, .sr-gallery-dots, .spec-panel--mobile, .sr-ghost-backdrop').forEach(el => el.remove());
        ['car-gallery', 'variant-selector', 'unit-selector', 'lacvis-block', 'seller-notes'].forEach(id => {
            const el = document.getElementById(id);
            if (el) { el.innerHTML = ''; el.style.display = 'none'; }
        });
        const display = document.getElementById('car-display');
        if (display) display.className = 'showroom-car';
    },

    destroy() {
        document.querySelectorAll('.sr-sheet, .sr-gallery-dots').forEach(el => el.remove());
        const player = document.querySelector('.music-player-pill');
        if (player && player.parentElement !== document.body) document.body.appendChild(player);
    }
};

window.ShowroomPage = ShowroomPage;
}
