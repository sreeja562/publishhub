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
import { useRouter } from "next/navigation";

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

type LoggedInUser = {
  name: string;
  email: string;
  role: string;
};

export default function ReaderDashboard() {
  const router = useRouter();

  const [savedArticles, setSavedArticles] = useState<
    BookmarkedArticle[]
  >([]);

  const [user, setUser] = useState<LoggedInUser | null>(null);

  useEffect(() => {
    function checkUser() {
      const storedUser =
        localStorage.getItem("publishhubUser");

      if (!storedUser) {
        router.replace("/login");
        return;
      }

      try {
        const parsedUser = JSON.parse(storedUser);

        if (
          parsedUser.role !== "reader" &&
          parsedUser.role !== "reader-author"
        ) {
          router.replace("/login");
          return;
        }

        setUser(parsedUser);
        setSavedArticles(getBookmarks());
      } catch {
        localStorage.removeItem("publishhubUser");
        router.replace("/login");
      }
    }

    checkUser();

    const handleLogout = () => {
      router.replace("/");
    };

    window.addEventListener(
      "publishhub-logout",
      handleLogout
    );

    return () => {
      window.removeEventListener(
        "publishhub-logout",
        handleLogout
      );
    };
  }, [router]);

  if (!user) {
    return null;
  }

  const avatarLetter =
    user.name?.charAt(0).toUpperCase() || "U";

  function handleLogout() {
    localStorage.removeItem("publishhubUser");

    window.dispatchEvent(
      new Event("publishhub-logout")
    );

    router.replace("/");
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 transition-colors dark:bg-[#0b0b0f] dark:text-white">

      {/* ================= TOP NAVBAR ================= */}

      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-[#0b0b0f]/95">

        <div className="flex h-16 items-center justify-between px-5 md:px-8">

          {/* LOGO */}

          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            Publish
            <span className="text-blue-600">
              Hub
            </span>
          </Link>

          {/* RIGHT SIDE */}

          <div className="flex items-center gap-4">

            <Link
              href="/articles"
              className="hidden items-center gap-2 text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white sm:flex"
            >
              <Search size={17} />
              Explore
            </Link>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600 dark:bg-blue-500/15 dark:text-blue-400">
              {avatarLetter}
            </div>

          </div>

        </div>

      </header>


      {/* ================= DASHBOARD ================= */}

      <div className="flex min-h-[calc(100vh-64px)]">


        {/* ================= SIDEBAR ================= */}

        <aside className="hidden w-64 shrink-0 border-r border-black/5 bg-white dark:border-white/10 dark:bg-[#0f0f14] lg:block">

          <div className="flex h-full flex-col p-5">


            {/* READER PROFILE */}

            <div className="mb-7 rounded-2xl bg-[#f8f8f6] p-4 dark:bg-white/[0.04]">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600 dark:bg-blue-500/15 dark:text-blue-400">
                  {avatarLetter}
                </div>

                <div className="min-w-0">

                  <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                    {user.name}
                  </p>

                  <p className="truncate text-xs text-gray-400 dark:text-gray-500">
                    {user.email}
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

            <div className="mt-auto border-t border-black/5 pt-4 dark:border-white/10">

              <button
                type="button"
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-500 transition hover:bg-red-50 hover:text-red-600 dark:text-gray-400 dark:hover:bg-red-500/10 dark:hover:text-red-400"
              >
                <LogOut size={18} />
                Log out
              </button>

            </div>

          </div>

        </aside>


        {/* ================= MAIN CONTENT ================= */}

        <section className="w-full px-5 py-8 md:px-8 md:py-10">

          <div className="mx-auto max-w-7xl">


            {/* ================= MOBILE HEADER ================= */}

            <div className="mb-6 lg:hidden">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Reader Dashboard
              </p>

              <h1 className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">
                Welcome back, {user.name} 👋
              </h1>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Discover, save and read your favorite stories.
              </p>

            </div>


            {/* ================= DESKTOP HEADER ================= */}

            <div className="hidden items-center justify-between lg:flex">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Reader Dashboard
                </p>

                <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Welcome back, {user.name} 👋
                </h1>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Discover, save and read stories from PublishHub.
                </p>

              </div>

              <Link
                href="/articles"
                className="flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-600 dark:bg-white dark:text-black dark:hover:bg-blue-600 dark:hover:text-white"
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


              {/* ================= LEFT CONTENT ================= */}

              <div className="space-y-6">


                {/* ================= SAVED ARTICLES ================= */}

                <section className="rounded-3xl border border-black/5 bg-white dark:border-white/10 dark:bg-[#111116]">

                  <div className="flex items-center justify-between border-b border-black/5 px-6 py-5 dark:border-white/10">

                    <div>

                      <h2 className="font-semibold text-gray-900 dark:text-white">
                        Saved Articles
                      </h2>

                      <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
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


                  <div className="divide-y divide-black/5 dark:divide-white/10">

                    {savedArticles.length === 0 ? (

                      <div className="px-6 py-10 text-center">

                        <Bookmark
                          size={32}
                          className="mx-auto text-gray-300 dark:text-gray-600"
                        />

                        <p className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                          No saved articles yet
                        </p>

                        <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
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
                          className="block px-6 py-5 transition hover:bg-gray-50 dark:hover:bg-white/[0.03]"
                        >

                          <div className="flex items-start gap-4">

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                              <Bookmark size={18} />
                            </div>

                            <div className="min-w-0 flex-1">

                              <div className="flex flex-wrap items-center gap-2">

                                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                                  {article.category}
                                </span>

                                <span className="text-[10px] text-gray-400 dark:text-gray-500">
                                  {article.readTime}
                                </span>

                              </div>

                              <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">
                                {article.title}
                              </h3>

                              <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                                By {article.author}
                              </p>

                            </div>

                            <ArrowRight
                              size={17}
                              className="mt-2 shrink-0 text-gray-300 dark:text-gray-600"
                            />

                          </div>

                        </Link>

                      ))

                    )}

                  </div>

                </section>


                {/* ================= RECENTLY READ ================= */}

                <section className="rounded-3xl border border-black/5 bg-white dark:border-white/10 dark:bg-[#111116]">

                  <div className="border-b border-black/5 px-6 py-5 dark:border-white/10">

                    <h2 className="font-semibold text-gray-900 dark:text-white">
                      Recently Read
                    </h2>

                    <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                      Continue reading articles you recently opened
                    </p>

                  </div>


                  <div className="divide-y divide-black/5 dark:divide-white/10">

                    {recentArticles.map((article) => (

                      <Link
                        key={article.id}
                        href={`/article/${article.id}`}
                        className="block px-6 py-5 transition hover:bg-gray-50 dark:hover:bg-white/[0.03]"
                      >

                        <div className="flex items-start gap-4">

                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-500 dark:bg-white/[0.05] dark:text-gray-400">
                            <Clock size={18} />
                          </div>

                          <div className="flex-1">

                            <span className="text-[10px] font-semibold text-blue-600">
                              {article.category}
                            </span>

                            <h3 className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                              {article.title}
                            </h3>

                            <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                              {article.author} · {article.readTime}
                            </p>

                          </div>

                          <ArrowRight
                            size={17}
                            className="mt-2 text-gray-300 dark:text-gray-600"
                          />

                        </div>

                      </Link>

                    ))}

                  </div>

                </section>


                {/* ================= LIKED ARTICLES ================= */}

                <section className="rounded-3xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-[#111116]">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-500 dark:bg-red-500/10 dark:text-red-400">
                      <Heart
                        size={18}
                        fill="currentColor"
                      />
                    </div>

                    <div>

                      <h2 className="font-semibold text-gray-900 dark:text-white">
                        Your Likes
                      </h2>

                      <p className="text-xs text-gray-400 dark:text-gray-500">
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


                {/* ================= READING ACTIVITY ================= */}

                <div className="rounded-3xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-[#111116]">

                  <h2 className="font-semibold text-gray-900 dark:text-white">
                    Reading Activity
                  </h2>

                  <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                    Your reading this month
                  </p>

                  <div className="mt-6 flex items-end justify-between">

                    <div>

                      <p className="text-3xl font-semibold text-gray-900 dark:text-white">
                        28
                      </p>

                      <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                        Articles read
                      </p>

                    </div>

                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-blue-100 text-sm font-semibold text-blue-600 dark:border-blue-500/20 dark:text-blue-400">
                      72%
                    </div>

                  </div>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-white/10">

                    <div className="h-full w-[72%] rounded-full bg-blue-600" />

                  </div>

                  <p className="mt-3 text-xs text-gray-400 dark:text-gray-500">
                    Keep reading to reach your monthly goal.
                  </p>

                </div>


                {/* ================= FOLLOWED AUTHORS ================= */}

                <div className="rounded-3xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-[#111116]">

                  <div className="flex items-center justify-between">

                    <h2 className="font-semibold text-gray-900 dark:text-white">
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

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600 dark:bg-blue-500/15 dark:text-blue-400">
                          {author.avatar}
                        </div>

                        <div className="min-w-0 flex-1">

                          <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                            {author.name}
                          </p>

                          <p className="text-xs text-gray-400 dark:text-gray-500">
                            @{author.username}
                          </p>

                        </div>

                      </Link>

                    ))}

                  </div>

                </div>


                {/* ================= DISCOVER CARD ================= */}

                <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-6 dark:border-blue-500/20 dark:bg-blue-500/[0.07]">

                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">

                    <BookOpen size={17} />

                    <p className="text-xs font-semibold uppercase tracking-[0.15em]">
                      Discover
                    </p>

                  </div>

                  <h3 className="mt-4 font-serif text-xl font-semibold text-gray-900 dark:text-white">
                    Find your next great read.
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
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


                {/* ================= NOTIFICATIONS ================= */}

                <div className="rounded-3xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-[#111116]">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-50 text-yellow-600 dark:bg-yellow-500/10 dark:text-yellow-400">
                      <Bell size={18} />
                    </div>

                    <div>

                      <h2 className="font-semibold text-gray-900 dark:text-white">
                        Notifications
                      </h2>

                      <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
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


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-black/10 bg-white dark:border-white/10 dark:bg-[#0b0b0f]">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-8 text-sm text-gray-500 dark:text-gray-400 md:flex-row md:px-8">

          <p>
            © 2026 PublishHub. All rights reserved.
          </p>

          <div className="flex gap-5">

            <Link
              href="/about"
              className="hover:text-gray-900 dark:hover:text-white"
            >
              About
            </Link>

            <Link
              href="/articles"
              className="hover:text-gray-900 dark:hover:text-white"
            >
              Articles
            </Link>

            <Link
              href="/authors"
              className="hover:text-gray-900 dark:hover:text-white"
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
          ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
          : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/[0.04] dark:hover:text-white"
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
    <div className="rounded-3xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-[#111116]">

      <div className="flex items-center justify-between">

        <p className="text-xs text-gray-400 dark:text-gray-500">
          {label}
        </p>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f8f8f6] text-gray-500 dark:bg-white/[0.05] dark:text-gray-400">
          {icon}
        </div>

      </div>

      <p className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">
        {value}
      </p>

    </div>
  );
}