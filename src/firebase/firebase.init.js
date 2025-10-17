// Do not send firebase config to repo

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAwzLkDevMLAY4vfQfIOvfjtg2O3ZfVHU",
  authDomain: "simple-firebase-auth-3ac83.firebaseapp.com",
  projectId: "simple-firebase-auth-3ac83",
  storageBucket: "simple-firebase-auth-3ac83.firebasestorage.app",
  messagingSenderId: "1079016890907",
  appId: "1:1079016890907:web:ae5ea4994c85bfd6e38ebe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
