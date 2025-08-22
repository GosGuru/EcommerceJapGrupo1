document.addEventListener("DOMContentLoaded", function () {
  let root = document.getElementById("products");
  let URL_JSON = "https://japceibal.github.io/emercado-api/cats_products/101.json";
  let API_BASE = "https://japceibal.github.io/emercado-api/";
  let RAW_BASE = "https://raw.githubusercontent.com/japceibal/emercado-api/main/";
  let FALLBACK = "https://via.placeholder.com/300x180?text=Sin+imagen";

  fetch(URL_JSON)
    .then(function (res) { if (!res.ok) throw new Error("HTTP " + res.status); return res.json(); })
    .then(function (data) {
      if (!data.products || !data.products.length) {
        root.innerHTML = "<p>No hay productos.</p>";
        return;
      }
      let html = "";
      for (let i = 0; i < data.products.length; i++) {
        let p = data.products[i];
        let srcPages = API_BASE + p.image;

        html += ''
          + '<article class="product-card">'
          + '  <img class="product-image" src="' + 
          // srcPages ||
          ( "https://images.pexels.com/photos/16778066/pexels-photo-16778066.jpeg") + '"'
          + '       alt="' + (p.name || "Producto") + '" loading="lazy">'
          + '  <div>'
          + '    <h3 class="product-name">' + (p.name || "") + '</h3>'
          + '    <div class="content-box">'
          + '      <p class="product-desc">' + (p.description || "") + '</p>'
          + '    </div>'
          + '  </div>'
          + '  <div class="price-pill">US$ ' + (p.cost || "-") + '</div>'
          + '  <div class="sold-chip">' + (p.soldCount || 0) + ' VENDIDOS</div>'
          + '</article>';
      }
      root.innerHTML = html;
    })
    .catch(function (err) {
      root.innerHTML = "<p>Error: " + err.message + "</p>";
    });
});