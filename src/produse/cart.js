var data = JSON.parse(localStorage.getItem('selectedProduct')) || [];

data.array.forEach(element => {
    document.getElementById('productList').innerHTML += `<li>${element.name} - ${element.price} RON</li>`;
});