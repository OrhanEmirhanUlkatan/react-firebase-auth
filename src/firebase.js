import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2bNQDJGnl2En9JGulZIGMXIV4dcwEibc",
  authDomain: "todoapp-a975f.firebaseapp.com",
  databaseURL:
    "https://todoapp-a975f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todoapp-a975f",
  storageBucket: "todoapp-a975f.appspot.com",
  messagingSenderId: "792971632583",
  appId: "1:792971632583:web:976ddc678f66bcb707c3e2",
  measurementId: "G-T8GH41C455",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
