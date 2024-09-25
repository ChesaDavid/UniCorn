let is = false;
let info = document.getElementById('more-info');
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = JSON.parse(localStorage.getItem('total'));

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

        console.log(total);
        document.getElementById('total-price').textContent = "Total Price: $" + total;
        function initPayPalButton(price) {
    
          paypal
            .Buttons({
              style: {
                shape: "rect",
                color: "gold",
                layout: "vertical",
                label: "paypal",
              },
              createOrder: function (data, actions) {
                return actions.order.create({
                  purchase_units: [{ amount: { currency_code: "USD", value: price } }],
                });
              },
              onApprove: function (data, actions) {
                return actions.order.capture().then(function (orderData) {
                  // Full available details
    
                  console.log(
                    "Capture result",
                    orderData,
                    JSON.stringify(orderData, null, 2)
                  );
    
                  // Show a success message within this page, for example:
    
                  const element = document.getElementById("paypal-button-container");
                  element.innerHTML = "";
                  element.innerHTML = "<h3>Thank you for your payment!</h3>";
    
                  // Or go to another URL: actions.redirect('thank_you.html');
    
                });
              },
              onError: function (err) {
                console.log(err);
              },
            })
            .render("#paypal-button-container");
        }
    
        initPayPalButton(totalPrice);


