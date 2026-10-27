// Floating items + shuffle. Only needed on the page that has .float-field.
const items = document.querySelectorAll('.float-field .item');
const rand = (min, max) => Math.random() * (max - min) + min;

// give each item its own drift personality
items.forEach((el) => {
  el.style.setProperty('--dur', `${rand(5, 10)}s`);
  el.style.setProperty('--delay', `${rand(-5, 0)}s`); // negative = starts mid-cycle
  el.style.setProperty('--dx', `${rand(-20, 20)}px`);
  el.style.setProperty('--dy', `${rand(-25, 25)}px`);
});

// shuffle: glide everything to new spots (kept in the middle so it stays
// clear of the text on the left and the photo on the right)
document.getElementById('shuffle')?.addEventListener('click', () => {
  items.forEach((el) => {
    el.style.setProperty('--x', `${rand(22, 70)}%`);
    el.style.setProperty('--y', `${rand(8, 68)}%`);
    el.style.setProperty('--r', `${rand(-15, 15)}deg`);
  });
});
