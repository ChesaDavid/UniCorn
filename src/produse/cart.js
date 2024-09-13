// Log that the script is working
console.log("Cart script is working");

// Retrieve the cart from localStorage or initialize it as an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Get reference to the cart items display element
let cartItemsDiv = document.getElementById('cartItems');

// Get reference to the clear cart button
let clearCartBtn = document.getElementById('clear-cart');

// Function to display the cart items
function displayCart() {
    // Clear the cart items display
    cartItemsDiv.innerHTML = '';

    // If cart is empty, display a message
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    // Initialize total price
    let totalPrice = 0;

    // Loop through cart items and display each one
    cart.forEach((product, index) => {
        let productDiv = document.createElement('div');
        productDiv.classList.add('cart-item');

        // Calculate the total price for the product
        if(!product.quantity){
            product.quantity = 1;
        }
        let productTotalPrice = product.price * product.quantity;
        totalPrice += productTotalPrice;

        // Create product HTML
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>Quantity: ${product.quantity}</p>
            <p>Total: $${productTotalPrice.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;

        // Append product to cart display
        cartItemsDiv.appendChild(productDiv);
    });

    // Display the total price
    let totalDiv = document.createElement('div');
    totalDiv.classList.add('cart-total');
    totalDiv.innerHTML = `<h3>Total Price: ${totalPrice.toFixed(2)} RON</h3>`;
    cartItemsDiv.appendChild(totalDiv);
}

// Function to remove a product from the cart by index
function removeFromCart(index) {
    // Remove the item at the specified index
    cart.splice(index, 1);

    // Update localStorage with the new cart array
    localStorage.setItem('cart', JSON.stringify(cart));

    // Refresh the cart display
    displayCart();
}

// Event listener to clear the cart
clearCartBtn.addEventListener('click', function() {
    // Clear the cart from localStorage
    localStorage.removeItem('cart');

    // Clear the cart array
    cart = [];

    // Refresh the cart display
    displayCart();
});

// Initial call to display the cart when the page loads
displayCart();
