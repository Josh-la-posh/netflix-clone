import { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="site-footer__wraper">
          <div className="site-footer">
            <p className="footer-header">
              <a href="">Questions? Contact us.</a>
            </p>
            <ul className="footer-links">
              <li className="footer-link__item">
                <a href="">FAQ</a>
              </li>
              <li className="footer-link__item">
                <a href="">Help Center</a>
              </li>
              <li className="footer-link__item">
                <a href="">Account</a>
              </li>
              <li className="footer-link__item">
                <a href="">Media Center</a>
              </li>
              <li className="footer-link__item">
                <a href="">Investor Relations</a>
              </li>
              <li className="footer-link__item">
                <a href="">Jobs</a>
              </li>
              <li className="footer-link__item">
                <a href="">Ways to Watch</a>
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
              <li className="footer-link__item">
                <a href="">Contact Us</a>
              </li>
              <li className="footer-link__item">
                <a href="">Speed Test</a>
              </li>
              <li className="footer-link__item">
                <a href="">Legal Notices</a>
              </li>
              <li className="footer-link__item">
                <a href="">Only on Netflix</a>
              </li>
            </ul>
            <p className="footer-country">Netflix Nigeria</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
