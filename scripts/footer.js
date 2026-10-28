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

const clean = (p) => p.replace(/index\.html$/, '').replace(/\.html$/, '').replace(/\/+$/, '') || '/';
const here = clean(location.pathname);

document.querySelectorAll('nav .nav-tab a').forEach((a) => {
  const target = clean(new URL(a.href).pathname);
  if (here === target || here.startsWith(target + '/')) {
    a.closest('.nav-tab').classList.add('active');
    a.setAttribute('aria-current', 'page');
  }
})