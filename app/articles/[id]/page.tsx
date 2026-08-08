"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Heart,
  MessageCircle,
  Share2,
  Clock3,
} from "lucide-react";
import { useState } from "react";
import { useParams } from "next/navigation";

const articles = {
  "1": {
    title: "The Future of Artificial Intelligence",
    subtitle:
      "How artificial intelligence is changing the way we work, learn and build products.",
    category: "Technology",
    date: "August 5, 2026",
    readTime: "6 min read",

    author: {
      name: "Sreeja Kumbaji",
      username: "sreeja",
      role: "Technology Writer",
      avatar: "S",
      followers: "1.2K",
    },

    coverImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=85",

    tags: ["AI", "Technology", "Innovation"],

    content: {
      introduction:
        "Artificial intelligence has moved from being a futuristic concept to becoming a practical part of everyday life. From recommendation systems and virtual assistants to software development and research, AI is changing how people interact with technology.",

      sections: [
        {
          heading: "The rise of intelligent systems",
          paragraphs: [
            "Modern AI systems can process enormous amounts of information, recognize patterns and generate useful outputs in seconds. This has opened opportunities across education, healthcare, business, design and software development.",
            "The most important change is not simply that machines can perform tasks. It is that people can now work with intelligent tools to explore ideas, automate repetitive work and make better-informed decisions.",
          ],
        },

        {
          heading: "AI and the future of work",
          paragraphs: [
            "AI is likely to change many jobs rather than simply replace them. Professionals who learn how to use intelligent tools effectively can combine human creativity, judgment and communication with machine-assisted productivity.",
            "This means future workplaces will increasingly value both technical understanding and human skills such as critical thinking, collaboration and problem solving.",
          ],
        },

        {
          heading: "Building responsible technology",
          paragraphs: [
            "As AI becomes more powerful, responsible development becomes increasingly important. Developers and organizations need to think about privacy, security, fairness, transparency and the quality of the information used by AI systems.",
            "Technology should ultimately be designed around people. Building useful AI means creating systems that solve real problems while respecting the people who use them.",
          ],
        },

        {
          heading: "What comes next?",
          paragraphs: [
            "The next stage of AI will likely bring even more integration into everyday software. Instead of interacting with AI as a separate tool, users may experience intelligent capabilities directly inside the applications they already use.",
            "The opportunity is enormous, but the most valuable systems will be those that combine powerful technology with thoughtful human-centered design.",
          ],
        },
      ],
    },
  },

  "2": {
    title: "Modern Design Trends for 2026",
    subtitle:
      "A look at the principles shaping modern digital experiences.",
    category: "Design",
    date: "August 4, 2026",
    readTime: "5 min read",

    author: {
      name: "Priya Sharma",
      username: "priya",
      role: "Design Writer",
      avatar: "P",
      followers: "956",
    },

    coverImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=85",

    tags: ["Design", "UI/UX", "Creativity"],

    content: {
      introduction:
        "Digital design continues to evolve as users expect experiences that are simpler, faster and more meaningful. In 2026, thoughtful design is less about decoration and more about clarity.",

      sections: [
        {
          heading: "Designing with clarity",
          paragraphs: [
            "Good interfaces help people understand what they can do without making them think too much. Clear hierarchy, consistent spacing and meaningful typography remain essential.",
            "The best designs often feel simple because complexity has been carefully organized behind the scenes.",
          ],
        },

        {
          heading: "Motion with purpose",
          paragraphs: [
            "Animation can make an interface feel more responsive and understandable when it is used intentionally. Small transitions can guide attention and communicate changes in state.",
            "However, motion should support the experience rather than distract from the content.",
          ],
        },
      ],
    },
  },

  "3": {
    title: "A Beginner's Guide to Next.js",
    subtitle:
      "Understand the fundamentals of Next.js and modern React applications.",
    category: "Development",
    date: "August 3, 2026",
    readTime: "8 min read",

    author: {
      name: "Rahul Verma",
      username: "rahul",
      role: "Software Developer",
      avatar: "R",
      followers: "2.4K",
    },

    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=85",

    tags: ["Next.js", "React", "JavaScript"],

    content: {
      introduction:
        "Next.js provides a powerful framework for building modern web applications with React. It adds routing, rendering strategies, optimization and many production-ready features.",

      sections: [
        {
          heading: "Why use Next.js?",
          paragraphs: [
            "React provides the foundation for building user interfaces, while Next.js provides a broader application framework around it.",
            "This makes it easier to organize pages, handle routing and build applications that are optimized for production.",
          ],
        },

        {
          heading: "Understanding the App Router",
          paragraphs: [
            "The App Router organizes application routes using folders and files. A folder can represent a URL segment, while page.tsx defines the page displayed at that route.",
            "This approach makes larger applications easier to structure and maintain.",
          ],
        },
      ],
    },
  },
};
export default function ArticlePage() {
  const params = useParams<{ id: string }>();

  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const article =
    articles[params.id as keyof typeof articles];

  if (!article) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f8f8f6] px-5">

        <div className="text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
            404
          </p>

          <h1 className="mt-3 text-3xl font-semibold">
            Article not found
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            The article you're looking for doesn't exist.
          </p>

          <Link
            href="/articles"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white"
          >
            <ArrowLeft size={16} />
            Back to Articles
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-[#111111]">

      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">

          <Link
            href="/"
            className="text-2xl font-bold"
          >
            Publish<span className="text-blue-600">Hub</span>
          </Link>


          <nav className="hidden items-center gap-8 text-sm md:flex">

            <Link
              href="/"
              className="text-gray-500 transition hover:text-black"
            >
              Home
            </Link>

            <Link
              href="/articles"
              className="font-medium text-black"
            >
              Articles
            </Link>

            <Link
              href="/authors"
              className="text-gray-500 transition hover:text-black"
            >
              Authors
            </Link>

            <Link
              href="/about"
              className="text-gray-500 transition hover:text-black"
            >
              About
            </Link>

          </nav>


          <Link
            href="/login"
            className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium transition hover:bg-gray-100"
          >
            Login
          </Link>

        </div>

      </header>


      {/* ================= ARTICLE HEADER ================= */}

      <section className="border-b border-black/5">

        <div className="mx-auto max-w-4xl px-5 pb-10 pt-14 md:px-8 md:pb-14 md:pt-20">

          <Link
            href="/articles"
            className="flex w-fit items-center gap-2 text-sm text-gray-400 transition hover:text-black"
          >
            <ArrowLeft size={16} />
            All Articles
          </Link>


          <div className="mt-10">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              {article.category}
            </p>


            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              {article.title}
            </h1>


            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-500">
              {article.subtitle}
            </p>


            {/* AUTHOR + ACTIONS */}

            <div className="mt-8 flex flex-wrap items-center justify-between gap-5">


              {/* AUTHOR */}

              <div className="flex items-center gap-3">

                <Link
                  href={`/authors/${article.author.username}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600"
                >
                  {article.author.avatar}
                </Link>


                <div>

                  <Link
                    href={`/authors/${article.author.username}`}
                    className="text-sm font-semibold transition hover:text-blue-600"
                  >
                    {article.author.name}
                  </Link>

                  <p className="mt-1 text-xs text-gray-400">
                    {article.date} · {article.readTime}
                  </p>

                </div>

              </div>


              {/* ACTIONS */}

              <div className="flex items-center gap-2">

                {/* LIKE */}

                <button
                  type="button"
                  onClick={() => setLiked(!liked)}
                  className={`rounded-full border p-3 transition ${
                    liked
                      ? "border-red-200 bg-red-50 text-red-500"
                      : "border-black/10 text-gray-500 hover:bg-gray-100"
                  }`}
                >

                  <Heart
                    size={18}
                    fill={liked ? "currentColor" : "none"}
                  />

                </button>


                {/* BOOKMARK */}

                <button
                  type="button"
                  onClick={() => setBookmarked(!bookmarked)}
                  className={`rounded-full border p-3 transition ${
                    bookmarked
                      ? "border-blue-200 bg-blue-50 text-blue-600"
                      : "border-black/10 text-gray-500 hover:bg-gray-100"
                  }`}
                >

                  <Bookmark
                    size={18}
                    fill={
                      bookmarked
                        ? "currentColor"
                        : "none"
                    }
                  />

                </button>


                {/* SHARE */}

                <button
                  type="button"
                  className="rounded-full border border-black/10 p-3 text-gray-500 transition hover:bg-gray-100"
                >
                  <Share2 size={18} />
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= COVER IMAGE ================= */}

      <div className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-12">

        <div className="overflow-hidden rounded-3xl">

          <img
            src={article.coverImage}
            alt={article.title}
            className="h-[280px] w-full object-cover md:h-[520px]"
          />

        </div>

      </div>


      {/* ================= ARTICLE CONTENT ================= */}

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-24">

        <div className="grid gap-12 lg:grid-cols-[1fr_220px]">


          {/* MAIN ARTICLE */}

          <article className="mx-auto w-full max-w-3xl">


            {/* INTRODUCTION */}

            <p className="text-xl leading-9 text-gray-700 md:text-2xl md:leading-10">
              {article.content.introduction}
            </p>


            {/* SECTIONS */}

            <div className="mt-10 space-y-10">

              {article.content.sections.map(
                (section, index) => (

                  <section key={index}>

                    <h2 className="font-serif text-2xl font-semibold md:text-3xl">
                      {section.heading}
                    </h2>


                    <div className="mt-5 space-y-5">

                      {section.paragraphs.map(
                        (paragraph, paragraphIndex) => (

                          <p
                            key={paragraphIndex}
                            className="text-base leading-8 text-gray-600 md:text-lg"
                          >
                            {paragraph}
                          </p>

                        )
                      )}

                    </div>

                  </section>

                )
              )}

            </div>


            {/* ================= TAGS ================= */}

            <div className="mt-12 flex flex-wrap gap-2 border-t border-black/5 pt-8">

              {article.tags.map((tag) => (

                <span
                  key={tag}
                  className="rounded-full bg-[#f5f5f2] px-4 py-2 text-xs text-gray-500"
                >
                  {tag}
                </span>

              ))}

            </div>


            {/* ================= AUTHOR BOX ================= */}

            <div className="mt-12 rounded-2xl border border-black/5 bg-[#f8f8f6] p-6 md:p-8">

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">


                <div className="flex items-center gap-4">

                  <Link
                    href={`/authors/${article.author.username}`}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl font-semibold text-blue-600"
                  >
                    {article.author.avatar}
                  </Link>


                  <div>

                    <p className="text-xs text-gray-400">
                      Written by
                    </p>

                    <Link
                      href={`/authors/${article.author.username}`}
                      className="mt-1 block font-semibold transition hover:text-blue-600"
                    >
                      {article.author.name}
                    </Link>

                    <p className="mt-1 text-xs text-gray-400">
                      {article.author.role} ·{" "}
                      {article.author.followers} followers
                    </p>

                  </div>

                </div>


                <Link
                  href={`/authors/${article.author.username}`}
                  className="flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                >
                  View Profile
                  <ArrowRight size={15} />
                </Link>

              </div>

            </div>


            {/* ================= COMMENTS ================= */}

            <div className="mt-12 border-t border-black/5 pt-10">

              <div className="flex items-center gap-3">

                <MessageCircle size={20} />

                <h2 className="text-xl font-semibold">
                  Comments
                </h2>

              </div>


              <div className="mt-5 rounded-2xl border border-black/5 bg-[#f8f8f6] p-6">

                <p className="text-sm text-gray-500">
                  Sign in to join the conversation and
                  share your thoughts.
                </p>


                <Link
                  href="/login"
                  className="mt-4 inline-flex rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                >
                  Sign in
                </Link>

              </div>

            </div>

          </article>


          {/* ================= SIDEBAR ================= */}

          <aside className="hidden lg:block">

            <div className="sticky top-28 space-y-6">


              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Article
                </p>


                <div className="mt-4 space-y-3 text-sm text-gray-500">

                  <div className="flex items-center gap-2">
                    <Clock3 size={15} />
                    {article.readTime}
                  </div>


                  <div className="flex items-center gap-2">
                    <MessageCircle size={15} />
                    Comments
                  </div>

                </div>

              </div>


              {/* SHARE */}

              <div className="border-t border-black/5 pt-6">

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Share
                </p>


                <div className="mt-4 flex gap-2">


                  {/* X */}

                  <button
                    type="button"
                    className="rounded-full border border-black/10 px-4 py-2 text-xs font-medium text-gray-500 transition hover:bg-gray-100"
                  >
                    X
                  </button>


                  {/* LINKEDIN */}

                  <button
                    type="button"
                    className="rounded-full border border-black/10 px-4 py-2 text-xs font-medium text-gray-500 transition hover:bg-gray-100"
                  >
                    LinkedIn
                  </button>


                  {/* SHARE */}

                  <button
                    type="button"
                    className="rounded-full border border-black/10 p-2.5 text-gray-500 transition hover:bg-gray-100"
                  >
                    <Share2 size={16} />
                  </button>

                </div>

              </div>

            </div>

          </aside>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-black/5 bg-[#f8f8f6]">

        <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-gray-400 md:px-8">

          © 2026 PublishHub

        </div>

      </footer>

    </main>
  );
}