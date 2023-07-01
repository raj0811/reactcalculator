import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1q0ppZA0VLgfDV1-72nhrCmgvTiX7rLs",
  authDomain: "calculator-81a20.firebaseapp.com",
  projectId: "calculator-81a20",
  storageBucket: "calculator-81a20.appspot.com",
  messagingSenderId: "607781988654",
  appId: "1:607781988654:web:95269ce89b33f50687b2bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

