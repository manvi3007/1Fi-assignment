import { useMemo, useState } from "react";

import "./ProductDetails.css";

import EmiConfirmation from "./EmiConfirmation";
import EligibilityCheck from "./EligibilityCheck";
import MutualFundVerification from "./MutualFundVerification";
import PurchaseComplete from "./PurchaseComplete";

function ProductDetails({ product, onBack }) {
  /* =========================
     VARIANT OPTIONS
  ========================= */

  const colorOptions = product?.variants?.color || [];
  const storageOptions = product?.variants?.storage || [];

  /* =========================
     SELECTED VARIANTS
  ========================= */

  const [selectedColor, setSelectedColor] = useState(colorOptions[0] || "");

  const [selectedStorage, setSelectedStorage] = useState(
    storageOptions[0]?.name || "",
  );

  const [selectedEmi, setSelectedEmi] = useState(
    product?.emiPlans?.[0] || null,
  );

  /* =========================
     SCREEN STATES
  ========================= */

  const [showConfirmation, setShowConfirmation] = useState(false);

  const [showEligibility, setShowEligibility] = useState(false);

  const [showMutualFundVerification, setShowMutualFundVerification] =
    useState(false);

  const [showPurchaseComplete, setShowPurchaseComplete] = useState(false);

  /* =========================
     SELECTED STORAGE DATA
  ========================= */

  const selectedStorageVariant = useMemo(() => {
    return storageOptions.find((storage) => storage.name === selectedStorage);
  }, [storageOptions, selectedStorage]);

  /* =========================
     CURRENT PRICE
  ========================= */

  const currentPrice = selectedStorageVariant?.price ?? product?.price ?? 0;

  const currentOriginalPrice =
    selectedStorageVariant?.originalPrice ??
    product?.originalPrice ??
    currentPrice;

  /* =========================
     DISCOUNT
  ========================= */

  const discountPercentage =
    currentOriginalPrice > 0
      ? Math.round(
          ((currentOriginalPrice - currentPrice) / currentOriginalPrice) * 100,
        )
      : 0;

  /* =========================
     EMI CALCULATION
  ========================= */

  const calculateMonthlyEmi = (tenure) => {
    if (!tenure || !currentPrice) {
      return 0;
    }

    return Math.round(currentPrice / tenure);
  };

  const selectedMonthlyEmi = selectedEmi
    ? calculateMonthlyEmi(selectedEmi.tenure)
    : 0;

  /* =========================
     SAFETY CHECK
  ========================= */

  if (!product) {
    return (
      <div className="product-details-page">
        <p>Product not found.</p>

        <button onClick={onBack}>Go Back</button>
      </div>
    );
  }

  /* =========================
     PURCHASE COMPLETE
  ========================= */

  if (showPurchaseComplete) {
    return (
      <PurchaseComplete
        product={product}
        currentPrice={currentPrice}
        selectedEmi={selectedEmi}
        monthlyEmi={selectedMonthlyEmi}
        onDone={onBack}
      />
    );
  }

  /* =========================
     MUTUAL FUND VERIFICATION
  ========================= */

  if (showMutualFundVerification) {
    return (
      <MutualFundVerification
        product={product}
        currentPrice={currentPrice}
        onBack={() => setShowMutualFundVerification(false)}
        onContinue={() => setShowPurchaseComplete(true)}
      />
    );
  }

  /* =========================
     ELIGIBILITY SCREEN
  ========================= */

  if (showEligibility) {
    return (
      <EligibilityCheck
        product={product}
        currentPrice={currentPrice}
        onBack={() => setShowEligibility(false)}
        onContinue={() => setShowMutualFundVerification(true)}
      />
    );
  }

  /* =========================
     CONFIRMATION SCREEN
  ========================= */

  if (showConfirmation) {
    return (
      <EmiConfirmation
        product={product}
        selectedColor={selectedColor}
        selectedStorage={selectedStorage}
        selectedEmi={selectedEmi}
        currentPrice={currentPrice}
        monthlyEmi={selectedMonthlyEmi}
        onBack={() => setShowConfirmation(false)}
        onContinue={() => setShowEligibility(true)}
      />
    );
  }

  return (
    <div className="product-details-page">
      {/* =========================
          HEADER
      ========================= */}

      <header className="product-details-header">
        <button className="back-button" onClick={onBack} aria-label="Go back">
          ←
        </button>

        <h1>Product Details</h1>
      </header>

      {/* =========================
          PRODUCT IMAGE
      ========================= */}

      <div className="details-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="details-product-image"
        />

        <span className="details-discount">{discountPercentage}% off</span>
      </div>

      {/* =========================
          PRODUCT INFORMATION
      ========================= */}

      <section className="details-product-info">
        <p className="details-brand">{product.brand}</p>

        <h2>{product.name}</h2>

        <div className="details-rating">
          <span className="details-star">★</span>

          <strong>{product.rating}</strong>

          <span>({product.reviews} reviews)</span>
        </div>

        {/* DYNAMIC PRICE */}

        <div className="details-pricing">
          <span className="details-price">
            ₹{currentPrice.toLocaleString("en-IN")}
          </span>

          <span className="details-original-price">
            ₹{currentOriginalPrice.toLocaleString("en-IN")}
          </span>

          <span className="details-discount-text">
            {discountPercentage}% off
          </span>
        </div>
      </section>

      {/* =========================
          COLOR VARIANT
      ========================= */}

      {colorOptions.length > 0 && (
        <section className="variant-section">
          <div className="variant-heading">
            <h3>Color</h3>

            <span>{selectedColor}</span>
          </div>

          <div className="variant-options">
            {colorOptions.map((color) => (
              <button
                key={color}
                className={`variant-button ${
                  selectedColor === color ? "selected" : ""
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* =========================
          STORAGE VARIANT
      ========================= */}

      {storageOptions.length > 0 && (
        <section className="variant-section">
          <div className="variant-heading">
            <h3>Storage</h3>

            <span>{selectedStorage}</span>
          </div>

          <div className="variant-options">
            {storageOptions.map((storage) => (
              <button
                key={storage.name}
                className={`variant-button ${
                  selectedStorage === storage.name ? "selected" : ""
                }`}
                onClick={() => setSelectedStorage(storage.name)}
              >
                {storage.name}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* =========================
          PRODUCT HIGHLIGHTS
      ========================= */}

      <section className="highlights-section">
        <h3>Product highlights</h3>

        <div className="highlights-list">
          {product.highlights?.map((highlight) => (
            <div className="highlight-item" key={highlight}>
              <span className="highlight-check">✓</span>

              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          DESCRIPTION
      ========================= */}

      <section className="description-section">
        <h3>About this product</h3>

        <p>{product.description}</p>
      </section>

      {/* =========================
          EMI PLANS
      ========================= */}

      <section className="emi-plans-section">
        <div className="emi-section-heading">
          <div>
            <h3>Choose your EMI plan</h3>

            <p>No-cost EMI options available</p>
          </div>

          <span className="zero-interest">0% Interest</span>
        </div>

        <div className="emi-plan-list">
          {product.emiPlans?.map((plan) => {
            const monthlyEmi = calculateMonthlyEmi(plan.tenure);

            return (
              <button
                key={plan.id}
                className={`emi-plan-card ${
                  selectedEmi?.id === plan.id ? "selected" : ""
                }`}
                onClick={() => setSelectedEmi(plan)}
              >
                <div className="emi-radio">
                  {selectedEmi?.id === plan.id && <span />}
                </div>

                <div className="emi-plan-content">
                  <strong>{plan.label}</strong>

                  <span>
                    ₹{monthlyEmi.toLocaleString("en-IN")}
                    {" / month"}
                  </span>
                </div>

                <span className="emi-interest">{plan.interest}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* =========================
          BOTTOM CTA
      ========================= */}

      <div className="details-bottom">
        <div className="selected-payment">
          <span>Monthly EMI</span>

          <strong>
            ₹{selectedMonthlyEmi.toLocaleString("en-IN")}
            {" / month"}
          </strong>
        </div>

        <button
          className="proceed-button"
          onClick={() => setShowConfirmation(true)}
        >
          Proceed with EMI
          <span>→</span>
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
