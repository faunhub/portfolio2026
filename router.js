document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".works-container");
    
    if (container) {
        container.addEventListener("wheel", (e) => {
            // 1. If user is swiping horizontally on trackpad, let browser handle natively
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                return;
            }

            // 2. Prevent normal vertical window scrolling
            e.preventDefault();
            
            // 3. Perform horizontal scroll smoothly
            const speedMultiplier = 3; 
            container.scrollBy({
                left: e.deltaY * speedMultiplier,
                behavior: 'auto' 
            });
        }, { passive: false });
    }
});