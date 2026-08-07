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
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <FileText
              size={28}
              className="text-gray-800"
            />

            <h1 className="text-3xl font-bold text-gray-900">
              Published Articles
            </h1>
          </div>

          <p className="mt-2 text-gray-500">
            Manage all articles published on your publication.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Articles
            </p>

            <p className="mt-1 text-3xl font-bold text-gray-900">
              {articles.length}
            </p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Published
            </p>

            <p className="mt-1 text-3xl font-bold text-gray-900">
              {publishedCount}
            </p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Views
            </p>

            <p className="mt-1 text-3xl font-bold text-gray-900">
              {totalViews.toLocaleString()}
            </p>
          </div>

        </div>

        {/* Search */}
        <div className="mb-6 rounded-xl border bg-white p-4 shadow-sm">
          <div className="relative">
            <Search
              size={19}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search by article, author or category..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 outline-none focus:border-gray-400"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

          <div className="border-b px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900">
              All Articles
            </h2>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="overflow-x-auto">

              <table className="w-full min-w-[900px]">

                <thead>
                  <tr className="border-b bg-gray-50 text-left">

                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                      Article
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                      Author
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                      Category
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                      Views
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                      Date
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                      Status
                    </th>

                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                      Actions
                    </th>

                  </tr>
                </thead>

                <tbody>

                  {filteredArticles.map((article) => (
                    <tr
                      key={article.id}
                      className="border-b last:border-b-0 hover:bg-gray-50"
                    >

                      <td className="px-6 py-5">
                        <p className="font-medium text-gray-900">
                          {article.title}
                        </p>
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-600">
                        {article.author}
                      </td>

                      <td className="px-6 py-5">
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                          {article.category}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-600">
                        {article.views.toLocaleString()}
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-600">
                        {article.publishedDate}
                      </td>

                      <td className="px-6 py-5">

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            article.status === "Published"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {article.status}
                        </span>

                      </td>

                      <td className="px-6 py-5">

                        <div className="flex justify-end gap-2">

                          {/* View */}
                          <button
                            title="View article"
                            className="rounded-lg border p-2 text-gray-600 hover:bg-gray-100"
                          >
                            <Eye size={17} />
                          </button>

                          {/* Edit */}
                          <button
                            title="Edit article"
                            className="rounded-lg border p-2 text-gray-600 hover:bg-gray-100"
                          >
                            <Edit size={17} />
                          </button>

                          {/* Publish / Unpublish */}
                          <button
                            onClick={() =>
                              togglePublish(article.id)
                            }
                            className="rounded-lg border px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100"
                          >
                            {article.status === "Published"
                              ? "Unpublish"
                              : "Publish"}
                          </button>

                          {/* Delete */}
                          <button
                            title="Delete article"
                            onClick={() =>
                              deleteArticle(article.id)
                            }
                            className="rounded-lg border p-2 text-red-500 hover:bg-red-50"
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
            <div className="p-12 text-center">

              <FileText
                size={45}
                className="mx-auto mb-4 text-gray-300"
              />

              <h2 className="font-semibold text-gray-800">
                No articles found
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Try a different search.
              </p>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}