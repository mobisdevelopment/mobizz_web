import { productRepository } from "@/services/repositories/productRepository";

export async function getProductDetails(id: string) {
  try {
    const product = await productRepository.getProductDetails(id);
    return product;
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null;
  }
}
