import { redirect } from "next/navigation";

export default function AdminPage() {
  redirect("/admin/establishments");

  return <h1>Admin Page</h1>;
}
