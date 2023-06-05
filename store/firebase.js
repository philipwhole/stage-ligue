import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBn8ahJAL1AxP21ftiez8vQWhaqYo1GtK8",
  authDomain: "stage-ligue.firebaseapp.com",
  projectId: "stage-ligue",
  storageBucket: "stage-ligue.appspot.com",
  messagingSenderId: "425477991985",
  appId: "1:425477991985:web:99f523f42e3c5a332c6f10",
  measurementId: "G-CGZS1WEYY2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
