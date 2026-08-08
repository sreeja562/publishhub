"use client";

import Link from "next/link";
import {
  Search,
  ArrowRight,
  Users,
  FileText,
  X,
} from "lucide-react";
import { useState } from "react";

const authors = [
  {
    id: 1,
    name: "Sreeja Kumbaji",
    username: "sreeja",
    role: "Technology Writer",
    bio: "Writing about AI, web development, technology and the future of digital products.",
    articles: 24,
    followers: "1.2K",
    avatar: "S",
    topics: ["Technology", "AI", "Development"],
  },
  {
    id: 2,
    name: "Priya Sharma",
    username: "priya",
    role: "Design Writer",
    bio: "Exploring design systems, UI/UX, creativity and modern digital experiences.",
    articles: 18,
    followers: "956",
    avatar: "P",
    topics: ["Design", "UI/UX", "Creativity"],
  },
  {
    id: 3,
    name: "Rahul Verma",
    username: "rahul",
    role: "Software Developer",
    bio: "Sharing practical tutorials about JavaScript, React, Next.js and modern development.",
    articles: 31,
    followers: "2.4K",
    avatar: "R",
    topics: ["Development", "JavaScript", "Next.js"],
  },
  {
    id: 4,
    name: "Ananya Rao",
    username: "ananya",
    role: "Research Writer",
    bio: "Writing about education, technology, research and the impact of digital transformation.",
    articles: 15,
    followers: "734",
    avatar: "A",
    topics: ["Research", "Education", "Technology"],
  },
  {
    id: 5,
    name: "Arjun Kumar",
    username: "arjun",
    role: "Web Developer",
    bio: "Building and writing about fast, accessible and scalable web experiences.",
    articles: 21,
    followers: "1.1K",
    avatar: "A",
    topics: ["Web", "Development", "Performance"],
  },
  {
    id: 6,
    name: "Meghana Reddy",
    username: "meghana",
    role: "AI Writer",
    bio: "Making artificial intelligence easier to understand through practical articles and guides.",
    articles: 27,
    followers: "1.8K",
    avatar: "M",
    topics: ["AI", "Machine Learning", "Technology"],
  },
];

export default function AuthorsPage() {
  const [search, setSearch] = useState("");

  const filteredAuthors = authors.filter((author) => {
    const query = search.toLowerCase().trim();

    return (
      author.name.toLowerCase().includes(query) ||
      author.role.toLowerCase().includes(query) ||
      author.bio.toLowerCase().includes(query) ||
      author.topics.some((topic) =>
        topic.toLowerCase().includes(query)
      )
    );
  });

  const clearSearch = () => {
    setSearch("");
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
          HERO
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

          <div
            className="
              flex
              flex-col
              gap-10

              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >

            {/* Hero text */}

            <div>

              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#7C3AED]
                "
              >
                Community
              </p>

              <h1
                className="
                  mt-3

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
                Meet the authors
                <span className="text-[#7C3AED]">
                  .
                </span>
              </h1>

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
                Discover writers, developers,
                researchers, and creators sharing
                their knowledge with the PublishHub
                community.
              </p>

            </div>

            {/* Author count */}

            <div
              className="
                flex
                w-fit
                items-center
                gap-4

                rounded-2xl

                border
                border-gray-200

                bg-white/80

                px-5
                py-4

                shadow-sm
                backdrop-blur-md

                dark:border-white/10
                dark:bg-white/[0.04]
              "
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  rounded-xl

                  bg-purple-100

                  text-[#7C3AED]

                  dark:bg-purple-500/10
                "
              >
                <Users size={20} />
              </div>

              <div>

                <p
                  className="
                    text-2xl
                    font-bold

                    text-slate-900

                    dark:text-white
                  "
                >
                  {authors.length}
                </p>

                <p
                  className="
                    text-xs
                    font-medium
                    text-slate-500

                    dark:text-slate-400
                  "
                >
                  Published Authors
                </p>

              </div>

            </div>

          </div>

          {/* =================================================
              SEARCH
          ================================================= */}

          <div className="mt-10 max-w-2xl">

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
                size={20}
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
                placeholder="Search authors, roles, or topics..."
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
                  onClick={clearSearch}
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
          AUTHORS
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

          {/* Section heading */}

          <div
            className="
              mb-8

              flex
              flex-col
              gap-3

              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >

            <div>

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#7C3AED]
                "
              >
                Writers
              </p>

              <h2
                className="
                  mt-2

                  text-2xl
                  font-bold
                  tracking-tight

                  text-slate-900

                  sm:text-3xl

                  dark:text-white
                "
              >
                Our Authors
              </h2>

            </div>

            <p
              className="
                text-sm
                text-slate-500

                dark:text-slate-400
              "
            >
              {filteredAuthors.length}{" "}
              {filteredAuthors.length === 1
                ? "author"
                : "authors"}
            </p>

          </div>

          {/* =================================================
              EMPTY STATE
          ================================================= */}

          {filteredAuthors.length === 0 ? (

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
                <Users size={28} />
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
                No authors found
              </h3>

              <p
                className="
                  mt-2

                  text-sm

                  text-slate-500

                  dark:text-slate-400
                "
              >
                Try searching for another name,
                role, or topic.
              </p>

              <button
                type="button"
                onClick={clearSearch}
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
                Clear Search
              </button>

            </div>

          ) : (

            /* =================================================
               AUTHOR GRID
            ================================================= */

            <div
              className="
                grid
                gap-6

                md:grid-cols-2
                lg:grid-cols-3
              "
            >

              {filteredAuthors.map((author) => (

                <article
                  key={author.id}
                  className="
                    group
                    relative
                    overflow-hidden

                    rounded-2xl

                    border
                    border-gray-200

                    bg-white

                    p-6

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

                  {/* Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16

                      h-32
                      w-32

                      rounded-full

                      bg-purple-500/5

                      blur-2xl

                      transition-all
                      duration-500

                      group-hover:bg-purple-500/15
                    "
                  />

                  <div className="relative z-10">

                    {/* =================================================
                        AUTHOR HEADER
                    ================================================= */}

                    <Link
                      href={`/authors/${author.username}`}
                      className="
                        flex
                        items-center
                        gap-4
                      "
                    >

                      <div
                        className="
                          flex
                          h-16
                          w-16
                          shrink-0
                          items-center
                          justify-center

                          rounded-2xl

                          bg-gradient-to-br
                          from-purple-100
                          to-purple-50

                          text-xl
                          font-bold
                          text-[#7C3AED]

                          transition-all
                          duration-300

                          group-hover:scale-105
                          group-hover:from-[#7C3AED]
                          group-hover:to-[#6D28D9]
                          group-hover:text-white

                          dark:from-purple-500/20
                          dark:to-purple-500/5

                          dark:group-hover:from-[#7C3AED]
                          dark:group-hover:to-[#6D28D9]
                        "
                      >
                        {author.avatar}
                      </div>

                      <div className="min-w-0">

                        <h3
                          className="
                            truncate

                            font-bold

                            text-slate-900

                            transition-colors
                            duration-300

                            group-hover:text-[#7C3AED]

                            dark:text-white
                            dark:group-hover:text-purple-400
                          "
                        >
                          {author.name}
                        </h3>

                        <p
                          className="
                            mt-1

                            text-xs

                            text-slate-400

                            dark:text-slate-500
                          "
                        >
                          @{author.username}
                        </p>

                      </div>

                    </Link>

                    {/* =================================================
                        ROLE
                    ================================================= */}

                    <p
                      className="
                        mt-5

                        text-sm
                        font-semibold

                        text-[#7C3AED]

                        dark:text-purple-400
                      "
                    >
                      {author.role}
                    </p>

                    {/* =================================================
                        BIO
                    ================================================= */}

                    <p
                      className="
                        mt-2

                        line-clamp-3

                        text-sm
                        leading-6

                        text-slate-500

                        dark:text-slate-400
                      "
                    >
                      {author.bio}
                    </p>

                    {/* =================================================
                        TOPICS
                    ================================================= */}

                    <div
                      className="
                        mt-5
                        flex
                        flex-wrap
                        gap-2
                      "
                    >

                      {author.topics.map((topic) => (

                        <span
                          key={topic}
                          className="
                            rounded-full

                            border
                            border-gray-200

                            bg-gray-50

                            px-3
                            py-1.5

                            text-xs
                            font-medium

                            text-slate-500

                            dark:border-white/10
                            dark:bg-white/[0.04]
                            dark:text-slate-400
                          "
                        >
                          {topic}
                        </span>

                      ))}

                    </div>

                    {/* =================================================
                        STATS
                    ================================================= */}

                    <div
                      className="
                        mt-6

                        flex
                        items-center
                        gap-6

                        border-t
                        border-gray-100

                        pt-5

                        dark:border-white/10
                      "
                    >

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                        "
                      >

                        <FileText
                          size={16}
                          className="
                            text-slate-400
                          "
                        />

                        <div>

                          <p
                            className="
                              text-sm
                              font-bold

                              text-slate-900

                              dark:text-white
                            "
                          >
                            {author.articles}
                          </p>

                          <p
                            className="
                              text-[11px]

                              text-slate-400
                            "
                          >
                            Articles
                          </p>

                        </div>

                      </div>

                      <div>

                        <p
                          className="
                            text-sm
                            font-bold

                            text-slate-900

                            dark:text-white
                          "
                        >
                          {author.followers}
                        </p>

                        <p
                          className="
                            text-[11px]

                            text-slate-400
                          "
                        >
                          Followers
                        </p>

                      </div>

                    </div>

                    {/* =================================================
                        PROFILE BUTTON
                    ================================================= */}

                    <Link
                      href={`/authors/${author.username}`}
                      className="
                        mt-5

                        flex
                        items-center
                        justify-between

                        rounded-xl

                        border
                        border-gray-200

                        bg-white

                        px-4
                        py-3

                        text-sm
                        font-semibold

                        text-slate-700

                        transition-all
                        duration-300

                        hover:border-[#7C3AED]
                        hover:bg-[#7C3AED]
                        hover:text-white

                        dark:border-white/10
                        dark:bg-white/[0.03]
                        dark:text-slate-300

                        dark:hover:border-[#7C3AED]
                        dark:hover:bg-[#7C3AED]
                        dark:hover:text-white
                      "
                    >
                      <span>
                        View Profile
                      </span>

                      <ArrowRight
                        size={16}
                        className="
                          transition-transform
                          duration-300

                          group-hover:translate-x-1
                        "
                      />
                    </Link>

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

              ))}

            </div>

          )}

        </div>

      </section>

    </main>
  );
}