import { productRepository } from "@/services/repositories/productRepository";

export async function getProducts(page: number = 1, establishmentId?: number) {
  try {
    const products = await productRepository.listProducts(
      page,
      establishmentId,
    );

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
