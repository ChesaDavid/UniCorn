let finame = document.getElementById('fname').value;
let liname = document.getElementById('lname').value;
let eimail = document.getElementById('email').value;
let miessage = document.getElementById('message').value;

let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', () => {
    setTimeout(() => {
        window.location('./afterConect','_self');
    }, 3000);
}); 
function move(){
    setTimeout(() => {
       location.replace('./afterConect.html');
    }, 3000);
    
}
// trebuie sa fac funtia check
function check(){
    if(liname!== '' && finame!== '' && eimail!== '' && miessage!== ''){
        document.getElementById('submitBtn').style.display = 'block';
    }else{
        document.getElementById('submitBtn').style.display = 'none';
    }
}
