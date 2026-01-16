import { API_CONFIG } from "@/constants/config";
import { makeApiRequest } from "../apiRequest";
import { Product } from "@/types/product";

class ProductRepository {
  private readonly baseUrl = API_CONFIG.BASE_URL;
  private readonly endpoints = API_CONFIG.ENDPOINTS.PRODUCTS;

  async listProducts(page?: number): Promise<Product[]> {
    const url = this.endpoints.LIST + (page ? `?page=${page}` : "");
    const response = await makeApiRequest(this.baseUrl, url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();

      if (errorData && errorData.error && errorData.error.message) {
        throw new Error(errorData.error.message);
      }

      throw new Error("Failed to load products");
    }

    const products: Product[] = await response.json();

    return products;
  }

  async getProductDetails(id: string): Promise<Product> {
    const response = await makeApiRequest(
      this.baseUrl,
      this.endpoints.DETAILS(id),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to load product details");
    }

    const product: Product = await response.json();

    return product;
  }
}

export const productRepository = new ProductRepository();
