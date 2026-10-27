const footer = document.querySelector('footer');
const TRIGGER = 60; // px from the bottom edge that wakes the footer
const hasMouse = window.matchMedia('(hover: hover) and (pointer: fine)');

if (footer) {
  window.addEventListener('mousemove', (e) => {
    if (!hasMouse.matches) return; // touch devices: do nothing
    const nearBottom = e.clientY > window.innerHeight - TRIGGER;
    footer.classList.toggle('open', nearBottom || footer.matches(':hover'));
  });

  document.documentElement.addEventListener('mouseleave', () => {
    footer.classList.remove('open');
  });
}