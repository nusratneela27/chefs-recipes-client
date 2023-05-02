// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbWwwLxU7lc7PKG_1jlEFIX9k2jge6Qkw",
    authDomain: "chief-receipe.firebaseapp.com",
    projectId: "chief-receipe",
    storageBucket: "chief-receipe.appspot.com",
    messagingSenderId: "917507653360",
    appId: "1:917507653360:web:df8a6c6571b5e597530c35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;