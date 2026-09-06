function ProductCard({ product, onViewDetails }) {
  /*
   * Use the first EMI plan for the
   * product card preview.
   */
  const firstEmiPlan = product.emiPlans[0];

  /*
   * Calculate the monthly EMI from
   * the product price and EMI tenure.
   */
  const monthlyEmi = Math.round(product.price / firstEmiPlan.tenure);

  return (
    <article className="product-card">
      {/* =========================
          PRODUCT IMAGE
      ========================= */}

      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />

        <span className="product-discount">{product.discount}</span>
      </div>

      {/* =========================
          PRODUCT INFORMATION
      ========================= */}

      <div className="product-information">
        <p className="product-brand">{product.brand}</p>

        <h3 className="product-name">{product.name}</h3>

        {/* =========================
            RATING
        ========================= */}

        <div className="product-rating">
          <span className="rating-star">★</span>

          <span>{product.rating}</span>

          <span className="review-count">({product.reviews})</span>
        </div>

        {/* =========================
            PRICE
        ========================= */}

        <div className="product-pricing">
          <span className="product-price">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          <span className="product-original-price">
            ₹{product.originalPrice.toLocaleString("en-IN")}
          </span>
        </div>

        {/* =========================
            EMI
        ========================= */}

        <div className="product-emi">
          <span className="emi-label">0% EMI</span>

          <span className="emi-amount">
            ₹{monthlyEmi.toLocaleString("en-IN")}
            {" / month"}
          </span>
        </div>

        {/* =========================
            VIEW DETAILS
        ========================= */}

        <button className="product-button" onClick={onViewDetails}>
          View Details
          <span>→</span>
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
