"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LogOut, Home, Users, Car, Package } from "lucide-react";
import Link from "next/link";
import { User } from "@/types/user";
import { logout } from "@/app/(public)/login/actions";

export default function AdminSidebar({
  currentUser,
}: {
  currentUser: User | null;
}) {
  const pathname = usePathname();

  return (
    <aside className="sidemenu">
      <h2>MobizzApp Admin</h2>
      <hr />
      <nav>
        <ul>
          <li key="/admin/establishments">
            <Link
              href="/admin/establishments"
              className={`${
                pathname === "/admin/establishments" ? "active" : ""
              }`}
            >
              <Home className="w-6 h-6" />
              <span>Establishments</span>
            </Link>
          </li>
          <li key="/admin/products">
            <Link
              href="/admin/products"
              className={`${pathname === "/admin/products" ? "active" : ""}`}
            >
              <Package className="w-6 h-6" />
              <span>Products</span>
            </Link>
          </li>
        </ul>
        {currentUser && (
          <>
            <hr />
            <form action={logout}>
              <button type="submit" className="logout">
                <LogOut className="w-6 h-6" />
                <span>Deconectare</span>
              </button>
            </form>
          </>
        )}
      </nav>
    </aside>
  );
}
