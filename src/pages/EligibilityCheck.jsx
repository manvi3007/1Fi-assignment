import { useState } from "react";
import "./EligibilityCheck.css";

function EligibilityCheck({ product, currentPrice, onBack, onContinue }) {
  const [mobile, setMobile] = useState("");
  const [pan, setPan] = useState("");
  const [error, setError] = useState("");
  const [checking, setChecking] = useState(false);
  const [eligible, setEligible] = useState(false);

  const handleMobileChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    setMobile(value.slice(0, 10));
    setError("");
  };

  const handlePanChange = (event) => {
    const value = event.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");

    setPan(value.slice(0, 10));
    setError("");
  };

  const handleCheckEligibility = async (event) => {
    event.preventDefault();

    if (mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

    if (!panPattern.test(pan)) {
      setError("Please enter a valid PAN number.");
      return;
    }

    setError("");
    setChecking(true);

    // Mock eligibility check.
    // In production, this would call the eligibility API.
    setTimeout(() => {
      setChecking(false);
      setEligible(true);
    }, 1000);
  };

  if (!product) {
    return null;
  }

  if (eligible) {
    return (
      <div className="eligibility-page">
        <div className="eligibility-header">
          <button
            className="eligibility-back"
            onClick={onBack}
            aria-label="Go back"
          >
            ‹
          </button>

          <h2>Eligibility</h2>
        </div>

        <div className="eligibility-result">
          <div className="eligibility-success-icon">✓</div>

          <h2>You’re eligible!</h2>

          <p>Your details have been successfully verified for this purchase.</p>

          <div className="eligibility-limit">
            <span>Available purchase limit</span>
            <strong>₹1,50,000</strong>
          </div>

          <button className="eligibility-continue" onClick={onContinue}>
            Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="eligibility-page">
      <div className="eligibility-header">
        <button
          className="eligibility-back"
          onClick={onBack}
          aria-label="Go back"
        >
          ‹
        </button>

        <h2>Check Eligibility</h2>
      </div>

      <div className="eligibility-intro">
        <h1>Let’s check your eligibility</h1>

        <p>
          Enter your mobile number and PAN details to check whether you can
          purchase this product using 1Fi EMI.
        </p>
      </div>

      <div className="eligibility-product">
        <img src={product.image} alt={product.name} />

        <div className="eligibility-product-info">
          <h3>{product.name}</h3>

          <p>₹{currentPrice.toLocaleString("en-IN")}</p>
        </div>
      </div>

      <form className="eligibility-form" onSubmit={handleCheckEligibility}>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>

          <input
            id="mobile"
            type="tel"
            inputMode="numeric"
            placeholder="Enter 10-digit mobile number"
            value={mobile}
            onChange={handleMobileChange}
            maxLength={10}
          />
        </div>

        <div className="form-group">
          <label htmlFor="pan">PAN Number</label>

          <input
            id="pan"
            type="text"
            placeholder="Enter PAN number"
            value={pan}
            onChange={handlePanChange}
            maxLength={10}
          />
        </div>

        {error && <div className="eligibility-error">{error}</div>}

        <button
          type="submit"
          className="check-eligibility-button"
          disabled={checking}
        >
          {checking ? "Checking..." : "Check Eligibility"}
        </button>

        <div className="eligibility-note">
          <span className="eligibility-note-icon">⌕</span>

          <span>
            This is a demo eligibility flow for the assignment. No personal
            information is stored or sent to a real financial service.
          </span>
        </div>
      </form>
    </div>
  );
}

export default EligibilityCheck;
