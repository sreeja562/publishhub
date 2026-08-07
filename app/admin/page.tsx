"use client";

import {
  Users,
  FileText,
  Clock,
  Eye,
  ArrowUpRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const recentSubmissions = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence",
    author: "Rahul Sharma",
    category: "Technology",
    status: "Pending Review",
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "Building Better User Experiences",
    author: "Ananya Reddy",
    category: "Design",
    status: "Pending Review",
    time: "5 hours ago",
  },
  {
    id: 3,
    title: "Getting Started with Next.js",
    author: "Arjun Kumar",
    category: "Development",
    status: "Approved",
    time: "Yesterday",
  },
  {
    id: 4,
    title: "The Future of Remote Work",
    author: "Sneha Patel",
    category: "Career",
    status: "Published",
    time: "Yesterday",
  },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Admin Dashboard
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your publication, authors and articles from one place.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Authors */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100">
                <Users size={21} />
              </div>

              <span className="flex items-center gap-1 text-xs font-medium text-green-600">
                <ArrowUpRight size={14} />
                12%
              </span>
            </div>

            <p className="mt-5 text-sm text-gray-500">
              Total Authors
            </p>

            <p className="mt-1 text-3xl font-bold text-gray-900">
              48
            </p>
          </div>

          {/* Articles */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100">
                <FileText size={21} />
              </div>

              <span className="flex items-center gap-1 text-xs font-medium text-green-600">
                <ArrowUpRight size={14} />
                18%
              </span>
            </div>

            <p className="mt-5 text-sm text-gray-500">
              Published Articles
            </p>

            <p className="mt-1 text-3xl font-bold text-gray-900">
              126
            </p>
          </div>

          {/* Pending */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-yellow-50">
                <Clock
                  size={21}
                  className="text-yellow-600"
                />
              </div>

              <span className="text-xs font-medium text-yellow-600">
                Needs action
              </span>
            </div>

            <p className="mt-5 text-sm text-gray-500">
              Pending Reviews
            </p>

            <p className="mt-1 text-3xl font-bold text-gray-900">
              8
            </p>
          </div>

          {/* Views */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100">
                <Eye size={21} />
              </div>

              <span className="flex items-center gap-1 text-xs font-medium text-green-600">
                <ArrowUpRight size={14} />
                24%
              </span>
            </div>

            <p className="mt-5 text-sm text-gray-500">
              Total Views
            </p>

            <p className="mt-1 text-3xl font-bold text-gray-900">
              84.6K
            </p>
          </div>

        </div>

        {/* Main Grid */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">

          {/* Recent Submissions */}
          <div className="overflow-hidden rounded-xl border bg-white shadow-sm lg:col-span-2">

            <div className="flex items-center justify-between border-b px-6 py-5">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Recent Submissions
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Latest articles submitted by authors.
                </p>
              </div>

              <button
                onClick={() => {
                  window.location.href = "/admin/review";
                }}
                className="text-sm font-medium text-gray-700 hover:text-black"
              >
                View all
              </button>
            </div>

            <div>
              {recentSubmissions.map((article) => (
                <div
                  key={article.id}
                  className="flex flex-col gap-4 border-b p-6 last:border-b-0 md:flex-row md:items-center md:justify-between"
                >

                  <div className="min-w-0">
                    <h3 className="truncate font-semibold text-gray-900">
                      {article.title}
                    </h3>

                    <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-500">
                      <span>
                        {article.author}
                      </span>

                      <span>
                        {article.category}
                      </span>

                      <span>
                        {article.time}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${
                      article.status === "Pending Review"
                        ? "bg-yellow-100 text-yellow-700"
                        : article.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {article.status}
                  </span>

                </div>
              ))}
            </div>

          </div>

          {/* Quick Actions */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">

            <h2 className="text-lg font-semibold text-gray-900">
              Quick Actions
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Common administration tasks.
            </p>

            <div className="mt-6 space-y-3">

              <button
                onClick={() => {
                  window.location.href = "/admin/review";
                }}
                className="flex w-full items-center justify-between rounded-lg border p-4 text-left transition hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <Clock size={19} />

                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Review Articles
                    </p>

                    <p className="text-xs text-gray-500">
                      8 articles waiting
                    </p>
                  </div>
                </div>

                <ArrowUpRight size={17} />
              </button>

              <button
                onClick={() => {
                  window.location.href = "/admin/articles";
                }}
                className="flex w-full items-center justify-between rounded-lg border p-4 text-left transition hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <FileText size={19} />

                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Manage Articles
                    </p>

                    <p className="text-xs text-gray-500">
                      View all published articles
                    </p>
                  </div>
                </div>

                <ArrowUpRight size={17} />
              </button>

              <button
                onClick={() => {
                  window.location.href = "/dashboard/followers";
                }}
                className="flex w-full items-center justify-between rounded-lg border p-4 text-left transition hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <Users size={19} />

                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      View Community
                    </p>

                    <p className="text-xs text-gray-500">
                      Manage your readers
                    </p>
                  </div>
                </div>

                <ArrowUpRight size={17} />
              </button>

            </div>

          </div>

        </div>

        {/* Bottom Status */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <CheckCircle
                  size={20}
                  className="text-green-600"
                />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Publication Status
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Your publication is running normally.
                </p>

                <p className="mt-3 text-sm font-medium text-green-600">
                  All systems operational
                </p>
              </div>

            </div>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                <AlertCircle
                  size={20}
                  className="text-yellow-600"
                />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Pending Work
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  There are currently 8 articles waiting for review.
                </p>

                <button
                  onClick={() => {
                    window.location.href = "/admin/review";
                  }}
                  className="mt-3 text-sm font-medium text-gray-900 underline"
                >
                  Review now
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}