# 1Fi Marketplace

A mobile-first Marketplace experience built as part of the 1Fi SDE assignment.

The Marketplace is integrated into the existing Shop experience and allows users to browse products, view product details, select product variants and No-Cost EMI plans, check eligibility, verify mutual-fund-backed financing, and complete a simulated purchase flow.

## Features

### Marketplace

- Product listing with product images, brand, pricing, discounts, and ratings
- Product review counts
- No-Cost EMI information
- Search products by name or brand
- Filter products by category
- Sort products by:
  - Recommended
  - Price: Low to High
  - Price: High to Low
  - Highest Rated

### Product Details

- Product image and description
- Product highlights
- Product variants such as color and storage
- Dynamic product pricing based on selected variants
- Available EMI plans
- Monthly EMI calculation
- No-Cost EMI information
- Product purchase CTA

### Purchase Flow

The Marketplace includes a simulated end-to-end purchase flow:

1. Select a product and variant
2. Select an EMI plan
3. Review and confirm the purchase
4. Check eligibility
5. Verify mutual fund-backed financing
6. Complete the simulated purchase
7. View EMI summary and order status

> Financial verification and purchase steps are simulated for this assignment. No real financial information, payment processing, or financial service API is connected.

## Data and API Architecture

Product and EMI information is kept separate from the UI components.

The project uses a mock service layer to simulate API-based product retrieval.

```text
Product Data
     ↓
products.js
     ↓
productService.js
     ↓
useProducts.js
     ↓
Marketplace
     ↓
ProductCard / ProductDetails
```

### Product Data

Product and EMI information is stored in:

```text
src/data/products.js
```

The data layer contains:

- Product details
- Pricing
- Original pricing
- Discounts
- Categories
- Product images
- Ratings and reviews
- Product variants
- EMI plans
- Product descriptions
- Product highlights

### Mock API Service

The mock API/service layer is located at:

```text
src/services/productService.js
```

The service provides functions for retrieving:

- All products
- Individual products by ID

The service currently uses mock data because a production backend is not part of the assignment.

This separation makes it possible to replace the mock implementation with real API requests later without changing the Marketplace UI components.

### Data Fetching Hook

The custom data-fetching hook is located at:

```text
src/hooks/useProducts.js
```

The hook manages:

- Product retrieval
- Loading state
- Error state
- Retry functionality

## Project Structure

```text
src/
├── components/
│   ├── layout/
│   │   └── AppShell.jsx
│   │
│   ├── marketplace/
│   │   └── ProductCard.jsx
│   │
│   └── product/
│
├── data/
│   └── products.js
│
├── hooks/
│   └── useProducts.js
│
├── pages/
│   ├── Shop.jsx
│   ├── Shop.css
│   ├── Marketplace.jsx
│   ├── Marketplace.css
│   ├── ProductDetails.jsx
│   ├── ProductDetails.css
│   ├── EmiConfirmation.jsx
│   ├── EmiConfirmation.css
│   ├── EligibilityCheck.jsx
│   ├── EligibilityCheck.css
│   ├── MutualFundVerification.jsx
│   ├── MutualFundVerification.css
│   ├── PurchaseComplete.jsx
│   └── PurchaseComplete.css
│
├── services/
│   └── productService.js
│
├── styles/
│   └── global.css
│
├── App.jsx
└── main.jsx
```

## Engineering Practices

### Component Reusability

Product cards are implemented as a separate reusable component:

```text
src/components/marketplace/ProductCard.jsx
```

The component receives product data through props instead of containing product-specific information.

The same component can therefore render different products using the same UI structure.

The product details and purchase-flow screens are also implemented as separate components.

### State Management

React state is used to manage:

- Selected category
- Search query
- Selected product
- Sorting option
- Sort menu visibility
- Selected product variants
- Selected EMI plan
- Current product price
- Purchase-flow screens
- Loading and error states

### Loading and Error Handling

The Marketplace displays a loading state while products are being retrieved.

If product retrieval fails, the user is shown an error state with a retry action.

This prevents the UI from showing a blank screen when data cannot be loaded.

### Responsive Design

The application follows a mobile-first layout and includes responsive CSS for different viewport sizes.

The Marketplace is designed to work within the existing 1Fi mobile application shell.

The layout includes:

- Responsive application shell
- Responsive product grid
- Mobile-friendly search and category controls
- Responsive product details screens
- Responsive EMI and purchase-flow screens
- Fixed bottom navigation within the application shell

### Separation of Concerns

The project separates:

- UI components
- Page-level components
- Product data
- API/service logic
- Data-fetching state
- Styling

This keeps the Marketplace easier to maintain and allows the data source to be changed independently of the UI.

## UI and UX

The Marketplace was designed to remain consistent with the existing 1Fi Shop experience rather than introducing a completely separate visual system.

The implementation maintains:

- Purple primary color treatment
- Rounded cards and controls
- Light application background
- Clear product information hierarchy
- Mobile-first spacing
- Existing bottom navigation
- Existing Shop structure

The Marketplace is rendered as a section within the existing Shop page.

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- React Hooks

## Getting Started

### Prerequisites

Make sure Node.js and npm are installed on your system.

### Installation

Install the project dependencies:

```bash
npm install
```

### Run the Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

### Production Build

To create a production build:

```bash
npm run build
```

## Assignment Scope

This implementation focuses on the Marketplace experience required for the 1Fi SDE assignment.

The following parts are intentionally simulated because a production backend and financial integrations are outside the scope of the assignment:

- Product API
- Eligibility verification
- Mutual fund verification
- Purchase processing
- EMI/order status

No real payment or financial transaction is performed.

## Data Handling Approach

Product and EMI data are not hardcoded directly inside Marketplace UI components.

Instead, product information is maintained in the data layer and retrieved through the mock service layer.

The Marketplace receives product information through the data-fetching hook and passes the relevant product object to reusable UI components.

This approach provides a clear separation between data and presentation and allows the mock data source to be replaced with a real API in the future.

## Implementation Notes

The implementation was designed with the following engineering considerations:

- Product and EMI data are maintained outside UI components.
- Product retrieval is handled through a dedicated service layer.
- Data fetching is handled through a reusable custom hook.
- Product cards are reusable and receive data through props.
- Search, category filtering, and sorting operate on the retrieved product data.
- Loading and error states are handled explicitly.
- The product purchase flow is divided into focused components.
- Existing Shop and application-shell structures are preserved.
- Financial verification and purchase actions are simulated and do not access real financial information.
