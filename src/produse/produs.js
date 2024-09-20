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
            "Go to Cart" : function() {
                window.location.href = './cart.html';
            },
            "OK": function() {
                $(this).dialog("close");
                window.location.href = '/src/produse.html'
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
    let selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    console.log('Selected product:', selectedProduct);

    if (!selectedProduct || !selectedProduct.id) {
        alert('No valid product selected!');
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (!Array.isArray(cart)) {
        console.error('Cart is not an array. Resetting it.');
        cart = [];
    }

    console.log('Current cart:', cart);

    let existingProduct = cart.find(product => product.id === selectedProduct.id);
    const one = 1;
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(selectedProduct);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to the cart!' +'<br> Thank you for shopping with us');
});