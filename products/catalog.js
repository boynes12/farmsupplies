function statusClass(status) {
  const map = {
    "In stock": "status-in",
    "Low stock": "status-low",
    "Out of stock": "status-out",
    "Special order": "status-special"
  };
  return map[status] || "status-in";
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

function render() {
  const groups = { seeds: [], fertilizers: [], protection: [], tools: [] };
  PRODUCTS.forEach((p) => { if (groups[p.category]) groups[p.category].push(p); });

  Object.keys(groups).forEach((cat) => {
    const grid = document.getElementById(`grid-${cat}`);
    if (!grid) return;
    grid.innerHTML = groups[cat].length
      ? groups[cat].map(cardHTML).join("")
      : `<p class="empty-note">No items listed in this category yet — contact us for availability.</p>`;
  });
}

render();
