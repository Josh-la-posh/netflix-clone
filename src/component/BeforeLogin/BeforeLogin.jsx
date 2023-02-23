import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home/HomePage";
import SignIn from "./SignIn/SignIn";

class BeforeLogin extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </div>
    );
  }
}

export default BeforeLogin;
