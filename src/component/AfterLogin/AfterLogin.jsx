import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AfterLoginDisplay from "./AfterLoginDisplay/AfterLoginDisplay";

class AfterLogin extends Component {
  render() {
    return (
      <Routes>
        <Route path="/movie" element={<AfterLoginDisplay />} />
        <Route path="/movie" element={<Navigate replace to="/movie" />} />
      </Routes>
    );
  }
}

export default AfterLogin;
