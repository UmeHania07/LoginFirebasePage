import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDARvGTPllkwq2SYKwNJ_MCSmFPoMaVaYU",
    authDomain: "facebook-login-page-dc040.firebaseapp.com",
    projectId: "facebook-login-page-dc040",
    storageBucket: "facebook-login-page-dc040.appspot.com",
    messagingSenderId: "161763900836",
    appId: "1:161763900836:web:5e26d645013db2ac0ad531"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export {
    app,
    auth
}
