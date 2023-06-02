// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfhSiWKbYVjsPicCSX_g2XGcpGNN26YEw",
  authDomain: "portfolio-7fba9.firebaseapp.com",
  projectId: "portfolio-7fba9",
  storageBucket: "portfolio-7fba9.appspot.com",
  messagingSenderId: "767903432435",
  appId: "1:767903432435:web:d9f157017cf2439cc94186",
  measurementId: "G-RQM6M0XBGJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
