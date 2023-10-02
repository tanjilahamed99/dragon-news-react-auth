// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEsHUhME0dgHK5OK5xatXv4p7A77-EYGc",
    authDomain: "dragon-news-react-auth.firebaseapp.com",
    projectId: "dragon-news-react-auth",
    storageBucket: "dragon-news-react-auth.appspot.com",
    messagingSenderId: "742364933801",
    appId: "1:742364933801:web:f8f959cbec734d46cfc3b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth