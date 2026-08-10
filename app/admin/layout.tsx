"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Users,
  ClipboardCheck,
  ArrowLeft,
  LogOut,
} from "lucide-react";

const navigation = [
  {
    name: "Overview",
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
    name: "Review Articles",
    href: "/admin/review",
    icon: ClipboardCheck,
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#f8f8f6] text-[#111111]">

      {/* TOP NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">

        <div className="flex h-16 items-center justify-between px-5 md:px-8">

          {/* LOGO */}
          <Link
            href="/"
            className="font-serif text-2xl font-semibold tracking-tight"
          >
            Publish<span className="text-blue-600">Hub</span>
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-5">

            <Link
              href="/"
              className="hidden text-sm font-medium text-gray-500 transition hover:text-black sm:block"
            >
              View Website
            </Link>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
              A
            </div>

          </div>

        </div>

      </header>


      {/* ADMIN AREA */}
      <div className="flex min-h-[calc(100vh-64px)]">

        {/* SIDEBAR */}
        <aside className="hidden w-64 shrink-0 border-r border-black/5 bg-white lg:block">

          <div className="flex h-full flex-col p-5">

            {/* ADMIN PROFILE */}
            <div className="mb-7 rounded-2xl bg-[#f8f8f6] p-4">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                  A
                </div>

                <div className="min-w-0">

                  <p className="truncate text-sm font-semibold text-gray-900">
                    Admin
                  </p>

                  <p className="truncate text-xs text-gray-400">
                    Administrator
                  </p>

                </div>

              </div>

            </div>


            {/* NAVIGATION TITLE */}
            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              Administration
            </p>


            {/* NAVIGATION */}
            <nav className="space-y-1">

              {navigation.map((item) => {

                const Icon = item.icon;

                const isActive =
                  pathname === item.href ||
                  (item.href !== "/admin" &&
                    pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-black text-white shadow-sm"
                        : "text-gray-500 hover:bg-[#f8f8f6] hover:text-black"
                    }`}
                  >

                    <Icon size={18} strokeWidth={1.8} />

                    {item.name}

                  </Link>
                );

              })}

            </nav>


            {/* BOTTOM */}
            <div className="mt-auto space-y-1 border-t border-black/5 pt-4">

              <Link
                href="/"
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-500 transition hover:bg-[#f8f8f6] hover:text-black"
              >
                <ArrowLeft size={18} strokeWidth={1.8} />

                Back to Website
              </Link>


              <Link
                href="/"
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-500 transition hover:bg-red-50 hover:text-red-600"
              >
                <LogOut size={18} strokeWidth={1.8} />

                Log out
              </Link>

            </div>

          </div>

        </aside>


        {/* MAIN CONTENT */}
        <main className="min-w-0 flex-1">

          <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-10">

            {children}

          </div>

        </main>

      </div>

    </div>
  );
}