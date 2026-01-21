"use client";

import { createEstablishmentProductCategory } from "@/app/admin/establishments/[id]/product-categories/new/actions";
import { Establishment } from "@/types/establishment";
import Link from "next/link";
import { useFormState } from "react-dom";

export default function NewEstablishmentProductCategoryForm({
  establishment,
}: {
  establishment?: Establishment;
}) {
  const [state, formAction] = useFormState(
    createEstablishmentProductCategory,
    null,
  );

  return (
    <form
      key={JSON.stringify(state?.values ?? {})}
      action={formAction}
      className="space-y-6"
    >
      {state?.error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{state.error}</p>
        </div>
      )}

      {establishment && (
        <input type="hidden" name="establishmentId" value={establishment.id} />
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Category Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          defaultValue={state?.values?.name ?? ""}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter category name"
        />
      </div>

      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
        >
          Create Category
        </button>
        <Link
          href={`/admin/establishments/${establishment?.id}/product-categories`}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
