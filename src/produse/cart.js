function displayCart() {
    // Retrieve the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Assuming you have a div or section with id 'cartItems' to display the cart products
    let cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';  // Clear the cart div

    // Check if the cart is empty
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    // Loop through the cart and display each product
    cart.forEach((product, index) => {
        // Create an element for each product (e.g., a div or list item)
        let productDiv = document.createElement('div');
        productDiv.classList.add('cart-item');

        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Quantity: ${product.quantity}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;

        // Append the product div to the cartItemsDiv
        cartItemsDiv.appendChild(productDiv);
    });
}

function removeFromCart(index) {
    // Retrieve the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Remove the item at the specified index
    cart.splice(index, 1);

    // Update the cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart display
    displayCart();
}