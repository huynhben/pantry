// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtJboAPtGVXP9d8hjSOGOfM8QZhpLiuH4",
  authDomain: "pantry-2a2ba.firebaseapp.com",
  projectId: "pantry-2a2ba",
  storageBucket: "pantry-2a2ba.appspot.com",
  messagingSenderId: "43027387124",
  appId: "1:43027387124:web:e684db007fd8a33d81c4a1",
  measurementId: "G-21N3NWKTJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);