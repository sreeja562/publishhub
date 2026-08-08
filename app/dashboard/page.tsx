"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  PenLine,
  Users,
  Settings,
  LogOut,
  Plus,
  Eye,
  Heart,
  MessageCircle,
  Clock,
  Edit3,
  MoreHorizontal,
} from "lucide-react";

const articles = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence",
    category: "Technology",
    status: "Published",
    views: 1240,
    likes: 86,
    comments: 18,
    date: "Aug 5, 2026",
  },
  {
    id: 2,
    title: "Understanding Modern Web Development",
    category: "Development",
    status: "Draft",
    views: 0,
    likes: 0,
    comments: 0,
    date: "Aug 4, 2026",
  },
  {
    id: 3,
    title: "Design Principles Every Developer Should Know",
    category: "Design",
    status: "Published",
    views: 876,
    likes: 54,
    comments: 11,
    date: "Aug 1, 2026",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8] text-gray-900 transition-colors dark:bg-zinc-950 dark:text-white">
      {/* ================= TOP NAVBAR ================= */}

      <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-zinc-950/95">
        <div className="flex h-16 items-center justify-between px-5 md:px-8">
          {/* LOGO */}

          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-gray-950 dark:text-white"
          >
            Publish
            <span className="text-blue-600 dark:text-blue-400">Hub</span>
          </Link>

          {/* RIGHT SIDE */}

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="hidden text-sm text-gray-600 transition hover:text-gray-950 dark:text-gray-300 dark:hover:text-white sm:block"
            >
              View Website
            </Link>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700 dark:bg-blue-500/20 dark:text-blue-400">
              S
            </div>
          </div>
        </div>
      </header>

      {/* ================= DASHBOARD LAYOUT ================= */}

      <div className="flex min-h-[calc(100vh-64px)]">
        {/* ================= SIDEBAR ================= */}

        <aside className="hidden w-64 shrink-0 border-r border-gray-200 bg-white dark:border-white/10 dark:bg-zinc-950 lg:block">
          <div className="flex h-full min-h-[calc(100vh-64px)] flex-col p-5">
            {/* AUTHOR PROFILE */}

            <div className="mb-7 rounded-2xl bg-gray-100 p-4 dark:bg-zinc-900">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700 dark:bg-blue-500/20 dark:text-blue-400">
                  S
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                    Sreeja Kumbaji
                  </p>

                  <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                    Author
                  </p>
                </div>
              </div>
            </div>

            {/* NAVIGATION */}

            <nav className="space-y-1">
              <SidebarLink
                href="/dashboard"
                icon={<LayoutDashboard size={18} />}
                label="Overview"
                active
              />

              <SidebarLink
                href="/dashboard/articles"
                icon={<FileText size={18} />}
                label="My Articles"
              />

              <SidebarLink
                href="/dashboard/write"
                icon={<PenLine size={18} />}
                label="Write Article"
              />

              <SidebarLink
                href="/dashboard/messages"
                icon={<MessageCircle size={18} />}
                label="Messages"
              />

              <SidebarLink
                href="/dashboard/followers"
                icon={<Users size={18} />}
                label="Followers"
              />

              <SidebarLink
                href="/dashboard/settings"
                icon={<Settings size={18} />}
                label="Profile Settings"
              />
            </nav>

            {/* LOGOUT */}

            <div className="mt-auto border-t border-gray-200 pt-4 dark:border-white/10">
              <Link
                href="/"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-600 transition hover:bg-red-50 hover:text-red-600 dark:text-gray-300 dark:hover:bg-red-500/10 dark:hover:text-red-400"
              >
                <LogOut size={18} />
                Log out
              </Link>
            </div>
          </div>
        </aside>

        {/* ================= MAIN CONTENT ================= */}

        <section className="w-full px-5 py-8 md:px-8 md:py-10">
          <div className="mx-auto max-w-7xl">
            {/* ================= MOBILE HEADER ================= */}

            <div className="mb-6 flex items-center justify-between lg:hidden">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                  Author Dashboard
                </p>

                <h1 className="mt-1 text-2xl font-semibold text-gray-950 dark:text-white">
                  Welcome back, Sreeja
                </h1>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Manage your articles and grow your audience.
                </p>
              </div>

              <Link
                href="/dashboard/write"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-950 text-white transition hover:bg-blue-600 dark:bg-white dark:text-black dark:hover:bg-blue-500 dark:hover:text-white"
              >
                <Plus size={18} />
              </Link>
            </div>

            {/* ================= DESKTOP HEADER ================= */}

            <div className="hidden items-center justify-between lg:flex">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                  Author Dashboard
                </p>

                <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight text-gray-950 dark:text-white">
                  Welcome back, Sreeja
                </h1>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Manage your articles and grow your audience.
                </p>
              </div>

              <Link
                href="/dashboard/write"
                className="flex items-center gap-2 rounded-full bg-gray-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-600 dark:bg-white dark:text-black dark:hover:bg-blue-500 dark:hover:text-white"
              >
                <Plus size={17} />
                Write Article
              </Link>
            </div>

            {/* ================= STATS ================= */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                label="Total Articles"
                value="12"
                icon={<FileText size={20} />}
              />

              <StatCard
                label="Total Views"
                value="18.4K"
                icon={<Eye size={20} />}
              />

              <StatCard
                label="Total Likes"
                value="1.2K"
                icon={<Heart size={20} />}
              />

              <StatCard
                label="Followers"
                value="1,248"
                icon={<Users size={20} />}
              />
            </div>

            {/* ================= CONTENT GRID ================= */}

            <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_320px]">
              {/* ================= LEFT CONTENT ================= */}

              <div className="space-y-6">
                {/* ================= YOUR ARTICLES ================= */}

                <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white dark:border-white/10 dark:bg-zinc-900">
                  <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5 dark:border-white/10">
                    <div>
                      <h2 className="font-semibold text-gray-950 dark:text-white">
                        Your Articles
                      </h2>

                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        Recently created and published articles
                      </p>
                    </div>

                    <Link
                      href="/dashboard/articles"
                      className="text-xs font-medium text-blue-600 hover:underline dark:text-blue-400"
                    >
                      View all
                    </Link>
                  </div>

                  <div className="divide-y divide-gray-200 dark:divide-white/10">
                    {articles.map((article) => (
                      <div
                        key={article.id}
                        className="flex flex-col gap-4 px-6 py-5 transition hover:bg-gray-50 dark:hover:bg-white/[0.03] md:flex-row md:items-center md:justify-between"
                      >
                        {/* ARTICLE INFO */}

                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                                article.status === "Published"
                                  ? "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400"
                                  : "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400"
                              }`}
                            >
                              {article.status}
                            </span>

                            <span className="text-[10px] text-gray-500 dark:text-gray-400">
                              {article.category}
                            </span>
                          </div>

                          <h3 className="mt-2 truncate text-sm font-semibold text-gray-950 dark:text-white md:max-w-md">
                            {article.title}
                          </h3>

                          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                            {article.date}
                          </p>
                        </div>

                        {/* ARTICLE STATS */}

                        <div className="flex items-center gap-5 text-xs text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-1.5">
                            <Eye size={14} />
                            {article.views}
                          </span>

                          <span className="flex items-center gap-1.5">
                            <Heart size={14} />
                            {article.likes}
                          </span>

                          <span className="flex items-center gap-1.5">
                            <MessageCircle size={14} />
                            {article.comments}
                          </span>

                          <button
                            type="button"
                            className="rounded-full p-2 transition hover:bg-gray-100 dark:hover:bg-white/10"
                            aria-label="More options"
                          >
                            <MoreHorizontal size={17} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* ================= RIGHT SIDEBAR ================= */}

              <div className="space-y-6">
                {/* ================= QUICK ACTIONS ================= */}

                <div className="rounded-3xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
                  <h2 className="font-semibold text-gray-950 dark:text-white">
                    Quick Actions
                  </h2>

                  <div className="mt-5 space-y-2">
                    <Link
                      href="/dashboard/write"
                      className="flex items-center gap-3 rounded-xl bg-gray-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-600 dark:bg-white dark:text-black dark:hover:bg-blue-500 dark:hover:text-white"
                    >
                      <PenLine size={17} />
                      Write a new article
                    </Link>

                    <Link
                      href="/dashboard/articles"
                      className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-50 dark:border-white/10 dark:text-gray-200 dark:hover:bg-white/5"
                    >
                      <FileText size={17} />
                      Manage articles
                    </Link>

                    <Link
                      href="/dashboard/settings"
                      className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-50 dark:border-white/10 dark:text-gray-200 dark:hover:bg-white/5"
                    >
                      <Settings size={17} />
                      Edit profile
                    </Link>
                  </div>
                </div>

                {/* ================= DRAFT CARD ================= */}

                <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-500/20 dark:bg-blue-500/10">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <Clock size={17} />

                    <p className="text-xs font-semibold uppercase tracking-[0.15em]">
                      Continue Writing
                    </p>
                  </div>

                  <h3 className="mt-4 font-serif text-xl font-semibold text-gray-950 dark:text-white">
                    Understanding Modern Web Development
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-gray-600 dark:text-gray-300">
                    You have a draft waiting to be completed.
                  </p>

                  <Link
                    href="/dashboard/write"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Continue writing
                    <Edit3 size={15} />
                  </Link>
                </div>

                {/* ================= PROFILE COMPLETION ================= */}

                <div className="rounded-3xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-gray-950 dark:text-white">
                      Profile
                    </h2>

                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      80%
                    </span>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-white/10">
                    <div className="h-full w-[80%] rounded-full bg-blue-600 dark:bg-blue-500" />
                  </div>

                  <p className="mt-3 text-xs leading-5 text-gray-500 dark:text-gray-400">
                    Add a bio and profile image to complete your author
                    profile.
                  </p>

                  <Link
                    href="/dashboard/settings"
                    className="mt-4 inline-flex text-xs font-semibold text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Complete profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-gray-200 bg-white dark:border-white/10 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-8 text-sm text-gray-600 dark:text-gray-400 md:flex-row md:px-8">
          <p>© 2026 PublishHub. All rights reserved.</p>

          <div className="flex gap-5">
            <Link
              href="/about"
              className="transition hover:text-gray-950 dark:hover:text-white"
            >
              About
            </Link>

            <Link
              href="/articles"
              className="transition hover:text-gray-950 dark:hover:text-white"
            >
              Articles
            </Link>

            <Link
              href="/authors"
              className="transition hover:text-gray-950 dark:hover:text-white"
            >
              Authors
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* =========================================================
   SIDEBAR LINK
========================================================= */

function SidebarLink({
  href,
  icon,
  label,
  active = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
        active
          ? "bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-950 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
          {label}
        </p>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-300">
          {icon}
        </div>
      </div>

      <p className="mt-4 text-2xl font-semibold text-gray-950 dark:text-white">
        {value}
      </p>
    </div>
  );
}