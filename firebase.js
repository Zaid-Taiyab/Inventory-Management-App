// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import analytics only if it's being used
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3pFmDH9xSfX1qoWQ38zJZi5BZSgVs0Vc",
  authDomain: "inventory-manager-2-6b98f.firebaseapp.com",
  projectId: "inventory-manager-2-6b98f",
  storageBucket: "inventory-manager-2-6b98f.appspot.com",
  messagingSenderId: "717117180346",
  appId: "1:717117180346:web:3fac523b124b7e3579f583",
  measurementId: "G-N9B287HYFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

// Initialize Analytics (only on client-side)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { firestore, analytics };
