"use server";

import { establishmentProductCategoryRepository } from "@/services/repositories/establishmentProductCategoryRepository";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getEstablishmentProductCategoryDetails(
  categoryId: string,
) {
  try {
    const establishmentProductCategory =
      await establishmentProductCategoryRepository.getById(
        parseInt(categoryId, 10),
      );

    return establishmentProductCategory || null;
  } catch (error) {
    console.error(
      "Error fetching establishment product category details:",
      error,
    );
    return null;
  }
}

interface UpdateEstablishmentProductCategoryState {
  error?: string;
  values?: {
    name?: string;
  };
}

export async function updateEstablishmentProductCategory(
  prevState: UpdateEstablishmentProductCategoryState | null,
  formData: FormData,
): Promise<UpdateEstablishmentProductCategoryState> {
  const categoryId = formData.get("categoryId") as string;
  const establishmentId = formData.get("establishmentId") as string;
  const name = formData.get("name") as string;

  const savedValues = {
    name,
  };

  try {
    // Validation
    if (!categoryId || categoryId.trim().length === 0) {
      return { error: "Category ID is required", values: savedValues };
    }

    if (!establishmentId || establishmentId.trim().length === 0) {
      return { error: "Establishment ID is required", values: savedValues };
    }

    if (!name || name.trim().length === 0) {
      return { error: "Category name is required", values: savedValues };
    }

    if (name.trim().length < 2) {
      return {
        error: "Category name must be at least 2 characters",
        values: savedValues,
      };
    }

    if (name.trim().length > 255) {
      return {
        error: "Category name must not exceed 255 characters",
        values: savedValues,
      };
    }

    await establishmentProductCategoryRepository.update(
      parseInt(categoryId, 10),
      {
        name: name.trim(),
      },
    );

    revalidatePath(`/admin/establishments/${establishmentId}`);
  } catch (error: unknown) {
    console.error("Error updating establishment product category:", error);
    return {
      error:
        error instanceof Error
          ? error.message
          : "Failed to update product category",
      values: savedValues,
    };
  }

  redirect(`/admin/establishments/${establishmentId}`);
}
