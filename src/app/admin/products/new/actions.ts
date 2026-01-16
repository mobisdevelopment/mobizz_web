"use server";

import { establishmentRepository } from "@/services/repositories/establishmentRepository";
import { uploadedImageRepository } from "@/services/repositories/uploadedImageRepository";
import { API_CONFIG } from "@/constants/config";
import { makeApiRequest } from "@/services/apiRequest";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Establishment } from "@/types/establishment";
import { establishmentProductCategoryRepository } from "@/services/repositories/establishmentProductCategoryRepository";
import { productRepository } from "@/services/repositories/productRepository";

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
    await productRepository.createProduct({
      name,
      description,
      priceMinor,
      establishmentId: parseInt(establishmentId),
      establishmentProductCategoryId: establishmentProductCategoryId
        ? parseInt(establishmentProductCategoryId)
        : undefined,
      status,
      uploadedImagesIds: uploadedImages.map((img) => img.id),
    });

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
