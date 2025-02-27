// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC9rQ0z05oJlphdWRYcMBgiD4pMfv3uSc",
  authDomain: "burgerden-120bc.firebaseapp.com",
  projectId: "burgerden-120bc",
  storageBucket: "burgerden-120bc.appspot.com",
  messagingSenderId: "439972339686",
  appId: "1:439972339686:web:451f8f52e4b70bbdc4c027",
  measurementId: "G-CQWYD3P4D5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// detect auth state
onAuthStateChanged(aut, user => {
    if(user != null) {
        console.log('logged in!');
    }
    else {
        console.log('No user');
    }
})
// js for dropdown menu 
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

