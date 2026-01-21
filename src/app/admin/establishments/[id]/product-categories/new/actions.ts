"use server";

import { establishmentProductCategoryRepository } from "@/services/repositories/establishmentProductCategoryRepository";
import { revalidatePath } from "next/dist/server/web/spec-extension/revalidate";
import { redirect } from "next/navigation";

interface CreateEstablishmentProductCategoryState {
  success?: boolean;
  error?: string;
  values?: {
    establishmentId?: string;
    name?: string;
  };
}

export async function createEstablishmentProductCategory(
  prevState: CreateEstablishmentProductCategoryState | null,
  formData: FormData,
): Promise<CreateEstablishmentProductCategoryState> {
  const establishmentId = formData.get("establishmentId") as string;
  const name = formData.get("name") as string;

  const savedValues = {
    establishmentId: establishmentId ?? "",
    name: name ?? "",
  };

  try {
    // Validation
    if (!establishmentId || typeof establishmentId !== "string") {
      return {
        error: "Valid establishment ID is required",
        values: savedValues,
      };
    }

    if (!name || typeof name !== "string") {
      return {
        error: "Category name is required",
        values: savedValues,
      };
    }

    // Create establishment product category
    await establishmentProductCategoryRepository.create({
      establishmentId: parseInt(establishmentId, 10),
      name,
    });
    revalidatePath(`/admin/establishments/${establishmentId}`);
  } catch (error) {
    console.error("Error creating establishment product category:", error);
    return {
      error: "An unexpected error occurred. Please try again.",
      values: savedValues,
    };
  }

  redirect(`/admin/establishments/${establishmentId}`);
}
