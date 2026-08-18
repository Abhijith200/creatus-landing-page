const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

const setMenuState = (isOpen) => {
  nav.classList.toggle('open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  document.body.classList.toggle('menu-open', isOpen);
};

menuButton.addEventListener('click', () => setMenuState(!nav.classList.contains('open')));

document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => {
  setMenuState(false);
}));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuState(false);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 850) setMenuState(false);
});

const form = document.querySelector('#quote-form');
const status = document.querySelector('.form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const phone = form.elements.phone.value.trim();

  if (!name || !email || !phone) {
    status.textContent = 'Please complete your name, work email, and phone number.';
    status.classList.remove('success');
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    status.textContent = 'Please enter a valid work email address.';
    status.classList.remove('success');
    return;
  }
  status.textContent = 'Thank you—your enquiry is ready to send. We’ll be in touch shortly.';
  status.classList.add('success');
  form.reset();
});
