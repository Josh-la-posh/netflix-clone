import React, { createContext, useState, useEffect, useMemo } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const login = (email, password) => {
    if ((email, password)) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          if (user) {
            setUserData(email);
            localStorage.setItem("userData", email);
          }
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error message = " + errorMessage);
        });
    } else {
      alert("Enter Email and Password");
    }
  };

  const logout = () => {
    setUserData(null);
    localStorage.removeItem("userData");
  };

  const isLoggedIn = () => {
    setIsLoading(true);
    let userData = localStorage.getItem("userData");
    setUserData(userData);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  const contextValue = useMemo(
    () => ({
      login,
      logout,
      isLoading,
      userData,
    }),
    [login, logout, isLoading, userData]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
