document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".works-container");
    
    if (container) {
        container.addEventListener("wheel", (e) => {
            // 1. If the user is swiping horizontally on a trackpad, let the browser handle it natively
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                return; // Don't prevent default, native trackpad swipe is ultra-fast
            }

            // 2. If it's vertical scrolling (mouse wheel or vertical trackpad swipe):
            e.preventDefault();
            
            // Multiply deltaY to speed up the scroll rate (adjust 2.5 to preference)
            const speedMultiplier = 2.5; 
            container.scrollLeft += e.deltaY * speedMultiplier;
        }, { passive: false });
    }
});