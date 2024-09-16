let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = JSON.parse(localStorage.getItem('total'));
console.log("total: " + total);
let showTotal = document.getElementById('total-price');

showTotal.innerHTML = total.JSON.toString();