import { establishmentRepository } from "@/services/repositories/establishmentRepository";

export async function getEstablishments() {
  try {
    const establishments = await establishmentRepository.listEstablishments();

    return establishments;
  } catch (error) {
    console.error("Error fetching establishments:", error);
    return [];
  }
}
