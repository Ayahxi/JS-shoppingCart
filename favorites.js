let productsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".noProducts");

function drawFavoritesProductsUI(allProducts = []) {
  if (JSON.parse(localStorage.getItem("productsFavorite")).length === 0)
    noProductsDom.innerHTML = " Cart Empty !!!";
  let products =
    JSON.parse(localStorage.getItem("productsFavorite")) || allProducts;
  let productsUI = products.map((item) => {
    return `
            <div class="product-item">
            <img
              src="${item.imageUrl}"
              class="product-item-img"
              alt="headphones"
            />
            <div class="product-item-desc">
              <h2>${item.title}</h2>
              <p>${item.desc}</p>
              <span>Size: ${item.size}</span> <br>
              <span>Quantity: ${item.qty}</span>
            </div>
            <div class="product-item-actions">
                <button class="add-to-cart" onclick="removeItemFromCart(${item.id})" >Remove From Favorites</button>    
            </div> 
          </div>
            `;
  });
  productsDom.innerHTML = productsUI.join("");
}
drawFavoritesProductsUI();
function removeItemFromCart(id) {
  let productsFavorite = localStorage.getItem("productsFavorite");
  if (productsFavorite) {
    let items = JSON.parse(productsFavorite);
    let filteredItems = items.filter((item) => item.id !== id);
    drawFavoritesProductsUI(filteredItems);
    localStorage.setItem("productsFavorite", JSON.stringify(filteredItems));
    drawFavoritesProductsUI(filteredItems);
  }
}
