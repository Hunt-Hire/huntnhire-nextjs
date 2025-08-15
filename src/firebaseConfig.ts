import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASqlottOMVkDaGjfKBZvsML3HUfb75eMQ",
  authDomain: "huntnhire-80947.firebaseapp.com",
  projectId: "huntnhire-80947",
  storageBucket: "huntnhire-80947.firebasestorage.app",
  messagingSenderId: "244682263429",
  appId: "1:244682263429:web:fd12fa23348d61155552ec",
  measurementId: "G-VEMWQ4B68W",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
