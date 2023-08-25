import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8M4uCoArXQneXVnIz1DUKn5HW1ugPCA8",
  authDomain: "fir-pruebahahn-1.firebaseapp.com",
  projectId: "fir-pruebahahn-1",
  storageBucket: "fir-pruebahahn-1.appspot.com",
  messagingSenderId: "299237095042",
  appId: "1:299237095042:web:f22b3d89324657e0c6669b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
