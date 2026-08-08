"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Bookmark,
  Heart,
  Users,
  Clock,
  Bell,
  Settings,
  LogOut,
  BookOpen,
  ArrowRight,
  Search,
} from "lucide-react";

import {
  getBookmarks,
  type BookmarkedArticle,
} from "@/lib/bookmarks";

const recentArticles = [
  {
    id: 2,
    title: "Modern Design Trends for 2026",
    author: "Priya Sharma",
    category: "Design",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "How Technology Is Changing Education",
    author: "Ananya Rao",
    category: "Research",
    readTime: "7 min read",
  },
];

const followedAuthors = [
  {
    name: "Sreeja Kumbaji",
    username: "sreeja",
    avatar: "S",
  },
  {
    name: "Priya Sharma",
    username: "priya",
    avatar: "P",
  },
  {
    name: "Rahul Verma",
    username: "rahul",
    avatar: "R",
  },
];

export default function ReaderDashboard() {
const [savedArticles, setSavedArticles] = useState<BookmarkedArticle[]>([]);

useEffect(() => {
  setSavedArticles(getBookmarks());
}, []);
  return (
    <main className="min-h-screen bg-[#fafaf8] text-gray-900">

      {/* ================= TOP NAVBAR ================= */}

      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">

        <div className="flex h-16 items-center justify-between px-5 md:px-8">

          <Link
            href="/"
            className="text-2xl font-bold"
          >
            Publish<span className="text-blue-600">Hub</span>
          </Link>

          <div className="flex items-center gap-4">

            <Link
              href="/articles"
              className="hidden items-center gap-2 text-sm text-gray-500 transition hover:text-black sm:flex"
            >
              <Search size={17} />
              Explore
            </Link>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
              Y
            </div>

          </div>

        </div>

      </header>


      {/* ================= DASHBOARD ================= */}

      <div className="flex min-h-[calc(100vh-64px)]">


        {/* ================= SIDEBAR ================= */}

        <aside className="hidden w-64 shrink-0 border-r border-black/5 bg-white lg:block">

          <div className="flex h-full flex-col p-5">

            {/* READER PROFILE */}

            <div className="mb-7 rounded-2xl bg-[#f8f8f6] p-4">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                  Y
                </div>

                <div className="min-w-0">

                  <p className="truncate text-sm font-semibold">
                    Your Profile
                  </p>

                  <p className="truncate text-xs text-gray-400">
                    Reader
                  </p>

                </div>

              </div>

            </div>


            {/* NAVIGATION */}

            <nav className="space-y-1">

              <ReaderSidebarLink
                href="/reader"
                icon={<LayoutDashboard size={18} />}
                label="Overview"
                active
              />

              <ReaderSidebarLink
                href="/dashboard/bookmarks"
                icon={<Bookmark size={18} />}
                label="Bookmarks"
              />

              <ReaderSidebarLink
                href="/articles"
                icon={<BookOpen size={18} />}
                label="Explore Articles"
              />

              <ReaderSidebarLink
                href="/dashboard/followers"
                icon={<Users size={18} />}
                label="Following"
              />

              <ReaderSidebarLink
                href="/dashboard/notifications"
                icon={<Bell size={18} />}
                label="Notifications"
              />

              <ReaderSidebarLink
                href="/dashboard/settings"
                icon={<Settings size={18} />}
                label="Settings"
              />

            </nav>


            {/* LOGOUT */}

            <div className="mt-auto border-t border-black/5 pt-4">

              <Link
                href="/"
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-500 transition hover:bg-red-50 hover:text-red-600"
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


            {/* MOBILE HEADER */}

            <div className="mb-6 lg:hidden">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Reader Dashboard
              </p>

              <h1 className="mt-2 text-2xl font-semibold">
                Welcome back 👋
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Discover, save and read your favorite stories.
              </p>

            </div>


            {/* DESKTOP HEADER */}

            <div className="hidden items-center justify-between lg:flex">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Reader Dashboard
                </p>

                <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight">
                  Welcome back 👋
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                  Discover, save and read stories from PublishHub.
                </p>

              </div>

              <Link
                href="/articles"
                className="flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
              >
                <Search size={17} />
                Explore Articles
              </Link>

            </div>


            {/* ================= STATS ================= */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

               <ReaderStatCard
                 label="Saved Articles"
                 value={String(savedArticles.length)}
                 icon={<Bookmark size={20} />}
               />
              <ReaderStatCard
                label="Articles Read"
                value="28"
                icon={<BookOpen size={20} />}
              />

              <ReaderStatCard
                label="Liked Articles"
                value="16"
                icon={<Heart size={20} />}
              />

              <ReaderStatCard
                label="Following"
                value="8"
                icon={<Users size={20} />}
              />

            </div>


            {/* ================= CONTENT GRID ================= */}

            <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_320px]">


              {/* LEFT CONTENT */}

              <div className="space-y-6">


                {/* SAVED ARTICLES */}

                <section className="rounded-3xl border border-black/5 bg-white">

                  <div className="flex items-center justify-between border-b border-black/5 px-6 py-5">

                    <div>

                      <h2 className="font-semibold">
                        Saved Articles
                      </h2>

                      <p className="mt-1 text-xs text-gray-400">
                        Articles you bookmarked for later
                      </p>

                    </div>

                    <Link
                      href="/dashboard/bookmarks"
                      className="text-xs font-medium text-blue-600 hover:underline"
                    >
                      View all
                    </Link>

                  </div>


                  <div className="divide-y divide-black/5">

  {savedArticles.length === 0 ? (

    <div className="px-6 py-10 text-center">

      <Bookmark
        size={32}
        className="mx-auto text-gray-300"
      />

      <p className="mt-3 text-sm font-medium text-gray-600">
        No saved articles yet
      </p>

      <p className="mt-1 text-xs text-gray-400">
        Bookmark articles you want to read later.
      </p>

      <Link
        href="/articles"
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
      >
        Explore Articles
        <ArrowRight size={15} />
      </Link>

    </div>

  ) : (

    savedArticles.map((article) => (
                      <Link
                        key={article.id}
                        href={`/article/${article.id}`}
                        className="block px-6 py-5 transition hover:bg-[#fafafa]"
                      >

                        <div className="flex items-start gap-4">

                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <Bookmark size={18} />
                          </div>

                          <div className="min-w-0 flex-1">

                            <div className="flex flex-wrap items-center gap-2">

                              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-600">
                                {article.category}
                              </span>

                              <span className="text-[10px] text-gray-400">
                                {article.readTime}
                              </span>

                            </div>

                            <h3 className="mt-2 text-sm font-semibold">
                              {article.title}
                            </h3>

                            <p className="mt-1 text-xs text-gray-400">
                              By {article.author}
                            </p>

                          </div>

                          <ArrowRight
                            size={17}
                            className="mt-2 shrink-0 text-gray-300"
                          />

                        </div>

                      </Link>

                    ))

                  )}

                </div>

              </section>


                {/* RECENTLY READ */}

                <section className="rounded-3xl border border-black/5 bg-white">

                  <div className="border-b border-black/5 px-6 py-5">

                    <h2 className="font-semibold">
                      Recently Read
                    </h2>

                    <p className="mt-1 text-xs text-gray-400">
                      Continue reading articles you recently opened
                    </p>

                  </div>


                  <div className="divide-y divide-black/5">

                    {recentArticles.map((article) => (

                      <Link
                        key={article.id}
                        href={`/article/${article.id}`}
                        className="block px-6 py-5 transition hover:bg-[#fafafa]"
                      >

                        <div className="flex items-start gap-4">

                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-500">
                            <Clock size={18} />
                          </div>

                          <div className="flex-1">

                            <span className="text-[10px] font-semibold text-blue-600">
                              {article.category}
                            </span>

                            <h3 className="mt-1 text-sm font-semibold">
                              {article.title}
                            </h3>

                            <p className="mt-1 text-xs text-gray-400">
                              {article.author} · {article.readTime}
                            </p>

                          </div>

                          <ArrowRight
                            size={17}
                            className="mt-2 text-gray-300"
                          />

                        </div>

                      </Link>

                    ))}

                  </div>

                </section>


                {/* LIKED ARTICLES */}

                <section className="rounded-3xl border border-black/5 bg-white p-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-500">
                      <Heart size={18} fill="currentColor" />
                    </div>

                    <div>

                      <h2 className="font-semibold">
                        Your Likes
                      </h2>

                      <p className="text-xs text-gray-400">
                        You have liked 16 articles
                      </p>

                    </div>

                  </div>

                  <Link
                    href="/articles"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
                  >
                    Discover more articles
                    <ArrowRight size={15} />
                  </Link>

                </section>

              </div>


              {/* ================= RIGHT SIDEBAR ================= */}

              <div className="space-y-6">


                {/* READING ACTIVITY */}

                <div className="rounded-3xl border border-black/5 bg-white p-6">

                  <h2 className="font-semibold">
                    Reading Activity
                  </h2>

                  <p className="mt-1 text-xs text-gray-400">
                    Your reading this month
                  </p>

                  <div className="mt-6 flex items-end justify-between">

                    <div>

                      <p className="text-3xl font-semibold">
                        28
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        Articles read
                      </p>

                    </div>

                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-blue-100 text-sm font-semibold text-blue-600">
                      72%
                    </div>

                  </div>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-100">

                    <div className="h-full w-[72%] rounded-full bg-blue-600" />

                  </div>

                  <p className="mt-3 text-xs text-gray-400">
                    Keep reading to reach your monthly goal.
                  </p>

                </div>


                {/* FOLLOWED AUTHORS */}

                <div className="rounded-3xl border border-black/5 bg-white p-6">

                  <div className="flex items-center justify-between">

                    <h2 className="font-semibold">
                      Following
                    </h2>

                    <Link
                      href="/dashboard/followers"
                      className="text-xs font-medium text-blue-600 hover:underline"
                    >
                      View all
                    </Link>

                  </div>

                  <div className="mt-5 space-y-4">

                    {followedAuthors.map((author) => (

                      <Link
                        key={author.username}
                        href={`/authors/${author.username}`}
                        className="flex items-center gap-3"
                      >

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                          {author.avatar}
                        </div>

                        <div className="min-w-0 flex-1">

                          <p className="truncate text-sm font-semibold">
                            {author.name}
                          </p>

                          <p className="text-xs text-gray-400">
                            @{author.username}
                          </p>

                        </div>

                      </Link>

                    ))}

                  </div>

                </div>


                {/* DISCOVER CARD */}

                <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-6">

                  <div className="flex items-center gap-2 text-blue-600">

                    <BookOpen size={17} />

                    <p className="text-xs font-semibold uppercase tracking-[0.15em]">
                      Discover
                    </p>

                  </div>

                  <h3 className="mt-4 font-serif text-xl font-semibold">
                    Find your next great read.
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    Explore technology, design, development,
                    research and more.
                  </p>

                  <Link
                    href="/articles"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
                  >
                    Explore articles
                    <ArrowRight size={15} />
                  </Link>

                </div>


                {/* NOTIFICATIONS */}

                <div className="rounded-3xl border border-black/5 bg-white p-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-50 text-yellow-600">
                      <Bell size={18} />
                    </div>

                    <div>

                      <h2 className="font-semibold">
                        Notifications
                      </h2>

                      <p className="mt-1 text-xs text-gray-400">
                        You have 3 new notifications.
                      </p>

                    </div>

                  </div>

                  <Link
                    href="/dashboard/notifications"
                    className="mt-4 inline-flex text-xs font-semibold text-blue-600 hover:underline"
                  >
                    View notifications
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}


/* ================= SIDEBAR LINK ================= */

function ReaderSidebarLink({
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
          ? "bg-blue-50 text-blue-600"
          : "text-gray-500 hover:bg-gray-50 hover:text-black"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}


/* ================= STAT CARD ================= */

function ReaderStatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-black/5 bg-white p-5">

      <div className="flex items-center justify-between">

        <p className="text-xs text-gray-400">
          {label}
        </p>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f8f8f6] text-gray-500">
          {icon}
        </div>

      </div>

      <p className="mt-4 text-2xl font-semibold">
        {value}
      </p>

    </div>
  );
}