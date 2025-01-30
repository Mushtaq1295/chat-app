// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuwCySozXnET0yYbfiEahacjvJpWK1PiU",
  authDomain: "chat-d6fe8.firebaseapp.com",
  projectId: "chat-d6fe8",
  storageBucket: "chat-d6fe8.firebasestorage.app",
  messagingSenderId: "179255441879",
  appId: "1:179255441879:web:30329e0bb051bfef38f392"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
