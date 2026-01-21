import { API_CONFIG } from "@/constants/config";
import { makeApiRequest } from "../apiRequest";
import { Category } from "@/types/category";

class CategoryRepository {
  private readonly baseUrl = API_CONFIG.BASE_URL;
  private readonly endpoints = API_CONFIG.ENDPOINTS.CATEGORIES;

  async list(): Promise<Category[]> {
    const response = await makeApiRequest(this.baseUrl, this.endpoints.LIST, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();

      if (errorData && errorData.error && errorData.error.message) {
        throw new Error(errorData.error.message);
      }

      throw new Error("Failed to load categories");
    }

    const categories: Category[] = await response.json();

    return categories;
  }
}

export const categoryRepository = new CategoryRepository();
