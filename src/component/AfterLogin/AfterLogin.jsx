import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AfterLoginDisplay from "./AfterLoginDisplay/AfterLoginDisplay";

class BeforeLogin extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/movie" element={<AfterLoginDisplay />} />
          <Route path="/movie" element={<Navigate replace to="/movie" />} />
        </Routes>
      </div>
    );
  }
}

export default BeforeLogin;
