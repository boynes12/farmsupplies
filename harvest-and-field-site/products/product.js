function statusClass(status) {
  const map = {
    "In stock": "status-in",
    "Low stock": "status-low",
    "Out of stock": "status-out",
    "Special order": "status-special"
  };
  return map[status] || "status-in";
}

const CATEGORY_LABELS = {
  seeds: "Seeds",
  fertilizers: "Fertilizers",
  protection: "Pesticides & insecticides",
  sprayers: "Sprayers & application equipment",
  tools: "Tools & equipment",
  "livestock-care": "Livestock & equine care"
};

function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

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

function renderProduct() {
  const id = getParam("id");
  const product = PRODUCTS.find((p) => p.id === id);
  const container = document.getElementById("product-detail");

  if (!product) {
    container.innerHTML = `
      <div class="product-missing">
        <h1>Product not found</h1>
        <p>That item may have been removed or the link is out of date.</p>
        <a class="button" href="index.html">Back to all products</a>
      </div>`;
    return;
  }

  document.title = `${product.name} | Harvest & Field`;

  const crumbCategory = document.getElementById("crumb-category");
  crumbCategory.textContent = CATEGORY_LABELS[product.category] || "Category";
  crumbCategory.href = `index.html#${product.category}`;
  document.getElementById("crumb-name").textContent = product.name;

  container.innerHTML = `
    <div class="product-image">
      <img src="../images/${product.image}" alt="${product.name}" />
    </div>
    <div class="product-info">
      <p class="eyebrow">${CATEGORY_LABELS[product.category] || ""}</p>
      <h1>${product.name}</h1>
      <span class="status-pill status-pill-lg ${statusClass(product.status)}">${product.status}</span>
      <p class="product-price">${product.price}</p>
      <p class="product-description">${product.description}</p>
      <div class="product-actions">
        <button type="button" class="button" data-add-to-quote="${product.id}">+ Add to quote</button>
        <a class="text-link" href="../index.html#quote">View quote list <span>→</span></a>
      </div>
      <p class="product-note">Add as many products as you need to your quote list, then submit them together from the quote form. For crop-protection items, please have the crop and target pest or disease ready.</p>
    </div>`;

  // Similar items: same category, excluding the current product
  const similar = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const grid = document.getElementById("similar-grid");
  grid.innerHTML = similar.length
    ? similar.map(cardHTML).join("")
    : `<p class="empty-note">No other items listed in this category yet.</p>`;

  const viewAllLink = document.getElementById("view-all-category");
  if (viewAllLink) viewAllLink.href = `index.html#${product.category}`;

  if (typeof updateCartUI === "function") updateCartUI();
}

renderProduct();
