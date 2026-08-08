"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    const adminLoggedIn =
      localStorage.getItem("publishhubAdmin") === "true";

    setIsAdmin(adminLoggedIn);

    // Don't allow logged-out users to access admin pages
    if (!adminLoggedIn && pathname !== "/admin/login") {
      router.replace("/admin/login");
    }
  }, [pathname, router]);

  // While checking login
  if (isAdmin === null) {
    return null;
  }

  // Login page should NOT have sidebar
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  // Logged out
  if (!isAdmin) {
    return null;
  }

  // Logged-in admin area
  return (
    <div className="flex min-h-0">
      <AdminSidebar />

      <main className="flex-1 min-w-0">
        {children}
      </main>
    </div>
  );
}