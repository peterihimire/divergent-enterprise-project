import React from "react";
import { Link } from "react-router-dom";

const Partnered = () => {
  return (
    <>
      <div className="partnered">
        <div className="partnered-center">
          <div className="partnered-container">
            <p>
              our professional have a combined 85 years in dept recovery efforts
              that have seen the recovery of more than N19Billion in debt from
              very unwilling debtors.we use the most advanced
            </p>
            <p>why not try us today?</p>
            <div className="partnered-btn-div">
              <Link to="/" className="btn dark btn-white">
                hire us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partnered;
