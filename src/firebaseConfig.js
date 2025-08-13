// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBuB861a2Y2i-XxVO9Qpu8Dje03z4p_q2Y",
  authDomain: "todo-1984.firebaseapp.com",
  databaseURL:
    "https://todo-1984-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-1984",
  storageBucket: "todo-1984.firebasestorage.app",
  messagingSenderId: "303433817322",
  appId: "1:303433817322:web:43d44642d2f317b9d88b93",
  measurementId: "G-GTGSWP4HVG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
};
