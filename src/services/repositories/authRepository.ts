import { API_CONFIG } from "@/constants/config";
import { makeApiRequest } from "../apiRequest";

export interface RegisterData {
  callbackUrl: string;
  captcha: string;
  company: {
    type: number;
    name: string;
    vat: string;
    countryIso2: string;
    city: string;
    address: string;
    description: string;
    website: string;
  };
  user: {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    phone: string;
    userName: string;
  };
}

class AuthRepository {
  private readonly baseUrl = API_CONFIG.BASE_URL;
  private readonly endpoints = API_CONFIG.ENDPOINTS.AUTH;

  async authenticate(email: string, password: string): Promise<string[]> {
    const response = await makeApiRequest(this.baseUrl, this.endpoints.LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();

      if (errorData && errorData.Error && errorData.Error.Message) {
        throw new Error(errorData.Error.Message);
      }

      throw new Error("Failed to authenticate user.");
    }

    const data = await response.json();

    return [data.token, data.userIdentifier, data.roles];
  }
}

export const authRepository = new AuthRepository();
