export const API_CONFIG = {
  BASE_URL: process.env.API_URL || "http://localhost:8061/",
  ENDPOINTS: {
    AUTH: {
      LOGIN: "api/auth/login",
    },
    CONTACT: {
      SAVE: "api/contact_messages",
    },
    ESTABLISHMENTS: {
      LIST: "api/establishments-admin",
      DETAILS: (id: string) => `api/establishments/${id}`,
    },
  },
} as const;
