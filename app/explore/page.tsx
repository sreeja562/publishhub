"use client";

import { useEffect,useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { articles } from "@/data/articles";

const categories = [
  "All",
  "Technology",
  "Programming",
  "Design",
  "AI",
  "Business",
  "Lifestyle",
];

export default function ExplorePage() {
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(
    searchParams.get("search") || ""
    );

    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.author.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-[#FAFAFA]">

      {/* Header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">

          <p className="text-sm font-semibold uppercase tracking-widest text-[#7C3AED]">
            Explore
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Browse Publications
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Discover articles, tutorials, stories, and ideas from
            PublishHub authors.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-3xl">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search publications or authors..."
              className="w-full rounded-full border border-gray-200 bg-white px-6 py-4 text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
            />
          </div>

        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="flex flex-wrap gap-3">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                selectedCategory === category
                  ? "bg-[#7C3AED] text-white"
                  : "border border-gray-200 bg-white text-gray-700 hover:border-[#7C3AED] hover:text-[#7C3AED]"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

      </section>

      {/* Results */}
      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="mb-8 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === "All"
                ? "Latest Publications"
                : selectedCategory}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {filteredArticles.length} publication
              {filteredArticles.length !== 1 ? "s" : ""} found
            </p>
          </div>

        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <img
                  src={article.image}
                  alt={article.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-6">

                  <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#7C3AED]">
                    {article.category}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    By {article.author}
                  </p>

                  <Link
                    href={`/articles/${article.id}`}
                    className="mt-5 inline-block text-sm font-semibold text-[#7C3AED] transition hover:text-[#6D28D9]"
                  >
                    Read Publication →
                  </Link>

                </div>

              </article>
            ))}

          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">

            <div className="text-4xl">
              🔍
            </div>

            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              No publications found
            </h3>

            <p className="mt-2 text-gray-500">
              Try a different search term or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="mt-5 rounded-lg bg-[#7C3AED] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#6D28D9]"
            >
              Clear Filters
            </button>

          </div>
        )}

      </section>

    </main>
  );
}