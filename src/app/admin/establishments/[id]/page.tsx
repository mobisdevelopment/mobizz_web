import Link from "next/link";
import { getEstablishmentDetails } from "./actions";
import ViewLocationMap from "@/components/admin/establishments/ViewLocationMap";

export default async function EstablishmentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const establishment = await getEstablishmentDetails(id);

  if (!establishment) {
    return (
      <div className="admin-page">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h1 className="text-2xl font-bold text-red-900 mb-2">
            Establishment not found
          </h1>
          <p className="text-red-700 mb-4">
            The establishment you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1>{establishment.name}</h1>
        </div>
        <Link
          href={`/admin/establishments/${id}/edit`}
          className="btn btn-primary"
        >
          Edit Establishment
        </Link>
      </div>

      <div className="admin-container">
        {/* Basic Info */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Basic Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Establishment ID
              </label>
              <p className="text-lg text-gray-900">{establishment.id}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <p className="text-lg text-gray-900">{establishment.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Description
              </label>
              <p className="text-lg text-gray-900 whitespace-pre-wrap">
                {establishment.description || "No description provided."}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Address
              </label>
              <p className="text-lg text-gray-900">
                {establishment.address || "No address provided."}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Phone
              </label>
              <p className="text-lg text-gray-900">
                {establishment.phone || "No phone provided."}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <p className="text-lg text-gray-900">
                {establishment.email || "No email provided."}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Website
              </label>
              <p className="text-lg text-gray-900">
                {establishment.website ? (
                  <a
                    href={establishment.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {establishment.website}
                  </a>
                ) : (
                  "No website provided."
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Status</h2>
          <div>
            <span
              className={`status-badge ${
                establishment.status === 1 ? "active" : "inactive"
              }`}
            >
              {establishment.status === 1 ? "Active" : "Inactive"}
            </span>
          </div>
        </div>

        {/* Product Categories */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Product Categories
            </h2>
            <Link
              href={`/admin/establishments/${id}/product-categories/new`}
              className="btn btn-secondary mb-4"
            >
              Add New Product Category
            </Link>
          </div>
          {establishment.establishmentProductCategories &&
          establishment.establishmentProductCategories.length > 0 ? (
            <ul className="list-disc list-inside">
              {establishment.establishmentProductCategories.map((category) => (
                <li key={category.id} className="text-lg text-gray-900">
                  {category.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">No product categories assigned.</p>
          )}
        </div>

        {/* Location Map */}
        {establishment.lat && establishment.lng && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Location Map
            </h2>
            <ViewLocationMap
              latitude={parseFloat(establishment.lat)}
              longitude={parseFloat(establishment.lng)}
              address={establishment.address}
            />
          </div>
        )}

        {/* Images */}
        {establishment.establishmentImages &&
          establishment.establishmentImages.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Images
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {establishment.establishmentImages.map((image) => (
                  <div
                    key={image.id}
                    className="border rounded-lg overflow-hidden"
                  >
                    <img
                      src={image.url}
                      alt={`Establishment Image ${image.id}`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
