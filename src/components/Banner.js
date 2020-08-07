import React from "react";
import { Link } from "react-router-dom";
import img from "../images/header.png";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-center">
          <div className="left-grid">
            <div className="grid-text">
              <h1>We provide a comprehensive dept collection service</h1>
              <p className="banner-grid-p">
                our professional have a combined 85 years in dept recovery
                efforts that have seen the recovery of more than N19Billion in
                debt from very unwilling debtors.we use the most advanced
                techniques to trace debtors and recover money owed. we also
                offer and alternative method for loan recoveries by allowing
                debtors provide value worth the amount they are unable to pay.
              </p>
            </div>
            <div className="btn-container">
              <Link to="/" className="btn dark btn-big">
                hire us
              </Link>
              <Link to="/" className="play-link">
                <FaPlay className="fa-play" />
                <span> watch the video</span>
              </Link>
            </div>
          </div>
          <div className="right-grid">
            <img src={img} alt="header" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
