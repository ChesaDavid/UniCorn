let addBtn = document.getElementById('addToCart');

addBtn.addEventListener('click', function(){
    let selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    sentData(selectedProduct);
});

function sentData(){
    let cart = JSON.parse(localStorage.getItem('selectedProduct')) || [];
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to the cart!');
}