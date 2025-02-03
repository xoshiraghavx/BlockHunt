// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4R-jcPf1k4-OHcwIf3h5rbKjIsaciMnE",
  authDomain: "blockhunt-2c0a6.firebaseapp.com",
  projectId: "blockhunt-2c0a6",
  storageBucket: "blockhunt-2c0a6.firebasestorage.app",
  messagingSenderId: "14284884095",
  appId: "1:14284884095:web:9ed6bc12c653816bd9174a",
  measurementId: "G-F9ZRZN0C1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);