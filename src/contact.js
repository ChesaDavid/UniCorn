

document.addEventListener('DOMContentLoaded', function () {
submitBtn.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = './afterContact.html';
    }, 3000);
}); 

submitBtn.disabled = true;
function validateall(){
    let btn1 = false;
    let btn2 = false;
    let btn3 = false;
    let btn4 =false;
    let email = document.getElementById('email').value;
    let lastname = document.getElementById('lname').value;
    let firstname = document.getElementById('fname').value;
    let message = document.getElementById('message').value;
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(regex.test(email)){
        document.getElementById('emailError').style.display = 'none';
        document.getElementById('email').style.border = '1px solid black';
        btn1 = true;
    } else{
        document.getElementById('email').style.border = '1px solid red';
        document.getElementById('emailError').style.display = 'block';
    }
    
    if(lastname.length > 0){
        document.getElementById('lnameError').style.display = 'none';
        document.getElementById('lname').style.border = '1px solid black'
        btn2 = true;
    }else{
        document.getElementById('lname').style.border = '1px solid red';
        document.getElementById('lnameError').style.display = 'block';
    }
    if(firstname.length > 0){
        document.getElementById('fnameError').style.display = 'none';
        document.getElementById('fname').style.border = '1px solid black';
        btn3 = true;
    }else{
        document.getElementById('fname').style.border = '1px solid red';
        document.getElementById('fnameError').style.display = 'block';
    }
    
    if(message.length > 0 && message.length <= 200){
        document.getElementById('messageError').style.display = 'none';
        document.getElementById('message').style.border = '1px solid black';
        btn4 = true;
    }else{
        document.getElementById('message').style.border = '1px solid red';
        document.getElementById('messageError').style.display = 'block';
    }
    if(btn1 && btn2 && btn3 && btn4){
        submitBtn.disabled = false;
    }else{
        submitBtn.disabled = true;
    }

}
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let message = document.getElementById('message');
fname.addEventListener('input',validateall);
lname.addEventListener('input',validateall);
email.addEventListener('input', validateall);
message.addEventListener('input', validateall);

});