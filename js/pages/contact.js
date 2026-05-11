
if (!window.ContactPage) {
var ContactPage = {
    init() {
        const params = new URLSearchParams(window.location.search);
        const type   = params.get('type');
        const from   = params.get('from');
        const unitId = params.get('unit') || params.get('car');
        const car    = unitId && typeof resolveUnit === 'function'
            ? resolveUnit(unitId)
            : (unitId && typeof CARS !== 'undefined' ? CARS[unitId] : null);

        if (type === 'inspection' && car) document.title = `Book Inspection — ${car.name} ${car.year || ''} | Faceoff`;
        else if (type === 'inspection')   document.title = 'Book Inspection | Faceoff';
        else if (type === 'enquiry' && car) document.title = `Enquiry — ${car.name} ${car.year || ''} | Faceoff`;
        else if (type === 'enquiry')      document.title = 'Make an Enquiry | Faceoff';

        this.buildContext(type, car, from);
        this.buildForm(type, car, from, unitId);
    },

    formatPrice(nairaString) {
        const val = parseInt(nairaString.replace(/[^0-9]/g, ''), 10);
        const currency = localStorage.getItem('faceoff_currency') || 'NGN';
        const rates = { 'NGN': { symbol: '₦', rate: 1 }, 'GHS': { symbol: 'GH₵', rate: 0.012 }, 'XOF-TG': { symbol: 'CFA', rate: 0.52 }, 'XOF-BJ': { symbol: 'CFA', rate: 0.52 } };
        const cfg = rates[currency] || rates['NGN'];
        return cfg.symbol + Math.round(val * cfg.rate).toLocaleString();
    },

    _carMeta(car) {
        if (!car) return '';
        const condLabel = car.condition === 'used' ? 'Pre-owned' : 'New';
        const mileLabel = car.mileage > 0 ? `${car.mileage.toLocaleString()} km` : '0 km';
        return [car.year || '', condLabel, mileLabel].filter(Boolean).join(' · ');
    },

    buildContext(type, car, from) {
        const ctx = document.getElementById('contact-context');
        if (!ctx) return;

        if (type === 'inspection' && car) {
            ctx.innerHTML = `
                <span class="contact-eyebrow">Schedule a Viewing</span>
                <h1 class="contact-heading">Book an<br>Inspection</h1>
                <div class="contact-car-preview">
                    <img src="${car.img}" alt="${car.name}" class="contact-car-img">
                    <div class="contact-car-badge">
                        <span class="contact-car-name">${car.name}</span>
                        <span class="contact-car-price">${this.formatPrice(car.price)}</span>
                        <span class="contact-car-meta">${this._carMeta(car)}</span>
                    </div>
                </div>
                <p class="contact-context-note">Choose your preferred date and city. Our team will confirm availability within 24 hours and send full directions.</p>
                <div class="contact-meta">
                    <div class="contact-meta-item"><span class="contact-meta-label">Response</span><span class="contact-meta-val">Within 24 hours</span></div>
                    <div class="contact-meta-item"><span class="contact-meta-label">Locations</span><span class="contact-meta-val">Lagos · Abuja · PH · Enugu</span></div>
                </div>`;

        } else if (type === 'enquiry' && car) {
            ctx.innerHTML = `
                <span class="contact-eyebrow">Vehicle Enquiry</span>
                <h1 class="contact-heading">Tell Us<br>What You<br>Need</h1>
                <div class="contact-car-preview">
                    <img src="${car.img}" alt="${car.name}" class="contact-car-img">
                    <div class="contact-car-badge">
                        <span class="contact-car-name">${car.name}</span>
                        <span class="contact-car-price">${this.formatPrice(car.price)}</span>
                        <span class="contact-car-meta">${this._carMeta(car)}</span>
                    </div>
                </div>
                <p class="contact-context-note">We'll respond with full documentation, availability status, and a transparent cost breakdown — no surprises.</p>
                <div class="contact-meta">
                    <div class="contact-meta-item"><span class="contact-meta-label">Response</span><span class="contact-meta-val">Within 24 hours</span></div>
                    <div class="contact-meta-item"><span class="contact-meta-label">Includes</span><span class="contact-meta-val">VIN report · Service history · Pricing</span></div>
                </div>`;

        } else if (type === 'enquiry' && from === 'about') {
            ctx.innerHTML = `
                <span class="contact-eyebrow">General Enquiry</span>
                <h1 class="contact-heading">We'd Love<br>to Hear<br>From You</h1>
                <p class="contact-context-note">Whether it's a question about our process, a specific vehicle you have in mind, or a partnership opportunity — drop us a message.</p>
                <div class="contact-meta">
                    <div class="contact-meta-item"><span class="contact-meta-label">Headquarters</span><span class="contact-meta-val">Lagos, Nigeria</span></div>
                    <div class="contact-meta-item"><span class="contact-meta-label">Hours</span><span class="contact-meta-val">Mon – Sat, 9am – 6pm WAT</span></div>
                    <div class="contact-meta-item"><span class="contact-meta-label">Response</span><span class="contact-meta-val">Within 24 hours</span></div>
                    <div class="contact-meta-item"><span class="contact-meta-label">Coverage</span><span class="contact-meta-val">Nigeria · Ghana · Togo · Benin</span></div>
                </div>`;

        } else {
            ctx.innerHTML = `
                <span class="contact-eyebrow">Faceoff Automotive</span>
                <h1 class="contact-heading">Let's Talk<br>Automotive</h1>
                <p class="contact-context-note">Looking for a specific vehicle? Want to understand our import process? Or just want to talk cars? We're here for all of it.</p>
                <div class="contact-meta">
                    <div class="contact-meta-item"><span class="contact-meta-label">Email</span><span class="contact-meta-val">adebayokiisi@gmail.com</span></div>
                    <div class="contact-meta-item"><span class="contact-meta-label">Base</span><span class="contact-meta-val">Lagos, Nigeria</span></div>
                    <div class="contact-meta-item"><span class="contact-meta-label">Hours</span><span class="contact-meta-val">Mon – Sat, 9am – 6pm WAT</span></div>
                    <div class="contact-meta-item"><span class="contact-meta-label">Coverage</span><span class="contact-meta-val">Nigeria · Ghana · Togo · Benin</span></div>
                </div>`;
        }
    },

    buildForm(type, car, from, unitId) {
        const fields = document.getElementById('form-fields');
        if (!fields) return;

        const today = new Date().toISOString().split('T')[0];
        let msg = '';

        if (type === 'inspection' && car) {
            msg = `Hi Faceoff,\n\nI'd like to book an inspection for the ${car.year || ''} ${car.name}${car.condition === 'used' ? ' (Pre-owned, ' + (car.mileage > 0 ? car.mileage.toLocaleString() + ' km' : '0 km') + ')' : ' (New)'}.\n\nListed price: ${this.formatPrice(car.price)}\n\nPlease confirm availability at my chosen date and location.\n\nThank you.`;
        } else if (type === 'enquiry' && car) {
            msg = `Hi Faceoff,\n\nI'd like to make an enquiry about the ${car.year || ''} ${car.name}${car.condition === 'used' ? ' (Pre-owned, ' + (car.mileage > 0 ? car.mileage.toLocaleString() + ' km' : '0 km') + ')' : ' (New)'}.\n\nListed price: ${this.formatPrice(car.price)}\n\nCould you provide details on availability, full specifications, and next steps?\n\nThank you.`;
        } else if (from === 'about' || type === 'enquiry') {
            msg = `Hi Faceoff,\n\nI came across your website and I'd like to know more about what you do and how your import process works.\n\nThank you.`;
        }

        // Append customisation summary if saved for this unit
        if (unitId) {
            const configSummary = localStorage.getItem('faceoff_last_config_summary');
            const configUnitId  = localStorage.getItem('faceoff_last_config_unitId');
            if (configSummary && configUnitId === unitId) {
                msg += `\n\nCustomisation: ${configSummary}`;
            }
        }

        let html = `
            <div class="cf-group">
                <label class="cf-label">Full Name</label>
                <input type="text" name="name" class="cf-input" required placeholder="Your full name">
            </div>
            <div class="cf-row--half">
                <div class="cf-group">
                    <label class="cf-label">Email Address</label>
                    <input type="email" name="email" class="cf-input" required placeholder="your@email.com">
                </div>
                <div class="cf-group">
                    <label class="cf-label">Phone Number</label>
                    <input type="tel" name="phone" class="cf-input" placeholder="+234 xxx xxx xxxx">
                </div>
            </div>`;

        if (type === 'inspection') {
            html += `
            <div class="cf-row--half">
                <div class="cf-group">
                    <label class="cf-label">Preferred Inspection Date</label>
                    <input type="date" name="date" class="cf-input" required min="${today}">
                </div>
                <div class="cf-group">
                    <label class="cf-label">Inspection Location</label>
                    <select name="location" class="cf-input cf-select" required>
                        <option value="" disabled selected>Select a city</option>
                        <option>Lagos Island</option>
                        <option>Lagos Mainland</option>
                        <option>Abuja</option>
                        <option>Port Harcourt</option>
                        <option>Enugu</option>
                        <option>I'll travel to your facility (Lagos)</option>
                    </select>
                </div>
            </div>`;
        }

        if (!type) {
            html += `
            <div class="cf-group">
                <label class="cf-label">Subject</label>
                <input type="text" name="subject" class="cf-input" placeholder="What is this about?">
            </div>`;
        }

        html += `
            <div class="cf-group">
                <label class="cf-label">Message</label>
                <textarea name="message" class="cf-input cf-textarea" rows="6">${msg}</textarea>
            </div>`;

        fields.innerHTML = html;

        const form = document.getElementById('contact-form');
        if (form) {
            form.onsubmit = (e) => {
                e.preventDefault();
                const data     = new FormData(form);
                const name     = data.get('name');
                const email    = data.get('email');
                const phone    = data.get('phone') || 'Not provided';
                const message  = data.get('message');
                const date     = data.get('date')     || '';
                const location = data.get('location') || '';
                const subjectInput = data.get('subject') || '';

                let subject;
                if (type === 'inspection' && car) subject = `Inspection Request — ${car.name}`;
                else if (type === 'enquiry' && car) subject = `Vehicle Enquiry — ${car.name}`;
                else if (subjectInput) subject = subjectInput;
                else subject = 'Faceoff — New Enquiry';

                let body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n`;
                if (date)     body += `Preferred Date: ${date}\n`;
                if (location) body += `Location: ${location}\n`;
                body += `\n${message}`;

                window.location.href = `mailto:adebayokiisi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            };
        }
    }
};

window.ContactPage = ContactPage;
}
