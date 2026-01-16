import Link from "next/link";
import {
  getProductForEdit,
  getEstablishmentProductCategories,
} from "./actions";
import EditProductForm from "@/components/admin/products/EditProductForm";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductForEdit(id);

  if (!product) {
    return (
      <div className="admin-page">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h1 className="text-2xl font-bold text-red-900 mb-2">
            Product not found
          </h1>
          <p className="text-red-700 mb-4">
            The product you are trying to edit does not exist.
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

  const categories = await getEstablishmentProductCategories(
    product.establishment.id
  );

  return (
    <div className="admin-page">
      <div className="mb-8">
        <Link
          href={`/admin/products/${id}`}
          className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
        >
          ← Back to Product Details
        </Link>
        <h1 className="text-4xl font-bold text-gray-900">Edit Product</h1>
        <p className="text-gray-600 mt-2">Update product information</p>
      </div>

      <div className="bg-white rounded-lg shadow p-8 max-w-2xl">
        <EditProductForm product={product} categories={categories} />
      </div>
    </div>
  );
}
