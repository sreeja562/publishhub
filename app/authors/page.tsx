"use client";

import Link from "next/link";
import {
  Search,
  ArrowRight,
  Users,
  FileText,
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
    const query = search.toLowerCase();

    return (
      author.name.toLowerCase().includes(query) ||
      author.role.toLowerCase().includes(query) ||
      author.topics.some((topic) =>
        topic.toLowerCase().includes(query)
      )
    );
  });

  return (
    <main className="min-h-screen bg-[#f8f8f6] text-[#111111]">

      

      {/* HERO */}
      <section className="border-b border-black/5 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                Community
              </p>

              <h1 className="mt-4 font-serif text-5xl font-semibold tracking-tight md:text-7xl">
                Meet the authors.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
                Discover writers, developers, researchers and creators
                sharing their knowledge with the PublishHub community.
              </p>

            </div>


            {/* AUTHOR COUNT */}
            <div className="flex items-center gap-3 text-sm text-gray-400">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Users size={19} />
              </div>

              <span>
                <strong className="text-black">
                  {authors.length}
                </strong>{" "}
                authors
              </span>

            </div>

          </div>


          {/* SEARCH */}
          <div className="relative mt-10 max-w-xl">

            <Search
              size={19}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search authors or topics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-black/10 bg-[#f8f8f6] py-4 pl-13 pr-5 text-sm outline-none transition focus:border-blue-500"
            />

          </div>

        </div>

      </section>


      {/* AUTHORS */}
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              Writers
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              Our Authors
            </h2>

          </div>

          <p className="text-sm text-gray-400">
            {filteredAuthors.length}{" "}
            {filteredAuthors.length === 1 ? "author" : "authors"}
          </p>

        </div>


        {filteredAuthors.length === 0 ? (

          <div className="mt-8 rounded-2xl border border-black/5 bg-white p-12 text-center">

            <Users
              size={32}
              className="mx-auto text-gray-300"
            />

            <p className="mt-4 font-medium">
              No authors found
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Try searching for another name or topic.
            </p>

          </div>

        ) : (

          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {filteredAuthors.map((author) => (

              <article
                key={author.id}
                className="group rounded-2xl border border-black/5 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* AUTHOR HEADER */}
                <div className="flex items-start justify-between">

                  <Link
                    href={`/authors/${author.username}`}
                    className="flex items-center gap-4"
                  >

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xl font-semibold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      {author.avatar}
                    </div>

                    <div>

                      <h3 className="font-semibold transition group-hover:text-blue-600">
                        {author.name}
                      </h3>

                      <p className="mt-1 text-xs text-gray-400">
                        @{author.username}
                      </p>

                    </div>

                  </Link>

                </div>


                {/* ROLE */}
                <p className="mt-5 text-sm font-medium text-blue-600">
                  {author.role}
                </p>


                {/* BIO */}
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-500">
                  {author.bio}
                </p>


                {/* TOPICS */}
                <div className="mt-5 flex flex-wrap gap-2">

                  {author.topics.map((topic) => (

                    <span
                      key={topic}
                      className="rounded-full bg-[#f5f5f2] px-3 py-1.5 text-xs text-gray-500"
                    >
                      {topic}
                    </span>

                  ))}

                </div>


                {/* STATS */}
                <div className="mt-6 flex items-center gap-5 border-t border-black/5 pt-5">

                  <div className="flex items-center gap-2">

                    <FileText
                      size={15}
                      className="text-gray-400"
                    />

                    <div>
                      <p className="text-sm font-semibold">
                        {author.articles}
                      </p>

                      <p className="text-[11px] text-gray-400">
                        Articles
                      </p>
                    </div>

                  </div>


                  <div>

                    <p className="text-sm font-semibold">
                      {author.followers}
                    </p>

                    <p className="text-[11px] text-gray-400">
                      Followers
                    </p>

                  </div>

                </div>


                {/* VIEW PROFILE */}
                <Link
                  href={`/authors/${author.username}`}
                  className="mt-5 flex items-center justify-between rounded-xl border border-black/10 px-4 py-3 text-sm font-medium transition hover:bg-black hover:text-white"
                >

                  View Profile

                  <ArrowRight size={16} />

                </Link>

              </article>

            ))}

          </div>

        )}

      </section>

    </main>
  );
}