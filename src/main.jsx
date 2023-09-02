import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min";

// Firebase
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyA6gQn12NgrGlF3z3qmhyaQnZwfgVNUKrw",
    authDomain: "infinity-e76f9.firebaseapp.com",
    projectId: "infinity-e76f9",
    storageBucket: "infinity-e76f9.appspot.com",
    messagingSenderId: "280223058794",
    appId: "1:280223058794:web:85011ab4981963ec443313",
    measurementId: "G-Q71Z04C5RQ"
};
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <App />
    </React.StrictMode >,
)
