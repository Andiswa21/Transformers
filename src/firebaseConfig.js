// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Import for Firebase Authentication
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoFjeCA2sv18jm9mTvs7WJtD6KX-lLAr8",
  authDomain: "easylearn-94179.firebaseapp.com",
  projectId: "easylearn-94179",
  storageBucket: "easylearn-94179.appspot.com",
  messagingSenderId: "572526822904",
  appId: "1:572526822904:web:17a42fa77e05f5889ec20d",
  measurementId: "G-5Q5KW9ENFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);  // Initialize Firebase Authentication and get a reference to the service

export { auth };  // Export the auth object to use it in other parts of the app
