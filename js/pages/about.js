
const AboutPage = {
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add('visible');
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.about-section').forEach(sec => observer.observe(sec));
    },
    destroy() {}
};
window.AboutPage = AboutPage;
