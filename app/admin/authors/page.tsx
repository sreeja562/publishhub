"use client";

import { useState } from "react";
import { Search, Users, Eye, Trash2 } from "lucide-react";

interface Author {
  id: number;
  name: string;
  username: string;
  email: string;
  articles: number;
  status: "Active" | "Blocked";
}

const initialAuthors: Author[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    username: "rahul",
    email: "rahul@example.com",
    articles: 12,
    status: "Active",
  },
  {
    id: 2,
    name: "Ananya Reddy",
    username: "ananya",
    email: "ananya@example.com",
    articles: 8,
    status: "Active",
  },
  {
    id: 3,
    name: "Arjun Kumar",
    username: "arjun",
    email: "arjun@example.com",
    articles: 15,
    status: "Active",
  },
  {
    id: 4,
    name: "Sneha Patel",
    username: "sneha",
    email: "sneha@example.com",
    articles: 6,
    status: "Blocked",
  },
];

export default function AdminAuthorsPage() {
  const [authors, setAuthors] = useState(initialAuthors);
  const [search, setSearch] = useState("");

  const toggleStatus = (id: number) => {
    setAuthors((current) =>
      current.map((author) =>
        author.id === id
          ? {
              ...author,
              status:
                author.status === "Active"
                  ? "Blocked"
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
      author.username
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      author.email
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

  return (
    <div className="min-h-screen bg-[#F8F7F4] p-6 md:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <Users size={28} />

            <h1 className="text-3xl font-bold text-gray-900">
              Authors
            </h1>
          </div>

          <p className="mt-2 text-gray-500">
            Manage authors and their publication activity.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-6 grid gap-4 md:grid-cols-3">

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Authors
            </p>

            <p className="mt-1 text-3xl font-bold">
              {authors.length}
            </p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Active Authors
            </p>

            <p className="mt-1 text-3xl font-bold">
              {activeAuthors}
            </p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Articles
            </p>

            <p className="mt-1 text-3xl font-bold">
              {totalArticles}
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
              placeholder="Search authors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 outline-none focus:border-gray-400"
            />

          </div>
        </div>

        {/* Authors Table */}
        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

          <div className="border-b px-6 py-4">
            <h2 className="text-lg font-semibold">
              All Authors
            </h2>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[800px]">

              <thead>
                <tr className="border-b bg-gray-50 text-left">

                  <th className="px-6 py-4 text-sm">
                    Author
                  </th>

                  <th className="px-6 py-4 text-sm">
                    Email
                  </th>

                  <th className="px-6 py-4 text-sm">
                    Articles
                  </th>

                  <th className="px-6 py-4 text-sm">
                    Status
                  </th>

                  <th className="px-6 py-4 text-right text-sm">
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

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                          {author.name.charAt(0)}
                        </div>

                        <div>
                          <p className="font-medium">
                            {author.name}
                          </p>

                          <p className="text-xs text-gray-400">
                            @{author.username}
                          </p>
                        </div>

                      </div>

                    </td>

                    <td className="px-6 py-5 text-sm text-gray-600">
                      {author.email}
                    </td>

                    <td className="px-6 py-5 text-sm">
                      {author.articles}
                    </td>

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

                    <td className="px-6 py-5">

                      <div className="flex justify-end gap-2">

                        <button
                          title="View author"
                          className="rounded-lg border p-2 hover:bg-gray-100"
                        >
                          <Eye size={17} />
                        </button>

                        <button
                          onClick={() =>
                            toggleStatus(author.id)
                          }
                          className="rounded-lg border px-3 py-2 text-xs hover:bg-gray-100"
                        >
                          {author.status === "Active"
                            ? "Block"
                            : "Unblock"}
                        </button>

                        <button
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

        </div>

      </div>
    </div>
  );
}