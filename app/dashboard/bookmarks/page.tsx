"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Bookmark,
  Trash2,
  Clock,
  Search,
} from "lucide-react";

import {
  getBookmarks,
  removeBookmark,
  type BookmarkedArticle,
} from "@/lib/bookmarks";

export default function BookmarksPage() {
  const [articles, setArticles] = useState<BookmarkedArticle[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setArticles(getBookmarks());
  }, []);

  const handleRemoveBookmark = (id: number) => {
    removeBookmark(id);

    setArticles((current) =>
      current.filter((article) => article.id !== id)
    );
  };

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.author.toLowerCase().includes(search.toLowerCase()) ||
      article.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Bookmark size={28} className="text-gray-800" />

            <h1 className="text-3xl font-bold text-gray-900">
              Saved Articles
            </h1>
          </div>

          <p className="mt-2 text-gray-500">
            Keep your favorite articles here and read them later.
          </p>
        </div>

        <div className="rounded-lg border bg-white px-4 py-3 text-sm shadow-sm">
          <span className="font-semibold text-gray-900">
            {articles.length}
          </span>{" "}
          saved articles
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
            placeholder="Search saved articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 outline-none transition focus:border-gray-400"
          />
        </div>
      </div>

      {/* Articles */}
      {filteredArticles.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md"
            >
              {/* Image */}
              <div className="relative h-52 w-full">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover"
                />

                <button
                  type="button"
                  onClick={() => handleRemoveBookmark(article.id)}
                  title="Remove bookmark"
                  aria-label={`Remove bookmark for ${article.title}`}
                  className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm transition hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 size={17} />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    {article.category}
                  </span>

                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock size={14} />
                    {article.readTime}
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-900">
                  {article.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {article.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t pt-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {article.author}
                    </p>

                    <p className="text-xs text-gray-500">
                      {article.date}
                    </p>
                  </div>

                 <Link
  href={`/article/${article.id}`}
  className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
>
  Read Article
</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border bg-white p-12 text-center shadow-sm">
          <Bookmark
            size={45}
            className="mx-auto mb-4 text-gray-300"
          />

          <h2 className="text-lg font-semibold text-gray-800">
            No saved articles
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            {search
              ? "No articles match your search."
              : "Articles you bookmark will appear here."}
          </p>

          {!search && (
            <Link
              href="/articles"
              className="mt-5 inline-block rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              Explore Articles
            </Link>
          )}
        </div>
      )}
    </div>
  );
}