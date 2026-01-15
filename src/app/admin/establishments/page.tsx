import Link from "next/link";
import { getEstablishments } from "./actions";

export default async function EstablishmentsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page || "1", 10));
  const establishments = await getEstablishments(page);

  return (
    <div className="w-full p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Establishments</h1>
        <p className="text-gray-600 mt-2">
          Manage your business establishments
        </p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                ID
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Address
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {establishments.length > 0 ? (
              establishments.map((establishment) => (
                <tr
                  key={establishment.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {establishment.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    <Link
                      href={`/admin/establishments/${establishment.id}`}
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {establishment.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {establishment.address}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        establishment.status === 1
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {establishment.status === 1 ? "Active" : "Inactive"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                  No establishments found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <Link
          href={`?page=${page - 1}`}
          className={`px-4 py-2 rounded ${
            page <= 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Previous
        </Link>

        <span className="text-sm text-gray-600">Page {page}</span>

        <Link
          href={`?page=${page + 1}`}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
