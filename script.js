// Slide-in effect on scroll
const sliders = document.querySelectorAll('.slide-in');

const appearOnScroll = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

// Slide-in effect on scroll
const sections = document.querySelectorAll('.culture-section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => {
  observer.observe(section);
});

const heroImg = document.querySelector('.hero-bottom-left');

window.addEventListener('scroll', () => {
  const rect = heroImg.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    heroImg.classList.add('visible');
  }
});
