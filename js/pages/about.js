if (!window.AboutPage) {
var AboutPage = {
    init() {
        this.setupObserver();
        this.initSpiralBloom();
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
            "Rolls-Royce":  "assets/brands/rollsroyce.svg",
            "Mercedes-Benz":"assets/brands/mercedes.svg",
            "BMW":          "assets/brands/bmw.svg",
            "Audi":         "assets/brands/audi.svg",
            "Toyota":       "assets/brands/toyota.svg",
            "Tesla":        "assets/brands/tesla.svg",
            "Jeep":         "assets/brands/jeep.svg",
            "BYD":          "assets/brands/byd.svg"
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
            const maxR = isMobile 
                ? Math.min(cW, cH) * 0.42
                : Math.min(cW, cH) * 0.44;

            const center = document.getElementById('explosion-center');
            if (center) {
                center.style.transform = `translate(-50%,-50%) scale(${1 + p * 0.2})`;
            }

            frags.forEach((el, i) => {
                const birth = (i / BRANDS.length) * 0.65;
                const local = Math.max(0, (p - birth) / (1 - (birth - 0.001)));
                const eased = 1 - Math.pow(1 - Math.min(local, 1), 2.8);
                const angle = i * GOLDEN;
                
                const startRadius = isMobile ? 40 : 76;
                const span = maxR - startRadius;
                const baseR = startRadius + i * (span / BRANDS.length);
                const r = startRadius + (baseR - startRadius) * eased;
                const x = Math.cos(angle) * r;
                const y = Math.sin(angle) * r;

                el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
                el.style.opacity = Math.min(1, eased * 2.5);
                if (isMobile) el.style.fontSize = '0.52rem';
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
