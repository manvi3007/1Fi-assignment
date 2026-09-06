export const categories = ["All", "Mobiles", "Laptops", "Audio", "Appliances"];

const products = [
  {
    id: 1,
    brand: "Apple",
    name: "iPhone 16",
    category: "Mobiles",
    image:
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=800&q=80",

    price: 79900,
    originalPrice: 89900,
    discount: "11% off",

    rating: 4.7,
    reviews: 1248,

    variants: {
      color: ["Black", "White", "Blue"],

      storage: [
        {
          name: "128 GB",
          price: 79900,
          originalPrice: 89900,
        },
        {
          name: "256 GB",
          price: 89900,
          originalPrice: 99900,
        },
        {
          name: "512 GB",
          price: 109900,
          originalPrice: 119900,
        },
      ],
    },

    emiPlans: [
      {
        id: "emi-3",
        tenure: 3,
        interest: "0%",
        label: "3 months",
      },
      {
        id: "emi-6",
        tenure: 6,
        interest: "0%",
        label: "6 months",
      },
      {
        id: "emi-12",
        tenure: 12,
        interest: "0%",
        label: "12 months",
      },
    ],

    description:
      "iPhone 16 with advanced camera system, powerful performance and all-day battery life.",

    highlights: [
      "A18 chip",
      "48MP Fusion camera",
      "6.1-inch Super Retina XDR display",
      "All-day battery life",
    ],
  },

  {
    id: 2,
    brand: "Samsung",
    name: "Galaxy S25",
    category: "Mobiles",
    image:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80",

    price: 74999,
    originalPrice: 84999,
    discount: "12% off",

    rating: 4.6,
    reviews: 892,

    variants: {
      color: ["Navy", "Silver", "Black"],

      storage: [
        {
          name: "128 GB",
          price: 74999,
          originalPrice: 84999,
        },
        {
          name: "256 GB",
          price: 79999,
          originalPrice: 89999,
        },
        {
          name: "512 GB",
          price: 89999,
          originalPrice: 99999,
        },
      ],
    },

    emiPlans: [
      {
        id: "emi-3",
        tenure: 3,
        interest: "0%",
        label: "3 months",
      },
      {
        id: "emi-6",
        tenure: 6,
        interest: "0%",
        label: "6 months",
      },
      {
        id: "emi-12",
        tenure: 12,
        interest: "0%",
        label: "12 months",
      },
    ],

    description:
      "Samsung Galaxy S25 with flagship performance, AI-powered features and a premium display.",

    highlights: [
      "Snapdragon processor",
      "50MP camera",
      "Dynamic AMOLED display",
      "AI-powered features",
    ],
  },

  {
    id: 3,
    brand: "Sony",
    name: "WH-1000XM5 Headphones",
    category: "Audio",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",

    price: 29990,
    originalPrice: 34990,
    discount: "14% off",

    rating: 4.5,
    reviews: 634,

    variants: {
      color: ["Black", "Silver"],
    },

    emiPlans: [
      {
        id: "emi-3",
        tenure: 3,
        interest: "0%",
        label: "3 months",
      },
      {
        id: "emi-6",
        tenure: 6,
        interest: "0%",
        label: "6 months",
      },
      {
        id: "emi-12",
        tenure: 12,
        interest: "0%",
        label: "12 months",
      },
    ],

    description:
      "Premium wireless headphones with industry-leading noise cancellation and immersive sound.",

    highlights: [
      "Industry-leading noise cancellation",
      "30-hour battery",
      "Multipoint connection",
      "High-quality audio",
    ],
  },

  {
    id: 4,
    brand: "Apple",
    name: "MacBook Air M3",
    category: "Laptops",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",

    price: 114900,
    originalPrice: 124900,
    discount: "8% off",

    rating: 4.8,
    reviews: 421,

    variants: {
      color: ["Midnight", "Silver", "Starlight"],

      storage: [
        {
          name: "256 GB",
          price: 114900,
          originalPrice: 124900,
        },
        {
          name: "512 GB",
          price: 134900,
          originalPrice: 144900,
        },
      ],
    },

    emiPlans: [
      {
        id: "emi-6",
        tenure: 6,
        interest: "0%",
        label: "6 months",
      },
      {
        id: "emi-12",
        tenure: 12,
        interest: "0%",
        label: "12 months",
      },
      {
        id: "emi-18",
        tenure: 18,
        interest: "0%",
        label: "18 months",
      },
    ],

    description:
      "MacBook Air powered by the M3 chip, designed for exceptional performance and portability.",

    highlights: [
      "Apple M3 chip",
      "13.6-inch Liquid Retina display",
      "Up to 18 hours battery",
      "Lightweight design",
    ],
  },

  {
    id: 5,
    brand: "LG",
    name: "260L Double Door Refrigerator",
    category: "Appliances",
    image:
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80",

    price: 32990,
    originalPrice: 38990,
    discount: "15% off",

    rating: 4.5,
    reviews: 318,

    variants: {
      color: ["Silver", "Black"],
    },

    emiPlans: [
      {
        id: "emi-6",
        tenure: 6,
        interest: "0%",
        label: "6 months",
      },
      {
        id: "emi-12",
        tenure: 12,
        interest: "0%",
        label: "12 months",
      },
      {
        id: "emi-18",
        tenure: 18,
        interest: "0%",
        label: "18 months",
      },
    ],

    description:
      "A spacious double-door refrigerator designed for efficient cooling and everyday convenience.",

    highlights: [
      "260L capacity",
      "Double-door design",
      "Frost-free cooling",
      "Energy-efficient operation",
    ],
  },
];

export { products };

export default products;
