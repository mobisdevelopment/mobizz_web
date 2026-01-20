import { establishmentRepository } from "@/services/repositories/establishmentRepository";

export async function getEstablishmentDetails(id: string) {
  try {
    const establishment =
      await establishmentRepository.getEstablishmentDetails(id);
    return establishment;
  } catch (error) {
    console.error("Error fetching establishment details:", error);
    return null;
  }
}
