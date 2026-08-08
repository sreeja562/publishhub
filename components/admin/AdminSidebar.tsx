"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Users,
  ClipboardCheck,
  LogOut,
} from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
    },
    {
      name: "Articles",
      href: "/admin/articles",
      icon: FileText,
    },
    {
      name: "Authors",
      href: "/admin/authors",
      icon: Users,
    },
    {
      name: "Review",
      href: "/admin/review",
      icon: ClipboardCheck,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("publishhubUser");
    localStorage.removeItem("publishhubAdmin");

    router.push("/");
  };

  return (
    <aside className="w-56 shrink-0 bg-white border-r border-gray-200 flex flex-col">
      {/* Sidebar Content */}
      <div className="p-4">
        {/* Title */}
        <div className="px-3 mb-6">
          <h2 className="text-sm font-semibold text-gray-900">
            Admin Panel
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Manage PublishHub
          </p>
        </div>

        {/* Navigation */}
        <nav className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const active =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
                  active
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <Icon size={17} strokeWidth={1.8} />

                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <div className="mt-auto p-4 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 transition"
        >
          <LogOut size={17} strokeWidth={1.8} />

          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}