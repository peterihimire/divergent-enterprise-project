import React from "react";
import Title from "../components/Title";
import avatar from "../images/Avator.png";
import avatar2 from "../images/Avator2.png";
import avatar3 from "../images/Avator3.png";
import avatar4 from "../images/Avator4.png";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials">
        <div className="testimonials-center">
          <Title title="Hear from some of our clients" />
          <div className="testimonials-container">
            <div className="left-grid">
              <div className="testimonials-text">
                <p className="grid-p">
                  The average 'dept to he recovered' (DBR) a BRF license
                  operator is entitled per year is N150M with 25% of
                  successfully recovered dept as commission for the operator
                </p>
              </div>
              <div className="testimonials-image">
                <div>
                  <img src={avatar} alt="portrait" />
                </div>
              </div>
            </div>
            <div className="right-grid">
              <div className="testimonials-text">
                <p className="grid-p">
                  The average 'dept to he recovered' (DBR) a BRF license
                  operator is entitled per year is N150M with 25% of
                  successfully recovered dept as commission for the operator
                </p>
              </div>
              <div className="testimonials-image">
                <div>
                  <img src={avatar2} alt="portrait" />
                </div>
              </div>
            </div>
          </div>
          <div className="testimonials-container">
            <div className="left-grid">
              <div className="testimonials-text">
                <p className="grid-p">
                  The average 'dept to he recovered' (DBR) a BRF license
                  operator is entitled per year is N150M with 25% of
                  successfully recovered dept as commission for the operator
                </p>
              </div>
              <div className="testimonials-image">
                <div>
                  <img src={avatar3} alt="portrait" />
                </div>
              </div>
            </div>
            <div className="right-grid">
              <div className="testimonials-text">
                <p className="grid-p">
                  The average 'dept to he recovered' (DBR) a BRF license
                  operator is entitled per year is N150M with 25% of
                  successfully recovered dept as commission for the operator
                </p>
              </div>
              <div className="testimonials-image">
                <div>
                  <img src={avatar4} alt="portrait" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
