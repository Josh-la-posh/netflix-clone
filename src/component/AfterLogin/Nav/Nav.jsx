import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useNavigate } from "react-router-dom";
// import { auth, db, logout } from "../../../firebase";
// import { query, getDoc, collection, where } from "firebase/firestore";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState([]);
  // const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  // const navigate = useNavigate();
  // const fetchUserName = async () => {
  //   try {
  //     const q = query(collection(db, "users"), where("uid", "==", user?.uid));
  //     const doc = await getDoc(q);
  //     const data = doc.docs[0].data();
  //     setName(data.name);
  //   } catch (err) {
  //     console.error(err);
  //     alert("An error occured while fetching user data");
  //   }
  // };
  // useEffect(() => {
  //     if (loading) return;
  //     if (!user) return navigate("/signin");
  //     fetchUserName();
  // }, [user, loading]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", []);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className="nav__logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netlix Avatar"
          className="nav__avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
