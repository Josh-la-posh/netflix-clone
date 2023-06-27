import React from "react";
import "./Header.css";

function HeaderComponent() {
  return (
    <div className="login-nav">
      <ul className="items">
        <li className="list-item">
          <a href="">Home</a>
        </li>
        <li className="list-item">
          <a href="">TV Shows</a>
        </li>
        <li className="list-item">
          <a href="">Movies</a>
        </li>
        <li className="list-item">
          <a href=""> News &#38; &#26; Popular</a>
        </li>
        <li className="list-item">
          <a href="">My List</a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderComponent;
