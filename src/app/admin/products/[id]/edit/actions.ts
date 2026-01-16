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

interface UpdateProductState {
  error?: string;
  values?: {
    name?: string;
    description?: string;
    priceMinor?: string;
    categoryId?: string;
    status?: string;
  };
}

export async function updateProduct(
  prevState: UpdateProductState | null,
  formData: FormData
): Promise<UpdateProductState> {
  const productId = formData.get("productId") as string;
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const priceMinorStr = formData.get("priceMinor") as string;
  const establishmentId = formData.get("establishmentId") as string;
  const establishmentProductCategoryId = formData.get("categoryId") as string;
  const statusStr = formData.get("status") as string;
  const images = formData.getAll("images") as File[];
  const existingImageIds = formData.getAll("existingImageIds") as string[];

  const savedValues = {
    name,
    description,
    priceMinor: priceMinorStr,
    categoryId: establishmentProductCategoryId,
    status: statusStr,
  };

  try {
    // Validation
    if (!productId || productId.trim().length === 0) {
      return { error: "Product ID is required", values: savedValues };
    }

    if (!name || name.trim().length === 0) {
      return { error: "Product name is required", values: savedValues };
    }

    if (name.trim().length < 3) {
      return {
        error: "Product name must be at least 3 characters",
        values: savedValues,
      };
    }

    if (name.trim().length > 255) {
      return {
        error: "Product name must not exceed 255 characters",
        values: savedValues,
      };
    }

    if (description && description.trim().length > 5000) {
      return {
        error: "Description must not exceed 5000 characters",
        values: savedValues,
      };
    }

    if (!priceMinorStr || isNaN(parseInt(priceMinorStr))) {
      return { error: "Valid price is required", values: savedValues };
    }

    const priceMinor = parseInt(priceMinorStr);
    if (priceMinor < 0) {
      return { error: "Price cannot be negative", values: savedValues };
    }

    if (priceMinor > 999999999) {
      return { error: "Price is too high", values: savedValues };
    }

    if (!statusStr || isNaN(parseInt(statusStr))) {
      return { error: "Valid status is required", values: savedValues };
    }

    // Validate images
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
    for (const image of images) {
      if (image.size > MAX_FILE_SIZE) {
        return {
          error: `Image "${image.name}" is larger than 5MB`,
          values: savedValues,
        };
      }

      if (!image.type.startsWith("image/")) {
        return {
          error: `"${image.name}" is not a valid image file`,
          values: savedValues,
        };
      }
    }

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

    // Update product
    await productRepository.updateProduct(productId, {
      name: name.trim(),
      description: description?.trim() || "",
      priceMinor,
      establishmentId: establishmentId ? parseInt(establishmentId) : undefined,
      establishmentProductCategoryId: establishmentProductCategoryId
        ? parseInt(establishmentProductCategoryId)
        : undefined,
      status: parseInt(statusStr),
      uploadedImagesIds: [
        ...existingImageIds,
        ...uploadedImages.map((img) => img.id),
      ],
    });

    revalidatePath("/admin/products");
    revalidatePath(`/admin/products/${productId}`);
  } catch (error: unknown) {
    console.error("Error updating product:", error);
    return {
      error:
        error instanceof Error ? error.message : "Failed to update product",
      values: savedValues,
    };
  }

  redirect("/admin/products");
}
