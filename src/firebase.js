import firebase from 'firebase/compat/app'

import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/functions";

firebase.initializeApp({
    apiKey: "AIzaSyCzThX_ZWlBgZOzCzgY0mDNH8lZ6tnd05k",
    authDomain: "todo-list-91421.firebaseapp.com",
    projectId: "todo-list-91421",
    storageBucket: "todo-list-91421.appspot.com",
    messagingSenderId: "750356644344",
    appId: "1:750356644344:web:c64e71cc0ffba3f9cf960d"
})

export const auth = firebase.auth();
export const firestore = firebase.firestore();
//export const functions = firebase.functions();    

export default firebase;