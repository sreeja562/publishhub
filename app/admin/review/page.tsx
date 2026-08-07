"use client";

import { useState } from "react";
import {
  Check,
  X,
  Eye,
  Search,
  FileText,
  Clock,
  Edit,
  Save,
} from "lucide-react";

interface ReviewArticle {
  id: number;
  title: string;
  author: string;
  category: string;
  submitted: string;
  status: "Pending Review" | "Approved" | "Rejected";
  excerpt: string;
  content: string;
}

const initialArticles: ReviewArticle[] = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence",
    author: "Rahul Sharma",
    category: "Technology",
    submitted: "2 hours ago",
    status: "Pending Review",
    excerpt:
      "An overview of how artificial intelligence is changing modern technology and everyday life.",
    content:
      "Artificial intelligence is rapidly changing the way we work, learn and communicate. This article explores the future of AI and its impact on modern technology.",
  },
  {
    id: 2,
    title: "Building Better User Experiences",
    author: "Ananya Reddy",
    category: "Design",
    submitted: "5 hours ago",
    status: "Pending Review",
    excerpt:
      "Important principles that designers can use to create accessible and engaging experiences.",
    content:
      "Good user experience begins with understanding the needs of users. Designers should focus on accessibility, simplicity and consistency.",
  },
  {
    id: 3,
    title: "Getting Started with Next.js",
    author: "Arjun Kumar",
    category: "Development",
    submitted: "Yesterday",
    status: "Pending Review",
    excerpt:
      "A beginner-friendly introduction to creating modern web applications using Next.js.",
    content:
      "Next.js is a React framework that provides features such as routing, server rendering and optimized application development.",
  },
];

export default function AdminReviewPage() {
  const [articles, setArticles] =
    useState<ReviewArticle[]>(initialArticles);

  const [search, setSearch] = useState("");

  const [editingArticle, setEditingArticle] =
    useState<ReviewArticle | null>(null);

  const updateStatus = (
    id: number,
    status: ReviewArticle["status"]
  ) => {
    setArticles((current) =>
      current.map((article) =>
        article.id === id
          ? { ...article, status }
          : article
      )
    );
  };

  const saveEdit = () => {
    if (!editingArticle) return;

    setArticles((current) =>
      current.map((article) =>
        article.id === editingArticle.id
          ? editingArticle
          : article
      )
    );

    setEditingArticle(null);
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

  const pendingCount = articles.filter(
    (article) => article.status === "Pending Review"
  ).length;

  const approvedCount = articles.filter(
    (article) => article.status === "Approved"
  ).length;

  const rejectedCount = articles.filter(
    (article) => article.status === "Rejected"
  ).length;

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
              Article Review
            </h1>
          </div>

          <p className="mt-2 text-gray-500">
            Review, edit and manage articles submitted by authors.
          </p>
        </div>

        {/* Statistics */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Pending Review
              </p>

              <Clock
                size={20}
                className="text-yellow-600"
              />
            </div>

            <p className="mt-2 text-3xl font-bold text-gray-900">
              {pendingCount}
            </p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Approved
              </p>

              <Check
                size={20}
                className="text-green-600"
              />
            </div>

            <p className="mt-2 text-3xl font-bold text-gray-900">
              {approvedCount}
            </p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Rejected
              </p>

              <X
                size={20}
                className="text-red-600"
              />
            </div>

            <p className="mt-2 text-3xl font-bold text-gray-900">
              {rejectedCount}
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
              placeholder="Search articles or authors..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 outline-none focus:border-gray-400"
            />
          </div>
        </div>

        {/* Articles */}
        <div className="space-y-5">

          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-5">

                {/* Article Information */}
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2">

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                      {article.category}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        article.status ===
                        "Pending Review"
                          ? "bg-yellow-100 text-yellow-700"
                          : article.status ===
                            "Approved"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {article.status}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900">
                    {article.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {article.excerpt}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
                    <span>
                      Author:{" "}
                      <strong className="text-gray-800">
                        {article.author}
                      </strong>
                    </span>

                    <span>
                      Submitted: {article.submitted}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2 border-t pt-5">

                  {/* Preview */}
                  <button
                    onClick={() =>
                      alert(
                        `Preview:\n\n${article.title}\n\n${article.content}`
                      )
                    }
                    className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    <Eye size={16} />
                    Preview
                  </button>

                  {/* Edit */}
                  <button
                    onClick={() =>
                      setEditingArticle({
                        ...article,
                      })
                    }
                    className="flex items-center gap-2 rounded-lg border border-blue-300 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
                  >
                    <Edit size={16} />
                    Edit
                  </button>

                  {/* Approve */}
                  {article.status ===
                    "Pending Review" && (
                    <>
                      <button
                        onClick={() =>
                          updateStatus(
                            article.id,
                            "Approved"
                          )
                        }
                        className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                      >
                        <Check size={16} />
                        Approve
                      </button>

                      <button
                        onClick={() =>
                          updateStatus(
                            article.id,
                            "Rejected"
                          )
                        }
                        className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                      >
                        <X size={16} />
                        Reject
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* EDIT MODAL */}
      {editingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-xl">

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b p-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Edit Article
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Make changes before approving the article.
                </p>
              </div>

              <button
                onClick={() =>
                  setEditingArticle(null)
                }
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-5 p-6">

              {/* Title */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Article Title
                </label>

                <input
                  type="text"
                  value={editingArticle.title}
                  onChange={(e) =>
                    setEditingArticle({
                      ...editingArticle,
                      title: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-gray-500"
                />
              </div>

              {/* Category */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Category
                </label>

                <select
                  value={editingArticle.category}
                  onChange={(e) =>
                    setEditingArticle({
                      ...editingArticle,
                      category: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-gray-300 bg-white p-3 outline-none focus:border-gray-500"
                >
                  <option>Technology</option>
                  <option>Development</option>
                  <option>Design</option>
                  <option>Business</option>
                  <option>Career</option>
                  <option>Education</option>
                  <option>Science</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Excerpt */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Short Description
                </label>

                <textarea
                  value={editingArticle.excerpt}
                  onChange={(e) =>
                    setEditingArticle({
                      ...editingArticle,
                      excerpt: e.target.value,
                    })
                  }
                  rows={3}
                  className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-gray-500"
                />
              </div>

              {/* Content */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Article Content
                </label>

                <textarea
                  value={editingArticle.content}
                  onChange={(e) =>
                    setEditingArticle({
                      ...editingArticle,
                      content: e.target.value,
                    })
                  }
                  rows={12}
                  className="w-full rounded-lg border border-gray-300 p-3 leading-7 outline-none focus:border-gray-500"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 border-t bg-gray-50 p-6">

              <button
                onClick={() =>
                  setEditingArticle(null)
                }
                className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={saveEdit}
                className="flex items-center gap-2 rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
              >
                <Save size={17} />
                Save Changes
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}