import { API_CONFIG } from "@/constants/config";
import { makeApiRequest } from "../apiRequest";
import { EstablishmentImage } from "@/types/establishmentImage";

class EstablishmentImageRepository {
  private readonly baseUrl = API_CONFIG.BASE_URL;
  private readonly endpoints = API_CONFIG.ENDPOINTS.ESTABLISHMENT_IMAGES;

  async uploadImage(file: File): Promise<EstablishmentImage> {
    const formData = new FormData();
    formData.append("file", file);

    const response = await makeApiRequest(this.baseUrl, this.endpoints.UPLOAD, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    const uploadedImage = (await response.json()) as EstablishmentImage;

    return uploadedImage;
  }
}

export const establishmentImageRepository = new EstablishmentImageRepository();
