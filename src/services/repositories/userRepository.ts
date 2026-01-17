import { API_CONFIG } from "@/constants/config";
import { User } from "@/types/user";
import { makeApiRequest } from "../apiRequest";

class UserRepository {
  private readonly baseUrl = API_CONFIG.BASE_URL;
  private readonly endpoints = API_CONFIG.ENDPOINTS.USERS;

  async getCurrentUser(): Promise<User | null> {
    const response = await makeApiRequest(
      this.baseUrl,
      this.endpoints.CURRENT,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      return null;
    }

    const user: User = await response.json();
    return user;
  }
}

export const userRepository = new UserRepository();
