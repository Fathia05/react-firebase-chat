import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-7e8f4.firebaseapp.com",
  projectId: "reactchat-7e8f4",
  storageBucket: "reactchat-7e8f4.appspot.com",
  messagingSenderId: "627216024042",
  appId: "1:627216024042:web:cf61af0b43f227c52a3293"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()