import React, { useContext } from "react";
import BeforeLogin from "./BeforeLogin/BeforeLogin";
import AfterLogin from "./AfterLogin/AfterLogin";
import { AuthContext } from "../context/AuthContext";

function MainComponent() {
  const { isLoading, userData } = useContext(AuthContext);

  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src="images/loader.gif" alt="" style={{width: '3rem', height: '3rem', marginTop: '20%'}}/>
      </div>
    );
  }

  return <>{userData !== null ? <AfterLogin /> : <BeforeLogin />}</>;
}

export default MainComponent;
