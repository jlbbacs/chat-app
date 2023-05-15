// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW1eotRhw8PlIs0jyjpgZ3RYziMcLy_Wg",
  authDomain: "chat-app-2b0d6.firebaseapp.com",
  projectId: "chat-app-2b0d6",
  storageBucket: "chat-app-2b0d6.appspot.com",
  messagingSenderId: "796280983347",
  appId: "1:796280983347:web:b22a220e7799f24299b846",
  measurementId: "G-RRR922SE87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const db = getFirestore(app)