import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import HeaderComponent from "../Header/Header";
import "./Nav.css";

function Nav() {
  const { logout } = useContext(AuthContext);
  const [show, handleShow] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    logout();
  };

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
        <HeaderComponent />
        <button className="" onClick={handleSubmit}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netlix Avatar"
            className="nav__avatar"
          />
        </button>
      </div>
    </div>
  );
}

export default Nav;
