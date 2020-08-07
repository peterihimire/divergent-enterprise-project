import React from "react";
import Title from "../components/Title";
import { FaCloud, FaCartPlus, FaWarehouse } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../images/picture-right.png";

const WhyProcredita = () => {
  return (
    <>
      <div className="why-procredita">
        <div className="why-procredita-center">
          <Title title="why procredita" />
          <div className="why-procredita-container">
            <div className="left-grid">
              <div className="grid-text">
                <p>
                  our professional have a combined 85 years in dept recovery
                  efforts that have seen the recovery of more than N19Billion in
                  debt from very unwilling debtors.we use the most advanced
                  techniques to trace debtors and recover money owed. we also
                  offer and alternative method for loan recoveries by allowing
                  debtors provide value worth the amount they are unable to pay.
                </p>
                <p>
                  techniques to trace debtors and recover money owed. we also
                  offer and alternative method for loan recoveries by allowing
                  debtors provide value worth the amount they are unable to pay.
                </p>
                <p>
                  our professional have a combined 85 years in dept recovery
                  efforts that have seen the recovery of more than N19Billion in
                  debt from very unwilling debtors.we use the most advanced
                  techniques to trace debtors and recover money owed. we also
                  offer and alternative method for loan recoveries by allowing
                  debtors provide value worth the amount they are unable to pay.
                  techniques to trace debtors and recover money owed. we also
                  offer and alternative method for loan recoveries by allowing
                  debtors provide value worth the amount they are unable to pay.
                </p>
              </div>
            </div>
            <div className="right-grid">
              <img src={image} alt="man" />
            </div>
          </div>
          <div className="card">
            <div className="card-center">
              <div className="card-item">
                <FaWarehouse />
                <p>
                  our professional have a combined 85 years in dept recovery
                  efforts that have seen the recovery of more than N19Billion in
                  debt from very unwilling debtors.we use the most advanced
                  techniques to trace debtors and recover
                </p>
              </div>
              <div className="card-item">
                <FaCloud />
                <p>
                  our professional have a combined 85 years in dept recovery
                  efforts that have seen the recovery of more than N19Billion in
                  debt from very unwilling debtors.we use the most advanced
                  techniques to trace debtors and recover
                </p>
              </div>
              <div className="card-item">
                <FaCartPlus />
                <p>
                  our professional have a combined 85 years in dept recovery
                  efforts that have seen the recovery of
                </p>
              </div>
            </div>
            <div className="card-btn-div">
              <Link className="btn">hire us</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyProcredita;
