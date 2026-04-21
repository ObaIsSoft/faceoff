
const Router = {
    MUSIC_ZONE: ['catalog.html', 'compare.html', 'showroom.html'],
    
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
        history.pushState(null, '', url);
        await this.handleRoute(url);
    },

    async handleRoute(url, isInitial = false) {
        const path = url.split('?')[0].split('/').pop() || 'index.html';
        
        // 1. Show/Hide Persistent Nav
        const nav = document.getElementById('persistent-nav');
        if (nav) {
            nav.style.display = (path === 'index.html' || path === '') ? 'none' : 'flex';
        }

        // 2. Cleanup old page
        if (window.currentPage && window.currentPage.destroy) {
            window.currentPage.destroy();
        }

        // 3. Fetch and swap content (if not initial load)
        if (!isInitial) {
            try {
                const response = await fetch(url);
                const html = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                
                const newMain = doc.querySelector('main');
                const currentMain = document.querySelector('main');
                
                if (newMain && currentMain) {
                    currentMain.innerHTML = newMain.innerHTML;
                    currentMain.className = newMain.className;
                    currentMain.id = newMain.id || 'main-content';
                }

                document.title = doc.title;
                document.body.className = doc.body.className;
            } catch (err) {
                console.error('Navigation failed:', err);
                // Fallback: full reload if fetch fails
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

        // 5. Music Zone Logic
        if (this.MUSIC_ZONE.includes(path)) {
            if (window.MusicPlayer) window.MusicPlayer.show();
        } else {
            if (window.MusicPlayer) window.MusicPlayer.hide();
        }

        // 6. Initialize new page logic
        this.loadPageScript(path);
        
        // 7. Scroll to top
        window.scrollTo(0, 0);
    },

    loadPageScript(path) {
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
        } else {
            window.currentPage = null;
        }

        if (window.currentPage && window.currentPage.init) {
            window.currentPage.init();
        }

        if (window.FaceoffDrawer) window.FaceoffDrawer.refresh();
    }
};

window.Router = Router;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Router.init());
} else {
    Router.init();
}
