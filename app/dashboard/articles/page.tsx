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
    article.title.toLowerCase().includes(search.toLowerCase())
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

  const publishedCount = articles.filter(
    (article) => article.status === "Published"
  ).length;

  const draftCount = articles.filter(
    (article) => article.status === "Draft"
  ).length;

  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-[#0b0b0f] dark:text-white">

      {/* =====================================================
          DASHBOARD CONTENT
      ===================================================== */}

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">

        {/* =================================================
            TITLE
        ================================================= */}

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#7C3AED]
              "
            >
              Dashboard
            </p>

            <h1
              className="
                mt-3
                text-4xl
                font-bold
                tracking-tight
                text-slate-900

                dark:text-white

                md:text-5xl
              "
            >
              My Articles
            </h1>

            <p
              className="
                mt-3
                max-w-xl
                text-sm
                leading-6
                text-slate-500

                dark:text-slate-400

                md:text-base
              "
            >
              Manage your articles, drafts and published content.
            </p>

          </div>

          {/* Write Article */}

          <Link
            href="/dashboard/write"
            className="
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              bg-black
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300

              hover:bg-[#7C3AED]
              hover:text-white

              dark:bg-white
              dark:text-black
              dark:hover:bg-[#7C3AED]
              dark:hover:text-white
            "
          >
            <Plus size={18} />
            Write New Article
          </Link>

        </div>

        {/* =================================================
            STATISTICS
        ================================================= */}

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

          {/* Total Articles */}

          <div
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-sm
              transition-all

              dark:border-white/10
              dark:bg-[#121217]
              dark:shadow-none
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-purple-50
                  text-[#7C3AED]

                  dark:bg-purple-500/10
                "
              >
                <FileText size={20} />
              </div>

              <div>

                <p
                  className="
                    text-2xl
                    font-bold
                    text-slate-900

                    dark:text-white
                  "
                >
                  {articles.length}
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    text-slate-500

                    dark:text-slate-400
                  "
                >
                  Total Articles
                </p>

              </div>

            </div>

          </div>

          {/* Published */}

          <div
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-sm

              dark:border-white/10
              dark:bg-[#121217]
              dark:shadow-none
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-green-50
                  text-green-600

                  dark:bg-green-500/10
                  dark:text-green-400
                "
              >
                <Eye size={20} />
              </div>

              <div>

                <p
                  className="
                    text-2xl
                    font-bold
                    text-slate-900

                    dark:text-white
                  "
                >
                  {publishedCount}
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    text-slate-500

                    dark:text-slate-400
                  "
                >
                  Published
                </p>

              </div>

            </div>

          </div>

          {/* Drafts */}

          <div
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-sm

              dark:border-white/10
              dark:bg-[#121217]
              dark:shadow-none
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-yellow-50
                  text-yellow-600

                  dark:bg-yellow-500/10
                  dark:text-yellow-400
                "
              >
                <Clock size={20} />
              </div>

              <div>

                <p
                  className="
                    text-2xl
                    font-bold
                    text-slate-900

                    dark:text-white
                  "
                >
                  {draftCount}
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    text-slate-500

                    dark:text-slate-400
                  "
                >
                  Drafts
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* =================================================
            SEARCH
        ================================================= */}

        <div className="relative mt-8 max-w-xl">

          <Search
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400

              dark:text-slate-500
            "
          />

          <input
            type="text"
            placeholder="Search your articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              rounded-full
              border
              border-slate-200
              bg-white
              py-3
              pl-11
              pr-5
              text-sm
              text-slate-900
              outline-none
              transition-all

              placeholder:text-slate-400

              focus:border-[#7C3AED]
              focus:ring-2
              focus:ring-purple-500/10

              dark:border-white/10
              dark:bg-[#121217]
              dark:text-white
              dark:placeholder:text-slate-500
              dark:focus:border-[#8B5CF6]
            "
          />

        </div>

        {/* =================================================
            ARTICLES
        ================================================= */}

        <section className="mt-8">

          {filteredArticles.length === 0 ? (

            <div
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-12
                text-center

                dark:border-white/10
                dark:bg-[#121217]
              "
            >

              <FileText
                size={40}
                className="
                  mx-auto
                  text-slate-300

                  dark:text-slate-600
                "
              />

              <h2
                className="
                  mt-4
                  font-semibold
                  text-slate-900

                  dark:text-white
                "
              >
                No articles found
              </h2>

              <p
                className="
                  mt-2
                  text-sm
                  text-slate-500

                  dark:text-slate-400
                "
              >
                Try another search.
              </p>

            </div>

          ) : (

            <div className="space-y-5">

              {filteredArticles.map((article) => (

                <article
                  key={article.id}
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:shadow-lg

                    dark:border-white/10
                    dark:bg-[#121217]
                    dark:shadow-none
                    dark:hover:border-white/20
                  "
                >

                  <div className="flex flex-col md:flex-row">

                    {/* IMAGE */}

                    <img
                      src={article.image}
                      alt={article.title}
                      className="
                        h-52
                        w-full
                        object-cover

                        md:h-auto
                        md:w-56
                        lg:w-64
                      "
                    />

                    {/* CONTENT */}

                    <div className="flex flex-1 flex-col justify-between p-5 md:p-6">

                      <div>

                        {/* BADGES */}

                        <div className="flex flex-wrap items-center gap-2">

                          <span
                            className="
                              rounded-full
                              bg-purple-50
                              px-3
                              py-1
                              text-xs
                              font-medium
                              text-[#7C3AED]

                              dark:bg-purple-500/10
                              dark:text-purple-300
                            "
                          >
                            {article.category}
                          </span>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-medium ${
                              article.status === "Published"
                                ? "bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400"
                                : "bg-yellow-50 text-yellow-600 dark:bg-yellow-500/10 dark:text-yellow-400"
                            }`}
                          >
                            {article.status}
                          </span>

                        </div>

                        {/* TITLE */}

                        <h2
                          className="
                            mt-4
                            text-xl
                            font-semibold
                            leading-tight
                            text-slate-900

                            dark:text-white
                          "
                        >
                          {article.title}
                        </h2>

                        {/* META */}

                        <div
                          className="
                            mt-3
                            flex
                            flex-wrap
                            gap-4
                            text-xs
                            text-slate-400

                            dark:text-slate-500
                          "
                        >
                          <span>{article.date}</span>

                          <span>
                            {article.views.toLocaleString()} views
                          </span>
                        </div>

                      </div>

                      {/* ACTIONS */}

                      <div className="mt-6 flex flex-wrap gap-2">

                        {/* VIEW */}

                        <Link
                          href={`/article/${article.id}`}
                          className="
                            flex
                            items-center
                            gap-2
                            rounded-lg
                            border
                            border-slate-200
                            bg-white
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-slate-700
                            transition-all

                            hover:bg-slate-100
                            hover:text-slate-900

                            dark:border-white/10
                            dark:bg-white/[0.03]
                            dark:text-slate-300
                            dark:hover:bg-white/10
                            dark:hover:text-white
                          "
                        >
                          <Eye size={16} />
                          View
                        </Link>

                        {/* EDIT */}

                        <Link
                          href={`/dashboard/edit/${article.id}`}
                          className="
                            flex
                            items-center
                            gap-2
                            rounded-lg
                            border
                            border-slate-200
                            bg-white
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-slate-700
                            transition-all

                            hover:bg-slate-100
                            hover:text-slate-900

                            dark:border-white/10
                            dark:bg-white/[0.03]
                            dark:text-slate-300
                            dark:hover:bg-white/10
                            dark:hover:text-white
                          "
                        >
                          <Edit3 size={16} />
                          Edit
                        </Link>

                        {/* DELETE */}

                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(article.id)
                          }
                          className="
                            flex
                            items-center
                            gap-2
                            rounded-lg
                            border
                            border-red-200
                            bg-white
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-red-600
                            transition-all

                            hover:bg-red-50

                            dark:border-red-500/30
                            dark:bg-red-500/5
                            dark:text-red-400
                            dark:hover:bg-red-500/10
                          "
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>

                      </div>

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