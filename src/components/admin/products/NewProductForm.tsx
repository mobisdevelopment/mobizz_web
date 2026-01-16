"use client";

import { useFormState } from "react-dom";
import { useState } from "react";
import { Establishment } from "@/types/establishment";
import { createProduct } from "@/app/admin/products/new/actions";
import { EstablishmentProductCategory } from "@/types/establishmentProductCategory";

interface NewProductFormProps {
  establishment: Establishment;
  categories?: EstablishmentProductCategory[];
}

export default function NewProductForm({
  establishment,
  categories,
}: NewProductFormProps) {
  const [state, formAction] = useFormState(createProduct, null);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImagePreviews([]); // Reset previews

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setImagePreviews((prev) => [...prev, result]);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <form action={formAction} className="space-y-6">
      <input type="hidden" name="establishmentId" value={establishment.id} />

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
          {establishment.name}
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
          defaultValue="1"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="1">Active</option>
          <option value="0">Inactive</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="images"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Product Images
        </label>
        <input
          type="file"
          id="images"
          name="images"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="text-sm text-gray-500 mt-1">
          Upload one or more product images (optional)
        </p>
      </div>

      {imagePreviews.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image Previews
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <img
                  src={preview}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-24 object-cover"
                />
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
          Create Product
        </button>
        <a
          href="/admin/products"
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium"
        >
          Cancel
        </a>
      </div>
    </form>
  );
}
