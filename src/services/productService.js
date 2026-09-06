import products from "../data/products";

/**
 * Mock API service for Marketplace products.
 *
 * In a production application, these functions
 * can be replaced with real API requests without
 * changing the Marketplace UI components.
 */

/**
 * Fetch all marketplace products.
 */
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

/**
 * Fetch a single product by ID.
 */
export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((item) => item.id === Number(productId));

      if (product) {
        resolve(product);
      } else {
        reject(new Error("Product not found"));
      }
    }, 300);
  });
};
