import { API_CONFIG } from "@/constants/config";
import { makeApiRequest } from "../apiRequest";

class ContactRepository {
  private readonly baseUrl = API_CONFIG.BASE_URL;
  private readonly endpoints = API_CONFIG.ENDPOINTS.CONTACT;

  async save(contact: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) {
    const response = await makeApiRequest(this.baseUrl, this.endpoints.SAVE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });

    if (!response.ok) {
      throw new Error("Failed to save contact");
    }
  }
}

export const contactRepository = new ContactRepository();
