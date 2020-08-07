import React from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import image from "../images/picture-left.png";
import logo2 from "../images/logo2.png";
import dots from "../images/Fill.png";
import shape from "../images/shape.png";
import bean from "../images/bean.png";

const OwnProcredita = () => {
  return (
    <>
      <div className="own-procredita">
        <div className="own-procredita-center">
          <div className="centered">
            <img src={logo2} alt="logo" />
          </div>

          <Title title="Own Procredita" />
          <div className="own-procredita-container">
            <div className="lady-dots-div">
              <div className="lady-dots">
                <img src={dots} alt="dot-fill" />
              </div>
              <div className="shape">
                <img src={shape} alt="shape" />
              </div>
              <div className="bean">
                <img src={bean} alt="bean" />
              </div>
              <div className="left-grid">
                <img src={image} alt="man" />
              </div>
            </div>

            <div className="right-grid">
              <div className="grid-text">
                <p className="grid-p">
                  We are inviting interested individuals and entities across
                  Nigeria to help achieve our objective and earn while doing so
                  by owing a Bawopada franchisse. This allows you to collect
                  dept on our behalf in your region and earn a 25% commission on
                  debt recovered. We provide the training and information that
                  allows you to effectively recover dept from debtors in your
                  area.
                </p>
                <p className="grid-p">
                  The Bawopada Regional Franchise (BRF) Licence varies from
                  N750,000 to N,000,000 depending on your location , with Lagos
                  State being the highest based off volume of dept to be
                  recovered per region.
                </p>
                <p className="grid-p">
                  The average 'dept to he recovered' (DBR) a BRF license
                  operator is entitled per year is N150M with 25% of
                  successfully recovered dept as commission for the operator
                </p>
                <p className="grid-p">
                  Our license are available for all parts of Nigeria except
                  Borno, Zamfara and Bayelsa State.
                </p>
                <h5>Become a Dept Collection Manager</h5>
                <div className="own-btn-div">
                  <Link to="/" className="btn dark btn-big">
                    signup
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnProcredita;
