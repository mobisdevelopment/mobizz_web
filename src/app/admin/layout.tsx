import { UserService } from "@/services/userService";
import { redirect } from "next/navigation";
import "./admin.css";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await UserService.getCurrentUser();

  if (!currentUser || !currentUser.roles.includes("ROLE_ADMIN")) {
    redirect("/login?next=/admin");
  }

  return (
    <div className="admin-layout min-h-screen">
      <AdminSidebar currentUser={currentUser} />
      <div className="flex-1">{children}</div>
    </div>
  );
}
