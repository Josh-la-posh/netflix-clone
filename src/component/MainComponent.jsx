import React, { Component } from "react";
import BeforeLogin from "./BeforeLogin/BeforeLogin";
import AfterLogin from "./AfterLogin/AfterLogin";

class MainComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <BeforeLogin />
        <AfterLogin />
      </div>
    );
  }
}

export default MainComponent;
