import React, { useState, useEffect } from "react";
// import {
//   auth,
//   loginWithEmailAndPassword,
//   registeringWithEmailAndPassword,
//   signInWithGoogle,
// } from "../../../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import "../SignIn/SignIn.css";
// import { createBrowserHistory } from "history";

function Register() {
  const [isLearn, setIsLearn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const [user, loading, error] = useAuthState(auth);
  // const history = createBrowserHistory()
  // const register = () => {
  //     registeringWithEmailAndPassword(name, email, password);
  // };

  // useEffect(() => {
  //   if (loading) {
  //     <h1>Loading ...</h1>
  //     return;
  //   }
  //   if (user) history.push("/movie");
  // }, [user, loading]
  // );


  function handleSubmit() {
    if (name && email && password) navigate("/movie")
  }

  const LearnMore = (e) => {
    setIsLearn(!isLearn);
    var learn = e.target;

    if (e.target.lastChild.textContent == "  Learn more.") {
      learn.outerHTML =
        "<br /><br /><div>The information collected by Google reCAPTCHA is subject to the Google <a target='_blank' href='https://policies.google.com/privacy'> Privacy Policy</a> and <a href='https://policies.google.com/terms' target='_blank'>Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</div>";
    }
  };

  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-background">
          <img src="" alt="" className="concord-img" />
        </div>
        <div className="login-header">
          <a href="/" className="login-header__link">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
              alt=""
              className="logo"
            />
          </a>
        </div>
        <div className="login-body">
          <div className="login-content">
            <div className="login-form__main">
              <h1>Sign Up</h1>
              <form onSubmit={handleSubmit} className="login-form">
                <div className="input-id form-floating">
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    className="text-field form-control"
                    placeholder="UserName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    minLength="3"
                    maxLength="8"
                  />
                  <label className="signin-label" htmlFor="userName">
                    Username
                  </label>
                </div>
                <div className="input-id form-floating">
                  <input
                    type="email"
                    id="loginName"
                    name="loginName"
                    className="text-field form-control"
                    placeholder="Email or Phone number"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label className="signin-label" htmlFor="loginName">
                    Email or phone number
                  </label>
                </div>
                <div className="input-id form-floating">
                  <input
                    type="password"
                    id="pass"
                    name="pass"
                    className="form-control text-field"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength="6"
                  />
                  <label className="signin-label" htmlFor="pass">
                    Password
                  </label>
                </div>
                <button className="login-button" type="submit">
                  {/* <Link to="/movie"> */}
                    <span>Sign Up</span>
                  {/* </Link> */}
                </button>
                <button
                  className="login-button"
                  style={{ backgroundColor: "blue", marginTop: "unset" }}
                  target="_blank"
                  // onClick={signInWithGoogle}
                >
                  Sign Up with Google
                </button>

                <div className="login-form__help">
                  <div className="remember-me">
                    <input type="checkbox" name="rememberMe" />
                    <label className="" htmlFor="rememberMe">
                      <span>Remember me</span>
                    </label>
                  </div>
                  <Link to="/" className="login-help">
                    Need Help
                  </Link>
                </div>
              </form>
            </div>
            <div className="login-form__other">
              <div className="signup">
                Already have an account?
                <Link to="/signin"> Sign In</Link>.
              </div>
              <div className="terms-of-use">
                <p>
                  <span>
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot.{" "}
                  </span>
                  <button className="term-button" onClick={(e) => LearnMore(e)}>
                    {" "}
                    Learn more.
                  </button>
                </p>
                <div className="nothing"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer nfooter">
          <div className="line"></div>
          <div className="site-footer">
            <p className="footer-header">
              <a>Questions? Contact us.</a>
            </p>
            <ul className="footer-links">
              <li className="footer-link__item">
                <a href="">FAQ</a>
              </li>
              <li className="footer-link__item">
                <a href="">Help Center</a>
              </li>
              <li className="footer-link__item">
                <a href="">Terms of Use</a>
              </li>
              <li className="footer-link__item">
                <a href="">Privacy</a>
              </li>
              <li className="footer-link__item">
                <a href="">Cookie Preferences</a>
              </li>
              <li className="footer-link__item">
                <a href="">Corporate Information</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
