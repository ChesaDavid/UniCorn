let addBtn = document.getElementById('addToCart');

window.alert = function(message) {
    if ($('#mydialogDiv').length === 0) {
        $('body').append('<div id="mydialogDiv"></div>');
    }

    $('#mydialogDiv').html(message);


    $('#mydialogDiv').dialog({
        modal: true,
        title: 'Hello Customer',
        dialogClass: 'custom-alert-dialog', 
        buttons: {
            "OK": function() {
                $(this).dialog("close");
            }
        },
        close: function() {
            $(this).dialog("close");
        },
        width: 400,  
        resizable: false  
    });
}



addBtn.addEventListener('click', function() {
    // Retrieve the selected product from localStorage
    let selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    console.log('Selected product:', selectedProduct);

    // Check if selectedProduct exists and has a valid id
    if (!selectedProduct || !selectedProduct.id) {
        alert('No valid product selected!');
        return;
    }

    // Retrieve the cart from localStorage, or initialize it as an empty array if it doesn't exist
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Ensure cart is an array
    if (!Array.isArray(cart)) {
        console.error('Cart is not an array. Resetting it.');
        cart = [];
    }

    console.log('Current cart:', cart);

    // Check if the product already exists in the cart
    let existingProduct = cart.find(product => product.id === selectedProduct.id);
    const one = 1;
    if (existingProduct) {
        // Increase the quantity of the existing product
        existingProduct.quantity += 1;
    } else {
        // Add the new product to the cart
        cart.push(selectedProduct);
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to the cart!');
});