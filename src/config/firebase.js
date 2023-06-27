import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD2v_ntZtUAjf2Gh8z0faHtC5TPgV-hKCQ",
  authDomain: "netflix-clone-b0918.firebaseapp.com",
  projectId: "netflix-clone-b0918",
  storageBucket: "netflix-clone-b0918.appspot.com",
  messagingSenderId: "613712718118",
  appId: "1:613712718118:web:a7a5975a65b92a20dbb9e7",
  measurementId: "G-LHL69QE37E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
