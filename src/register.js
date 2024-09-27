// Override the default alert to show a custom dialog box
window.alert = function (message) {
    if ($('#mydialogDiv').length === 0) {
        $('body').append('<div id="mydialogDiv"></div>');
    }

    $('#mydialogDiv').html(message);

    $('#mydialogDiv').dialog({
        modal: true,
        title: 'Hello Customer',
        dialogClass: 'custom-alert-dialog',
        buttons: {
            "OK": function () {
                $(this).dialog("close");
            }
        },
        close: function () {
            $(this).dialog("close");
        },
        width: 400,
        resizable: false
    });
};

// Wait until the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const passwordConfirmation = document.getElementById('confirmPassword');
    const email = document.getElementById('email');
    const submitBtn = document.getElementById('submit');
    const errorDiv = document.getElementById('notGood');

    // Validate the form fields
    function validateForm() {
        let isValid = true;
        errorDiv.innerHTML = '';
        resetBorders();

        // Check if passwords match
        if (passwordConfirmation.value !== password.value) {
            setError(password, 'Passwords do not match');
            setError(passwordConfirmation, 'Passwords do not match');
            errorDiv.innerHTML = 'Passwords do not match';
            isValid = false;
        }

        // Check if all fields are filled
        if (!username.value || !email.value || !password.value || !passwordConfirmation.value) {
            errorDiv.innerHTML = 'All fields are required';
            if (!username.value) setError(username);
            if (!email.value) setError(email);
            if (!password.value) setError(password);
            if (!passwordConfirmation.value) setError(passwordConfirmation);
            isValid = false;
        }
        return isValid;
    }

    // Reset the input field borders to default
    function resetBorders() {
        username.style.border = '';
        email.style.border = '';
        password.style.border = '';
        passwordConfirmation.style.border = '';
    }

    // Highlight invalid fields
    function setError(field, message = '') {
        field.style.border = '1px solid red';
    }

    // Handle the form submission
    submitBtn.addEventListener('click', function () {
        if (!validateForm()) return;

        const users = loadUsers();
        const newUser = {
            username: username.value,
            email: email.value,
            password: password.value
        };

        const registerResponse = registerUser(username.value, password.value);

        // Show a custom alert dialog
        alert(`Hello ${username.value}, please buy as much as we want!`);
        console.log(username.value);
        setTimeout(function () {
            console.log('here');
        }, 2000);

        // Handle the registration response
        if (registerResponse.success) {
            users.users.push(newUser);
            saveUsers(users);
            localStorage.setItem('currentUser', JSON.stringify(username.value));
            errorDiv.innerHTML = 'Registration successful!';
        } else {
            errorDiv.innerHTML = registerResponse.message;
        }
    });

    // Load users from localStorage
    function loadUsers() {
        const usersData = localStorage.getItem('Users');
        return usersData ? JSON.parse(usersData) : { users: [] };
    }

    // Save users to localStorage
    function saveUsers(data) {
        localStorage.setItem('Users', JSON.stringify(data));
    }

    // Register a new user
    function registerUser(username, password) {
        const usersData = loadUsers();
        const userExists = usersData.users.some(user => user.username === username);

        if (userExists) {
            return { success: false, message: "Username already exists." };
        }

        usersData.users.push({ username: username, password: password });
        saveUsers(usersData);

        return { success: true, message: "User registered successfully." };
    }

    // Event listeners for real-time form validation
    username.addEventListener('input', validateForm);
    email.addEventListener('input', validateForm);
    password.addEventListener('input', validateForm);
    passwordConfirmation.addEventListener('input', validateForm);

    console.log(localStorage.getItem('currentUser'));
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
