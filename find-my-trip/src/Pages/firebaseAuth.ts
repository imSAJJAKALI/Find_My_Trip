// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJaRxPQ1dNiPA_0gDW-i09iXr5r74OqcM",
  authDomain: "findmytrip-1132d.firebaseapp.com",
  projectId: "findmytrip-1132d",
  storageBucket: "findmytrip-1132d.appspot.com",
  messagingSenderId: "561859507550",
  appId: "1:561859507550:web:8726f982ae0cc1b983cbcf"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth=getAuth()
 export  {auth,app}