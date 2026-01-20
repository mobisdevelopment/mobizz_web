"use server";

import { establishmentRepository } from "@/services/repositories/establishmentRepository";
import { categoryRepository } from "@/services/repositories/categoryRepository copy";
import { establishmentImageRepository } from "@/services/repositories/establishmentImageRepository";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Establishment } from "@/types/establishment";

export async function getEstablishmentForEdit(
  id: string,
): Promise<Establishment | null> {
  try {
    const establishment =
      await establishmentRepository.getEstablishmentDetails(id);
    return establishment;
  } catch (error) {
    console.error("Error fetching establishment:", error);
    return null;
  }
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

interface UpdateEstablishmentState {
  error?: string;
  values?: {
    categoryId?: string;
    name?: string;
    description?: string;
    address?: string;
    phone?: string;
    email?: string;
    website?: string;
    status?: string;
  };
}

export async function updateEstablishment(
  prevState: UpdateEstablishmentState | null,
  formData: FormData,
): Promise<UpdateEstablishmentState> {
  const establishmentId = formData.get("establishmentId") as string;
  const categoryId = formData.get("categoryId") as string;
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const address = formData.get("address") as string;
  const latitude = formData.get("latitude") as string;
  const longitude = formData.get("longitude") as string;
  const status = formData.get("status") as string;
  const images = formData.getAll("images") as File[];

  const savedValues = {
    categoryId: categoryId ?? "",
    name: name ?? "",
    description: description ?? "",
    address: address ?? "",
    status: status ?? "1",
  };

  try {
    // Validation
    if (!establishmentId || establishmentId.trim().length === 0) {
      return { error: "Establishment ID is required", values: savedValues };
    }

    if (!name || name.trim().length === 0) {
      return { error: "Establishment name is required", values: savedValues };
    }

    if (name.trim().length < 3) {
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

    // Get current establishment to preserve existing images
    const currentEstablishment =
      await establishmentRepository.getEstablishmentDetails(establishmentId);
    const existingImageIds = currentEstablishment?.establishmentImagesIds || [];

    // Upload new images if provided
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

    // Update establishment
    await establishmentRepository.updateEstablishment(establishmentId, {
      categoryId: categoryId ?? "",
      name: name.trim(),
      description: description.trim(),
      address: address.trim(),
      lat: latitude ?? undefined,
      lng: longitude ?? undefined,
      status: parseInt(status),
      establishmentImagesIds: [
        ...existingImageIds,
        ...uploadedImages.map((img) => img.id),
      ],
    });

    revalidatePath("/admin/establishments");
    revalidatePath(`/admin/establishments/${establishmentId}`);
  } catch (error: unknown) {
    console.error("Error updating establishment:", error);
    return {
      error:
        error instanceof Error
          ? error.message
          : "Failed to update establishment",
      values: savedValues,
    };
  }

  redirect(`/admin/establishments/${establishmentId}`);
}
