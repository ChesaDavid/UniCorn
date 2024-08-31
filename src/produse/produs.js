let addBtn = document.getElementById('addToCart');

addBtn.addEventListener('click', function(){
    let selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    console.log('Selected Product:', selectedProduct);

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Current Cart:', cart);

    cart.push(selectedProduct);
    console.log('Updated Cart:', cart);

    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(localStorage.getItem('cart'));
    alert('Product added to the cart!');
});
