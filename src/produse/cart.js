
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart);
    let cartItemsDiv = document.getElementById('cartItems');
    if (!Array.isArray(cart)) {
        cart = []; 
    }
    cartItemsDiv.innerHTML = '';

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    let totalPrice = 0;

    cart.forEach((product, index) => {
        let productDiv = document.createElement('div');
        productDiv.classList.add('cart-item');

        let productTotalPrice = product.price * product.quantity;
        totalPrice += productTotalPrice;

        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>Quantity: ${product.quantity}</p>
            <p>Total: $${productTotalPrice.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;

        cartItemsDiv.appendChild(productDiv);
    });

    // Display the total price
    let totalDiv = document.createElement('div');
    totalDiv.classList.add('cart-total');
    totalDiv.innerHTML = `<h3>Total Price: $${totalPrice.toFixed(2)}</h3>`;
    cartItemsDiv.appendChild(totalDiv);

    // Clear Cart Button
    let clearCartBtn = document.createElement('button');
    clearCartBtn.textContent = 'Clear Cart';
    clearCartBtn.addEventListener('click', clearCart);
    cartItemsDiv.appendChild(clearCartBtn);

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
}
