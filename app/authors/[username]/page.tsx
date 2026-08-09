"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ExternalLink,
  Share2,
} from "lucide-react";
import { useState } from "react";

const authors = {
  sreeja: {
    name: "Sreeja Kumbaji",
    username: "sreeja",
    role: "Technology Writer",
    bio: "I write about artificial intelligence, web development, technology and the future of digital products. I enjoy turning complex technical ideas into practical and easy-to-understand stories.",
    followers: "1.2K",
    following: "184",
    articles: 24,
    avatar: "S",
    location: "India",
    joined: "Joined August 2026",
    topics: ["Technology", "AI", "Development"],
    website: "sreeja.dev",

    articlesList: [
      {
        id: 1,
        title: "The Future of Artificial Intelligence",
        description:
          "Explore how artificial intelligence is changing the way we work, learn and build products.",
        category: "Technology",
        date: "Aug 5, 2026",
        readTime: "6 min read",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: 2,
        title: "Understanding Generative AI",
        description:
          "A simple introduction to generative AI, large language models and their real-world applications.",
        category: "AI",
        date: "Jul 28, 2026",
        readTime: "8 min read",
        image:
          "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: 3,
        title: "Building Better Web Experiences",
        description:
          "Practical ideas for creating websites that are fast, accessible and enjoyable to use.",
        category: "Development",
        date: "Jul 20, 2026",
        readTime: "7 min read",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },

  priya: {
    name: "Priya Sharma",
    username: "priya",
    role: "Design Writer",
    bio: "Exploring design systems, UI/UX, creativity and modern digital experiences.",
    followers: "956",
    following: "142",
    articles: 18,
    avatar: "P",
    location: "India",
    joined: "Joined August 2026",
    topics: ["Design", "UI/UX", "Creativity"],
    website: "priyadesign.com",

    articlesList: [
      {
        id: 4,
        title: "Modern Design Trends for 2026",
        description:
          "A look at the design principles and visual trends shaping modern digital experiences.",
        category: "Design",
        date: "Aug 4, 2026",
        readTime: "5 min read",
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: 5,
        title: "Designing for Better User Experiences",
        description:
          "Simple principles that can help designers create more useful and accessible products.",
        category: "UI/UX",
        date: "Jul 25, 2026",
        readTime: "6 min read",
        image:
          "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },

  rahul: {
    name: "Rahul Verma",
    username: "rahul",
    role: "Software Developer",
    bio: "Sharing practical tutorials about JavaScript, React, Next.js and modern web development.",
    followers: "2.4K",
    following: "210",
    articles: 31,
    avatar: "R",
    location: "India",
    joined: "Joined July 2026",
    topics: ["Development", "JavaScript", "Next.js"],
    website: "rahul.dev",

    articlesList: [
      {
        id: 3,
        title: "A Beginner's Guide to Next.js",
        description:
          "Learn the fundamentals of Next.js and understand how to build modern React applications.",
        category: "Development",
        date: "Aug 3, 2026",
        readTime: "8 min read",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: 6,
        title: "Building Scalable React Applications",
        description:
          "Learn practical techniques for organizing and scaling React applications.",
        category: "Development",
        date: "Jul 18, 2026",
        readTime: "9 min read",
        image:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
};

export default function AuthorProfilePage() {
  const params = useParams();

  const [isFollowing, setIsFollowing] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const username = params.username as string;

  const author = authors[username as keyof typeof authors];

  // SHARE FUNCTION
  const handleShare = async () => {
    const shareUrl = window.location.href;

    try {
      // Mobile / supported browsers
      if (navigator.share) {
        await navigator.share({
          title: `${author.name} - PublishHub`,
          text: `Check out ${author.name}'s author profile on PublishHub.`,
          url: shareUrl,
        });

        return;
      }

      // Desktop fallback
      await navigator.clipboard.writeText(shareUrl);

      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      // User cancelled share dialog
      if (
        error instanceof DOMException &&
        error.name === "AbortError"
      ) {
        return;
      }

      try {
        await navigator.clipboard.writeText(shareUrl);

        setIsCopied(true);

        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      } catch {
        console.error("Unable to share profile.");
      }
    }
  };

  // AUTHOR NOT FOUND
  if (!author) {
    return (
      <main className="min-h-screen bg-white text-gray-900 dark:bg-[#0b0b0f] dark:text-white">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-5 text-center">
          <h1 className="text-3xl font-bold">
            Author not found
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            This author profile does not exist.
          </p>

          <Link
            href="/authors"
            className="mt-6 flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-[#7C3AED] dark:bg-white dark:text-black dark:hover:bg-[#7C3AED] dark:hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Authors
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 transition-colors dark:bg-[#0b0b0f] dark:text-white">

      {/* PROFILE HEADER */}

      <section className="border-b border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">

          {/* BACK BUTTON */}

          <Link
            href="/authors"
            className="mb-10 flex w-fit items-center gap-2 text-sm text-gray-500 transition hover:text-[#7C3AED] dark:text-gray-400 dark:hover:text-[#a78bfa]"
          >
            <ArrowLeft size={16} />
            All Authors
          </Link>

          <div className="grid gap-10 md:grid-cols-[auto_1fr]">

            {/* AVATAR */}

            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-purple-100 text-4xl font-semibold text-[#7C3AED] dark:bg-purple-500/15 dark:text-[#a78bfa] md:h-36 md:w-36 md:text-5xl">
              {author.avatar}
            </div>

            {/* AUTHOR INFORMATION */}

            <div>

              <p className="text-sm font-medium text-[#7C3AED] dark:text-[#a78bfa]">
                {author.role}
              </p>

              <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
                {author.name}
              </h1>

              <p className="mt-2 text-sm text-gray-400 dark:text-gray-500">
                @{author.username}
              </p>

              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-500 dark:text-gray-400">
                {author.bio}
              </p>

              {/* TOPICS */}

              <div className="mt-5 flex flex-wrap gap-2">
                {author.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-gray-100 px-4 py-2 text-xs font-medium text-gray-600 dark:bg-white/10 dark:text-gray-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* ACTION BUTTONS */}

              <div className="mt-7 flex flex-wrap gap-3">

                {/* FOLLOW BUTTON */}

                <button
                  type="button"
                  onClick={() =>
                    setIsFollowing((prev) => !prev)
                  }
                  className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition ${
                    isFollowing
                      ? "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                      : "bg-black text-white hover:bg-[#7C3AED] dark:bg-white dark:text-black dark:hover:bg-[#7C3AED] dark:hover:text-white"
                  }`}
                >
                  {isFollowing ? (
                    <>
                      <Check size={16} />
                      <span>Following</span>
                    </>
                  ) : (
                    "Follow"
                  )}
                </button>

                {/* SHARE BUTTON */}

                <button
                  type="button"
                  onClick={handleShare}
                  className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-100 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  {isCopied ? (
                    <>
                      <Check size={16} />
                      Link copied!
                    </>
                  ) : (
                    <>
                      <Share2 size={16} />
                      Share
                    </>
                  )}
                </button>

              </div>
            </div>
          </div>

          {/* AUTHOR DETAILS */}

          <div className="mt-10 flex flex-wrap gap-6 border-t border-black/5 pt-6 text-sm text-gray-500 dark:border-white/10 dark:text-gray-400">

            <span>
              📍 {author.location}
            </span>

            <span>
              {author.joined}
            </span>

            <a
              href={`https://${author.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transition hover:text-[#7C3AED] dark:hover:text-[#a78bfa]"
            >
              {author.website}
              <ExternalLink size={14} />
            </a>

          </div>
        </div>
      </section>

      {/* AUTHOR STATS */}

      <section className="border-b border-black/5 dark:border-white/10">
        <div className="mx-auto grid max-w-6xl grid-cols-3 px-5 md:px-8">

          {/* ARTICLES */}

          <div className="border-r border-black/5 py-8 text-center dark:border-white/10">
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {author.articles}
            </p>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Articles
            </p>
          </div>

          {/* FOLLOWERS */}

          <div className="border-r border-black/5 py-8 text-center dark:border-white/10">
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {author.followers}
            </p>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Followers
            </p>
          </div>

          {/* FOLLOWING */}

          <div className="py-8 text-center">
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {author.following}
            </p>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Following
            </p>
          </div>

        </div>
      </section>

      {/* ARTICLES */}

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">

        <div className="mb-8 flex items-end justify-between">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7C3AED] dark:text-[#a78bfa]">
              Published
            </p>

            <h2 className="mt-2 font-serif text-3xl font-semibold text-gray-900 dark:text-white">
              Articles by {author.name.split(" ")[0]}
            </h2>
          </div>

          <p className="text-sm text-gray-400 dark:text-gray-500">
            {author.articlesList.length} articles
          </p>

        </div>

        <div className="space-y-6">

          {author.articlesList.map((article) => (
            <article
              key={article.id}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-white transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.05]"
            >

              <div className="grid md:grid-cols-[260px_1fr]">

                {/* IMAGE */}

                <Link
                  href={`/article/${article.id}`}
                  className="h-56 overflow-hidden md:h-auto"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </Link>

                {/* CONTENT */}

                <div className="p-6 md:p-8">

                  <span className="inline-block rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600 dark:bg-white/10 dark:text-gray-300">
                    {article.category}
                  </span>

                  <Link href={`/article/${article.id}`}>
                    <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight text-gray-900 transition group-hover:text-[#7C3AED] dark:text-white dark:group-hover:text-[#a78bfa]">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400">
                    {article.description}
                  </p>

                  {/* META */}

                  <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>

                  {/* READ ARTICLE */}

                  <Link
                    href={`/article/${article.id}`}
                    className="mt-5 flex w-fit items-center gap-2 text-sm font-medium text-gray-900 transition hover:text-[#7C3AED] dark:text-gray-200 dark:hover:text-[#a78bfa]"
                  >
                    Read article
                    <ArrowRight size={16} />
                  </Link>

                </div>
              </div>
            </article>
          ))}

        </div>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-black/5 py-8 dark:border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 text-sm text-gray-400 dark:text-gray-500 md:px-8">

          <p>
            © 2026 PublishHub
          </p>

          <Link
            href="/authors"
            className="transition hover:text-[#7C3AED] dark:hover:text-[#a78bfa]"
          >
            Explore more authors
          </Link>

        </div>
      </footer>

    </main>
  );
}