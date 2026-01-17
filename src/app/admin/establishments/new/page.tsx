import NewEstablishmentForm from "@/components/admin/establishments/NewEstablishmentForm";

export default function NewEstablishmentPage() {
  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1>Add New Establishment</h1>
          <p>Create a new business establishment</p>
        </div>
      </div>

      <div className="admin-container">
        <NewEstablishmentForm />
      </div>
    </div>
  );
}
