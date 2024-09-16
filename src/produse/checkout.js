let totalPrice = JSON.parse(localStorage.getItem('total'));
console.log("total: " + total);
let showTotal = document.getElementById('total-price');

showTotal.innerHTML = totalPrice + " RON";