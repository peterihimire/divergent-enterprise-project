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
                    <div className="follow-icon-container-footer">
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
                    <div className="follow-icon-container-footer">
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
                    <div className="follow-icon-container-footer">
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
                    <div className="follow-icon-container-footer">
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
          </div>
          <div className="footer-map">
            <div className="card footer-card">
              <ul>
                <li>
                  <Link to="/" className="footer-b">
                    <div className="footer-c">
                      <FaMapMarkerAlt />
                    </div>
                    <span>
                      1686 olashore oladele street , off sanusi fafunwa street ,
                      victoria island lagos.
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="footer-b">
                    <div className="footer-c">
                      <FaPhoneAlt />
                    </div>
                    <span className="map-phone">234-8060-9581-34</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="footer-b">
                    <div className="footer-c">
                      <FaEnvelope />
                    </div>
                    <span className="map-message">info@procredita.com</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-two">
        <div className="footer-two-center">
          <div className="last-footer">
            <b>This website uses cookies</b>
            <p>
              We use cookies to personalise content ads to provide social media
              features and to analyse our traffic. we also share information
              about your use of our site with our social media, advertising
              analytics partners who may combine it with other information that
              you've provided to them or that they've collected from your uses
              of their services. Check <b>Privacy Policy.</b>
            </p>
            <h5> &copy; Procredita 2020. All rights reserved. </h5>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
