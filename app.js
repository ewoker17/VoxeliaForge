// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDk4CySXpN2sPMRvWCPbNi5VOf7M5afN4",
  authDomain: "voxeliaforge-web-180ed.firebaseapp.com",
  projectId: "voxeliaforge-web-180ed",
  storageBucket: "voxeliaforge-web-180ed.firebasestorage.app",
  messagingSenderId: "963524215972",
  appId: "1:963524215972:web:0b8a0de374f8fa5d5b1231",
  measurementId: "G-6ZVC9N232Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
