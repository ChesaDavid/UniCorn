import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore ,doc} from "firebase/firestore";

const firebaseApp = {
    apiKey: "AIzaSyCpoZSMXrJlu4PItlFxiAf1vJanTtX2CDs",
    authDomain: "unicorn-35e99.firebaseapp.com",
    projectId: "unicorn-35e99",
    storageBucket: "unicorn-35e99.appspot.com",
    messagingSenderId: "771497075079",
    appId: "1:771497075079:web:f7b0a0a3bc8f7a755ef322"
};

const auth = getAuth(firebaseApp);
const app = firebase.initializeApp(firebaseConfig);


onAuthStateChanged(auth, user => {
    if (user) {
        console.log('User is signed in:', user);
    } else {
        console.log('User is signed out');
    }
});
const firestore = getFirestore();
const uniCorn = doc(firestore, 'unicorn/UniCorn')

function addNewdocument() {
    const newDoc =  addDoc(docColectio ,{ 
            name: 'John Doe' 
        });
    console.log('Document written with ID: ${newDoc.id}' );
}
// https://www.youtube.com/watch?v=BjtxPj6jRM8 min 6:12

// register auth listener
function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    if (validate_email(email) && validate_password(password) && validate_fields(username)) {
        document.getElementById('registrationForm').reset();
        place.innerHTML = '';
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                // Save user data to Firestore
                const userRef = doc(firestore, 'users', user.uid);
                const userData = {
                    name: username,
                    email: email,
                    last_login: Date.now()
                };

                setDoc(userRef, userData)
                    .then(() => {
                        console.log('User data successfully written!');
                    })
                    .catch((error) => {
                        console.error('Error writing user data: ', error);
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    } else {
        const place = document.getElementById('notGood');
        place.innerHTML = 'Please fill all fields correctly';
    }
}

// Validation functions
function validate_email(email) {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return expression.test(email);
}

function validate_password(password) {
    return password.length >= 6;
}

function validate_fields(field) {
    return field.length > 0;
}

console.log('Firebase initialized');
console.log('Firebase initialized');
