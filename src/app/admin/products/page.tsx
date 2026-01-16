import Link from "next/link";
import { getProducts } from "./actions";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page || "1", 10));
  const products = await getProducts(page);

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Products</h1>
        <p>Manage your business products</p>
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
                </tr>
              ))
            ) : (
              <tr className="empty">
                <td colSpan={6} className="empty">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="admin-pagination">
        <Link
          href={`?page=${page - 1}`}
          className={page <= 1 ? "disabled" : "enabled"}
        >
          Previous
        </Link>

        <span>Page {page}</span>

        <Link href={`?page=${page + 1}`} className="enabled">
          Next
        </Link>
      </div>
    </div>
  );
}
