// Wrap your code like this:
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-links');

    // Add a console log to verify it's working
    console.log("Menu script loaded!");

    if (menu) {
        menu.addEventListener('click', function() {
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(n => 
        n.addEventListener('click', () => {
            menu.classList.remove('is-active');
            menuLinks.classList.remove('active');
        })
    );
});