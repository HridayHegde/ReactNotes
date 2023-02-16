// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyARUy-SiYx0DGlQn3TTlUdhdYVTTd22eyg",
    authDomain: "linkedin-clone-64859.firebaseapp.com",
    projectId: "linkedin-clone-64859",
    storageBucket: "linkedin-clone-64859.appspot.com",
    messagingSenderId: "756465548644",
    appId: "1:756465548644:web:60cbb485f7b2b4ff5a0e71",
    measurementId: "G-MZT9XKDJVH"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

const auth = firebase.auth()


export {db, auth}