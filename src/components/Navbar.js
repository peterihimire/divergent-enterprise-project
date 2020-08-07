import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../images/logo1.png";
import logo4 from "../images/logo4.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar ">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" className="logo">
              <span>
                <img src={logo1} alt="header" />
              </span>
              <img src={logo4} alt="header" />
            </Link>

            <ul className="nav-links">
              <li className="nav-item">
                <Link exact activeClassName="active" to="/">
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link activeClassName="active" to="/about">
                  about us
                </Link>
              </li>
              <li className="nav-item">
                <Link activeClassName="active" to="/services">
                  what we do
                </Link>
              </li>
              <li className="nav-item">
                <Link activeClassName="active" className="btn" to="/contact">
                  hire us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
