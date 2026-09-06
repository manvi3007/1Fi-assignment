import "./PurchaseComplete.css";

function PurchaseComplete({
  product,
  currentPrice,
  selectedEmi,
  monthlyEmi,
  onDone,
}) {
  if (!product) {
    return null;
  }

  return (
    <div className="purchase-complete-page">
      <div className="purchase-complete-content">
        {/* =========================
            SUCCESS ICON
        ========================= */}

        <div className="purchase-success-icon">✓</div>

        <h1>Purchase confirmed!</h1>

        <p className="purchase-success-text">
          Your order has been successfully placed using your 1Fi no-cost EMI
          plan.
        </p>

        {/* =========================
            PRODUCT
        ========================= */}

        <div className="purchase-product-card">
          <img src={product.image} alt={product.name} />

          <div className="purchase-product-info">
            <span>{product.brand}</span>

            <h3>{product.name}</h3>

            <strong>₹{currentPrice.toLocaleString("en-IN")}</strong>
          </div>
        </div>

        {/* =========================
            EMI SUMMARY
        ========================= */}

        <div className="purchase-summary-card">
          <div className="purchase-summary-heading">
            <h3>EMI summary</h3>

            <span>0% Interest</span>
          </div>

          <div className="purchase-summary-row">
            <span>Monthly EMI</span>

            <strong>₹{monthlyEmi.toLocaleString("en-IN")}</strong>
          </div>

          <div className="purchase-summary-row">
            <span>Tenure</span>

            <strong>{selectedEmi?.tenure} months</strong>
          </div>

          <div className="purchase-summary-row">
            <span>Total payable</span>

            <strong>₹{currentPrice.toLocaleString("en-IN")}</strong>
          </div>
        </div>

        {/* =========================
            ORDER STATUS
        ========================= */}

        <div className="purchase-status-card">
          <div className="status-item">
            <div className="status-icon">✓</div>

            <div>
              <strong>Payment plan confirmed</strong>

              <span>Your no-cost EMI plan is active.</span>
            </div>
          </div>

          <div className="status-line" />

          <div className="status-item">
            <div className="status-icon">✓</div>

            <div>
              <strong>Order placed</strong>

              <span>The merchant will process your order.</span>
            </div>
          </div>
        </div>

        {/* =========================
            INFO
        ========================= */}

        <div className="purchase-info">
          <span>ⓘ</span>

          <p>
            Your EMI schedule will be available in the EMI Dues section once the
            order is processed.
          </p>
        </div>

        {/* =========================
            DONE BUTTON
        ========================= */}

        <button className="purchase-done-button" onClick={onDone}>
          Back to Marketplace
        </button>

        <p className="purchase-disclaimer">
          This is a simulated purchase flow created for the 1Fi SDE assignment.
        </p>
      </div>
    </div>
  );
}

export default PurchaseComplete;
