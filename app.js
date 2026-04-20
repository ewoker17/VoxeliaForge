// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALPIsVzrncuTj_72VDUJbp9T_ov53sxWw",
  authDomain: "voxeliaforge-web.firebaseapp.com",
  projectId: "voxeliaforge-web",
  storageBucket: "voxeliaforge-web.firebasestorage.app",
  messagingSenderId: "145756466177",
  appId: "1:145756466177:web:24f7f28d156f2375c9a400",
  measurementId: "G-Z2FYZX5JZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
