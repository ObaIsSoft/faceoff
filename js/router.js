
if (!window.Router) {
var Router = {
    MUSIC_ZONE: ['catalog', 'compare', 'showroom'],
    
    init() {
        window.addEventListener('popstate', () => this.handleRoute(window.location.pathname + window.location.search));
        this.interceptLinks();
        // Run initial route logic
        this.handleRoute(window.location.pathname + window.location.search, true);
    },

    interceptLinks() {
        document.body.addEventListener('click', e => {
            const link = e.target.closest('a');
            if (!link) return;

            // Check if it's an internal link
            const isInternal = link.hostname === window.location.hostname && 
                               !link.hash && 
                               !link.href.endsWith('.mp3') && 
                               link.target !== '_blank';

            if (isInternal || link.hasAttribute('data-router-link')) {
                e.preventDefault();
                const url = link.getAttribute('href');
                this.navigate(url);
            }
        });
    },

    async navigate(url) {
        if (url === window.location.pathname + window.location.search) return;
        // Bypass SPA for customize page — Three.js ES modules can't re-execute inside innerHTML swap
        const targetPath = url.split('?')[0].split('/').pop();
        if (targetPath === 'customize.html') {
            window.location.href = url;
            return;
        }
        history.pushState(null, '', url);
        await this.handleRoute(url);
    },

    async handleRoute(url, isInitial = false) {
        let path = url.split('?')[0].split('/').pop() || 'index.html';
        if (path === '' || path === '/') path = 'index.html';
        if (!path.includes('.')) path += '.html';
        
        // Normalize: remove .html for matching
        const baseName = path.replace('.html', '');
        const isZonePage = this.MUSIC_ZONE.some(zone => baseName === zone || path === `${zone}.html`);
        
        document.body.classList.toggle('is-zone-page', isZonePage);
        if (isZonePage) {
            document.body.classList.add(`page-${baseName}`);
        } else {
            document.body.classList.remove('page-catalog', 'page-compare', 'page-showroom');
        }

        // 1. Show/Hide Persistent Nav
        const nav = document.getElementById('persistent-nav');
        if (nav) {
            nav.style.display = (path === 'index.html') ? 'none' : 'flex';
        }

        // 2. Cleanup old page
        if (window.currentPage && window.currentPage.destroy) {
            window.currentPage.destroy();
        }

        // 3. Fetch and swap content (if not initial load)
        if (!isInitial) {
            try {
                // Ensure we fetch the actual component file, not the SPA entry point
                const fetchUrl = url.includes('.html') ? url : (url.endsWith('/') ? `${url}index.html` : `${url}.html`);
                const response = await fetch(fetchUrl);
                
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                
                const html = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                
                const newMain = doc.querySelector('main');
                const currentMain = document.querySelector('main');
                
                if (newMain && currentMain) {
                    currentMain.innerHTML = newMain.innerHTML;
                    currentMain.className = newMain.className;
                    currentMain.id = 'main-content';
                }

                document.title = doc.title;
                // Preserve global classes
                const preservedClasses = Array.from(document.body.classList).filter(c => c.startsWith('is-zone-page') || c.startsWith('page-'));
                document.body.className = doc.body.className;
                preservedClasses.forEach(c => document.body.classList.add(c));
            } catch (err) {
                console.error('Navigation failed:', err);
                window.location.href = url;
                return;
            }
        }

        // 4. Update active nav links
        document.querySelectorAll('.nav-links a').forEach(a => {
            const aPath = a.getAttribute('href');
            const isActive = (aPath === path) || (path === 'index.html' && aPath === 'index.html');
            a.style.fontWeight = isActive ? '900' : 'normal';
            a.style.opacity = isActive ? '1' : '0.6';
        });

        // 5. Zone Logic
        const triggerGlobalUI = () => {
            if (isZonePage) {
                document.body.classList.add('is-zone-page');
                document.body.classList.add(`page-${baseName}`);
                if (window.MusicPlayer && typeof window.MusicPlayer.show === 'function') window.MusicPlayer.show();
                if (window.FaceoffDrawer && typeof window.FaceoffDrawer.show === 'function') window.FaceoffDrawer.show();
            } else {
                document.body.classList.remove('is-zone-page', 'page-catalog', 'page-compare', 'page-showroom');
                if (window.MusicPlayer && typeof window.MusicPlayer.hide === 'function') window.MusicPlayer.hide();
                if (window.FaceoffDrawer && typeof window.FaceoffDrawer.hide === 'function') window.FaceoffDrawer.hide();
            }
        };

        triggerGlobalUI();

        // 6. Initialize new page logic - With small delay for DOM settlement
        setTimeout(() => this.loadPageScript(path), 50);
        
        // 7. Scroll to top
        window.scrollTo(0, 0);
    },

    loadPageScript(path) {
        const baseName = path.replace('.html', '');
        if (path === 'catalog.html') {
            window.currentPage = window.CatalogPage;
        } else if (path === 'compare.html') {
            window.currentPage = window.ComparePage;
        } else if (path === 'showroom.html') {
            window.currentPage = window.ShowroomPage;
        } else if (path === 'contact.html') {
            window.currentPage = window.ContactPage;
        } else if (path === 'about.html') {
            window.currentPage = window.AboutPage;
        } else if (path === 'index.html') {
            window.currentPage = {
                init: () => {
                    document.querySelectorAll('.currency-btn').forEach(btn => {
                        btn.addEventListener('click', () => {
                            document.querySelectorAll('.currency-btn').forEach(b => b.classList.remove('active'));
                            btn.classList.add('active');
                            localStorage.setItem('faceoff_currency', btn.dataset.cur);
                            if (window.CatalogPage) window.CatalogPage.renderGrid();
                        });
                    });
                    const saved = localStorage.getItem('faceoff_currency');
                    if (saved) {
                        const btn = document.querySelector(`[data-cur="${saved}"]`);
                        if (btn) {
                            document.querySelectorAll('.currency-btn').forEach(b => b.classList.remove('active'));
                            btn.classList.add('active');
                        }
                    }
                }
            };
        } else {
            window.currentPage = null;
        }

        if (window.currentPage && window.currentPage.init) {
            window.currentPage.init();
        }

        if (window.FaceoffDrawer && window.FaceoffDrawer.refresh) window.FaceoffDrawer.refresh();
    }
};

window.Router = Router;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Router.init());
} else {
    Router.init();
}
}
