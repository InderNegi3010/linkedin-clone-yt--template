// Import required functions from the modular SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTgkmG_10J8ZFOkPb1EfydhSHaXI2rqh4",
  authDomain: "linkedin-clone-yt-25137.firebaseapp.com",
  projectId: "linkedin-clone-yt-25137",
  storageBucket: "linkedin-clone-yt-25137.firebasestorage.app",
  messagingSenderId: "810839072516",
  appId: "1:810839072516:web:26e88dbab876d99e7afa51",
  measurementId: "G-DCNNFB14CV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore & Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
