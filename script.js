const products = [
    {
      name: "Classic T-Shirt",
      price: 499,
      image: "https://via.placeholder.com/300x200.png?text=Classic+T-Shirt"
    },
    {
      name: "Sports Shoes",
      price: 1599,
      image: "https://via.placeholder.com/300x200.png?text=Sports+Shoes"
    },
    {
      name: "Smart Watch",
      price: 2499,
      image: "https://via.placeholder.com/300x200.png?text=Smart+Watch"
    },
    {
      name: "Leather Bag",
      price: 1199,
      image: "https://via.placeholder.com/300x200.png?text=Leather+Bag"
    }
  ];
  
  let cartCount = 0;
  
  function renderProducts() {
    const container = document.getElementById("product-list");
    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart()">Add to Cart</button>
      `;
      container.appendChild(card);
    });
  }
  
  function addToCart() {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
  }
  
  renderProducts();
  
