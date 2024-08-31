function initializeApp() {
  console.log("Starting");
  const firebaseConfig = {
      apiKey: "AIzaSyCpoZSMXrJlu4PItlFxiAf1vJanTtX2CDs",
      authDomain: "unicorn-35e99.firebaseapp.com",
      databaseURL: "https://unicorn-35e99-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "unicorn-35e99",
      storageBucket: "unicorn-35e99.appspot.com",
      messagingSenderId: "771497075079",
      appId: "1:771497075079:web:f7b0a0a3bc8f7a755ef322"
    };
    firebase.initializeApp(firebaseConfig);
  console.log("aici");
  // Initialize Firebase Authentication and Firestore
  const auth = firebase.auth();
  const db = firebase.firestore();
  const registerForm = document.getElementById('registrationForm');
  const database = firebase.database();
  function register(){
    console.log("aici2");

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirmation = document.getElementById('passwordConfirmation').value;
    const name = document.getElementById('username').value;
    if (password!== passwordConfirmation) {
      alert('Passwords do not match.');
      return;
    }
    if(validateEmail(email)==='false' || validatePassword(password)==='false') {
      alert('Invalid email or password. Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      var user = auth.currentUser();

      var database_ref = database.ref()
      var user_data ={
        email: email,
        username: name,
        last_login: Date.now()
      }

      database_ref.child('users/' + user.uid).set(user_data)
      .then(function() {
        console.log("User data saved successfully");
        alert('Registration successful!');
        // Optional: Redirect user or clear form
        window.location.href = '/dist/index.html';  // Redirect to dashboard
      })
    })
    .catch(function(error) {
      // Handle error
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error creating user:', errorCode, errorMessage);
      alert('Registration failed: ' + errorMessage);
    });
  }

  function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  function validatePassword(password){
    // Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(password);
  }

//secoond try 
// Event listener for form submission
// registerForm.addEventListener('submit', (e) => {
//   e.preventDefault();
  
//   // Get the user's email and password
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
  
//   // Create a new user with email and password
//   auth.createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // User registered successfully
//       const user = userCredential.user;
//       console.log('User registered:', user);
//       alert('Registration successful!');
      
//       // Optional: Redirect user or clear form
//        window.location.href = '/dist/index.html';  // Redirect to dashboard
//       // registerForm.reset();  // Clear the form
//     })
//     .catch((error) => {
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
}