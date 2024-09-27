let username = JSON.parse(localStorage.getItem('currentUser'));
let Check = localStorage.getItem('currentUser');

console.log(username);

document.getElementById('user').innerHTML = Check;

let logoutBtn = document.getElementById('logout');      

if(Check   !== "Guest"){
    document.getElementById('user').innerHTML = username;
    document.getElementById('secret').style.display = 'block';
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'none';
}else{
    
    document.getElementById('secret').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    document.getElementById('register').style.display = 'block';
}   

function signOut(){
    localStorage.setItem('currentUser','Guest');
    goToHome();
}
function goToHome(){
    window.location.href = "/dist/index.html";
}