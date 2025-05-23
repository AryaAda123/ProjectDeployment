const products = [
    {
      id: 1,
      name: "T-Shirt",
      price: 499,
      image: "https://via.placeholder.com/200x200.png?text=T-Shirt"
    },
    {
      id: 2,
      name: "Sneakers",
      price: 1999,
      image: "https://via.placeholder.com/200x200.png?text=Sneakers"
    },
    {
      id: 3,
      name: "Backpack",
      price: 899,
      image: "https://via.placeholder.com/200x200.png?text=Backpack"
    }
  ];
  
  let cartCount = 0;
  
  function renderProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
      const div = document.createElement('div');
      div.classList.add('product-card');
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart()">Add to Cart</button>
      `;
      productList.appendChild(div);
    });
  }
  
  function addToCart() {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
  }
  
  renderProducts();
  