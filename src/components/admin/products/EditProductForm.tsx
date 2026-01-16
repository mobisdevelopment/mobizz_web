"use client";

import { useFormState } from "react-dom";
import { useState } from "react";
import { Product } from "@/types/product";
import { updateProduct } from "@/app/admin/products/[id]/edit/actions";
import { EstablishmentProductCategory } from "@/types/establishmentProductCategory";

interface EditProductFormProps {
  product: Product;
  categories?: EstablishmentProductCategory[];
}

export default function EditProductForm({
  product,
  categories,
}: EditProductFormProps) {
  const [state, formAction] = useFormState(updateProduct, null);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [newImagePreviews, setNewImagePreviews] = useState<string[]>([]);
  const [existingImages, setExistingImages] = useState(
    product.uploadedImages || []
  );

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewImages((prev) => [...prev, file]);

      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setNewImagePreviews((prev) => [...prev, result]);
      };
      reader.readAsDataURL(file);

      e.target.value = "";
    }
  };

  const handleRemoveNewImage = (index: number) => {
    setNewImages((prev) => prev.filter((_, i) => i !== index));
    setNewImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRemoveExistingImage = (index: number) => {
    setExistingImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFormAction = async (formData: FormData) => {
    // Add new images to form data
    newImages.forEach((image) => {
      formData.append("images", image);
    });

    // Add existing image IDs
    existingImages.forEach((image) => {
      formData.append("existingImageIds", image.id);
    });

    await formAction(formData);
  };

  return (
    <form action={handleFormAction} className="space-y-6">
      <input type="hidden" name="productId" value={product.id} />
      <input
        type="hidden"
        name="establishmentId"
        value={product.establishment.id}
      />

      {state?.error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{state.error}</p>
        </div>
      )}

      <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Establishment
        </label>
        <p className="text-lg text-gray-900 font-medium">
          {product.establishment.name}
        </p>
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Product Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          defaultValue={product.name}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter product name"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          defaultValue={product.description || ""}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter product description (optional)"
        ></textarea>
      </div>

      <div>
        <label
          htmlFor="categoryId"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Category
        </label>
        <select
          id="categoryId"
          name="categoryId"
          defaultValue={product.establishmentProductCategory?.id || ""}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select a category (optional)</option>
          {categories &&
            categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="priceMinor"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Price (in bani) <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="priceMinor"
          name="priceMinor"
          required
          min="0"
          step="1"
          defaultValue={product.priceMinor}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter price in bani (e.g., 2500 for 25.00 RON)"
        />
        <p className="text-sm text-gray-500 mt-1">
          Enter the price in bani (smallest currency unit). Example: 2500 =
          25.00 RON
        </p>
      </div>

      <div>
        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Status <span className="text-red-500">*</span>
        </label>
        <select
          id="status"
          name="status"
          required
          defaultValue={product.status.toString()}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="1">Active</option>
          <option value="0">Inactive</option>
        </select>
      </div>

      {/* Existing Images */}
      {existingImages.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Images ({existingImages.length})
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {existingImages.map((image, index) => (
              <div
                key={image.id}
                className="border rounded-lg overflow-hidden relative group"
              >
                <img
                  src={image.url}
                  alt={`Current ${index + 1}`}
                  className="w-full h-24 object-cover"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveExistingImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Remove image"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add New Images */}
      <div>
        <label
          htmlFor="imageInput"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Add New Images
        </label>
        <div className="flex gap-2">
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            onChange={handleAddImage}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Add product images one by one (optional)
        </p>
      </div>

      {newImagePreviews.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            New Images to Upload ({newImagePreviews.length})
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {newImagePreviews.map((preview, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden relative group"
              >
                <img
                  src={preview}
                  alt={`New ${index + 1}`}
                  className="w-full h-24 object-cover"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveNewImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Remove image"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
        >
          Update Product
        </button>
        <a
          href={`/admin/products/${product.id}`}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium"
        >
          Cancel
        </a>
      </div>
    </form>
  );
}
