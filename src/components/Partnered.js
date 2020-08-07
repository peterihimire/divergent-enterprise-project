import React from "react";
import { Link } from "react-router-dom";

const Partnered = () => {
  return (
    <>
      <div className="partnered">
        <div className="partnered-center">
          <div className="partnered-container">
            <p className="grid-p">
              We are partnered with several major financial institutions and
              businesses in Nigeria. <span>Procredita</span> is your trusted
              partner in efficient debt recovery .We get the job done.
            </p>
            <p className="grid-p">why not try us today?</p>
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
