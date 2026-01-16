import { productRepository } from "@/services/repositories/productRepository";

export async function getProducts(page: number = 1) {
  try {
    const products = await productRepository.listProducts(page);

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
