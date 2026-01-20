import Link from "next/link";
import { Plus, Package } from "lucide-react";
import { getEstablishments } from "./actions";

export default async function EstablishmentsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; user?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page || "1", 10));
  const userFirebaseUid = params.user;
  const establishments = await getEstablishments(page, userFirebaseUid);

  const paginationParams = new URLSearchParams();
  if (userFirebaseUid) {
    paginationParams.set("user", userFirebaseUid.toString());
  }

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1>Establishments</h1>
          <p>Manage your business establishments</p>
        </div>
        {userFirebaseUid && (
          <Link
            href={`/admin/establishments/new?user=${userFirebaseUid}`}
            className="btn btn-primary"
          >
            Add Establishment
          </Link>
        )}
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {establishments.length > 0 ? (
              establishments.map((establishment) => (
                <tr key={establishment.id}>
                  <td className="id">{establishment.id}</td>
                  <td className="primary">
                    <Link href={`/admin/establishments/${establishment.id}`}>
                      {establishment.name}
                    </Link>
                  </td>
                  <td>{establishment.address}</td>
                  <td>
                    <span
                      className={`status-badge ${
                        establishment.status === 1 ? "active" : "inactive"
                      }`}
                    >
                      {establishment.status === 1 ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <a
                        href={`/admin/products/new?establishmentId=${establishment.id}`}
                        className="btn btn-primary inline-flex items-center gap-2"
                        title="Add Product"
                      >
                        <Plus size={18} /> Product
                      </a>
                      <Link
                        href={`/admin/products?establishment=${establishment.id}`}
                        className="btn btn-primary inline-flex items-center gap-2"
                        title="View Products"
                      >
                        <Package size={18} />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="empty">
                <td colSpan={5} className="empty">
                  No establishments found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="admin-pagination">
        <Link
          href={`?page=${page - 1}${paginationParams.toString() ? "&" + paginationParams.toString() : ""}`}
          className={page <= 1 ? "disabled" : "enabled"}
        >
          Previous
        </Link>

        <span>Page {page}</span>

        <Link
          href={`?page=${page + 1}${paginationParams.toString() ? "&" + paginationParams.toString() : ""}`}
          className="enabled"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
