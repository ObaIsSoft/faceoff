
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
            display.innerHTML = `<img src="${unit.img}" alt="${unit.name}" style="width:100%;object-fit:contain;">` + (isConfiguredEarly ? `<div id="config-badge" class="sr-config-badge"><div class="sr-config-header"><span class="sr-config-dot"></span><span class="sr-config-label">Configured</span></div><span class="sr-config-summary">${configSummaryEarly}</span><a href="customize.html?unit=${unit.id}" class="sr-config-edit">Edit</a></div>` : '<div id="config-badge" class="sr-config-badge" style="display:none"></div>');
            if (unit.facesRight === false) display.classList.add('flipped');
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
        clearTimeout(this._drumNavTimer);
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
