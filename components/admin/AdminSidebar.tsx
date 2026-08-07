"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileCheck,
  FileText,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Article Review",
    href: "/admin/review",
    icon: FileCheck,
  },
  {
    name: "Published Articles",
    href: "/admin/articles",
    icon: FileText,
  },
  {
    name: "Authors",
    href: "/admin/authors",
    icon: Users,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex min-h-screen w-64 flex-col border-r bg-white">

      {/* Logo */}
      <div className="border-b px-6 py-6">
        <Link href="/admin">
          <h1 className="text-xl font-bold text-gray-900">
            Publication
          </h1>

          <p className="mt-1 text-xs text-gray-500">
            Admin Panel
          </p>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">

        {menuItems.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                active
                  ? "bg-black text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <Icon size={19} />

              {item.name}
            </Link>
          );
        })}

      </nav>

      {/* Bottom */}
      <div className="border-t p-4">

        <Link
          href="/dashboard/settings"
          className="mb-2 flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100"
        >
          <Settings size={19} />
          Settings
        </Link>

        <button
          onClick={() => {
            alert("Logout will be connected to authentication later.");
          }}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50"
        >
          <LogOut size={19} />
          Logout
        </button>

      </div>
    </aside>
  );
}