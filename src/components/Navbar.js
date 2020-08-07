import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar ">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" className="pete-logo">
              benkih
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
