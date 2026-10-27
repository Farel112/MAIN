import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaAOpAOpANCyuBGJpsCp1tbVe5tZy02pA",
  authDomain: "appexpo-f1e9e.firebaseapp.com",
  projectId: "appexpo-f1e9e",
  storageBucket: "appexpo-f1e9e.firebasestorage.app",
  messagingSenderId: "183491775168",
  appId: "1:183491775168:web:f5c8074bb029361ae07b25",
  measurementId: "G-17Z5YWXTLG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);