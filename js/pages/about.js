if (!window.AboutPage) {
var AboutPage = {
    init() {
        this.setupObserver();
        this.initSpiralBloom();
        this.initCatAccordion();
    },

    initCatAccordion() {
        const isMobile = () => window.innerWidth <= 768;
        const panels = document.querySelectorAll('.cat-panel');
        if (!panels.length) return;

        const sync = () => {
            if (isMobile()) {
                if (!document.querySelector('.cat-panel.is-open')) {
                    panels[0].classList.add('is-open');
                }
            } else {
                panels.forEach(p => p.classList.remove('is-open'));
            }
        };

        sync();
        window.addEventListener('resize', sync);

        panels.forEach(panel => {
            panel.addEventListener('click', () => {
                if (!isMobile()) return;
                const isOpen = panel.classList.contains('is-open');
                panels.forEach(p => p.classList.remove('is-open'));
                if (!isOpen) panel.classList.add('is-open');
            });
        });
    },

    setupObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.08 });
        document.querySelectorAll('.about-section').forEach(s => observer.observe(s));
    },

    initSpiralBloom() {
        const BRANDS = [
            "Rolls-Royce", "Bentley", "Mercedes-Benz", "BMW", "Audi", "Lexus",
            "Land Rover", "Porsche", "Genesis", "Cadillac", "Ferrari", "Lamborghini",
            "McLaren", "Aston Martin", "Bugatti", "Pagani", "Koenigsegg", "Maserati",
            "Lotus", "Rimac", "Toyota", "Honda", "Ford", "Chevrolet", "Tesla",
            "Volkswagen", "Volvo", "Jaguar", "Hyundai", "Kia", "Jeep", "Dodge",
            "RAM", "GMC", "Alfa Romeo", "Mini", "Subaru", "Nissan", "Infiniti", "Rivian"
        ];

        const BRAND_LOGOS = {
            "Rolls-Royce":   "assets/brands/rollsroyce.svg",
            "Bentley":       "assets/brands/bentley.svg",
            "Mercedes-Benz": "assets/brands/mercedes.svg",
            "BMW":           "assets/brands/bmw.svg",
            "Audi":          "assets/brands/audi.svg",
            "Land Rover":    "assets/brands/landrover.svg",
            "Porsche":       "assets/brands/porsche.svg",
            "Cadillac":      "assets/brands/cadillac.svg",
            "Ferrari":       "assets/brands/ferrari.svg",
            "Lamborghini":   "assets/brands/lamborghini.svg",
            "McLaren":       "assets/brands/mclaren.svg",
            "Aston Martin":  "assets/brands/astonmartin.svg",
            "Bugatti":       "assets/brands/bugatti.svg",
            "Koenigsegg":    "assets/brands/koenigsegg.svg",
            "Maserati":      "assets/brands/maserati.svg",
            "Toyota":        "assets/brands/toyota.svg",
            "Honda":         "assets/brands/honda.svg",
            "Ford":          "assets/brands/ford.svg",
            "Chevrolet":     "assets/brands/chevrolet.svg",
            "Tesla":         "assets/brands/tesla.svg",
            "Volkswagen":    "assets/brands/volkswagen.svg",
            "Volvo":         "assets/brands/volvo.svg",
            "Jaguar":        "assets/brands/jaguar.svg",
            "Hyundai":       "assets/brands/hyundai.svg",
            "Kia":           "assets/brands/kia.svg",
            "Jeep":          "assets/brands/jeep.svg",
            "RAM":           "assets/brands/ram.svg",
            "Alfa Romeo":    "assets/brands/alfaromeo.svg",
            "Mini":          "assets/brands/mini.svg",
            "Subaru":        "assets/brands/subaru.svg",
            "Nissan":        "assets/brands/nissan.svg",
            "Infiniti":      "assets/brands/infiniti.svg"
        };

        const GOLDEN = 2.39996; // golden angle in radians
        const root = document.getElementById('explosion-root');
        const section = document.getElementById('brand-spiral-section');
        if (!root || !section) return;

        // Clear existing fragments if any (for SPA re-entry)
        root.querySelectorAll('.brand-fragment').forEach(el => el.remove());

        // Inject fragments
        BRANDS.forEach(name => {
            const el = document.createElement('span');
            el.className = 'brand-fragment';
            const logo = BRAND_LOGOS[name];
            if (logo) {
                const img = document.createElement('img');
                img.src = logo;
                img.alt = name;
                img.className = 'brand-logo-img';
                el.appendChild(img);
            }
            const label = document.createElement('span');
            label.className = 'brand-name';
            label.textContent = name;
            el.appendChild(label);
            root.appendChild(el);
        });

        const bloom = () => {
            const rect = section.getBoundingClientRect();
            const total = section.offsetHeight - window.innerHeight;
            const p = Math.max(0, Math.min(1, -rect.top / (total || 1)));
            
            const frags = root.querySelectorAll('.brand-fragment');
            const cW = root.offsetWidth;
            const cH = root.offsetHeight;
            
            const isMobile = window.innerWidth < 768;

            // Elliptical spread on mobile: use full viewport height, cap width to screen
            const maxRx = isMobile ? cW * 0.46 : Math.min(cW, cH) * 0.44;
            const maxRy = isMobile ? cH * 0.44 : Math.min(cW, cH) * 0.44;

            const center = document.getElementById('explosion-center');
            if (center) {
                center.style.transform = `translate(-50%,-50%) scale(${1 + p * 0.2})`;
            }

            frags.forEach((el, i) => {
                const birth = (i / BRANDS.length) * 0.65;
                const local = Math.max(0, (p - birth) / (1 - (birth - 0.001)));
                const eased = 1 - Math.pow(1 - Math.min(local, 1), 2.8);
                const angle = i * GOLDEN;

                const startR = isMobile ? 48 : 76;
                const spanX = maxRx - startR;
                const spanY = maxRy - startR;
                const baseRx = startR + i * (spanX / BRANDS.length);
                const baseRy = startR + i * (spanY / BRANDS.length);
                const rx = startR + (baseRx - startR) * eased;
                const ry = startR + (baseRy - startR) * eased;
                const x = Math.cos(angle) * rx;
                const y = Math.sin(angle) * ry;

                el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
                el.style.opacity = Math.min(1, eased * 2.5);
                if (isMobile) el.style.fontSize = '0.5rem';
            });
        };

        this._bloomHandler = bloom;
        window.addEventListener('scroll', this._bloomHandler, { passive: true });
        window.addEventListener('resize', this._bloomHandler, { passive: true });
        bloom();
    },

    destroy() {
        if (this._bloomHandler) {
            window.removeEventListener('scroll', this._bloomHandler);
            window.removeEventListener('resize', this._bloomHandler);
        }
    }
};

window.AboutPage = AboutPage;
}
