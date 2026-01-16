"use server";

import { productRepository } from "@/services/repositories/productRepository";
import { establishmentProductCategoryRepository } from "@/services/repositories/establishmentProductCategoryRepository";
import { uploadedImageRepository } from "@/services/repositories/uploadedImageRepository";
import { API_CONFIG } from "@/constants/config";
import { makeApiRequest } from "@/services/apiRequest";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Product } from "@/types/product";

export async function getProductForEdit(id: string): Promise<Product | null> {
  try {
    const product = await productRepository.getProductDetails(id);
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
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

export async function updateProduct(
  prevState: { error?: string } | null,
  formData: FormData
) {
  try {
    const productId = formData.get("productId") as string;
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const priceMinor = parseInt(formData.get("priceMinor") as string);
    const establishmentId = formData.get("establishmentId") as string;
    const establishmentProductCategoryId = formData.get("categoryId") as string;
    const status = parseInt(formData.get("status") as string);
    const images = formData.getAll("images") as File[];
    const existingImageIds = formData.getAll("existingImageIds") as string[];

    // Upload new images if provided
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

    // Combine existing and new image IRIs
    const allImageIris = [
      ...existingImageIds.map((id) => `api/uploaded_images/${id}`),
      ...uploadedImages.map((img) => `api/uploaded_images/${img.id}`),
    ];

    // Update product
    const response = await makeApiRequest(
      API_CONFIG.BASE_URL,
      `api/products/${productId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          name,
          description,
          priceMinor,
          establishment: `api/establishments/${establishmentId}`,
          establishmentProductCategory: establishmentProductCategoryId
            ? `api/establishment_product_categories/${establishmentProductCategoryId}`
            : null,
          status,
          uploadedImages: allImageIris,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return {
        error:
          errorData?.error?.message ||
          errorData?.message ||
          "Failed to update product",
      };
    }

    revalidatePath("/admin/products");
    revalidatePath(`/admin/products/${productId}`);
  } catch (error: unknown) {
    console.error("Error updating product:", error);
    return {
      error:
        error instanceof Error ? error.message : "Failed to update product",
    };
  }

  redirect("/admin/products");
}
