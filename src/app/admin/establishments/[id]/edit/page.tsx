import { getEstablishmentForEdit, getCategories } from "./actions";
import EditEstablishmentForm from "@/components/admin/establishments/EditEstablishmentForm";

export default async function EditEstablishmentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const establishment = await getEstablishmentForEdit(id);

  if (!establishment) {
    return (
      <div className="admin-page">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h1 className="text-2xl font-bold text-red-900 mb-2">
            Establishment not found
          </h1>
          <p className="text-red-700 mb-4">
            The establishment you are trying to edit does not exist.
          </p>
        </div>
      </div>
    );
  }

  const categories = await getCategories();

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1>Edit Establishment</h1>
          <p>Update establishment information</p>
        </div>
      </div>

      <div className="admin-container">
        <EditEstablishmentForm
          establishment={establishment}
          categories={categories}
        />
      </div>
    </div>
  );
}
