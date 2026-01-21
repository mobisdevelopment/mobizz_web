import NewEstablishmentProductCategoryForm from "@/components/admin/establishments/NewEstablishmentProductCategoryForm";
import { getEstablishmentDetails } from "../../actions";

export default async function NewEstablishmentProductCategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

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

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1>Add New Product Category</h1>
          <p>Create a new product category for the establishment</p>
        </div>
      </div>

      <div className="admin-container">
        <NewEstablishmentProductCategoryForm establishment={establishment} />
      </div>
    </div>
  );
}
