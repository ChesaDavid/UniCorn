

let text = document.getElementById('presentation-Hello-span');


let helloWorldArray = ['  courses', 'products', 'services'];
let i = 0;

setInterval(function() {
    text.style.animation = ' changeText 3s ease-in-out infinite';
    text.textContent = helloWorldArray[i];
    i = (i + 1) % helloWorldArray.length;
}, 1000);