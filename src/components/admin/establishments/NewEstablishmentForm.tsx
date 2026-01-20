"use client";

import { useFormState } from "react-dom";
import { createEstablishment } from "@/app/admin/establishments/new/actions";

export default function NewEstablishmentForm({
  userFirebaseUid,
}: {
  userFirebaseUid?: string;
}) {
  const [state, formAction] = useFormState(createEstablishment, null);

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

      {userFirebaseUid && (
        <input type="hidden" name="ownerFirebaseUid" value={userFirebaseUid} />
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Establishment Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          defaultValue={state?.values?.name ?? ""}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter establishment name"
        />
      </div>

      <div>
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Address <span className="text-red-500">*</span>
        </label>
        <textarea
          id="address"
          name="address"
          rows={3}
          required
          defaultValue={state?.values?.address ?? ""}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter establishment address"
        ></textarea>
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
          defaultValue={state?.values?.status ?? "1"}
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
          Create Establishment
        </button>
        <a
          href="/admin/establishments"
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium"
        >
          Cancel
        </a>
      </div>
    </form>
  );
}
