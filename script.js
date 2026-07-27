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

// Quote form: pick up a product name passed from a product detail page
(function wireQuoteProduct() {
  const nameEl = document.getElementById('quote-selected-name');
  const wrapperEl = document.getElementById('quote-selected-product');
  const fieldEl = document.getElementById('quote-product-field');
  const messageEl = document.getElementById('quote-message');
  const clearBtn = document.getElementById('quote-clear-product');
  if (!nameEl || !wrapperEl || !fieldEl) return;

  function applyProduct(name) {
    if (!name) {
      wrapperEl.hidden = true;
      fieldEl.value = '';
      return;
    }
    wrapperEl.hidden = false;
    nameEl.textContent = name;
    fieldEl.value = name;
    if (messageEl && !messageEl.value) {
      messageEl.value = `I'd like a quote for: ${name}\n\nCrop / use case:\nQuantity needed:\nLocation:\n`;
    }
  }

  let productName = null;
  try {
    productName = sessionStorage.getItem('hf_quote_product');
  } catch (e) { /* sessionStorage unavailable */ }

  if (productName) {
    applyProduct(productName);
    // Scroll the quote section into view if we arrived via a product link
    if (window.location.hash === '#quote' || window.location.hash.startsWith('#quote')) {
      const quoteSection = document.getElementById('quote');
      if (quoteSection) quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      try { sessionStorage.removeItem('hf_quote_product'); } catch (e) { /* ignore */ }
      applyProduct(null);
    });
  }
})();
