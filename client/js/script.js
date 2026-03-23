document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('mainNav');
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    const updateNav = () => {
        if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);

        let cur = '';
        sections.forEach((s) => {
            if (window.scrollY >= s.offsetTop - 100) cur = s.id;
        });

        links.forEach((l) => {
            l.classList.toggle('active', l.getAttribute('href') === `#${cur}`);
        });
    };

    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
});