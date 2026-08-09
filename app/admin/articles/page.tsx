"use client";

import { useState } from "react";
import {
  Search,
  Eye,
  Edit,
  Trash2,
  FileText,
} from "lucide-react";

interface Article {
  id: number;
  title: string;
  author: string;
  category: string;
  views: number;
  publishedDate: string;
  status: "Published" | "Unpublished";
}

const initialArticles: Article[] = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence",
    author: "Rahul Sharma",
    category: "Technology",
    views: 2450,
    publishedDate: "Aug 5, 2026",
    status: "Published",
  },
  {
    id: 2,
    title: "Building Better User Experiences",
    author: "Ananya Reddy",
    category: "Design",
    views: 1870,
    publishedDate: "Aug 3, 2026",
    status: "Published",
  },
  {
    id: 3,
    title: "Getting Started with Next.js",
    author: "Arjun Kumar",
    category: "Development",
    views: 1320,
    publishedDate: "Jul 30, 2026",
    status: "Published",
  },
  {
    id: 4,
    title: "The Future of Remote Work",
    author: "Sneha Patel",
    category: "Career",
    views: 980,
    publishedDate: "Jul 27, 2026",
    status: "Published",
  },
];

export default function AdminArticlesPage() {
  const [articles, setArticles] =
    useState<Article[]>(initialArticles);

  const [search, setSearch] = useState("");

  const deleteArticle = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this article?"
    );

    if (!confirmed) return;

    setArticles((current) =>
      current.filter((article) => article.id !== id)
    );
  };

  const togglePublish = (id: number) => {
    setArticles((current) =>
      current.map((article) =>
        article.id === id
          ? {
              ...article,
              status:
                article.status === "Published"
                  ? "Unpublished"
                  : "Published",
            }
          : article
      )
    );
  };

  const filteredArticles = articles.filter(
    (article) =>
      article.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      article.author
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      article.category
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const publishedCount = articles.filter(
    (article) => article.status === "Published"
  ).length;

  const totalViews = articles.reduce(
    (total, article) => total + article.views,
    0
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-[#0b0b0f] dark:text-white">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="mb-8">
        <div className="flex items-center gap-3">

          <FileText
            size={28}
            className="text-gray-800 dark:text-white"
          />

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Published Articles
          </h1>

        </div>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Manage all articles published on your publication.
        </p>
      </div>

      {/* =================================================
          STATS
      ================================================= */}

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">

        {/* Total Articles */}

        <div
          className="
            rounded-xl
            border
            border-gray-200
            bg-white
            p-5
            shadow-sm
            transition-all
            hover:-translate-y-1
            hover:shadow-md

            dark:border-white/10
            dark:bg-white/[0.04]
            dark:hover:bg-white/[0.06]
          "
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Total Articles
          </p>

          <p className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">
            {articles.length}
          </p>
        </div>

        {/* Published */}

        <div
          className="
            rounded-xl
            border
            border-gray-200
            bg-white
            p-5
            shadow-sm
            transition-all
            hover:-translate-y-1
            hover:shadow-md

            dark:border-white/10
            dark:bg-white/[0.04]
            dark:hover:bg-white/[0.06]
          "
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Published
          </p>

          <p className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">
            {publishedCount}
          </p>
        </div>

        {/* Total Views */}

        <div
          className="
            rounded-xl
            border
            border-gray-200
            bg-white
            p-5
            shadow-sm
            transition-all
            hover:-translate-y-1
            hover:shadow-md

            dark:border-white/10
            dark:bg-white/[0.04]
            dark:hover:bg-white/[0.06]
          "
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Total Views
          </p>

          <p className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">
            {totalViews.toLocaleString()}
          </p>
        </div>

      </div>

      {/* =================================================
          SEARCH
      ================================================= */}

      <div
        className="
          mb-6
          rounded-xl
          border
          border-gray-200
          bg-white
          p-4
          shadow-sm

          dark:border-white/10
          dark:bg-white/[0.04]
        "
      >
        <div className="relative">

          <Search
            size={19}
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-gray-400
              dark:text-gray-500
            "
          />

          <input
            type="text"
            placeholder="Search by article, author or category..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              rounded-lg
              border
              border-gray-200
              bg-white
              py-3
              pl-10
              pr-4
              text-gray-900
              outline-none
              transition

              placeholder:text-gray-400

              focus:border-[#7C3AED]
              focus:ring-2
              focus:ring-[#7C3AED]/20

              dark:border-white/10
              dark:bg-white/[0.03]
              dark:text-white
              dark:placeholder:text-gray-500
              dark:focus:border-[#8B5CF6]
            "
          />

        </div>
      </div>

      {/* =================================================
          TABLE
      ================================================= */}

      <div
        className="
          overflow-hidden
          rounded-xl
          border
          border-gray-200
          bg-white
          shadow-sm

          dark:border-white/10
          dark:bg-[#0b0b0f]
        "
      >

        {/* Table Header */}

        <div
          className="
            border-b
            border-gray-200
            px-6
            py-4

            dark:border-white/10
          "
        >
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            All Articles
          </h2>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="overflow-x-auto">

            <table className="w-full min-w-[900px]">

              {/* =================================================
                  TABLE HEAD
              ================================================= */}

              <thead>
                <tr
                  className="
                    border-b
                    border-gray-200
                    bg-gray-50
                    text-left

                    dark:border-white/10
                    dark:bg-white/[0.03]
                  "
                >

                  <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Article
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Author
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Category
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Views
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Date
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Status
                  </th>

                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Actions
                  </th>

                </tr>
              </thead>

              {/* =================================================
                  TABLE BODY
              ================================================= */}

              <tbody>

                {filteredArticles.map((article) => (
                  <tr
                    key={article.id}
                    className="
                      border-b
                      border-gray-200
                      last:border-b-0

                      bg-white

                      transition-colors
                      duration-200

                      hover:bg-gray-50

                      dark:border-white/10
                      dark:bg-[#0b0b0f]

                      dark:hover:bg-white/[0.06]
                    "
                  >

                    {/* ARTICLE */}

                    <td className="px-6 py-5">

                      <p className="font-medium text-gray-900 dark:text-white">
                        {article.title}
                      </p>

                    </td>

                    {/* AUTHOR */}

                    <td className="px-6 py-5 text-sm text-gray-600 dark:text-gray-300">
                      {article.author}
                    </td>

                    {/* CATEGORY */}

                    <td className="px-6 py-5">

                      <span
                        className="
                          rounded-full
                          bg-gray-100
                          px-3
                          py-1
                          text-xs
                          font-medium
                          text-gray-700

                          dark:bg-white/10
                          dark:text-gray-300
                        "
                      >
                        {article.category}
                      </span>

                    </td>

                    {/* VIEWS */}

                    <td className="px-6 py-5 text-sm text-gray-600 dark:text-gray-300">
                      {article.views.toLocaleString()}
                    </td>

                    {/* DATE */}

                    <td className="px-6 py-5 text-sm text-gray-600 dark:text-gray-300">
                      {article.publishedDate}
                    </td>

                    {/* STATUS */}

                    <td className="px-6 py-5">

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          article.status === "Published"
                            ? "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400"
                            : "bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400"
                        }`}
                      >
                        {article.status}
                      </span>

                    </td>

                    {/* ACTIONS */}

                    <td className="px-6 py-5">

                      <div className="flex justify-end gap-2">

                        {/* VIEW */}

                        <button
                          type="button"
                          title="View article"
                          className="
                            rounded-lg
                            border
                            border-gray-300
                            bg-white
                            p-2
                            text-gray-600
                            transition

                            hover:bg-gray-100
                            hover:text-gray-900

                            dark:border-white/20
                            dark:bg-transparent
                            dark:text-gray-300
                            dark:hover:bg-white/10
                            dark:hover:text-white
                          "
                        >
                          <Eye size={17} />
                        </button>

                        {/* EDIT */}

                        <button
                          type="button"
                          title="Edit article"
                          className="
                            rounded-lg
                            border
                            border-gray-300
                            bg-white
                            p-2
                            text-gray-600
                            transition

                            hover:bg-gray-100
                            hover:text-gray-900

                            dark:border-white/20
                            dark:bg-transparent
                            dark:text-gray-300
                            dark:hover:bg-white/10
                            dark:hover:text-white
                          "
                        >
                          <Edit size={17} />
                        </button>

                        {/* PUBLISH / UNPUBLISH */}

                        <button
                          type="button"
                          onClick={() =>
                            togglePublish(article.id)
                          }
                          className="
                            rounded-lg
                            border
                            border-gray-300
                            bg-white
                            px-3
                            py-2
                            text-xs
                            font-medium
                            text-gray-700
                            transition

                            hover:bg-gray-100
                            hover:text-gray-900

                            dark:border-white/20
                            dark:bg-transparent
                            dark:text-gray-300
                            dark:hover:bg-white/10
                            dark:hover:text-white
                          "
                        >
                          {article.status === "Published"
                            ? "Unpublish"
                            : "Publish"}
                        </button>

                        {/* DELETE */}

                        <button
                          type="button"
                          title="Delete article"
                          onClick={() =>
                            deleteArticle(article.id)
                          }
                          className="
                            rounded-lg
                            border
                            border-red-300
                            bg-white
                            p-2
                            text-red-500
                            transition

                            hover:bg-red-50
                            hover:text-red-600

                            dark:border-red-500/40
                            dark:bg-transparent
                            dark:text-red-400
                            dark:hover:bg-red-500/10
                            dark:hover:text-red-300
                          "
                        >
                          <Trash2 size={17} />
                        </button>

                      </div>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        ) : (

          /* =================================================
              NO ARTICLES
          ================================================= */

          <div className="p-12 text-center">

            <FileText
              size={45}
              className="mx-auto mb-4 text-gray-300 dark:text-gray-600"
            />

            <h2 className="font-semibold text-gray-800 dark:text-white">
              No articles found
            </h2>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Try a different search.
            </p>

          </div>
        )}

      </div>
    </div>
  );
}