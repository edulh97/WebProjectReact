// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getDatabase} from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZs6QDKshwcDjqRG5GLz1ihqcWgL3M6Es",
  authDomain: "house-3b564.firebaseapp.com",
  databaseURL: "https://house-3b564-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "house-3b564",
  storageBucket: "house-3b564.appspot.com",
  messagingSenderId: "466916102116",
  appId: "1:466916102116:web:9cf575e597efc607a381f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;