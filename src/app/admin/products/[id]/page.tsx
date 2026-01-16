import Link from "next/link";
import { getProductDetails } from "./actions";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductDetails(id);

  if (!product) {
    return (
      <div className="admin-page">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h1 className="text-2xl font-bold text-red-900 mb-2">
            Product not found
          </h1>
          <p className="text-red-700 mb-4">
            The product you are looking for does not exist.
          </p>
          <Link
            href="/admin/products"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <Link
            href="/admin/products"
            className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
          >
            ← Back to Products
          </Link>
          <h1>{product.name}</h1>
        </div>
        <Link href={`/admin/products/${id}/edit`} className="btn btn-primary">
          Edit Product
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
                Product ID
              </label>
              <p className="text-lg text-gray-900">{product.id}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <p className="text-lg text-gray-900">{product.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Description
              </label>
              <p className="text-lg text-gray-900 whitespace-pre-wrap">
                {product.description || "No description provided."}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Price
              </label>
              <p className="text-lg text-gray-900">
                {(product.priceMinor / 100).toFixed(2)} RON
              </p>
            </div>
          </div>
        </div>

        {/* Establishment Info */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Establishment
          </h2>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Establishment Name
            </label>
            <Link
              href={`/admin/establishments/${product.establishment.id}`}
              className="text-lg text-blue-600 hover:underline"
            >
              {product.establishment.name}
            </Link>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Establishment Product Category
            </label>
            {product.establishmentProductCategory ? (
              <p className="text-lg text-gray-900">
                {product.establishmentProductCategory.name}
              </p>
            ) : (
              <p className="text-lg text-gray-900 italic">
                No category assigned.
              </p>
            )}
          </div>
        </div>

        {/* Status */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Status</h2>
          <div>
            <span
              className={`status-badge ${
                product.status === 1 ? "active" : "inactive"
              }`}
            >
              {product.status === 1 ? "Active" : "Inactive"}
            </span>
          </div>
        </div>

        {/* Images */}
        {product.uploadedImages && product.uploadedImages.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Uploaded Images
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {product.uploadedImages.map((image) => (
                <div
                  key={image.id}
                  className="border rounded-lg overflow-hidden"
                >
                  <img
                    src={image.url}
                    alt={`Product Image ${image.id}`}
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
