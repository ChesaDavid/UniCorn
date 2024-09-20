let username = document.getElementById('username');
  let password = document.getElementById('password');
  let passwordConfirmation = document.getElementById('confirmPassword');
  let email = document.getElementById('email');
function startRegister(){
  
  let check = true;
  if(passwordConfirmation.value !== password.value){
    password.value = '';
    passwordConfirmation.value = '';
    password.style.border = '1px solid red'
    passwordConfirmation.style.border = '1px solid red'
    document.getElementById('submit').disabled  = true;
    document.getElementById('notGood').innerHTML = 'Passwords do  not match';
    check = false;
    return;
  }
  if(!passwordConfirmation.value || !password.value || !username.value || !email.value){
    check = false;
    document.getElementById('submit').disabled  = true;
    document.getElementById('notGood').innerHTML = 'All fields are required';
    if(!passwordConfirmation.value){
      passwordConfirmation.style.border = '1px solid red';  
    }
    if(!password.value){
      password.style.border = '1px solid red';
    }
    if(!username.value){
      username.style.border = '1px solid red';
    }
    if(!email.value){
      email.style.border = '1px solid red';
    }
  }
  if(check){
    let Users = [];
    let User = {
      name: username,
      email: email,
      password: password
    }
    register(username,password);
    document.getElementById('user').innerHTML = username;
    Users.push(User);
    localStorage.currentUser = username;

    console.log(username);
    localStorage.setItem('Users', JSON.stringify(Users));
  }
}
console.log(username);
function loadUsers() {
  let usersData = localStorage.getItem('usersData');
  if (usersData) {
      return JSON.parse(usersData);
  } else {
      return { users: [] };
  }
}

function saveUsers(data) {
  localStorage.setItem('usersData', JSON.stringify(data));
}

function register(username, password) {
  let usersData = loadUsers();

  let userExists = usersData.users.some(user => user.username === username);
  if (userExists) {
      return { success: false, message: "Username already exists." };
  }

  usersData.users.push({ username: username, password: password }); // Store password as plain text (just for example, hash in real cases)

  saveUsers(usersData);

  return { success: true, message: "User registered successfully." };
}

function login(username, password) {
  let usersData = loadUsers();

  let user = usersData.users.find(user => user.username === username && user.password === password);
  
  if (user) {
      return { success: true, message: "Login successful." };
  } else {
      return { success: false, message: "Invalid username or password." };
  }
}


let registerResponse = register('john_doe', 'password123');
console.log(registerResponse);

let loginResponse = login('john_doe', 'password123');
console.log(JSON.stringify(localStorage.currentUser));
console.log(JSON.parse(localStorage.getItem('Users')))

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
