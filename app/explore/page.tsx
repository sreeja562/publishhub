"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Search, SlidersHorizontal, X } from "lucide-react";
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

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const filteredArticles = articles.filter((article) => {
    const searchTerm = search.toLowerCase().trim();

    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm) ||
      article.author.toLowerCase().includes(searchTerm) ||
      article.category.toLowerCase().includes(searchTerm);

    const matchesCategory =
      selectedCategory === "All" ||
      article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("All");
  };

  return (
    <main
      className="
        min-h-screen
        bg-white
        text-slate-900

        dark:bg-[#09090b]
        dark:text-white

        transition-colors
        duration-300
      "
    >

      {/* =====================================================
          HERO / HEADER
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden

          border-b
          border-gray-200

          bg-gradient-to-b
          from-purple-50
          via-white
          to-white

          dark:border-white/10
          dark:from-purple-950/20
          dark:via-[#09090b]
          dark:to-[#09090b]
        "
      >

        {/* Decorative glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-80
            w-80
            rounded-full
            bg-purple-500/10
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -left-32
            bottom-0
            h-64
            w-64
            rounded-full
            bg-purple-500/5
            blur-3xl
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-7xl

            px-6
            py-20

            sm:px-10
            lg:px-16
          "
        >

          {/* Label */}

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#7C3AED]
            "
          >
            Explore
          </p>

          {/* Heading */}

          <h1
            className="
              mt-3
              max-w-3xl

              text-4xl
              font-extrabold
              leading-tight
              tracking-tight

              text-slate-900

              sm:text-5xl
              lg:text-6xl

              dark:text-white
            "
          >
            Discover ideas
            <span className="text-[#7C3AED]">.</span>
          </h1>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-2xl

              text-base
              leading-7

              text-slate-600

              sm:text-lg

              dark:text-slate-400
            "
          >
            Discover articles, tutorials, stories,
            and ideas from the PublishHub community.
            Find something worth reading.
          </p>

          {/* =================================================
              SEARCH
          ================================================= */}

          <div className="mt-9 max-w-3xl">

            <div
              className="
                relative
                flex
                items-center

                rounded-2xl

                border
                border-gray-200

                bg-white

                shadow-lg
                shadow-gray-200/40

                transition-all
                duration-300

                focus-within:border-[#7C3AED]
                focus-within:ring-4
                focus-within:ring-purple-500/10

                dark:border-white/10
                dark:bg-white/[0.05]
                dark:shadow-black/20
              "
            >

              <Search
                size={21}
                className="
                  ml-5
                  shrink-0
                  text-gray-400
                  dark:text-gray-500
                "
              />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search publications, authors, or topics..."
                className="
                  w-full
                  bg-transparent

                  px-4
                  py-4

                  text-sm
                  text-slate-900

                  outline-none

                  placeholder:text-gray-400

                  dark:text-white
                  dark:placeholder:text-gray-500
                "
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="
                    mr-3
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    text-gray-400

                    transition

                    hover:bg-gray-100
                    hover:text-gray-700

                    dark:hover:bg-white/10
                    dark:hover:text-white
                  "
                >
                  <X size={17} />
                </button>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FILTERS
      ===================================================== */}

      <section
        className="
          border-b
          border-gray-200

          bg-white

          dark:border-white/10
          dark:bg-[#09090b]
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl

            px-6
            py-7

            sm:px-10
            lg:px-16
          "
        >

          <div
            className="
              flex
              flex-col
              gap-5

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            {/* Categories */}

            <div className="flex items-center gap-3">

              <SlidersHorizontal
                size={18}
                className="
                  hidden
                  shrink-0
                  text-gray-400

                  sm:block
                "
              />

              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                "
              >
                {categories.map((category) => {
                  const active =
                    selectedCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() =>
                        setSelectedCategory(category)
                      }
                      className={`
                        rounded-full

                        border

                        px-4
                        py-2

                        text-sm
                        font-semibold

                        transition-all
                        duration-200

                        ${
                          active
                            ? "border-[#7C3AED] bg-[#7C3AED] text-white shadow-md shadow-purple-500/20"
                            : "border-gray-200 bg-white text-slate-600 hover:border-[#7C3AED] hover:text-[#7C3AED] dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400 dark:hover:border-purple-500/50 dark:hover:text-purple-400"
                        }
                      `}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          RESULTS
      ===================================================== */}

      <section
        className="
          px-6
          py-14

          sm:px-10
          sm:py-16

          lg:px-16
        "
      >

        <div className="mx-auto max-w-7xl">

          {/* Results heading */}

          <div
            className="
              mb-8
              flex
              flex-col
              gap-2

              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >

            <div>

              <h2
                className="
                  text-2xl
                  font-bold
                  tracking-tight

                  text-slate-900

                  sm:text-3xl

                  dark:text-white
                "
              >
                {selectedCategory === "All"
                  ? "Latest Publications"
                  : selectedCategory}
              </h2>

              <p
                className="
                  mt-1
                  text-sm
                  text-slate-500

                  dark:text-slate-400
                "
              >
                {filteredArticles.length} publication
                {filteredArticles.length !== 1
                  ? "s"
                  : ""}{" "}
                found
              </p>

            </div>

            {(search || selectedCategory !== "All") && (
              <button
                type="button"
                onClick={clearFilters}
                className="
                  flex
                  w-fit
                  items-center
                  gap-2

                  text-sm
                  font-semibold
                  text-[#7C3AED]

                  transition

                  hover:text-[#6D28D9]
                "
              >
                Clear filters
                <X size={15} />
              </button>
            )}

          </div>

          {/* =================================================
              ARTICLES
          ================================================= */}

          {filteredArticles.length > 0 ? (

            <div
              className="
                grid
                gap-6

                sm:grid-cols-2
                lg:grid-cols-3
              "
            >

              {filteredArticles.map((article) => (

                <Link
                  key={article.id}
                  href={`/article/${article.id}`}
                  className="group block"
                >

                  <article
                    className="
                      relative
                      overflow-hidden

                      rounded-2xl

                      border
                      border-gray-200

                      bg-white

                      shadow-sm

                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:border-purple-200
                      hover:shadow-xl
                      hover:shadow-purple-500/10

                      dark:border-white/10
                      dark:bg-white/[0.04]

                      dark:hover:border-purple-500/30
                      dark:hover:bg-white/[0.06]
                    "
                  >

                    {/* Image */}

                    <div
                      className="
                        relative
                        h-56
                        w-full
                        overflow-hidden

                        bg-gray-100

                        dark:bg-zinc-900
                      "
                    >

                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="
                          (max-width: 640px) 100vw,
                          (max-width: 1024px) 50vw,
                          33vw
                        "
                        className="
                          object-cover

                          transition-transform
                          duration-700

                          group-hover:scale-105
                        "
                      />

                      {/* Image overlay */}

                      <div
                        className="
                          absolute
                          inset-0

                          bg-gradient-to-t
                          from-black/30
                          to-transparent

                          opacity-0

                          transition-opacity
                          duration-300

                          group-hover:opacity-100
                        "
                      />

                      {/* Category */}

                      <span
                        className="
                          absolute
                          left-4
                          top-4

                          rounded-full

                          border
                          border-white/20

                          bg-white/90

                          px-3
                          py-1.5

                          text-[11px]
                          font-bold
                          uppercase
                          tracking-wider

                          text-[#7C3AED]

                          shadow-sm
                          backdrop-blur-md

                          dark:bg-black/60
                          dark:text-purple-300
                        "
                      >
                        {article.category}
                      </span>

                    </div>

                    {/* Content */}

                    <div className="p-6">

                      <p
                        className="
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.16em]

                          text-[#7C3AED]
                        "
                      >
                        {article.category}
                      </p>

                      <h3
                        className="
                          mt-2

                          line-clamp-2

                          text-xl
                          font-bold
                          leading-snug

                          text-slate-900

                          transition-colors
                          duration-300

                          group-hover:text-[#7C3AED]

                          dark:text-white
                          dark:group-hover:text-purple-400
                        "
                      >
                        {article.title}
                      </h3>

                      <p
                        className="
                          mt-4

                          text-sm

                          text-slate-500

                          dark:text-slate-400
                        "
                      >
                        By{" "}
                        <span
                          className="
                            font-medium
                            text-slate-700

                            dark:text-slate-300
                          "
                        >
                          {article.author}
                        </span>
                      </p>

                      <div
                        className="
                          mt-5
                          flex
                          items-center

                          text-sm
                          font-semibold

                          text-[#7C3AED]

                          dark:text-purple-400
                        "
                      >
                        Read Publication

                        <span
                          className="
                            ml-2

                            transition-transform
                            duration-300

                            group-hover:translate-x-1
                          "
                        >
                          →
                        </span>
                      </div>

                    </div>

                    {/* Bottom accent */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0

                        h-0.5
                        w-0

                        bg-[#7C3AED]

                        transition-all
                        duration-500

                        group-hover:w-full
                      "
                    />

                  </article>

                </Link>

              ))}

            </div>

          ) : (

            /* =================================================
               EMPTY STATE
            ================================================= */

            <div
              className="
                rounded-3xl

                border
                border-dashed
                border-gray-300

                bg-gray-50

                px-6
                py-20

                text-center

                dark:border-white/10
                dark:bg-white/[0.03]
              "
            >

              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center

                  rounded-2xl

                  bg-purple-100

                  text-[#7C3AED]

                  dark:bg-purple-500/10
                "
              >
                <Search size={28} />
              </div>

              <h3
                className="
                  mt-5

                  text-xl
                  font-bold

                  text-slate-900

                  dark:text-white
                "
              >
                No publications found
              </h3>

              <p
                className="
                  mx-auto
                  mt-2
                  max-w-md

                  text-sm
                  leading-6

                  text-slate-500

                  dark:text-slate-400
                "
              >
                We couldn't find any publications
                matching your search or selected
                category.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="
                  mt-6

                  rounded-xl

                  bg-[#7C3AED]

                  px-5
                  py-3

                  text-sm
                  font-semibold
                  text-white

                  shadow-lg
                  shadow-purple-500/20

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#6D28D9]
                "
              >
                Clear Filters
              </button>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}