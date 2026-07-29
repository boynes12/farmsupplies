/* Harvest & Field — quote cart
   Lets a customer add several products to a running "quote list" as they
   browse, then submit one quote request covering everything they picked.
   Persisted in localStorage so it survives page navigation and refresh.
*/
const QUOTE_CART_KEY = 'hf_quote_cart';

function getQuoteCart() {
  try {
    const raw = localStorage.getItem(QUOTE_CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function setQuoteCart(ids) {
  try {
    localStorage.setItem(QUOTE_CART_KEY, JSON.stringify(ids));
  } catch (e) { /* storage unavailable — cart just won't persist */ }
  updateCartUI();
}

function addToQuoteCart(id) {
  const cart = getQuoteCart();
  if (!cart.includes(id)) {
    cart.push(id);
    setQuoteCart(cart);
  }
}

function removeFromQuoteCart(id) {
  setQuoteCart(getQuoteCart().filter((x) => x !== id));
}

function clearQuoteCart() {
  setQuoteCart([]);
}

// Refresh every badge, every "Add to quote" button state, and (if present)
// the full cart list on the quote form.
function updateCartUI() {
  const cart = getQuoteCart();

  document.querySelectorAll('[data-cart-badge]').forEach((el) => {
    el.textContent = cart.length;
    el.hidden = cart.length === 0;
  });

  document.querySelectorAll('[data-add-to-quote]').forEach((btn) => {
    const id = btn.getAttribute('data-add-to-quote');
    const inCart = cart.includes(id);
    btn.classList.toggle('in-cart', inCart);
    btn.textContent = inCart ? 'Added ✓' : '+ Add to quote';
    btn.setAttribute('aria-pressed', inCart ? 'true' : 'false');
  });

  renderQuoteCartSection();
}

// Only does anything on the homepage, where the quote form's cart list lives.
function renderQuoteCartSection() {
  const listEl = document.getElementById('quote-cart-list');
  if (!listEl) return;

  const emptyEl = document.getElementById('quote-cart-empty');
  const fieldEl = document.getElementById('quote-products-field');
  const messageEl = document.getElementById('quote-message');
  const countEl = document.getElementById('quote-cart-count');

  const ids = getQuoteCart();
  const items = typeof PRODUCTS === 'undefined'
    ? []
    : ids.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);

  if (countEl) countEl.textContent = items.length === 1 ? '1 item selected' : `${items.length} items selected`;

  if (items.length === 0) {
    listEl.hidden = true;
    listEl.innerHTML = '';
    if (emptyEl) emptyEl.hidden = false;
    if (fieldEl) fieldEl.value = '';
    return;
  }

  if (emptyEl) emptyEl.hidden = true;
  listEl.hidden = false;
  listEl.innerHTML = items.map((p) => `
    <li class="quote-cart-item">
      <img src="images/${p.image}" alt="" loading="lazy" />
      <span class="quote-cart-item-name">${p.name}</span>
      <button type="button" class="quote-cart-remove" data-remove-from-quote="${p.id}" aria-label="Remove ${p.name} from quote list">×</button>
    </li>`).join('');

  if (fieldEl) fieldEl.value = items.map((p) => p.name).join(', ');

  if (messageEl && !messageEl.dataset.userEdited) {
    messageEl.value = `I'd like a quote for:\n${items.map((p) => '- ' + p.name).join('\n')}\n\nCrop / use case:\nQuantity needed:\nLocation:\n`;
  }
}

// Track manual edits so we stop overwriting the message once the person
// starts typing their own note.
(function watchMessageEdits() {
  const messageEl = document.getElementById('quote-message');
  if (messageEl) {
    messageEl.addEventListener('input', () => { messageEl.dataset.userEdited = 'true'; });
  }
})();

// Event delegation: add / remove / clear, from anywhere on the page.
document.addEventListener('click', (e) => {
  const addBtn = e.target.closest('[data-add-to-quote]');
  if (addBtn) {
    e.preventDefault();
    e.stopPropagation();
    const id = addBtn.getAttribute('data-add-to-quote');
    if (getQuoteCart().includes(id)) {
      removeFromQuoteCart(id);
    } else {
      addToQuoteCart(id);
    }
    return;
  }

  const removeBtn = e.target.closest('[data-remove-from-quote]');
  if (removeBtn) {
    e.preventDefault();
    removeFromQuoteCart(removeBtn.getAttribute('data-remove-from-quote'));
    return;
  }

  const clearBtn = e.target.closest('#quote-cart-clear');
  if (clearBtn) {
    e.preventDefault();
    clearQuoteCart();
  }
});

updateCartUI();
