// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importa getFirestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM4jhFkf1GkN5TryoilQc50KhZYCXfljc",
  authDomain: "funkostore-ecc50.firebaseapp.com",
  projectId: "funkostore-ecc50",
  storageBucket: "funkostore-ecc50.appspot.com",
  messagingSenderId: "597093229921",
  appId: "1:597093229921:web:11d6afce55a4e7c3301120"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)