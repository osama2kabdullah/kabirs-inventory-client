// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnT25yTFirmdiHB3IKAcs30qwTBRNKqXU",
  authDomain: "kabirs-inventory.firebaseapp.com",
  projectId: "kabirs-inventory",
  storageBucket: "kabirs-inventory.appspot.com",
  messagingSenderId: "1007372409714",
  appId: "1:1007372409714:web:fbdc79b540970730869beb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;