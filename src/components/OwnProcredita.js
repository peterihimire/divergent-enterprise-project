import React from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const OwnProcredita = () => {
  return (
    <>
      <div className="own-procredita">
        <div className="own-procredita-center">
          <Title title="own procredita" />
          <div className="own-procredita-container">
            <div className="left-grid">
              <h1>Picture at left</h1>
            </div>
            <div className="right-grid">
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
                <h5>become a dept collection manager</h5>
                <Link to="/" className="btn dark">
                  signup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnProcredita;
