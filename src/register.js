
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

// Initialize Firebase Authentication and Firestore
const auth = firebase.auth();
const db = firebase.firestore();
const registerForm = document.getElementById('registrationForm');

// Event listener for form submission
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get the user's email and password
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Create a new user with email and password
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User registered successfully
      const user = userCredential.user;
      console.log('User registered:', user);
      alert('Registration successful!');
      
      // Optional: Redirect user or clear form
       window.location.href = '/dist/index.html';  // Redirect to dashboard
      // registerForm.reset();  // Clear the form
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error registering:', errorCode, errorMessage);
      alert('Registration failed: ' + errorMessage);
    });
});

function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Registration successful
            alert('Registration successful!');
            const user = userCredential.user;
            console.log('User registered: ', user);
        })
        .catch((error) => {
            // Handle errors here
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Error: ' + errorMessage);
            console.log('Error code: ', errorCode, 'Message: ', errorMessage);
        });
}