export const API_CONFIG = {
  BASE_URL: process.env.API_URL || "http://localhost:8061/",
  ENDPOINTS: {
    AUTH: {
      LOGIN: "api/auth/login",
    },
    CONTACT: {
      SAVE: "api/contact_messages",
    },
  },
} as const;
