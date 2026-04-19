
// 1. UI INTERACTION LOGIC (DOMContentLoaded)
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-links');

    // Header Menu Toggle
    if (menu) {
        menu.addEventListener('click', () => {
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(n => 
        n.addEventListener('click', () => {
            if (menu) menu.classList.remove('is-active');
            if (menuLinks) menuLinks.classList.remove('active');
        })
    );

    // Preloader Trigger for Internal Links
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            // Only trigger if it's an internal page link (avoids mailto/anchors)
            if (href && !href.startsWith('#') && !href.startsWith('mailto:')) {
                const loader = document.querySelector('#loader-wrapper');
                if (loader) {
                    loader.style.opacity = "1";
                    loader.style.pointerEvents = "all";
                }
            }
        });
    });
});

// 2. PAGE LOAD LOGIC (window.load)
// This waits for ALL images and external assets to finish downloading
window.addEventListener('load', () => {
    const loader = document.querySelector('#loader-wrapper');
    if (loader) {
        // Small delay so the user definitely sees the logo animation
        setTimeout(() => {
            loader.classList.add('loaded');
        }, 500); 
    }
});

// 3. OPTIONAL: Inject Loader Styles if not in CSS
const style = document.createElement('style');
style.innerHTML = `
    .loaded { opacity: 0 !important; pointer-events: none !important; }
`;
document.head.appendChild(style);