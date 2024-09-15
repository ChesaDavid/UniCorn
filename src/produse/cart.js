console.log("Cart script is working");

let cart = JSON.parse(localStorage.getItem('cart')) || [];
if(cart.length==0){
    document.getElementById('checkout').style.display = 'none';
    document.getElementById('clear-cart').style.display = 'none';
}
let cartItemsDiv = document.getElementById('cartItems');

let clearCartBtn = document.getElementById('clear-cart');

// Function to display the cart items
let add = document.getElementById('add${product.it}');
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
            <button onclick="addToCart(${index})" id="add${product.id}" class="add-quantity">+</button>
            `
            if(product.quantity>1){
                productDiv.innerHTML +=  `<button onclick="subtractFromCart(${index})" id="sub${product.id}" class="sub-quantity">-</button>`
            }
          
        ;
        
        cartItemsDiv.appendChild(productDiv);
        
    });

    let totalDiv = document.createElement('div');
    totalDiv.classList.add('cart-total');
    totalDiv.innerHTML = `<h3>Total Price: ${totalPrice.toFixed(2)} RON</h3>`;
    cartItemsDiv.appendChild(totalDiv);
}
function addToCart(product){
    let productInCart = cart.find(item => item.id === product);
    if(productInCart){
        productInCart.quantity++;
    }else{
        cart.push({id: product, name: products[product].name, price: products[product].price, quantity: 1});
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);

    localStorage.setItem('cart', JSON.stringify(cart));
    if(cart.length==0){
        document.getElementById('checkout').style.display = 'none';
        document.getElementById('clear-cart').style.display = 'none';
    }   
    displayCart();
}

clearCartBtn.addEventListener('click', function() {
    localStorage.removeItem('cart');

    cart = [];
    document.getElementById('checkout').style.display = 'none';
    document.getElementById('clear-cart').style.display = 'none';
    displayCart();
});
let checkoutBtn = document.getElementById('checkout');

checkoutBtn.addEventListener('click', function () {
    window.location('./checkout.html','_self');
});
displayCart();
localStorage.setItem("total",totalPrice);
