// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2v_ntZtUAjf2Gh8z0faHtC5TPgV-hKCQ",
  authDomain: "netflix-clone-b0918.firebaseapp.com",
  projectId: "netflix-clone-b0918",
  storageBucket: "netflix-clone-b0918.appspot.com",
  messagingSenderId: "613712718118",
  appId: "1:613712718118:web:a7a5975a65b92a20dbb9e7",
  measurementId: "G-LHL69QE37E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);