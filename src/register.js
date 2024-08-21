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