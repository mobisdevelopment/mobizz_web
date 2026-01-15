import { UserService } from "@/services/userService";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await UserService.getCurrentUser();

  if (!currentUser || !currentUser.roles.includes("ROLE_ADMIN")) {
    redirect("/");
  }

  return <>{children}</>;
}
