// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxHZXTS91wMOQOOztbciPKWKS86MAun0k",
  authDomain: "react-dragon-news-auth-8d2f9.firebaseapp.com",
  projectId: "react-dragon-news-auth-8d2f9",
  storageBucket: "react-dragon-news-auth-8d2f9.appspot.com",
  messagingSenderId: "930402280925",
  appId: "1:930402280925:web:5f83cd4d853d1bf6ca8234"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;