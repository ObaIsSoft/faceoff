if (!window.ArticlePage) {
var ArticlePage = {
    init() {
        const urlParams = new URLSearchParams(window.location.search);
        const unitId = urlParams.get('unit');
        
        // Find the unit in INVENTORY
        const unit = window.INVENTORY.find(u => u.id === unitId);
        if (!unit) {
            document.getElementById('article-title').textContent = "Vehicle not found";
            return;
        }

        // Resolve the base variant data
        const variant = window.resolveVariant ? window.resolveVariant(unit.variantId) : {};

        document.getElementById('article-eyebrow').textContent = `${variant.brand || ''} ${variant.model || ''}`;
        document.getElementById('article-title').textContent = variant.name || unitId;
        
        const img = document.getElementById('article-image');
        // Fallback sequence: unit's image -> variant's image -> empty
        const imgPath = (unit.imgs && unit.imgs.length > 0) ? unit.imgs[0] : variant.img;
        if (imgPath) {
            img.src = imgPath;
            img.style.display = 'block';
        }

        const body = document.getElementById('article-body');
        
        const details = variant.details || {};
        const notes = unit.notes || 'No description available.';
        
        let content = `<p>${notes}</p>`;
        
        if (details.funFact) {
            content += `<br><h3>Behind the Engineering</h3><p>${details.funFact}</p>`;
        }
        
        if (details.engineFull || variant.power) {
            content += `<br><h3>Performance Specs</h3><p>Powered by ${details.engineFull || 'a high-performance engine'} delivering ${variant.power || 'exceptional power'}, reaching a top speed of ${variant.topSpeed || 'supercar levels'}.</p>`;
        }

        body.innerHTML = content;
        
        document.getElementById('article-back').href = `showroom.html?unit=${unitId}`;
    }
};

document.addEventListener('DOMContentLoaded', () => ArticlePage.init());
}
