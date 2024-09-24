let storedUser = localStorage.getItem('currentUser');
let username = (storedUser && storedUser.length > 0) ? storedUser : 'Guest';

console.log(username);

document.getElementById('user').innerHTML = username;

let logoutBtn = document.getElementById('logout');      

if(username !== "Guest"){
    document.getElementById('secret').style.display = 'block';
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'none';
}else{
    document.getElementById('secret').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    document.getElementById('register').style.display = 'block';
}

function signOut(){
    localStorage.removeItem('currentUser');
    window.location.href = "index.html";
}