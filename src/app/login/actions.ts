"use server";
import { authRepository } from "@/services/repositories/authRepository";
import { TokenService } from "@/services/tokenService";
import { redirect } from "next/dist/client/components/navigation";

export async function loginWithEmailAndPassword(
  email: string,
  password: string
): Promise<{ success: boolean; errors: string[] }> {
  const errors: string[] = [];

  if (email.trim() === "") {
    errors.push("Email is required.");
  }

  if (password.trim() === "") {
    errors.push("Password is required.");
  }

  if (errors.length > 0) {
    return { success: false, errors };
  }

  try {
    const [token, userIdentifier, roles] = await authRepository.authenticate(
      email,
      password
    );
    await TokenService.storeAuthData(token, userIdentifier, roles);

    return { success: true, errors: [] };
  } catch (error) {
    console.error("Login error:", error);
    if (error instanceof Error) {
      errors.push(error.message);
    } else {
      errors.push("An unknown error occurred.");
    }

    return { success: false, errors };
  }
}

export async function logout(): Promise<void> {
  await TokenService.clear();

  redirect("/login");
}
