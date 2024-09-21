let is = false;
let info = document.getElementById('more-info');

console.log("aici");  
console.log(cart);
cart.forEach((product)=>{
    let productDiv = document.createElement('div');
    productDiv.classList.add('cart-item');


    productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: ${product.price} RON</p>
        <p>Quantity: ${product.quantity}</p>
    `;
    info.appendChild(productDiv);
});

function showInfo()
{
    console.log('aici')
    if(is){
        is = false;
        document.getElementById('more').innerHTML = 'More Info';
        info.style.display = "none";
    } else {
        document.getElementById('more').innerHTML = 'Less Info';
        is = true;   
        info.style.display = "block";
    }
}

let totalPrice = JSON.parse(localStorage.getItem('total'));
console.log("total: " + total);
let showTotal = document.getElementById('total-price');

showTotal.innerHTML = totalPrice.toFixed(2) + " RON";
let cardNumber = document.getElementById('card-number');
let expierDate = document.getElementById('expier-date');
let cvv = document.getElementById('cvv');
let cardholderName = document.getElementById('cardholder-name');
let payBtn = document.getElementById('pay-btn');

function verifyCard(){
    let cardNumberValue = cardNumber.value;
    let expierDateValue = expierDate.value;
    let cvvValue = cvv.value;
    let cardholderNameValue = cardholderName.value;
    if(cardNumberValue.length === 16 && expierDateValue.length === 5 && cvvValue.length === 3 && cardholderNameValue.length > 0){
        payBtn.disabled = false;
    } else{
        payBtn.disabled = true;
    }
    let cardNumberPattern = /^\d{16}$/;
    let expierDatePattern = /^\d{2}\/\d{2}$/;
    let cvvPattern = /^\d{3}$/;
    if(!cardNumberPattern.test(cardNumberValue) ||!expierDatePattern.test(expierDateValue) ||!cvvPattern.test(cvvValue)){
        payBtn.disabled = true;
    }
    console.log(cardNumberValue, expierDateValue, cvvValue, cardholderNameValue);
}
function showMore()
{

}
// function displayInfo(){
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart.array.forEach(element => {
        
//     });

// }
// displayInfo();