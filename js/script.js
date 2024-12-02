// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// prefetch gambar
const images = ["americano-cold.jpg", "americano-hot.jpg", "cappucino-hot.jpg", "caramel-machiato.jpg", "caramel-milk.jpg", "chocolate-hot.jpg", "espresso-1-shoot.jpg", "green-tea-hot.jpg", "gula-aren.jpg", "hazelnut-milk.jpg", "japanese.jpg", "kopi-tubruk.jpg", "long-black-cold.jpg", "long-black-hot.jpg", "matcha-milk.jpg", "mochacino.jpg", "red-velvet-hot.jpg", "redvelvet-milk.jpg", "v60.jpg", "vanilla-latte-cold.jpg", "vanilla-milk.jpg", "vietnam-drip.jpg" ]; // Daftar gambar
images.forEach(img => {
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.as = "image";
  link.href = `img/products/${img}`;
  document.head.appendChild(link);
});
