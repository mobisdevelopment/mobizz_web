"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { establishmentRepository } from "@/services/repositories/establishmentRepository";

interface CreateEstablishmentState {
  error?: string;
  values?: {
    name?: string;
    address?: string;
    status?: string;
  };
}

export async function createEstablishment(
  prevState: CreateEstablishmentState | null,
  formData: FormData,
): Promise<CreateEstablishmentState> {
  const name = formData.get("name") as string;
  const address = formData.get("address") as string;
  const status = formData.get("status") as string;

  const savedValues = {
    name: name ?? "",
    address: address ?? "",
    status: status ?? "1",
  };

  try {
    // Validation
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

    // Create establishment
    await establishmentRepository.createEstablishment({
      name: name.trim(),
      address: address.trim(),
      status: parseInt(status),
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
