// Sample product data (can be fetched from a JSON file later)
const products = [
    { id: 1, name: 'Toy Car', price: 10, image: 'assets/images/toy-car.jpg' },
    { id: 2, name: 'Doll', price: 15, image: 'assets/images/doll.jpg' },
    { id: 3, name: 'Lego Set', price: 25, image: 'assets/images/lego.jpg' },
  ];
  
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Render products
  const productList = document.getElementById('product-list');
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });
  
  // Add to cart
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
    renderCart();
  }
  
  // Render cart
  function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('cart-item');
      itemDiv.innerHTML = `
        <p>${item.name} - $${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartItems.appendChild(itemDiv);
    });
  }
  
  // Remove from cart
  function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  }
  
  // Initialize cart
  renderCart();
  