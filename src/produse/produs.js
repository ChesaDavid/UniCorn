let addBtn = document.getElementById('addToCart');

function sentData(){
    let cart = JSON.parse(localStorage.getItem('selectedProduct')) || [];
    cart.push(data);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to the cart!');
}