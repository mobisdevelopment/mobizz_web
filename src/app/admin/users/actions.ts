import { userRepository } from "@/services/repositories/userRepository";

export async function getUsers(page: number = 1) {
  try {
    const users = await userRepository.listUsers(page);

    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}
