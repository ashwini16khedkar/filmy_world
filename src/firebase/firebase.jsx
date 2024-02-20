// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHRE6GzEMw0Ye7c1gtMc9jvFrDJgyZjAQ",
  authDomain: "filmyworld-5a93f.firebaseapp.com",
  projectId: "filmyworld-5a93f",
  storageBucket: "filmyworld-5a93f.appspot.com",
  messagingSenderId: "952653051464",
  appId: "1:952653051464:web:562ee87477dfc1d56f4a7d"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const moviesRef = collection(db,"movies");

export default app;

