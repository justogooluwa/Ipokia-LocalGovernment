import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';

const CaptchaGate = () => {
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();

  const handleCaptcha = (value) => {
    if (value) {
      setVerified(true);
    }
  };

  const handleContinue = () => {
    if (verified) {
      navigate('/certificateflow'); // Change this to your desired route
    } else {
      alert("Please verify you're not a robot.");
    }
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Please verify you're not a robot</h2>

      <ReCAPTCHA
        sitekey="6Lc4e8krAAAAALGILR6RIMXM7KywUmYzal24iJdu" // Replace with your actual site key from Google
        onChange={handleCaptcha}
      />

      <br />

      <button onClick={handleContinue} disabled={!verified}>
        Continue
      </button>
    </div>
  );
};

export default CaptchaGate;
