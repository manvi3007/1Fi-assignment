import { useState } from "react";

import { categories } from "../data/products";

import useProducts from "../hooks/useProducts";

import ProductDetails from "./ProductDetails";
import ProductCard from "../components/marketplace/ProductCard";

import "./Marketplace.css";

function Marketplace({ onMarketplaceFlowChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sorting state
  const [sortOption, setSortOption] = useState("recommended");
  const [showSortOptions, setShowSortOptions] = useState(false);

  /* =========================
     GET PRODUCTS
  ========================= */

  const { products, loading, error, retry } = useProducts();

  /* =========================
     OPEN PRODUCT DETAILS
  ========================= */

  const handleViewDetails = (product) => {
    setSelectedProduct(product);

    // Hide Shop hero and tabs once the user
    // enters the product / checkout flow.
    onMarketplaceFlowChange?.(true);
  };

  /* =========================
     CLOSE PRODUCT DETAILS
  ========================= */

  const handleBackToMarketplace = () => {
    setSelectedProduct(null);

    // Show Shop hero and tabs again.
    onMarketplaceFlowChange?.(false);
  };

  /* =========================
     HANDLE SORT
  ========================= */

  const handleSortChange = (option) => {
    setSortOption(option);
    setShowSortOptions(false);
  };

  /* =========================
     PRODUCT DETAILS SCREEN
  ========================= */

  if (selectedProduct) {
    return (
      <ProductDetails
        product={selectedProduct}
        onBack={handleBackToMarketplace}
      />
    );
  }

  /* =========================
     LOADING STATE
  ========================= */

  if (loading) {
    return (
      <div className="marketplace-page">
        <div className="marketplace-state">
          <div className="loading-spinner" />

          <h3>Loading marketplace...</h3>

          <p>Fetching products and EMI options.</p>
        </div>
      </div>
    );
  }

  /* =========================
     ERROR STATE
  ========================= */

  if (error) {
    return (
      <div className="marketplace-page">
        <div className="marketplace-state">
          <div className="marketplace-state-icon">!</div>

          <h3>Unable to load marketplace</h3>

          <p>{error}</p>

          <button className="retry-button" onClick={retry}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  /* =========================
     FILTER PRODUCTS
  ========================= */

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const searchText = searchQuery.toLowerCase().trim();

    const matchesSearch =
      product.name.toLowerCase().includes(searchText) ||
      product.brand.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  /* =========================
     SORT PRODUCTS
  ========================= */

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-low") {
      return a.price - b.price;
    }

    if (sortOption === "price-high") {
      return b.price - a.price;
    }

    if (sortOption === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  return (
    <div className="marketplace-page">
      {/* =========================
          HEADER
      ========================= */}

      <header className="marketplace-header">
        <div>
          <p className="marketplace-eyebrow">1Fi</p>

          <h1>Marketplace</h1>

          <p className="marketplace-description">
            Shop products with No-Cost EMI
          </p>
        </div>
      </header>

      {/* =========================
          SEARCH
      ========================= */}

      <div className="marketplace-search">
        <span className="marketplace-search-icon">⌕</span>

        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div>

      {/* =========================
          CATEGORIES
      ========================= */}

      <section className="category-section">
        <div className="category-header">
          <h2>Categories</h2>
        </div>

        <div className="category-list">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* =========================
          PRODUCT HEADER
      ========================= */}

      <section className="marketplace-products">
        <div className="products-header">
          <div>
            <h2>Recommended for you</h2>

            <p>
              {sortedProducts.length}{" "}
              {sortedProducts.length === 1 ? "product" : "products"}
            </p>
          </div>

          {/* SORT */}
          <div className="sort-wrapper">
            <button
              className="sort-button"
              onClick={() => setShowSortOptions((current) => !current)}
            >
              Sort
              <span>↕</span>
            </button>

            {showSortOptions && (
              <div className="sort-menu">
                <button
                  className={sortOption === "recommended" ? "selected" : ""}
                  onClick={() => handleSortChange("recommended")}
                >
                  Recommended
                </button>

                <button
                  className={sortOption === "price-low" ? "selected" : ""}
                  onClick={() => handleSortChange("price-low")}
                >
                  Price: Low to High
                </button>

                <button
                  className={sortOption === "price-high" ? "selected" : ""}
                  onClick={() => handleSortChange("price-high")}
                >
                  Price: High to Low
                </button>

                <button
                  className={sortOption === "rating" ? "selected" : ""}
                  onClick={() => handleSortChange("rating")}
                >
                  Highest Rated
                </button>
              </div>
            )}
          </div>
        </div>

        {/* =========================
            PRODUCT LIST
        ========================= */}

        {sortedProducts.length > 0 ? (
          <div className="product-grid">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={() => handleViewDetails(product)}
              />
            ))}
          </div>
        ) : (
          <div className="no-products">
            <div className="no-products-icon">🔍</div>

            <h3>No products found</h3>

            <p>Try another search or category.</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Marketplace;
