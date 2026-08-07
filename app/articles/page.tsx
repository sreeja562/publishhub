"use client";

import Link from "next/link";
import {
  Search,
  ArrowRight,
  Clock3,
  Bookmark,
} from "lucide-react";
import { useState } from "react";

const articles = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence",
    description:
      "Explore how artificial intelligence is changing the way we work, learn and build products.",
    author: "Sreeja Kumbaji",
    username: "sreeja",
    category: "Technology",
    date: "Aug 5, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
    avatar: "S",
  },
  {
    id: 2,
    title: "Modern Design Trends for 2026",
    description:
      "A look at the design principles and visual trends shaping modern digital experiences.",
    author: "Priya Sharma",
    username: "priya",
    category: "Design",
    date: "Aug 4, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1000&q=80",
    avatar: "P",
  },
  {
    id: 3,
    title: "A Beginner's Guide to Next.js",
    description:
      "Learn the fundamentals of Next.js and understand how to build modern React applications.",
    author: "Rahul Verma",
    username: "rahul",
    category: "Development",
    date: "Aug 3, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    avatar: "R",
  },
  {
    id: 4,
    title: "How Technology Is Changing Education",
    description:
      "Discover how digital tools and emerging technologies are transforming education.",
    author: "Ananya Rao",
    username: "ananya",
    category: "Research",
    date: "Aug 2, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
    avatar: "A",
  },
  {
    id: 5,
    title: "Building Better Web Experiences",
    description:
      "Practical ideas for creating websites that are fast, accessible and enjoyable to use.",
    author: "Arjun Kumar",
    username: "arjun",
    category: "Development",
    date: "Aug 1, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
    avatar: "A",
  },
  {
    id: 6,
    title: "Understanding Generative AI",
    description:
      "A simple introduction to generative AI, large language models and their applications.",
    author: "Meghana Reddy",
    username: "meghana",
    category: "AI",
    date: "Jul 30, 2026",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80",
    avatar: "M",
  },
];

const categories = [
  "All",
  "Technology",
  "AI",
  "Design",
  "Development",
  "Research",
];

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "All" ||
      article.category === activeCategory;

    const searchText = search.toLowerCase();

    const matchesSearch =
      article.title.toLowerCase().includes(searchText) ||
      article.author.toLowerCase().includes(searchText) ||
      article.category.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#f8f8f6] text-[#111111]">

      
      {/* HERO */}
      <section className="border-b border-black/5 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
            Discover
          </p>

          <h1 className="mt-4 max-w-3xl font-serif text-5xl font-semibold tracking-tight md:text-7xl">
            Ideas worth reading.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
            Explore stories, knowledge and perspectives from writers
            across the PublishHub community.
          </p>


          {/* SEARCH */}
          <div className="relative mt-8 max-w-xl">

            <Search
              size={19}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search articles or authors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-black/10 bg-[#f8f8f6] py-4 pl-13 pr-5 text-sm outline-none transition focus:border-blue-500"
            />

          </div>

        </div>

      </section>


      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap gap-2">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "border border-black/10 bg-white text-gray-500 hover:bg-gray-100 hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}

        </div>


        {/* FEATURED ARTICLE */}
        {activeCategory === "All" && search === "" && (
          <section className="mt-10">

            <div className="grid overflow-hidden rounded-3xl bg-black text-white md:grid-cols-2">

              <div className="min-h-[350px] overflow-hidden">

                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

              </div>

              <div className="flex flex-col justify-center p-8 md:p-12">

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  Featured Story
                </p>

                <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight md:text-4xl">
                  {articles[0].title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-300">
                  {articles[0].description}
                </p>


                <div className="mt-7 flex items-center gap-3">

                  <Link
                    href={`/authors/${articles[0].username}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600"
                  >
                    {articles[0].avatar}
                  </Link>

                  <div>
                    <Link
                      href={`/authors/${articles[0].username}`}
                      className="text-sm font-medium hover:underline"
                    >
                      {articles[0].author}
                    </Link>

                    <p className="text-xs text-gray-400">
                      {articles[0].date} · {articles[0].readTime}
                    </p>
                  </div>

                </div>


                <Link
                  href={`/article/${articles[0].id}`}
                  className="mt-8 flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-blue-500 hover:text-white"
                >
                  Read Article
                  <ArrowRight size={16} />
                </Link>

              </div>

            </div>

          </section>
        )}


        {/* ARTICLE GRID */}
        <div className="mt-12">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                Latest
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Latest Articles
              </h2>
            </div>

            <p className="text-sm text-gray-400">
              {filteredArticles.length} articles
            </p>

          </div>


          {filteredArticles.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-black/5 bg-white p-12 text-center">

              <p className="font-medium">
                No articles found
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Try another search or category.
              </p>

            </div>
          ) : (

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {filteredArticles.map((article) => (

                <article
                  key={article.id}
                  className="group overflow-hidden rounded-2xl border border-black/5 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* IMAGE */}
                  <Link href={`/article/${article.id}`}>

                    <div className="relative h-56 overflow-hidden">

                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium">
                        {article.category}
                      </span>

                      <button
                        type="button"
                        onClick={(e) => e.preventDefault()}
                        className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-gray-600 backdrop-blur transition hover:bg-black hover:text-white"
                      >
                        <Bookmark size={16} />
                      </button>

                    </div>

                  </Link>


                  {/* CARD CONTENT */}
                  <div className="p-5">

                    <Link href={`/article/${article.id}`}>

                      <h3 className="font-serif text-xl font-semibold leading-tight transition group-hover:text-blue-600">
                        {article.title}
                      </h3>

                    </Link>

                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
                      {article.description}
                    </p>


                    {/* AUTHOR */}
                    <div className="mt-5 flex items-center justify-between">

                      <Link
                        href={`/authors/${article.username}`}
                        className="flex items-center gap-3"
                      >

                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-600">
                          {article.avatar}
                        </div>

                        <div>

                          <p className="text-sm font-medium hover:text-blue-600">
                            {article.author}
                          </p>

                          <p className="text-xs text-gray-400">
                            {article.date}
                          </p>

                        </div>

                      </Link>

                    </div>


                    {/* META */}
                    <div className="mt-5 flex items-center gap-2 border-t border-black/5 pt-4 text-xs text-gray-400">

                      <Clock3 size={14} />

                      {article.readTime}

                      <span>·</span>

                      <span>{article.category}</span>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          )}

        </div>

      </section>

    </main>
  );
}