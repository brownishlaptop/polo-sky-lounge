const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.menu-tabs button').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.menu-tabs button, .menu-panel').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  document.getElementById(button.dataset.menu).classList.add('active');
}));

const galleryItems = document.querySelectorAll('.gallery-item');
document.querySelectorAll('.gallery-filter button').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.gallery-filter button').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  galleryItems.forEach((item) => item.classList.toggle('hidden', button.dataset.filter !== 'all' && !item.classList.contains(button.dataset.filter)));
}));

const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
galleryItems.forEach((item) => item.addEventListener('click', () => {
  lightboxImage.style.backgroundImage = `url("assets/${item.dataset.image}")`;
  lightboxImage.style.backgroundPosition = item.dataset.position;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}));
document.querySelector('.lightbox-close').addEventListener('click', () => {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
});
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) document.querySelector('.lightbox-close').click();
});

document.querySelector('.reservation-form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('.form-message').textContent = 'Thank you — your reservation request is ready. We’ll confirm it via phone or WhatsApp.';
});
