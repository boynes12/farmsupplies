const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', open);
    menuButton.textContent = open ? 'Close' : 'Menu';
  });

  document.querySelectorAll('.site-nav > a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = 'Menu';
  }));
}

// Products dropdown (desktop click/keyboard + mobile inline)
const dropdownTrigger = document.querySelector('.nav-dropdown-trigger');
const dropdownPanel = document.getElementById('nav-dropdown-panel');

if (dropdownTrigger && dropdownPanel) {
  const closeDropdown = () => {
    dropdownTrigger.setAttribute('aria-expanded', 'false');
    dropdownPanel.classList.remove('open');
  };
  const toggleDropdown = () => {
    const open = dropdownPanel.classList.toggle('open');
    dropdownTrigger.setAttribute('aria-expanded', open);
  };

  dropdownTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown();
  });

  document.addEventListener('click', (e) => {
    if (!dropdownPanel.contains(e.target) && e.target !== dropdownTrigger) {
      closeDropdown();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDropdown();
  });

  dropdownPanel.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeDropdown));
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
