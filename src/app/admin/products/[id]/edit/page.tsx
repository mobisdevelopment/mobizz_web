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
        </div>
      </div>
    );
  }

  const categories = await getEstablishmentProductCategories(
    product.establishment.id,
  );

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1>Edit Product</h1>
          <p>Update product information</p>
        </div>
      </div>

      <div className="admin-container">
        <EditProductForm product={product} categories={categories} />
      </div>
    </div>
  );
}
