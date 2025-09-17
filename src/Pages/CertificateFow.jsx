import React, { useState } from "react";
import Payment from "../Components/Form/Payment";
import Steps from "./Steps";
import ReCAPTCHA from "react-google-recaptcha";

function CertificateFlow() {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const handleCaptcha = (value) => {
    if (value) {
      setCaptchaVerified(true);
    }
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      {!captchaVerified ? (
        <>
          <h2>Please verify you're not a robot</h2>
          <ReCAPTCHA
            sitekey="6Lc4e8krAAAAALGILR6RIMXM7KywUmYzal24iJdu" 
            onChange={handleCaptcha}
            style={{
              justifyItems: 'center',
              justifyContent: 'center'
            }}
          />
        </>
      ) : !showPayment ? (
        <>
          <Steps />
          <div style={{ marginTop: "20px" }}>
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
