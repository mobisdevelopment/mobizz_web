import { API_CONFIG } from "@/constants/config";
import { makeApiRequest } from "../apiRequest";
import { Establishment } from "@/types/establishment";

class EstablishmentRepository {
  private readonly baseUrl = API_CONFIG.BASE_URL;
  private readonly endpoints = API_CONFIG.ENDPOINTS.ESTABLISHMENTS;

  async listEstablishments(): Promise<Establishment[]> {
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
      }
    );

    if (!response.ok) {
      throw new Error("Failed to load establishment details");
    }

    const establishment: Establishment = await response.json();

    return establishment;
  }
}

export const establishmentRepository = new EstablishmentRepository();
