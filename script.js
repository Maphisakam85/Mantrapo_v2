// Shared navigation; all page content and links also work without JavaScript.
const header = document.getElementById('header');
const toggle = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
if (header && toggle && navigation) {
  header.classList.add('js-ready');
  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
  const desktop = window.matchMedia('(min-width: 721px)');
  desktop.addEventListener('change', closeMenu);
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
// Service links carry a verified service name into the contact email.
const services = ['Business financial brokerage', 'Project pipeline preparation', 'Mergers & acquisitions', 'Operations, performance & productivity', 'Training'];
const selectedService = new URLSearchParams(window.location.search).get('service');
const emailLink = document.getElementById('email-enquiry');
const context = document.getElementById('service-context');
if (emailLink && context && services.includes(selectedService)) {
  context.textContent = 'Service enquiry: ' + selectedService;
  context.hidden = false;
  emailLink.href = 'mailto:moshe@mantrapro.co.za?subject=' + encodeURIComponent('Enquiry: ' + selectedService);
}
