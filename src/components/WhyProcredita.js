import React from "react";
import Title from "../components/Title";
import { FaCloud, FaWarehouse, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../images/picture-write.png";
import logo2 from "../images/logo2.png";
import dots from "../images/Fill.png";

const WhyProcredita = () => {
  return (
    <>
      <div className="why-procredita">
        <div className="why-procredita-center">
          <div className="centered">
            <img src={logo2} alt="logo" />
          </div>
          <Title title="Why Procredita" />
          <div className="why-procredita-container ">
            <div className="left-grid">
              <div className="grid-text">
                <p className="grid-p">
                  Dealing with debtors can be very stressful for clients, not to
                  mention the time it can take to recover the debt.
                  <p>
                    At Procredita we help to take the stress away from business
                    owners and them to refocus their attention back on what they
                    do best growing their business.
                  </p>
                </p>
                <p className="grid-p">
                  Procredita offers a range of different debt collection
                  services including our value for cash service. This means that
                  if debtors are truely unable to pay back, they can provide for
                  value for the monies owed by working for it.
                </p>
                <p className="grid-p">
                  We work with businesses of all types and sizes from start-ups
                  through to larg corporate companies who operate in a multitude
                  of different industries. Our specialist team are able to adapt
                  to the needs of each client and are skilled in the art of
                  negotiation. We pride ourselves on our professionalism and how
                  we handle our cases. Where possible, we will always attempt to
                  resolve cases through negotiation, however, should you need to
                  pursue the legal option we can help.
                </p>
              </div>
            </div>
            <div className="right-grid">
              <img src={image} alt="man" />
            </div>
          </div>
          <div className="main-dots-div">
            <div className="card-dots">
              <img src={dots} alt="dot-fill" />
            </div>
            <div className="card ">
              <div className="card-center">
                <div className="card-item">
                  <div className="card-icon-div fa-warehouse">
                    <FaWarehouse className="card-icon" />
                  </div>
                  <div className="card-text-div">
                    <p>
                      we have a high success rate, envied by many of our
                      commpetitors. In fact we are proud to act for a number of
                      other debt collection agencies as the final step when the
                      failed to collect themselves.
                    </p>
                  </div>
                </div>
                <div className="card-item">
                  <div className="card-icon-div fa-cloud">
                    <FaCloud className="card-icon" />
                  </div>
                  <div className="card-text-div">
                    <p>
                      Our modern computer technology has direct access to
                      up-to-date credit information systems, which enables us to
                      investigate the profile of your debtors more thoroughly ,
                      thus ensuring the best course of debt collection action is
                      taken for each and every account.
                    </p>
                  </div>
                </div>
                <div className="card-item">
                  <div className="card-icon-div fa-shopping-cart">
                    <FaShoppingCart className="card-icon" />
                  </div>
                  <div className="card-text-div">
                    <p>
                      We buy your dept and incur the full cost of collection.
                      This is how we stand out from the rest.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-btn-div">
                <Link className="btn">hire us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyProcredita;
