import { API_CONFIG } from "@/constants/config";
import { makeApiRequest } from "../apiRequest";
import { Establishment } from "@/types/establishment";

class EstablishmentRepository {
  private readonly baseUrl = API_CONFIG.BASE_URL;
  private readonly endpoints = API_CONFIG.ENDPOINTS.ESTABLISHMENTS;

  async listEstablishments(
    page?: number,
    userFirebaseUid?: string,
  ): Promise<Establishment[]> {
    let url = this.endpoints.LIST + (page ? `?page=${page}` : "");
    if (userFirebaseUid) {
      url += page ? `&owner=${userFirebaseUid}` : `?owner=${userFirebaseUid}`;
    }
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

      throw new Error("Failed to load establishments");
    }

    const establishments: Establishment[] = await response.json();

    return establishments;
  }

  async getEstablishmentDetails(id: string): Promise<Establishment> {
    const response = await makeApiRequest(
      this.baseUrl,
      this.endpoints.DETAILS(id),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to load establishment details");
    }

    const establishment: Establishment = await response.json();

    return establishment;
  }

  async createEstablishment(
    ownerFirebaseUid: string,
    data: Partial<Establishment>,
  ): Promise<Establishment> {
    const response = await makeApiRequest(this.baseUrl, this.endpoints.CREATE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        category: `api/categories/${data.categoryId}`,
        owner: `api/users/${ownerFirebaseUid}`,
        establishmentImages: data.establishmentImagesIds
          ? data.establishmentImagesIds.map(
              (id) => `api/establishment_images/${id}`,
            )
          : [],
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create establishment");
    }

    const establishment: Establishment = await response.json();

    return establishment;
  }

  async updateEstablishment(
    id: string,
    data: Partial<Establishment>,
  ): Promise<Establishment> {
    const response = await makeApiRequest(
      this.baseUrl,
      this.endpoints.UPDATE(id),
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to update establishment");
    }

    const establishment: Establishment = await response.json();

    return establishment;
  }
}

export const establishmentRepository = new EstablishmentRepository();
