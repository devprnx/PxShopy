import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB03CVvQ5--_R1beWHV4QuQzErzwxkZIU8",
  authDomain: "eshop-e22bb.firebaseapp.com",
  databaseURL: "https://eshop-e22bb-default-rtdb.firebaseio.com",
  projectId: "eshop-e22bb",
  storageBucket: "eshop-e22bb.firebasestorage.app",
  messagingSenderId: "1086003638857",
  appId: "1:1086003638857:web:a3cc8f34cb86ad3f2d0598",
  measurementId: "G-TEHJ9EF6HT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);

export default app;