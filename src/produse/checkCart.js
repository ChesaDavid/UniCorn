console.log("Cart script is working");

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = JSON.parse(localStorage.getItem('total'));
let cartimg = document.getElementById('CartImg');
let Cart = document.getElementById('Cart');
if(cart.length > 0){
    cartimg.src = "/assets/cart-plus-svgrepo-com (1).svg";
}else{
    cartimg.src = "/assets/cart-large-minimalistic-svgrepo-com (1).svg";
}

