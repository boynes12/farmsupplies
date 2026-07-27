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
  tools: "Tools & equipment"
};

function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function cardHTML(p) {
  return `
    <a class="catalog-card" href="product.html?id=${encodeURIComponent(p.id)}">
      <div class="catalog-card-image">
        <img src="../images/${p.image}" alt="${p.name}" loading="lazy" />
        <span class="status-pill ${statusClass(p.status)}">${p.status}</span>
      </div>
      <div class="catalog-card-body">
        <h3>${p.name}</h3>
        <p>${p.short}</p>
        <span class="catalog-card-price">${p.price}</span>
      </div>
    </a>`;
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
        <a class="button" href="../index.html#quote?product=${encodeURIComponent(product.id)}" data-quote-link data-product-id="${product.id}" data-product-name="${product.name}">Request this item</a>
        <a class="text-link" href="index.html#${product.category}">Back to ${CATEGORY_LABELS[product.category] || "products"} <span>→</span></a>
      </div>
      <p class="product-note">Prices and availability are confirmed at quote time. For crop-protection items, please have the crop and target pest or disease ready when you request a quote.</p>
    </div>`;

  // Similar items: same category, excluding the current product
  const similar = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const grid = document.getElementById("similar-grid");
  grid.innerHTML = similar.length
    ? similar.map(cardHTML).join("")
    : `<p class="empty-note">No other items listed in this category yet.</p>`;

  wireQuoteLink();
}

function wireQuoteLink() {
  const link = document.querySelector("[data-quote-link]");
  if (!link) return;
  link.addEventListener("click", () => {
    try {
      sessionStorage.setItem("hf_quote_product", link.getAttribute("data-product-name"));
    } catch (e) { /* storage unavailable — quote form still works without prefill */ }
  });
}

renderProduct();
