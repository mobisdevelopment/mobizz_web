import { establishmentRepository } from "@/services/repositories/establishmentRepository";

export async function getEstablishments(page: number = 1) {
  try {
    const establishments = await establishmentRepository.listEstablishments(
      page
    );

    return establishments;
  } catch (error) {
    console.error("Error fetching establishments:", error);
    return [];
  }
}
