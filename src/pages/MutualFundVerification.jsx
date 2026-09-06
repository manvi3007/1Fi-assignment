import { useState } from "react";

import "./MutualFundVerification.css";

function MutualFundVerification({ product, currentPrice, onBack, onContinue }) {
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);

  const mockFundValue = 250000;

  const handleVerify = () => {
    setVerifying(true);

    // Mock mutual fund verification.
    // In production, this would be handled by the
    // financial/verification API.
    setTimeout(() => {
      setVerifying(false);
      setVerified(true);
    }, 1000);
  };

  if (!product) {
    return null;
  }

  if (verified) {
    return (
      <div className="mutual-fund-page">
        <div className="mutual-fund-header">
          <button
            className="mutual-fund-back"
            onClick={onBack}
            aria-label="Go back"
          >
            ‹
          </button>

          <h2>Verification</h2>
        </div>

        <div className="verification-success">
          <div className="verification-success-icon">✓</div>

          <h1>You're all set!</h1>

          <p>Your mutual fund-backed payment is ready for the next step.</p>

          <div className="fund-summary">
            <div>
              <span>Available mutual fund value</span>
              <strong>₹{mockFundValue.toLocaleString("en-IN")}</strong>
            </div>

            <div>
              <span>Purchase amount</span>
              <strong>₹{currentPrice.toLocaleString("en-IN")}</strong>
            </div>
          </div>

          <button className="fund-continue-button" onClick={onContinue}>
            Continue to Purchase
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mutual-fund-page">
      <div className="mutual-fund-header">
        <button
          className="mutual-fund-back"
          onClick={onBack}
          aria-label="Go back"
        >
          ‹
        </button>

        <h2>Secure Verification</h2>
      </div>

      <div className="verification-intro">
        <div className="verification-icon">🔐</div>

        <h1>Verify your investments</h1>

        <p>
          1Fi uses your eligible mutual fund investments to enable your no-cost
          EMI purchase.
        </p>
      </div>

      <div className="verification-product">
        <img src={product.image} alt={product.name} />

        <div>
          <span>Purchase</span>

          <h3>{product.name}</h3>

          <strong>₹{currentPrice.toLocaleString("en-IN")}</strong>
        </div>
      </div>

      <div className="verification-card">
        <div className="verification-card-icon">✓</div>

        <div>
          <h3>Mutual fund holdings</h3>

          <p>
            Eligible investments can be used to back your purchase and EMI plan.
          </p>
        </div>
      </div>

      <div className="verification-card">
        <div className="verification-card-icon">✓</div>

        <div>
          <h3>Secure verification</h3>

          <p>
            Your investment eligibility will be verified securely before the
            purchase is completed.
          </p>
        </div>
      </div>

      <div className="verification-note">
        <span>ⓘ</span>

        <p>
          This is a simulated verification flow created for the 1Fi SDE
          assignment. No real financial information is accessed.
        </p>
      </div>

      <button
        className="verify-funds-button"
        onClick={handleVerify}
        disabled={verifying}
      >
        {verifying ? "Verifying..." : "Verify Mutual Funds"}
      </button>
    </div>
  );
}

export default MutualFundVerification;
