// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP_Sj5AzKYHHkxZfIOI3ollws8x9EN7VI",
  authDomain: "react-auth-6f8d3.firebaseapp.com",
  projectId: "react-auth-6f8d3",
  storageBucket: "react-auth-6f8d3.appspot.com",
  messagingSenderId: "257321975243",
  appId: "1:257321975243:web:eb1fee85f36999b4b1ca4e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provide = new GoogleAuthProvider();
