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
                <img src={logo1} alt="logo" />
              </span>
              <span>
                <img src={logo4} alt="logo" />
              </span>
            </Link>
            <div className="nav-links-div">
              <ul className="nav-links">
                <li className="nav-item">
                  <Link to="/">home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about">about us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/services">what we do</Link>
                </li>
              </ul>
              <Link className="btn" to="/contact">
                hire us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
