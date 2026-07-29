function statusClass(status) {
  const map = {
    "In stock": "status-in",
    "Low stock": "status-low",
    "Out of stock": "status-out",
    "Special order": "status-special"
  };
  return map[status] || "status-in";
}

// How many cards show before a "View more" button appears, per category.
const INITIAL_VISIBLE = 8;

function cardHTML(p) {
  return `
    <div class="catalog-card">
      <a class="catalog-card-link" href="product.html?id=${encodeURIComponent(p.id)}">
        <div class="catalog-card-image">
          <img src="../images/${p.image}" alt="${p.name}" loading="lazy" />
          <span class="status-pill ${statusClass(p.status)}">${p.status}</span>
        </div>
        <div class="catalog-card-body">
          <h3>${p.name}</h3>
          <p>${p.short}</p>
          <span class="catalog-card-price">${p.price}</span>
        </div>
      </a>
      <button type="button" class="add-to-quote-btn" data-add-to-quote="${p.id}">+ Add to quote</button>
    </div>`;
}

function renderCategory(cat, items) {
  const grid = document.getElementById(`grid-${cat}`);
  if (!grid) return;

  if (!items.length) {
    grid.innerHTML = `<p class="empty-note">No items listed in this category yet — contact us for availability.</p>`;
    return;
  }

  const hasMore = items.length > INITIAL_VISIBLE;
  const visible = hasMore ? items.slice(0, INITIAL_VISIBLE) : items;
  const hidden = hasMore ? items.slice(INITIAL_VISIBLE) : [];

  grid.innerHTML = visible.map(cardHTML).join("");

  // Remove any previous "view more" control for this category before re-adding one
  const existingControl = grid.parentElement.querySelector(`[data-view-more-for="${cat}"]`);
  if (existingControl) existingControl.remove();

  if (hasMore) {
    const wrapper = document.createElement("div");
    wrapper.className = "view-more-wrapper";
    wrapper.setAttribute("data-view-more-for", cat);
    wrapper.innerHTML = `<button type="button" class="view-more-btn" data-view-more="${cat}">View more products (${hidden.length} more) <span>↓</span></button>`;
    grid.insertAdjacentElement("afterend", wrapper);

    wrapper.querySelector("[data-view-more]").addEventListener("click", (e) => {
      grid.insertAdjacentHTML("beforeend", hidden.map(cardHTML).join(""));
      wrapper.remove();
      if (typeof updateCartUI === "function") updateCartUI();
    });
  }
}

function render() {
  const groups = { seeds: [], fertilizers: [], protection: [], sprayers: [], tools: [], "livestock-care": [] };
  PRODUCTS.forEach((p) => { if (groups[p.category]) groups[p.category].push(p); });

  Object.keys(groups).forEach((cat) => renderCategory(cat, groups[cat]));

  if (typeof updateCartUI === "function") updateCartUI();
}

render();
