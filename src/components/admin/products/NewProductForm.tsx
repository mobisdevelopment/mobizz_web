"use client";

import { useFormState } from "react-dom";
import { Establishment } from "@/types/establishment";
import { createProduct } from "@/app/admin/products/new/actions";

interface NewProductFormProps {
  establishment: Establishment;
}

export default function NewProductForm({ establishment }: NewProductFormProps) {
  const [state, formAction] = useFormState(createProduct, null);

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
