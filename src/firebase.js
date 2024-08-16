import { initializeApp } from "firebase/app"; 
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore,collection,getDocs, getDoc } from "firebase/firestore";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyCpoZSMXrJlu4PItlFxiAf1vJanTtX2CDs",
    authDomain: "unicorn-35e99.firebaseapp.com",
    projectId: "unicorn-35e99",
    storageBucket: "unicorn-35e99.appspot.com",
    messagingSenderId: "771497075079",
    appId: "1:771497075079:web:f7b0a0a3bc8f7a755ef322"
});

const snapShot = await getDocs(collection(db, 'users'));
const auth = getAuth(firebaseApp);

const db = getFirestore(firebaseApp);
//detect auth state
db

auth.onAuthStateChanged(user => {
    if (user) {
        console.log('User is signed in:', user);
    } else {
        console.log('User is signed out');
    }
});
