import NewEstablishmentForm from "@/components/admin/establishments/NewEstablishmentForm";
import { getCategories } from "./actions";

export default async function NewEstablishmentPage({
  searchParams,
}: {
  searchParams: Promise<{ user?: string }>;
}) {
  const params = await searchParams;
  const userFirebaseUid = params.user;
  const categories = await getCategories();

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1>Add New Establishment</h1>
          <p>Create a new business establishment</p>
        </div>
      </div>

      <div className="admin-container">
        <NewEstablishmentForm
          userFirebaseUid={userFirebaseUid}
          categories={categories}
        />
      </div>
    </div>
  );
}
