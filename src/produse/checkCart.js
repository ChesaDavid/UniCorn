console.log("Cart script is working");

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = JSON.parse(localStorage.getItem('total'));
let Cart = document.getElementById('Cart');
if(cart.length > 0){
    Cart.innerHTML
    // make when the cart has some content to change 
    
}