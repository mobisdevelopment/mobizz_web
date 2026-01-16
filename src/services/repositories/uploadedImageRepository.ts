import { API_CONFIG } from "@/constants/config";
import { makeApiRequest } from "../apiRequest";
import { UploadedImage } from "@/types/uploadedImage";

class UploadedImageRepository {
  private readonly baseUrl = API_CONFIG.BASE_URL;
  private readonly endpoints = API_CONFIG.ENDPOINTS.UPLOADED_IMAGES;

  async uploadImage(file: File): Promise<UploadedImage> {
    const formData = new FormData();
    formData.append("file", file);

    const response = await makeApiRequest(this.baseUrl, this.endpoints.UPLOAD, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    const uploadedImage = (await response.json()) as UploadedImage;

    return uploadedImage;
  }
}

export const uploadedImageRepository = new UploadedImageRepository();
