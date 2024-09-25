let username = localStorage.getItem('currentUser');

console.log(username);

document.getElementById('user').innerHTML = username;

let logoutBtn = document.getElementById('logout');      

if(username !== ''){
    document.getElementById('secret').style.display = 'block';
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'none';
}else{
    document.getElementById('secret').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    document.getElementById('register').style.display = 'block';
}

function signOut(){
    localStorage.setItem('currentUser','');
    window.location.href = "index.html";
}
function goToHome(){
    window.location.href = "/dist/index.html";
}