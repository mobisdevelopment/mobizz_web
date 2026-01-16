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

interface CreateProductState {
  error?: string;
  values?: {
    name?: string;
    description?: string;
    priceMinor?: string;
    categoryId?: string;
    status?: string;
  };
}

export async function createProduct(
  prevState: CreateProductState | null,
  formData: FormData
): Promise<CreateProductState> {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const priceMinorStr = formData.get("priceMinor") as string;
  const establishmentId = formData.get("establishmentId") as string;
  const establishmentProductCategoryId = formData.get("categoryId") as string;
  const status = formData.get("status") as string;
  const images = formData.getAll("images") as File[];

  const savedValues = {
    name: name ?? "",
    description: description ?? "",
    priceMinor: priceMinorStr ?? "",
    categoryId: establishmentProductCategoryId ?? "",
    status: status ?? "1",
  };

  try {
    // Validation
    if (!name || name.trim().length === 0) {
      return { error: "Product name is required", values: savedValues };
    }

    if (name.trim().length < 3) {
      console.log("Name too short", savedValues);
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

    if (!establishmentId || establishmentId.trim().length === 0) {
      return { error: "Establishment is required", values: savedValues };
    }

    if (!status || isNaN(parseInt(status))) {
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
          return { error: "Failed to upload image", values: savedValues };
        }
      }
    }

    // Create product with image references
    await productRepository.createProduct({
      name: name.trim(),
      description: description?.trim() || "",
      priceMinor,
      establishmentId: parseInt(establishmentId),
      establishmentProductCategoryId: establishmentProductCategoryId
        ? parseInt(establishmentProductCategoryId)
        : undefined,
      status: parseInt(status),
      uploadedImagesIds: uploadedImages.map((img) => img.id),
    });

    revalidatePath("/admin/products");
  } catch (error: unknown) {
    console.error("Error creating product:", error);
    return {
      error:
        error instanceof Error ? error.message : "Failed to create product",
      values: savedValues,
    };
  }

  redirect("/admin/products");
}
