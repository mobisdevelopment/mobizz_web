"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { establishmentRepository } from "@/services/repositories/establishmentRepository";
import { categoryRepository } from "@/services/repositories/categoryRepository";
import { establishmentImageRepository } from "@/services/repositories/establishmentImageRepository";

interface CreateEstablishmentState {
  error?: string;
  values?: {
    ownerFirebaseUid?: string;
    categoryId?: string;
    name?: string;
    description?: string;
    address?: string;
    status?: string;
  };
}

export async function getCategories() {
  try {
    const categories = await categoryRepository.list();
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function createEstablishment(
  prevState: CreateEstablishmentState | null,
  formData: FormData,
): Promise<CreateEstablishmentState> {
  const ownerFirebaseUid = formData.get("ownerFirebaseUid") as string | null;
  const categoryId = formData.get("categoryId") as string;
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const address = formData.get("address") as string;
  const status = formData.get("status") as string;
  const latitude = formData.get("latitude") as string;
  const longitude = formData.get("longitude") as string;
  const images = formData.getAll("images") as File[];

  const savedValues = {
    ownerFirebaseUid: ownerFirebaseUid ?? "",
    categoryId: categoryId ?? "",
    name: name ?? "",
    description: description ?? "",
    address: address ?? "",
    status: status ?? "1",
    latitude: latitude ?? "",
    longitude: longitude ?? "",
  };

  try {
    // Validation
    if (!ownerFirebaseUid || typeof ownerFirebaseUid !== "string") {
      return {
        error: "Valid owner Firebase UID is required",
        values: savedValues,
      };
    }

    if (!name || name.trim().length === 0) {
      return { error: "Establishment name is required", values: savedValues };
    }

    if (name.trim().length < 3) {
      console.log("Name too short", savedValues);
      return {
        error: "Establishment name must be at least 3 characters",
        values: savedValues,
      };
    }

    if (name.trim().length > 255) {
      return {
        error: "Establishment name must not exceed 255 characters",
        values: savedValues,
      };
    }

    if (!address || address.trim().length === 0) {
      return { error: "Address is required", values: savedValues };
    }

    if (address.trim().length > 500) {
      return {
        error: "Address must not exceed 500 characters",
        values: savedValues,
      };
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
          const uploadedImage =
            await establishmentImageRepository.uploadImage(image);
          uploadedImages.push(uploadedImage);
        } catch (error) {
          console.error("Error uploading image:", error);
          return { error: "Failed to upload image", values: savedValues };
        }
      }
    }

    // Create establishment
    await establishmentRepository.createEstablishment(ownerFirebaseUid, {
      categoryId: categoryId ?? "",
      name: name.trim(),
      description: description.trim(),
      address: address.trim(),
      lat: latitude ? latitude : undefined,
      lng: longitude ? longitude : undefined,
      status: parseInt(status),
      establishmentImagesIds: uploadedImages.map((img) => img.id),
    });

    revalidatePath("/admin/establishments");
  } catch (error: unknown) {
    console.error("Error creating establishment:", error);
    return {
      error:
        error instanceof Error
          ? error.message
          : "Failed to create establishment",
      values: savedValues,
    };
  }

  redirect("/admin/establishments");
}
