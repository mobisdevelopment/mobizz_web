"use server";

import { contactRepository } from "@/services/repositories/contactRepository";

export async function submitContactForm(
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<{
  success: boolean;
}> {
  try {
    // Simulate form submission logic, e.g., saving to a database or sending an email
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Contact form submitted:", { name, email, subject, message });

    await contactRepository.save({
      name,
      email,
      subject,
      message,
    });

    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false };
  }
}
