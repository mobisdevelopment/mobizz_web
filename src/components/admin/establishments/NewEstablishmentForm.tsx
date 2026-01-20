"use client";

import { useFormState } from "react-dom";
import { createEstablishment } from "@/app/admin/establishments/new/actions";
import { Category } from "@/types/category";
import { useState } from "react";
import Link from "next/link";
import LocationPicker from "./LocationPicker";

export default function NewEstablishmentForm({
  userFirebaseUid,
  categories,
}: {
  userFirebaseUid?: string;
  categories: Category[];
}) {
  const [state, formAction] = useFormState(createEstablishment, null);
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [address, setAddress] = useState<string>("");

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImages((prev) => [...prev, file]);

      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setImagePreviews((prev) => [...prev, result]);
      };
      reader.readAsDataURL(file);

      // Reset the input
      e.target.value = "";
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFormAction = async (formData: FormData) => {
    images.forEach((image) => {
      formData.append("images", image);
    });

    // Add coordinates
    formData.append("latitude", latitude !== null ? latitude.toString() : "");
    formData.append(
      "longitude",
      longitude !== null ? longitude.toString() : "",
    );

    await formAction(formData);
  };

  return (
    <form
      key={JSON.stringify(state?.values ?? {})}
      action={handleFormAction}
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
          htmlFor="categoryId"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Category <span className="text-red-500">*</span>
        </label>
        <select
          id="categoryId"
          name="categoryId"
          required
          defaultValue={state?.values?.categoryId ?? ""}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

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
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          defaultValue={state?.values?.description ?? ""}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter establishment description (optional)"
        ></textarea>
      </div>

      <div>
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Address <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="address"
          name="address"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter establishment address"
        />
      </div>

      <LocationPicker
        defaultLat={latitude}
        defaultLng={longitude}
        address={address}
        onLocationChange={(lat, lng) => {
          setLatitude(lat);
          setLongitude(lng);
        }}
      />

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

      <div>
        <label
          htmlFor="imageInput"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Establishment Images
        </label>
        <div className="flex gap-2">
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            onChange={handleAddImage}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="button"
            onClick={() => {
              const input = document.getElementById(
                "imageInput",
              ) as HTMLInputElement;
              input?.click();
            }}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium"
          >
            Add Image
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Add establishment images one by one (optional)
        </p>
      </div>

      {imagePreviews.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Added Images ({imagePreviews.length})
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {imagePreviews.map((preview, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden relative group"
              >
                <img
                  src={preview}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-24 object-cover"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
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
          Create Establishment
        </button>
        <Link
          href="/admin/establishments"
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
