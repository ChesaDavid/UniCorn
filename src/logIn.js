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


// Function to validate the login form
// Function to validate the login form fields
function validateLoginForm(username, password) {
  let isValid = true;
  const loginError = document.getElementById('loginError');
  
  // Clear any previous error messages
  loginError.innerHTML = '';
  username.style.border = '';
  password.style.border = '';

  // Check if both username and password are filled
  if (!username.value) {
      username.style.border = '1px solid red';
      loginError.innerHTML = 'Username is required';
      isValid = false;
  }

  if (!password.value) {
      password.style.border = '1px solid red';
      loginError.innerHTML = 'Password is required';
      isValid = false;
  }

  return isValid;
}

// Function to handle login attempt
function handleLogin() {
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  
  // Validate form inputs before proceeding
  if (!validateLoginForm(username, password)) {
      return; // Stop if the form is invalid
  }

  // Retrieve the stored users from localStorage
  const storedUsers = JSON.parse(localStorage.getItem('Users')) || { users: [] };
  
  // Check if the provided credentials match an existing user
  const foundUser = storedUsers.users.find(user => 
      user.username === username.value && user.password === password.value
  );

  if (foundUser) {
      // Store the current logged-in user and redirect
      localStorage.setItem('currentUser', JSON.stringify(username.value));
      window.location.href = '/dist/index.html'; // Redirect to homepage or dashboard
  } else {
      // Display error if username or password is incorrect
      document.getElementById('loginError').innerHTML = 'Invalid username or password';
      password.style.border = '1px solid red';
      username.style.border = '1px solid red';
  }
}

// Event listener for login button click
document.getElementById('loginBtn').addEventListener('click', handleLogin);

// For testing purposes, let's log the current user in localStorage
console.log('Current logged-in user:', sessionStorage.getItem('currentUser'));
