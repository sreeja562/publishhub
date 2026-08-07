"use client";

import { useState } from "react";
import {
  Users,
  Search,
  Eye,
  Edit,
  Trash2,
  UserCheck,
  UserX,
} from "lucide-react";

interface Author {
  id: number;
  name: string;
  email: string;
  role: "Author" | "Editor";
  articles: number;
  followers: number;
  joined: string;
  status: "Active" | "Inactive";
}

const initialAuthors: Author[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    role: "Author",
    articles: 18,
    followers: 1240,
    joined: "Jan 12, 2026",
    status: "Active",
  },
  {
    id: 2,
    name: "Ananya Reddy",
    email: "ananya@example.com",
    role: "Editor",
    articles: 24,
    followers: 2180,
    joined: "Feb 5, 2026",
    status: "Active",
  },
  {
    id: 3,
    name: "Arjun Kumar",
    email: "arjun@example.com",
    role: "Author",
    articles: 12,
    followers: 850,
    joined: "Mar 18, 2026",
    status: "Active",
  },
  {
    id: 4,
    name: "Sneha Patel",
    email: "sneha@example.com",
    role: "Author",
    articles: 9,
    followers: 620,
    joined: "Apr 2, 2026",
    status: "Inactive",
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "vikram@example.com",
    role: "Author",
    articles: 15,
    followers: 970,
    joined: "May 10, 2026",
    status: "Active",
  },
];

export default function AdminAuthorsPage() {
  const [authors, setAuthors] =
    useState<Author[]>(initialAuthors);

  const [search, setSearch] = useState("");

  const toggleStatus = (id: number) => {
    setAuthors((current) =>
      current.map((author) =>
        author.id === id
          ? {
              ...author,
              status:
                author.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : author
      )
    );
  };

  const deleteAuthor = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this author?"
    );

    if (!confirmed) return;

    setAuthors((current) =>
      current.filter((author) => author.id !== id)
    );
  };

  const filteredAuthors = authors.filter(
    (author) =>
      author.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      author.email
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      author.role
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const activeAuthors = authors.filter(
    (author) => author.status === "Active"
  ).length;

  const totalArticles = authors.reduce(
    (total, author) => total + author.articles,
    0
  );

  const totalFollowers = authors.reduce(
    (total, author) => total + author.followers,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <Users
              size={28}
              className="text-gray-800"
            />

            <h1 className="text-3xl font-bold text-gray-900">
              Authors Management
            </h1>
          </div>

          <p className="mt-2 text-gray-500">
            Manage authors, editors and their publication access.
          </p>
        </div>

        {/* Statistics */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Authors
            </p>

            <p className="mt-1 text-3xl font-bold text-gray-900">
              {authors.length}
            </p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Active Authors
            </p>

            <p className="mt-1 text-3xl font-bold text-gray-900">
              {activeAuthors}
            </p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Followers
            </p>

            <p className="mt-1 text-3xl font-bold text-gray-900">
              {totalFollowers.toLocaleString()}
            </p>

            <p className="mt-1 text-xs text-gray-400">
              {totalArticles} articles published
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
              placeholder="Search authors by name, email or role..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 outline-none focus:border-gray-400"
            />
          </div>
        </div>

        {/* Authors Table */}
        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

          <div className="border-b px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900">
              All Authors
            </h2>
          </div>

          {filteredAuthors.length > 0 ? (
            <div className="overflow-x-auto">

              <table className="w-full min-w-[1000px]">

                <thead>
                  <tr className="border-b bg-gray-50 text-left">

                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                      Author
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                      Role
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                      Articles
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                      Followers
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                      Joined
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

                  {filteredAuthors.map((author) => (
                    <tr
                      key={author.id}
                      className="border-b last:border-b-0 hover:bg-gray-50"
                    >

                      {/* Author */}
                      <td className="px-6 py-5">

                        <div className="flex items-center gap-3">

                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
                            {author.name
                              .split(" ")
                              .map((name) => name[0])
                              .join("")}
                          </div>

                          <div>
                            <p className="font-semibold text-gray-900">
                              {author.name}
                            </p>

                            <p className="text-sm text-gray-500">
                              {author.email}
                            </p>
                          </div>

                        </div>

                      </td>

                      {/* Role */}
                      <td className="px-6 py-5">

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            author.role === "Editor"
                              ? "bg-purple-100 text-purple-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {author.role}
                        </span>

                      </td>

                      {/* Articles */}
                      <td className="px-6 py-5 text-sm text-gray-600">
                        {author.articles}
                      </td>

                      {/* Followers */}
                      <td className="px-6 py-5 text-sm text-gray-600">
                        {author.followers.toLocaleString()}
                      </td>

                      {/* Joined */}
                      <td className="px-6 py-5 text-sm text-gray-600">
                        {author.joined}
                      </td>

                      {/* Status */}
                      <td className="px-6 py-5">

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            author.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {author.status}
                        </span>

                      </td>

                      {/* Actions */}
                      <td className="px-6 py-5">

                        <div className="flex justify-end gap-2">

                          {/* View */}
                          <button
                            title="View author"
                            className="rounded-lg border p-2 text-gray-600 hover:bg-gray-100"
                          >
                            <Eye size={17} />
                          </button>

                          {/* Edit */}
                          <button
                            title="Edit author"
                            className="rounded-lg border p-2 text-gray-600 hover:bg-gray-100"
                          >
                            <Edit size={17} />
                          </button>

                          {/* Activate / Deactivate */}
                          <button
                            title={
                              author.status === "Active"
                                ? "Deactivate author"
                                : "Activate author"
                            }
                            onClick={() =>
                              toggleStatus(author.id)
                            }
                            className={`rounded-lg border p-2 ${
                              author.status === "Active"
                                ? "text-red-500 hover:bg-red-50"
                                : "text-green-600 hover:bg-green-50"
                            }`}
                          >
                            {author.status === "Active" ? (
                              <UserX size={17} />
                            ) : (
                              <UserCheck size={17} />
                            )}
                          </button>

                          {/* Delete */}
                          <button
                            title="Delete author"
                            onClick={() =>
                              deleteAuthor(author.id)
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

              <Users
                size={45}
                className="mx-auto mb-4 text-gray-300"
              />

              <h2 className="font-semibold text-gray-800">
                No authors found
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