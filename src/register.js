document.addEventListener('DOMContentLoaded', function () {
  let username = document.getElementById('username');
  let password = document.getElementById('password');
  let passwordConfirmation = document.getElementById('confirmPassword');
  let email = document.getElementById('email');
  let submitBtn = document.getElementById('submit');

  // Function to validate the form inputs
  function validateForm() {
      let isValid = true;

      // Reset error messages and styles
      document.getElementById('notGood').innerHTML = '';
      password.style.border = '';
      passwordConfirmation.style.border = '';
      username.style.border = '';
      email.style.border = '';

      // Check if passwords match
      if (passwordConfirmation.value !== password.value) {
          password.style.border = '1px solid red';
          passwordConfirmation.style.border = '1px solid red';
          document.getElementById('notGood').innerHTML = 'Passwords do not match';
          isValid = false;
      }

      // Check if all fields are filled
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

  // Function to dynamically enable/disable the submit button
  function verifyRegister() {
      submitBtn.disabled = !validateForm();
  }

  function startRegister() {
      if (!validateForm()) {
          return; 
      }

      let Users = loadUsers();
      let User = {
          username: username.value,
          email: email.value,
          password: password.value
      };
      alert(username.value);
      let registerResponse = register(username.value, password.value);

      if (registerResponse.success) {
          document.getElementById('user').innerHTML = username.value;
          Users.users.push(User);
          localStorage.setItem('Users', JSON.stringify(Users));
          localStorage.setItem('currentUser', username.value);
          document.getElementById('notGood').innerHTML = 'Registration successful!';
      } else {
          document.getElementById('notGood').innerHTML = registerResponse.message;
      }
  }

  // Load users from localStorage
  function loadUsers() {
      let usersData = localStorage.getItem('Users');
      return usersData ? JSON.parse(usersData) : { users: [] };
  }

  // Save users to localStorage
  function saveUsers(data) {
      localStorage.setItem('Users', JSON.stringify(data));
  }

  // Register function to add new user
  function register(username, password) {
      let usersData = loadUsers();
      let userExists = usersData.users.some(user => user.username === username);

      if (userExists) {
          return { success: false, message: "Username already exists." };
      }

      usersData.users.push({ username: username, password: password });
      saveUsers(usersData);

      return { success: true, message: "User registered successfully." };
  }

  // Event listeners for real-time form validation
  username.addEventListener('input', verifyRegister);
  email.addEventListener('input', verifyRegister);
  password.addEventListener('input', verifyRegister);
  passwordConfirmation.addEventListener('input', verifyRegister);
  let d = JSON.parse(localStorage.getItem('Users'));
console.log("Current user: " + d);
});


// let submit = document.getElementById('submit');
// submit.addEventListener('click', function(){
//   var data = document.getElementById('username').value;
//   localStorage.setItem('username', JSON.stringify(data));
// });

// function initializeApp() {
//   console.log("Starting");
//   const firebaseConfig = {
//       apiKey: "AIzaSyCpoZSMXrJlu4PItlFxiAf1vJanTtX2CDs",
//       authDomain: "unicorn-35e99.firebaseapp.com",
//       databaseURL: "https://unicorn-35e99-default-rtdb.europe-west1.firebasedatabase.app",
//       projectId: "unicorn-35e99",
//       storageBucket: "unicorn-35e99.appspot.com",
//       messagingSenderId: "771497075079",
//       appId: "1:771497075079:web:f7b0a0a3bc8f7a755ef322"
//     };
//     firebase.initializeApp(firebaseConfig);
//   console.log("aici");
//   // Initialize Firebase Authentication and Firestore
//   const auth = firebase.auth();
//   const db = firebase.firestore();
//   const registerForm = document.getElementById('registrationForm');
//   const database = firebase.database();
//   function register(){
//     console.log("aici2");

//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const passwordConfirmation = document.getElementById('passwordConfirmation').value;
//     const name = document.getElementById('username').value;
//     if (password!== passwordConfirmation) {
//       alert('Passwords do not match.');
//       return;
//     }
//     if(validateEmail(email)==='false' || validatePassword(password)==='false') {
//       alert('Invalid email or password. Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
//       return;
//     }
//     auth.createUserWithEmailAndPassword(email, password)
//     .then(function() {
//       var user = auth.currentUser();

//       var database_ref = database.ref()
//       var user_data ={
//         email: email,
//         username: name,
//         last_login: Date.now()
//       }

//       database_ref.child('users/' + user.uid).set(user_data)
//       .then(function() {
//         console.log("User data saved successfully");
//         alert('Registration successful!');
//         // Optional: Redirect user or clear form
//         window.location.href = '/dist/index.html';  // Redirect to dashboard
//       })
//     })
//     .catch(function(error) {
//       // Handle error
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error('Error creating user:', errorCode, errorMessage);
//       alert('Registration failed: ' + errorMessage);
//     });
//   }

//   function validateEmail(email){
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   }
//   function validatePassword(password){
//     // Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.
//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
//     return regex.test(password);
//   }

// //secoond try 
// // Event listener for form submission
// // registerForm.addEventListener('submit', (e) => {
// //   e.preventDefault();
  
// //   // Get the user's email and password
// //   const email = document.getElementById('email').value;
// //   const password = document.getElementById('password').value;
  
// //   // Create a new user with email and password
// //   auth.createUserWithEmailAndPassword(email, password)
// //     .then((userCredential) => {
// //       // User registered successfully
// //       const user = userCredential.user;
// //       console.log('User registered:', user);
// //       alert('Registration successful!');
      
// //       // Optional: Redirect user or clear form
// //        window.location.href = '/dist/index.html';  // Redirect to dashboard
// //       // registerForm.reset();  // Clear the form
// //     })
// //     .catch((error) => {
//       // Handle errors
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error('Error registering:', errorCode, errorMessage);
//       alert('Registration failed: ' + errorMessage);
//     });
// });

// function register1() {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     auth.createUserWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // Registration successful
//             alert('Registration successful!');
//             const user = userCredential.user;
//             console.log('User registered: ', user);
//         })
//         .catch((error) => {
//             // Handle errors here
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert('Error: ' + errorMessage);
//             console.log('Error code: ', errorCode, 'Message: ', errorMessage);
//         });
// }
