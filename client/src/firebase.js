// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-bfb2f.firebaseapp.com",
  projectId: "mern-estate-bfb2f",
  storageBucket: "mern-estate-bfb2f.appspot.com",
  messagingSenderId: "493662345029",
  appId: "1:493662345029:web:7b4b493f60b63880f8502c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
