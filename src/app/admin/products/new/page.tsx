import NewProductForm from "@/components/admin/products/NewProductForm";
import {
  getEstablishmentById,
  getEstablishmentProductCategories,
} from "./actions";

export default async function NewProductPage({
  searchParams,
}: {
  searchParams: Promise<{ establishmentId?: string }>;
}) {
  const params = await searchParams;
  const establishmentId = params.establishmentId;
  if (!establishmentId) {
    throw new Error("Establishment ID is required to create a new product.");
  }

  const establishment = await getEstablishmentById(establishmentId);
  if (!establishment) {
    throw new Error("Establishment not found.");
  }

  const categories = await getEstablishmentProductCategories(establishment.id);

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1>Add New Product</h1>
          <p>Create a new product for an establishment</p>
        </div>
      </div>

      <div className="admin-container">
        <NewProductForm establishment={establishment} categories={categories} />
      </div>
    </div>
  );
}
