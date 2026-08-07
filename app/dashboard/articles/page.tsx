"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Plus,
  Search,
  Edit3,
  Trash2,
  Eye,
  FileText,
  Clock,
} from "lucide-react";

const initialArticles = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence",
    category: "Technology",
    status: "Published",
    date: "Aug 5, 2026",
    views: 1240,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Understanding Generative AI",
    category: "AI",
    status: "Published",
    date: "Jul 28, 2026",
    views: 892,
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Building Better Web Experiences",
    category: "Development",
    status: "Draft",
    date: "Jul 20, 2026",
    views: 0,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
];

export default function DashboardArticlesPage() {
  const [articles, setArticles] = useState(initialArticles);
  const [search, setSearch] = useState("");

  const filteredArticles = articles.filter((article) =>
    article.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleDelete = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this article?"
    );

    if (!confirmed) return;

    setArticles((current) =>
      current.filter((article) => article.id !== id)
    );
  };

  return (
    <main className="min-h-screen bg-[#f8f8f6] text-[#111111]">

      {/* HEADER */}

      <header className="border-b border-black/10 bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">

          <Link
            href="/"
            className="text-2xl font-bold"
          >
            Publish<span className="text-blue-600">Hub</span>
          </Link>

          <div className="flex items-center gap-4">

            <Link
              href="/articles"
              className="hidden text-sm text-gray-500 hover:text-black md:block"
            >
              View Website
            </Link>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
              S
            </div>

          </div>

        </div>

      </header>

      {/* DASHBOARD */}

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">

        {/* TITLE */}

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              Dashboard
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              My Articles
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Manage your articles, drafts and published content.
            </p>

          </div>

          <Link
            href="/dashboard/write"
            className="flex w-fit items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
          >
            <Plus size={18} />
            Write New Article
          </Link>

        </div>

        {/* STATS */}

        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-black/5 bg-white p-5">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FileText size={19} />
              </div>

              <div>

                <p className="text-2xl font-bold">
                  {articles.length}
                </p>

                <p className="text-xs text-gray-400">
                  Total Articles
                </p>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-5">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <Eye size={19} />
              </div>

              <div>

                <p className="text-2xl font-bold">
                  {
                    articles.filter(
                      (article) =>
                        article.status === "Published"
                    ).length
                  }
                </p>

                <p className="text-xs text-gray-400">
                  Published
                </p>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-5">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600">
                <Clock size={19} />
              </div>

              <div>

                <p className="text-2xl font-bold">
                  {
                    articles.filter(
                      (article) =>
                        article.status === "Draft"
                    ).length
                  }
                </p>

                <p className="text-xs text-gray-400">
                  Drafts
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* SEARCH */}

        <div className="relative mt-8 max-w-md">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search your articles..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-full border border-black/10 bg-white py-3 pl-11 pr-5 text-sm outline-none focus:border-blue-500"
          />

        </div>

        {/* ARTICLES */}

        <section className="mt-8">

          {filteredArticles.length === 0 ? (

            <div className="rounded-2xl border border-black/5 bg-white p-12 text-center">

              <FileText
                size={35}
                className="mx-auto text-gray-300"
              />

              <h2 className="mt-4 font-semibold">
                No articles found
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Try another search.
              </p>

            </div>

          ) : (

            <div className="space-y-4">

              {filteredArticles.map((article) => (

                <article
                  key={article.id}
                  className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white md:flex-row"
                >

                  {/* IMAGE */}

                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-48 w-full object-cover md:h-auto md:w-56"
                  />

                  {/* CONTENT */}

                  <div className="flex flex-1 flex-col justify-between p-5">

                    <div>

                      <div className="flex flex-wrap items-center gap-2">

                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                          {article.category}
                        </span>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            article.status === "Published"
                              ? "bg-green-50 text-green-600"
                              : "bg-yellow-50 text-yellow-600"
                          }`}
                        >
                          {article.status}
                        </span>

                      </div>

                      <h2 className="mt-3 text-xl font-semibold">
                        {article.title}
                      </h2>

                      <div className="mt-2 flex gap-4 text-xs text-gray-400">

                        <span>
                          {article.date}
                        </span>

                        <span>
                          {article.views} views
                        </span>

                      </div>

                    </div>

                    {/* ACTIONS */}

                    <div className="mt-5 flex flex-wrap gap-2">

                      <Link
                        href={`/article/${article.id}`}
                        className="flex items-center gap-2 rounded-lg border border-black/10 px-4 py-2 text-sm font-medium hover:bg-gray-100"
                      >
                        <Eye size={16} />
                        View
                      </Link>

                      <Link
                        href={`/dashboard/edit/${article.id}`}
                        className="flex items-center gap-2 rounded-lg border border-black/10 px-4 py-2 text-sm font-medium hover:bg-gray-100"
                      >
                        <Edit3 size={16} />
                        Edit
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(article.id)
                        }
                        className="flex items-center gap-2 rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          )}

        </section>

      </div>

    </main>
  );
}