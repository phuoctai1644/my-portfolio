// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF6_9kvPnPYMQbEj751EwxQBlVwlQO_bQ",
  authDomain: "my-portfolio-f580a.firebaseapp.com",
  projectId: "my-portfolio-f580a",
  storageBucket: "my-portfolio-f580a.appspot.com",
  messagingSenderId: "1019622113242",
  appId: "1:1019622113242:web:3e06264df0dc6381e8cae3",
  measurementId: "G-4L7HMZNWF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };
