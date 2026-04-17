document.addEventListener('DOMContentLoaded', () => {
    // Reveal Observer
    const revealOptions = {
        threshold: 0.3, // Trigger when 30% of the block is visible
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
            } else {
                // Optional: Remove class to re-animate when scrolling back up
                entry.target.classList.remove('reveal-active');
            }
        });
    }, revealOptions);

    const snapBlocks = document.querySelectorAll('[data-snap]');
    
    snapBlocks.forEach(block => {
        // Prepare initial state
        block.style.opacity = "0";
        block.style.transform = "translateY(60px)";
        block.style.transition = "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)";
        
        revealObserver.observe(block);
    });
});

/* Helper Style for JS animation */
const snapStyle = document.createElement('style');
snapStyle.innerHTML = `
    .reveal-active {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    /* Optional: Scale up the gallery slightly when active */
    .reveal-active .milestone-gallery {
        transform: scale(1);
        transition: transform 1.2s ease;
    }
`;
document.head.appendChild(snapStyle);