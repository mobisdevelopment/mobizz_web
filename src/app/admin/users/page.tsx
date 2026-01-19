import Link from "next/link";
import { getUsers } from "./actions";

const ROLE_STYLES: Record<string, string> = {
  ADMIN: "bg-purple-100 text-purple-800",
  ROLE_ADMIN: "bg-purple-100 text-purple-800",
  OWNER: "bg-blue-100 text-blue-800",
  ROLE_OWNER: "bg-blue-100 text-blue-800",
  MANAGER: "bg-emerald-100 text-emerald-800",
  ROLE_MANAGER: "bg-emerald-100 text-emerald-800",
  USER: "bg-gray-100 text-gray-800",
  ROLE_USER: "bg-gray-100 text-gray-800",
};

const getRoleClasses = (role: string) =>
  ROLE_STYLES[role?.toUpperCase()] ?? "bg-slate-100 text-slate-800";

export default async function UsersPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: number }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, params.page || 1);
  const users = await getUsers(page);
  const paginationParams = new URLSearchParams();

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1>Users</h1>
          <p>Manage your business users</p>
        </div>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Roles</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td className="id">{user.id}</td>
                  <td className="primary">{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <div className="role-badges">
                      {user.roles.map((role) => (
                        <span
                          key={role}
                          className={`role-badge ${getRoleClasses(role)}`}
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="empty">
                <td colSpan={5} className="empty">
                  No users found
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
