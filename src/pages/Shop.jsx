import { useState } from "react";

import "./Shop.css";

import Marketplace from "./Marketplace";

function Shop() {
  const [activeTab, setActiveTab] = useState("brands");

  // Tracks whether the Marketplace is currently
  // showing Product Details / EMI checkout flow.
  const [isMarketplaceFlow, setIsMarketplaceFlow] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);

    // Leaving Marketplace should restore the
    // normal Shop header and tabs.
    if (tab !== "marketplace") {
      setIsMarketplaceFlow(false);
    }
  };

  return (
    <div className="shop-page">
      {/* =========================
          SHOP HEADER
          Hidden during Marketplace
          product / checkout flow
      ========================= */}

      {!isMarketplaceFlow && (
        <>
          {/* Hero Section */}

          <section className="shop-hero">
            <div className="hero-content">
              <div className="emi-badge">✦ NO-COST EMIs</div>

              <h1>
                Shop today,
                <br />
                <span>Pay later using</span>
                <br />
                Mutual funds.
              </h1>

              <p>
                No credit score required. No interest.
                <br />
                Backed by your investments.
              </p>
            </div>

            <div className="hero-shopping-image">🛍️</div>
          </section>

          {/* Shop Options */}

          <div className="shop-tabs">
            <button
              className={`shop-tab ${activeTab === "brands" ? "active" : ""}`}
              onClick={() => handleTabClick("brands")}
            >
              Top Brands
            </button>

            <button
              className={`shop-tab ${activeTab === "stores" ? "active" : ""}`}
              onClick={() => handleTabClick("stores")}
            >
              Nearby Stores
            </button>

            <button
              className={`shop-tab ${
                activeTab === "marketplace" ? "active" : ""
              }`}
              onClick={() => handleTabClick("marketplace")}
            >
              Marketplace
            </button>
          </div>

          {/* Shop Search */}

          {activeTab !== "marketplace" && (
            <div className="shop-search">
              <span className="search-icon">⌕</span>

              <input type="text" placeholder="Search online stores..." />
            </div>
          )}
        </>
      )}

      {/* =========================
          TAB CONTENT
      ========================= */}

      {!isMarketplaceFlow && activeTab === "brands" && <TopBrands />}

      {!isMarketplaceFlow && activeTab === "stores" && <NearbyStores />}

      {activeTab === "marketplace" && (
        <Marketplace onMarketplaceFlowChange={setIsMarketplaceFlow} />
      )}
    </div>
  );
}

/* =========================
   TOP BRANDS
========================= */

function TopBrands() {
  const brands = [
    {
      name: "Air India",
      description: "No-cost EMIs upto 18 months",
      logo: "AIR INDIA",
    },
    {
      name: "Apple Premium Reseller",
      description: "No-cost EMIs upto 24 months",
      logo: "",
    },
    {
      name: "Croma",
      description: "No-cost EMIs upto 24 months",
      logo: "CROMA",
    },
  ];

  return (
    <section className="brands-section">
      <div className="section-heading-row">
        <h2>Top Brands</h2>
      </div>

      <div className="brand-list">
        {brands.map((brand) => (
          <button className="brand-card" key={brand.name}>
            <div className="brand-logo">{brand.logo}</div>

            <div className="brand-info">
              <h3>{brand.name}</h3>

              <p>{brand.description}</p>
            </div>

            <span className="brand-arrow">›</span>
          </button>
        ))}
      </div>
    </section>
  );
}

/* =========================
   NEARBY STORES
========================= */

function NearbyStores() {
  return (
    <section className="stores-section">
      <h2>Nearby Stores</h2>

      <div className="empty-state">
        <div className="empty-icon">⌖</div>

        <h3>Nearby stores coming soon</h3>

        <p>
          We’ll show stores near you where you can shop using your 1Fi limit.
        </p>
      </div>
    </section>
  );
}

export default Shop;
