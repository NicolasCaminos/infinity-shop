import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min";

// Firebase
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCokBnFKS14xiAHccqDuBooKNjeIMj0CDg",
    authDomain: "graymarket-477c8.firebaseapp.com",
    projectId: "graymarket-477c8",
    storageBucket: "graymarket-477c8.appspot.com",
    messagingSenderId: "1019306318694",
    appId: "1:1019306318694:web:cbe5df12b007ab5eb9c6a7",
};
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <App />

    </React.StrictMode >,
)
