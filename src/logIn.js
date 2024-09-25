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


console.log("go it");
  function validateForm(username,email,password) {
        let isValid = true;

        document.getElementById('notGood').innerHTML = '';
        username.style.border = '';
        email.style.border = '';

        if (passwordConfirmation.value !== password.value) {
            password.style.border = '1px solid red';
            passwordConfirmation.style.border = '1px solid red';
            document.getElementById('notGood').innerHTML = 'Passwords do not match';
            isValid = false;
        }

        if (!username.value || !email.value || !password.value || !passwordConfirmation.value) {
            document.getElementById('notGood').innerHTML = 'All fields are required';

            if (!username.value) username.style.border = '1px solid red';
            if (!email.value) email.style.border = '1px solid red';
            if (!password.value) password.style.border = '1px solid red';
            if (!passwordConfirmation.value) passwordConfirmation.style.border = '1px solid red';

            isValid = false;
        }
    
        return isValid;
    }

function pressOnSubmit(){
  let username = document.getElementById('username');
    let email = document.getElementById('email');
    let submitBtn = document.getElementById('submit');
    if(validateForm(username, email, submitBtn)){
      localStorage.setItem('currentUser', JSON.stringify(data));
      window.location.href = '/dist/index.html';
    }else{
      alert('Invalid form');
    }
    console.log(localStorage.getItem('currentUser'));
    
  }