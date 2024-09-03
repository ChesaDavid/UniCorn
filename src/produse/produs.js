let addBtn = document.getElementById('addToCart');

addBtn.addEventListener('click', function() {
    let selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    
    if (!selectedProduct) {
        alert('No product selected!');
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the product already exists in the cart
    let existingProduct = cart.find(product => product.id === selectedProduct.id);

    if (existingProduct) {
        // Increase the quantity of the existing product
        existingProduct.quantity += selectedProduct.quantity;
    } else {
        // Add new product to the cart
        cart.push(selectedProduct);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to the cart!');
});
