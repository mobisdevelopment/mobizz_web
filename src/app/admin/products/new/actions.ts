"use server";

import { establishmentRepository } from "@/services/repositories/establishmentRepository";
import { uploadedImageRepository } from "@/services/repositories/uploadedImageRepository";
import { API_CONFIG } from "@/constants/config";
import { makeApiRequest } from "@/services/apiRequest";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Establishment } from "@/types/establishment";
import { establishmentProductCategoryRepository } from "@/services/repositories/establishmentProductCategoryRepository";

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

export async function getEstablishmentProductCategories(
  establishmentId: number
) {
  try {
    const categories = await establishmentProductCategoryRepository.list(
      establishmentId
    );

    return categories;
  } catch (error) {
    console.error("Error fetching establishment product categories:", error);
    return [];
  }
}

export async function createProduct(
  prevState: { error?: string } | null,
  formData: FormData
) {
  try {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const priceMinor = parseInt(formData.get("priceMinor") as string);
    const establishmentId = formData.get("establishmentId") as string;
    const establishmentProductCategoryId = formData.get("categoryId") as string;
    const status = parseInt(formData.get("status") as string);
    const images = formData.getAll("images") as File[];

    // Upload images first if provided
    const uploadedImages = [];
    if (images.length > 0) {
      for (const image of images) {
        try {
          const uploadedImage = await uploadedImageRepository.uploadImage(
            image
          );
          uploadedImages.push(uploadedImage);
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      }
    }

    // Create product with image references
    const response = await makeApiRequest(
      API_CONFIG.BASE_URL,
      API_CONFIG.ENDPOINTS.PRODUCTS.CREATE,
      {
        method: "POST",
        body: JSON.stringify({
          name,
          description,
          priceMinor,
          establishment: `api/establishments/${establishmentId}`,
          establishmentProductCategory: establishmentProductCategoryId
            ? `api/establishment_product_categories/${establishmentProductCategoryId}`
            : null,
          status,
          uploadedImages: uploadedImages.map(
            (img) => `api/uploaded_images/${img.id}`
          ),
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
