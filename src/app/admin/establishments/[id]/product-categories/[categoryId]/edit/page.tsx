import { getEstablishmentDetails } from "../../../actions";
import { getEstablishmentProductCategoryDetails } from "./actions";
import EditEstablishmentProductCategoryForm from "@/components/admin/establishments/EditEstablishmentProductCategoryForm";

export default async function EditEstablishmentProductCategoryPage({
  params,
}: {
  params: Promise<{ id: string; categoryId: string }>;
}) {
  const { id, categoryId } = await params;

  if (!id) {
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

  const establishment = await getEstablishmentDetails(id.toString());

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

  if (!categoryId) {
    return (
      <div className="admin-page">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h1 className="text-2xl font-bold text-red-900 mb-2">
            Product Category not found
          </h1>
          <p className="text-red-700 mb-4">
            The product category you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  const establishmentProductCategory =
    await getEstablishmentProductCategoryDetails(categoryId.toString());

  if (!establishmentProductCategory) {
    return (
      <div className="admin-page">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h1 className="text-2xl font-bold text-red-900 mb-2">
            Product Category not found
          </h1>
          <p className="text-red-700 mb-4">
            The product category you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1>Edit Product Category: {establishmentProductCategory.name}</h1>
          <p>
            Modify the details of this product category for the establishment
            {establishment.name}.
          </p>
        </div>
      </div>

      <div className="admin-container">
        <EditEstablishmentProductCategoryForm
          establishment={establishment}
          category={establishmentProductCategory}
        />
      </div>
    </div>
  );
}
