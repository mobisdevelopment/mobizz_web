import Link from "next/link";
import { getProducts } from "./actions";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: number; establishment?: number }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, params.page || 1);
  const establishmentId = params.establishment;
  const products = await getProducts(page, establishmentId);

  const paginationParams = new URLSearchParams();
  if (establishmentId) {
    paginationParams.set("establishment", establishmentId.toString());
  }

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1>Products</h1>
          <p>Manage your business products</p>
        </div>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Establishment</th>
              <th>Establishment Product Category</th>
              <th>Name</th>
              <th>Preț</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id}>
                  <td className="id">{product.id}</td>
                  <td className="primary">
                    <Link
                      href={`/admin/establishments/${product.establishment.id}`}
                    >
                      {product.establishment.name}
                    </Link>
                  </td>
                  <td>{product.establishmentProductCategory?.name}</td>
                  <td className="primary">
                    <Link href={`/admin/products/${product.id}`}>
                      {product.name}
                    </Link>
                  </td>
                  <td>{(product.priceMinor / 100).toFixed(2)} RON</td>
                  <td>
                    <span
                      className={`status-badge ${
                        product.status === 1 ? "active" : "inactive"
                      }`}
                    >
                      {product.status === 1 ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <Link
                        href={`/admin/products/${product.id}/edit`}
                        className="btn btn-primary inline-flex items-center gap-2"
                        title="Edit Product"
                      >
                        Edit
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="empty">
                <td colSpan={7} className="empty">
                  No products found
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
