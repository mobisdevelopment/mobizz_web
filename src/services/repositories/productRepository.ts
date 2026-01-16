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
    product.uploadedImages = product.uploadedImages.map((image) => ({
      ...image,
      url: API_CONFIG.BASE_URL + "uploads/images/" + image.image,
    }));

    return product;
  }

  async updateProduct(id: string, data: Partial<Product>): Promise<Product> {
    const response = await makeApiRequest(
      this.baseUrl,
      this.endpoints.DETAILS(id),
      {
        method: "PATCH",
        body: JSON.stringify({
          data,
          establishment: data.establishmentId
            ? `api/establishments/${data.establishmentId}`
            : null,
          establishmentProductCategory: data.establishmentProductCategoryId
            ? `api/establishment_product_categories/${data.establishmentProductCategoryId}`
            : null,
          uploadedImages: data.uploadedImagesIds
            ? data.uploadedImagesIds.map((id) => `api/uploaded_images/${id}`)
            : [],
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData?.error?.message ||
          errorData?.message ||
          "Failed to update product"
      );
    }

    const updatedProduct: Product = await response.json();
    return updatedProduct;
  }

  async createProduct(data: Partial<Product>): Promise<Product> {
    const response = await makeApiRequest(this.baseUrl, this.endpoints.CREATE, {
      method: "POST",
      body: JSON.stringify({
        ...data,
        establishment: data.establishmentId
          ? `api/establishments/${data.establishmentId}`
          : null,
        establishmentProductCategory: data.establishmentProductCategoryId
          ? `api/establishment_product_categories/${data.establishmentProductCategoryId}`
          : null,
        uploadedImages: data.uploadedImagesIds
          ? data.uploadedImagesIds.map((id) => `api/uploaded_images/${id}`)
          : [],
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData?.error?.message ||
          errorData?.message ||
          "Failed to create product"
      );
    }

    const newProduct: Product = await response.json();
    return newProduct;
  }
}

export const productRepository = new ProductRepository();
