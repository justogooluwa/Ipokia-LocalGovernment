import React, { useState } from "react";
import  Payment from "../Components/Form/Payment"
import Steps from "./Steps";

function CertificateFlow() {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <div>
      {!showPayment ? (
        <>
          <Steps />
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button 
              onClick={() => setShowPayment(true)} 
              className="proceed-btn"
            >
              Proceed to Payment
            </button>
          </div>
        </>
      ) : (
        <Payment />
      )}
    </div>
  );
}

export default CertificateFlow;
