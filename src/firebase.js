// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   signInWithPopup,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   sendPasswordResetEmail,
//   signOut,
//   GoogleAuthProvider,
// } from "firebase/auth";
// import {
//   getFirestore,
//   query,
//   getDoc,
//   collection,
//   where,
//   addDoc,
// } from "firebase/firestore";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDxaoQ89nXSQAbQGM4JJxFDRhygGZZMYBo",
//   authDomain: "netflix-clone-d0c9f.firebaseapp.com",
//   projectId: "netflix-clone-d0c9f",
//   storageBucket: "netflix-clone-d0c9f.appspot.com",
//   messagingSenderId: "359585834247",
//   appId: "1:359585834247:web:8ed6b05788befc902d91a2",
//   measurementId: "G-G0NZT3NRZ4",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const googleProvider = new GoogleAuthProvider();
// const signInWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(auth, googleProvider);
//     const user = res.user;
//     const q = query(collection(db, "users"), where("uid", "==", user.uid));
//     const docs = await getDoc(q);

//     if (docs.docs.length === 0) {
//       await addDoc(collection(db, "ussers"), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// // SIGNING IN WITH EMAIL AND PASSWORD

// const loginWithEmailAndPassword = async (email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// // SIGINING UP WITH EMAIL AND PASSWORD

// // const registeringWithEmailAndPassword = async (name, email, password) => {
// //   try {
// //     const res = await createUserWithEmailAndPassword(auth, email, password);
// //     const user = res.user;
// //     await addDoc(collection(db, "users"), {
// //       uid: user.uid,
// //       name,
// //       authProvider: "local",
// //       email,
// //     });
// //   } catch (err) {
// //     console.error(err);
// //     alert(err.message);
// //   }
// // };

// //PASSWORD RESET LINK

// // const sendPasswordReset = async (email) => {
// //   try {
// //     await sendPasswordResetEmail(auth, email);
// //     alert("Password reset link sent!");
// //   } catch (err) {
// //     console.error(err);
// //     alert(err.message);
// //   }
// // };

// //LOGOUT

// // const logout = () => {
// //   signOut(auth);
// // };

// // export {
// //   auth,
// //   db,
// //   signInWithGoogle,
// //   loginWithEmailAndPassword,
// //   registeringWithEmailAndPassword,
// //   sendPasswordReset,
// //   logout,
// // };
