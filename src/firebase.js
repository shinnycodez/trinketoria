// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyACi4kuqDRPg79Tu0gqT9kCfegi-P9mkL8",
  authDomain: "trinketoria-6a58b.firebaseapp.com",
  projectId: "trinketoria-6a58b",
  storageBucket: "trinketoria-6a58b.firebasestorage.app",
  messagingSenderId: "193607613895",
  appId: "1:193607613895:web:7d4bbe627bd6fbb51b2de2",
  measurementId: "G-20XYYY68ZV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export const storage = getStorage(app);

// ✅ Export the db
export { db };