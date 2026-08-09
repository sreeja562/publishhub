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
    <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-[#0b0b0f] dark:text-white">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="mb-8">

        <div className="flex items-center gap-3">

          <Users
            size={28}
            className="text-gray-800 dark:text-white"
          />

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Authors Management
          </h1>

        </div>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Manage authors, editors and their publication access.
        </p>

      </div>

      {/* =================================================
          STATISTICS
      ================================================= */}

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">

        {/* Total Authors */}

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
            Total Authors
          </p>

          <p className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">
            {authors.length}
          </p>

        </div>

        {/* Active Authors */}

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
            Active Authors
          </p>

          <p className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">
            {activeAuthors}
          </p>

        </div>

        {/* Total Followers */}

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
            Total Followers
          </p>

          <p className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">
            {totalFollowers.toLocaleString()}
          </p>

          <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
            {totalArticles} articles published
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
            placeholder="Search authors by name, email or role..."
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
          AUTHORS TABLE
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

        {/* Table Title */}

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
            All Authors
          </h2>

        </div>

        {filteredAuthors.length > 0 ? (

          <div className="overflow-x-auto">

            <table className="w-full min-w-[1000px]">

              {/* =================================================
                  TABLE HEADER
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
                    Author
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Role
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Articles
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Followers
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Joined
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

                {filteredAuthors.map((author) => (

                  <tr
                    key={author.id}
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

                    {/* =================================================
                        AUTHOR
                    ================================================= */}

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div
                          className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            bg-gray-900
                            text-sm
                            font-bold
                            text-white

                            dark:bg-white
                            dark:text-gray-900
                          "
                        >
                          {author.name
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                        </div>

                        <div>

                          <p className="font-semibold text-gray-900 dark:text-white">
                            {author.name}
                          </p>

                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {author.email}
                          </p>

                        </div>

                      </div>

                    </td>

                    {/* =================================================
                        ROLE
                    ================================================= */}

                    <td className="px-6 py-5">

                      <span
                        className={`
                          rounded-full
                          px-3
                          py-1
                          text-xs
                          font-medium

                          ${
                            author.role === "Editor"
                              ? "bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-400"
                              : "bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-300"
                          }
                        `}
                      >
                        {author.role}
                      </span>

                    </td>

                    {/* ARTICLES */}

                    <td className="px-6 py-5 text-sm text-gray-600 dark:text-gray-300">
                      {author.articles}
                    </td>

                    {/* FOLLOWERS */}

                    <td className="px-6 py-5 text-sm text-gray-600 dark:text-gray-300">
                      {author.followers.toLocaleString()}
                    </td>

                    {/* JOINED */}

                    <td className="px-6 py-5 text-sm text-gray-600 dark:text-gray-300">
                      {author.joined}
                    </td>

                    {/* STATUS */}

                    <td className="px-6 py-5">

                      <span
                        className={`
                          rounded-full
                          px-3
                          py-1
                          text-xs
                          font-medium

                          ${
                            author.status === "Active"
                              ? "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400"
                              : "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400"
                          }
                        `}
                      >
                        {author.status}
                      </span>

                    </td>

                    {/* =================================================
                        ACTIONS
                    ================================================= */}

                    <td className="px-6 py-5">

                      <div className="flex justify-end gap-2">

                        {/* VIEW */}

                        <button
                          type="button"
                          title="View author"
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
                          title="Edit author"
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

                        {/* ACTIVATE / DEACTIVATE */}

                        <button
                          type="button"
                          title={
                            author.status === "Active"
                              ? "Deactivate author"
                              : "Activate author"
                          }
                          onClick={() =>
                            toggleStatus(author.id)
                          }
                          className={`
                            rounded-lg
                            border
                            p-2
                            transition

                            ${
                              author.status === "Active"
                                ? `
                                  border-red-300
                                  bg-white
                                  text-red-500
                                  hover:bg-red-50

                                  dark:border-red-500/40
                                  dark:bg-transparent
                                  dark:text-red-400
                                  dark:hover:bg-red-500/10
                                `
                                : `
                                  border-green-300
                                  bg-white
                                  text-green-600
                                  hover:bg-green-50

                                  dark:border-green-500/40
                                  dark:bg-transparent
                                  dark:text-green-400
                                  dark:hover:bg-green-500/10
                                `
                            }
                          `}
                        >
                          {author.status === "Active" ? (
                            <UserX size={17} />
                          ) : (
                            <UserCheck size={17} />
                          )}
                        </button>

                        {/* DELETE */}

                        <button
                          type="button"
                          title="Delete author"
                          onClick={() =>
                            deleteAuthor(author.id)
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
              NO AUTHORS
          ================================================= */

          <div className="p-12 text-center">

            <Users
              size={45}
              className="
                mx-auto
                mb-4
                text-gray-300
                dark:text-gray-600
              "
            />

            <h2 className="font-semibold text-gray-800 dark:text-white">
              No authors found
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