"use server";

import { establishmentRepository } from "@/services/repositories/establishmentRepository";
import { API_CONFIG } from "@/constants/config";
import { makeApiRequest } from "@/services/apiRequest";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Establishment } from "@/types/establishment";

export async function getEstablishmentById(
  id: string
): Promise<Establishment | null> {
  try {
    const establishment = await establishmentRepository.getEstablishmentDetails(
      id
    );
    return establishment;
  } catch (error) {
    console.error("Error fetching establishment:", error);
    return null;
  }
}

export async function createProduct(
  prevState: { error?: string } | null,
  formData: FormData
) {
  try {
    const name = formData.get("name") as string;
    const priceMinor = parseInt(formData.get("priceMinor") as string);
    const establishmentId = formData.get("establishmentId") as string;
    const status = parseInt(formData.get("status") as string);

    const response = await makeApiRequest(
      API_CONFIG.BASE_URL,
      API_CONFIG.ENDPOINTS.PRODUCTS.CREATE,
      {
        method: "POST",
        body: JSON.stringify({
          name,
          priceMinor,
          establishment: `api/establishments/${establishmentId}`,
          status,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return {
        error:
          errorData?.error?.message ||
          errorData?.message ||
          "Failed to create product",
      };
    }

    revalidatePath("/admin/products");
  } catch (error: unknown) {
    console.error("Error creating product:", error);
    return {
      error:
        error instanceof Error ? error.message : "Failed to create product",
    };
  }

  redirect("/admin/products");
}
