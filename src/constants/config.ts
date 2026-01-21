export const API_CONFIG = {
  BASE_URL: process.env.API_URL || "http://localhost:8061/",
  ENDPOINTS: {
    AUTH: {
      LOGIN: "api/auth/login",
    },
    CATEGORIES: {
      LIST: "api/categories",
    },
    CONTACT: {
      SAVE: "api/contact_messages",
    },
    USERS: {
      CURRENT: "api/users/me",
      LIST: "api/users-admin",
    },
    ESTABLISHMENTS: {
      LIST: "api/establishments-admin",
      DETAILS: (id: string) => `api/establishments/${id}`,
      CREATE: "api/establishments",
      UPDATE: (id: string) => `api/establishments/${id}`,
    },
    ESTABLISHMENT_IMAGES: {
      UPLOAD: "api/establishment_images",
    },
    ESTABLISHMENT_PRODUCT_CATEGORIES: {
      LIST: "api/establishment_product_categories",
      CREATE: "api/establishment_product_categories",
    },
    PRODUCTS: {
      LIST: "api/products",
      DETAILS: (id: string) => `api/products/${id}`,
      CREATE: "api/products",
      UPDATE: (id: string) => `api/products/${id}`,
    },
    UPLOADED_IMAGES: {
      UPLOAD: "api/uploaded_images",
    },
  },
} as const;
