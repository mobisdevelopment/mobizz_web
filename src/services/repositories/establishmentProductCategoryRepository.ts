import { API_CONFIG } from "@/constants/config";
import { makeApiRequest } from "../apiRequest";
import { EstablishmentProductCategory } from "@/types/establishmentProductCategory";

class EstablishmentProductCategoryRepository {
  private readonly baseUrl = API_CONFIG.BASE_URL;
  private readonly endpoints =
    API_CONFIG.ENDPOINTS.ESTABLISHMENT_PRODUCT_CATEGORIES;

  async list(
    establishmentId?: number,
  ): Promise<EstablishmentProductCategory[]> {
    const url =
      this.endpoints.LIST +
      (establishmentId ? `?establishmentId=${establishmentId}` : "");
    const response = await makeApiRequest(this.baseUrl, url, {
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

      throw new Error("Failed to load establishment product categories");
    }

    const establishmentProductCategories: EstablishmentProductCategory[] =
      await response.json();

    return establishmentProductCategories;
  }

  async create(
    data: Partial<EstablishmentProductCategory>,
  ): Promise<EstablishmentProductCategory> {
    const response = await makeApiRequest(this.baseUrl, this.endpoints.CREATE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        establishment: `/api/establishments/${data.establishmentId}`,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();

      if (errorData && errorData.error && errorData.error.message) {
        throw new Error(errorData.error.message);
      }

      throw new Error("Failed to create establishment product category");
    }

    const establishmentProductCategory: EstablishmentProductCategory =
      await response.json();

    return establishmentProductCategory;
  }
}

export const establishmentProductCategoryRepository =
  new EstablishmentProductCategoryRepository();
