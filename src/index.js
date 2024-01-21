import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
//import { initializeApp } from "firebase/compat/app";



const firebaseConfig = {
    apiKey: "AIzaSyDEmrJai-jSuKPuKuOEIqKvDE3ozh0jVzM",
    authDomain: "cart-m4v5.firebaseapp.com",
    projectId: "cart-m4v5",
    storageBucket: "cart-m4v5.appspot.com",
    messagingSenderId: "536609922863",
    appId: "1:536609922863:web:4cbc50d588e3f8795acbda"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App/>, document.getElementById('root'));


