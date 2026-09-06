import "./EmiConfirmation.css";

function EmiConfirmation({
  product,
  selectedColor,
  selectedStorage,
  selectedEmi,
  currentPrice,
  monthlyEmi,
  onBack,
  onContinue,
}) {
  if (!product) {
    return null;
  }

  const totalPayable = currentPrice;

  return (
    <div className="confirmation-page">
      <div className="confirmation-header">
        <button
          className="confirmation-back"
          onClick={onBack}
          aria-label="Go back"
        >
          ‹
        </button>

        <h2>Review & Confirm</h2>
      </div>

      <div className="confirmation-success">
        <div className="confirmation-success-icon">✓</div>

        <h1>Review your EMI plan</h1>

        <p>Check your product and EMI details before continuing.</p>
      </div>

      <div className="confirmation-product">
        <img src={product.image} alt={product.name} />

        <div className="confirmation-product-info">
          <span>{product.brand}</span>

          <h3>{product.name}</h3>

          <strong>₹{currentPrice.toLocaleString("en-IN")}</strong>
        </div>
      </div>

      <div className="confirmation-card">
        <h3>Selected options</h3>

        <div className="confirmation-row">
          <span>Color</span>
          <strong>{selectedColor || "Default"}</strong>
        </div>

        {selectedStorage && (
          <div className="confirmation-row">
            <span>Storage</span>
            <strong>{selectedStorage}</strong>
          </div>
        )}
      </div>

      <div className="confirmation-card">
        <h3>EMI plan</h3>

        <div className="confirmation-emi">
          <div>
            <span>Tenure</span>
            <strong>{selectedEmi.tenure} months</strong>
          </div>

          <div>
            <span>Monthly EMI</span>
            <strong>₹{monthlyEmi.toLocaleString("en-IN")}</strong>
          </div>

          <div>
            <span>Interest</span>
            <strong className="no-cost">{selectedEmi.interest}</strong>
          </div>
        </div>
      </div>

      <div className="confirmation-card">
        <h3>Payment summary</h3>

        <div className="confirmation-row">
          <span>Product price</span>

          <strong>₹{currentPrice.toLocaleString("en-IN")}</strong>
        </div>

        <div className="confirmation-row">
          <span>Interest</span>

          <strong>₹0</strong>
        </div>

        <div className="confirmation-divider" />

        <div className="confirmation-row total">
          <span>Total payable</span>

          <strong>₹{totalPayable.toLocaleString("en-IN")}</strong>
        </div>
      </div>

      <div className="confirmation-info">
        <span className="confirmation-info-icon">✓</span>

        <p>
          This is a No-Cost EMI plan. You pay the product price through equal
          monthly instalments with no additional interest.
        </p>
      </div>

      <button className="confirm-continue-button" onClick={onContinue}>
        Confirm & Continue
      </button>

      <p className="confirmation-disclaimer">
        By continuing, you agree to proceed with the eligibility verification
        process.
      </p>
    </div>
  );
}

export default EmiConfirmation;
