async function loadProducts() {
  const res = await fetch("products.json");
  const products = await res.json();
  const list = document.getElementById("product-list");

  if (list) {
    list.innerHTML = products
      .map(
        (p) => `
      <div>
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <button class="btn" onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `
      )
      .join("");
  }
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

function loadCart() {
  const cartList = document.getElementById("cart-items");
  if (!cartList) return;

  fetch("products.json")
    .then((res) => res.json())
    .then((products) => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const items = products.filter((p) => cart.includes(p.id));

      cartList.innerHTML = items
        .map(
          (p) => `
      <div>
        <span>${p.name} - $${p.price}</span>
        <button class="btn" onclick="removeFromCart(${p.id})">Remove</button>
      </div>
    `
        )
        .join("");
    });
}

function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

window.onload = () => {
  loadProducts();
  loadCart();
};
