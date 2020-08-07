import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaDribbble
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo3 from "../images/logo3.png";
import img from "../images/1.png";

function footer() {
  return (
    <footer className="footer">
      <div className="summary">
        <div className="footer-center">
          <div className="footer-one">
            <div className="footer-logo">
              <Link to="/" className="logo2">
                <img src={logo3} alt="logo3" />
              </Link>
              <div className="footer-follow">
                <ul className="follow-links-footer">
                  <li className="follow-container-footer">
                    <div className="follow-icon-container-footer1">
                      <a
                        href="https://facebook.com/ihimirepeter"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookF className="follow-icon-footer FaFacebookF" />
                      </a>
                    </div>
                  </li>
                  <li className="follow-container-footer">
                    <div className="follow-icon-container-footer2">
                      <a
                        href="https://twitter.com/ptechanalysis"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter className="follow-icon-footer FaTwitter" />
                      </a>
                    </div>
                  </li>
                  <li className="follow-container-footer">
                    <div className="follow-icon-container-footer3">
                      <a
                        href="https://instagram.com/peterihimire"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaDribbble className="follow-icon-footer FaInstagram" />
                      </a>
                    </div>
                  </li>
                  <li className="follow-container-footer">
                    <div className="follow-icon-container-footer4">
                      <a
                        href="https://www.linkedin.com/in/peter-ihimire-20b007162"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn className="follow-icon-footer FaLinkedinIn" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-contact">
              <h4>company</h4>
              <ul>
                <li>
                  <Link to="">why procredita</Link>
                </li>
                <li>
                  <Link to="">FAQ</Link>
                </li>
                <li>
                  <Link to="">Loan terms</Link>
                </li>
                <li>
                  <Link to="">Apply Now</Link>
                </li>
                <li>
                  <Link to="">Contact us</Link>
                </li>
                <li>
                  <Link to="">Login</Link>
                </li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>legal</h4>
              <ul>
                <li>
                  <Link to="">Cookies Policy</Link>
                </li>
                <li>
                  <Link to="">Privacy Policy</Link>
                </li>
              </ul>
            </div>

            <div className="footer-map">
              <div className="card">
                <ul>
                  <li>
                    <Link to="">
                      <FaMapMarkerAlt /> 1686 olashore oladele street , off
                      sanusi fafunwa street , victoria island lagos.
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <FaPhoneAlt /> 234-8060-9581-34
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <FaEnvelope /> info@procredita.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-two">
        <div className="footer-two-center">
          <div className="last-footer">
            <p>This website uses cookies</p>
            <p>
              our professional have a combined 85 years in dept recovery efforts
              that have seen the recovery of more than N19Billion in debt from
              very unwilling debtors.we use the most advanced
            </p>
            <h5> &copy; procredita 2020. all rights reserved. </h5>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
