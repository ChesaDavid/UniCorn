// let submit = document.getElementById('submit');
// submit.addEventListener('click', function(){
//   var data = document.getElementById('username').value;
//   localStorage.setItem('username', JSON.stringify(data));
// });
// const firebaseConfig = {
//     apiKey: "AIzaSyCpoZSMXrJlu4PItlFxiAf1vJanTtX2CDs",
//     authDomain: "unicorn-35e99.firebaseapp.com",
//     databaseURL: "https://unicorn-35e99-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "unicorn-35e99",
//     storageBucket: "unicorn-35e99.appspot.com",
//     messagingSenderId: "771497075079",
//     appId: "1:771497075079:web:f7b0a0a3bc8f7a755ef322"
//   };
  
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

//   const auth = firebase.auth();
//   const database = firebase.database();
//   function login(){
//     signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((err) => {
//       console.log(err.code);
//       console.log(err.message);
//     });
//   }
localStorage.setItem('currentUser','');
  function pressOnSubmit(){
    var data = document.getElementById('username').value;
    localStorage.setItem('currentUser', JSON.stringify(data));
    window.location.href = '/dist/index.html';
  }