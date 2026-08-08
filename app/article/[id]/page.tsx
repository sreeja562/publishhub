"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import {
  ArrowLeft,
  Heart,
  Bookmark,
  Share2,
  MessageCircle,
} from "lucide-react";

import {
  addBookmark,
  isBookmarked,
  removeBookmark,
} from "@/lib/bookmarks";

import {
  getComments,
  addComment,
  removeComment,
  type Comment,
} from "@/lib/comments";

import {
  getReviews,
  addReview,
  removeReview,
  type Review,
} from "@/lib/reviews";

import {
  getLikes,
  addLike,
  removeLike,
  isLiked,
} from "@/lib/likes";

/* =========================================================
   ARTICLES DATA
========================================================= */

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
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    avatar: "S",
    content: [
      {
        heading: "What is Artificial Intelligence?",
        paragraphs: [
          "Artificial intelligence is one of the most important technologies shaping the modern digital world. It enables computers and software systems to perform tasks that traditionally require human intelligence.",
          "These tasks include understanding language, recognizing patterns, solving problems, generating content and making decisions.",
        ],
      },
      {
        heading: "How AI is Changing Technology",
        paragraphs: [
          "Artificial intelligence is being used across many industries, including healthcare, education, finance, software development and entertainment.",
          "Modern applications can use AI to automate repetitive tasks, analyze large amounts of information and provide more personalized experiences.",
        ],
      },
      {
        heading: "The Future of AI",
        paragraphs: [
          "As artificial intelligence continues to develop, collaboration between people and intelligent systems is likely to become increasingly common.",
          "Responsible development, transparency, accessibility and human oversight will remain important as these technologies become part of everyday life.",
        ],
      },
    ],
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
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    avatar: "P",
    content: [
      {
        heading: "Designing for Modern Users",
        paragraphs: [
          "Modern digital design focuses on clarity, accessibility and ease of use. Users expect websites to feel simple while still providing a visually engaging experience.",
          "Good design combines typography, spacing, color and interaction to create a consistent experience.",
        ],
      },
      {
        heading: "Important Design Principles",
        paragraphs: [
          "Consistency, responsive layouts and clear visual hierarchy are essential for creating interfaces that work well across different devices.",
          "Designers should also consider accessibility so that more people can comfortably use digital products.",
        ],
      },
    ],
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
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    avatar: "R",
    content: [
      {
        heading: "What is Next.js?",
        paragraphs: [
          "Next.js is a framework for building modern web applications with React. It provides features that help developers create fast and scalable applications.",
          "It includes routing, rendering features, image optimization and other tools for production-ready applications.",
        ],
      },
      {
        heading: "Why Use Next.js?",
        paragraphs: [
          "Next.js makes it easier to organize larger React applications and provides features that can improve performance and search engine visibility.",
          "It is commonly used for websites, dashboards, content platforms and full-stack applications.",
        ],
      },
    ],
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
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    avatar: "A",
    content: [
      {
        heading: "Technology in Education",
        paragraphs: [
          "Digital technology has changed how students access information, communicate with teachers and collaborate with classmates.",
          "Online resources allow learners to access educational material from almost anywhere.",
        ],
      },
      {
        heading: "The Future of Learning",
        paragraphs: [
          "Emerging technologies can provide new ways to personalize learning and make educational resources more accessible.",
          "The goal should be to use technology to support teachers and learners rather than simply replacing traditional methods.",
        ],
      },
    ],
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
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    avatar: "A",
    content: [
      {
        heading: "Why User Experience Matters",
        paragraphs: [
          "A successful website should make it easy for visitors to find information and complete tasks.",
          "Performance, responsive design, readable content and clear navigation all contribute to a better experience.",
        ],
      },
      {
        heading: "Creating Better Websites",
        paragraphs: [
          "Developers should consider performance and accessibility from the beginning of a project.",
          "Simple interfaces combined with useful interactions can create websites that are both attractive and practical.",
        ],
      },
    ],
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
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    avatar: "M",
    content: [
      {
        heading: "What is Generative AI?",
        paragraphs: [
          "Generative AI refers to systems that can create new content such as text, images, audio and other forms of media.",
          "These systems learn patterns from large datasets and use those patterns to generate new outputs.",
        ],
      },
      {
        heading: "Applications of Generative AI",
        paragraphs: [
          "Generative AI is being explored for writing assistance, software development, design, education and many other areas.",
          "As the technology develops, responsible use and human review remain important.",
        ],
      },
    ],
  },
];

/* =========================================================
   ARTICLE PAGE
========================================================= */

export default function ArticlePage() {
  const params = useParams();

  const articleId = String(params.id);

  const article = articles.find(
    (item) => item.id === Number(articleId)
  );

  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(128);

  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState("");

  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(5);

  /* =========================================================
     LOAD SAVED DATA
  ========================================================= */

  useEffect(() => {
    if (!article) return;

    setBookmarked(isBookmarked(article.id));
    setLiked(isLiked(article.id));
    setLikes(getLikes(article.id));
    setComments(getComments(article.id));
    setReviews(getReviews(article.id));
  }, [article]);

  /* =========================================================
     ARTICLE NOT FOUND
  ========================================================= */

  if (!article) {
    return (
      <main className="min-h-screen bg-white text-gray-950 dark:bg-[#101014] dark:text-white">
        <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-bold">
            Article Not Found
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            No article exists with this ID.
          </p>

          <Link
            href="/articles"
            className="mt-6 rounded-full bg-black px-6 py-3 text-white transition hover:bg-blue-600 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Back to Articles
          </Link>
        </div>
      </main>
    );
  }

  /* =========================================================
     LIKE
  ========================================================= */

  const handleLike = () => {
    if (liked) {
      removeLike(article.id);

      setLikes((current) =>
        Math.max(0, current - 1)
      );

      setLiked(false);
    } else {
      addLike(article.id);

      setLikes((current) => current + 1);

      setLiked(true);
    }
  };

  /* =========================================================
     BOOKMARK
  ========================================================= */

  const handleBookmark = () => {
    if (bookmarked) {
      removeBookmark(article.id);
      setBookmarked(false);
    } else {
      addBookmark(article.id);
      setBookmarked(true);
    }
  };

  /* =========================================================
     SHARE
  ========================================================= */

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(
        window.location.href
      );

      alert("Article link copied!");
    } catch {
      alert("Unable to copy link.");
    }
  };

  /* =========================================================
     ADD COMMENT
  ========================================================= */

  const handleAddComment = () => {
    if (!commentText.trim()) return;

    addComment(
      article.id,
      commentText.trim()
    );

    setComments(
      getComments(article.id)
    );

    setCommentText("");
  };

  /* =========================================================
     REMOVE COMMENT
  ========================================================= */

  const handleRemoveComment = (
    commentId: string
  ) => {
    removeComment(commentId);

    setComments((current) =>
      current.filter(
        (comment) =>
          comment.id !== commentId
      )
    );
  };

  /* =========================================================
     ADD REVIEW
  ========================================================= */

  const handleAddReview = () => {
    if (!reviewText.trim()) return;

    addReview(
      article.id,
      reviewText.trim(),
      reviewRating
    );

    setReviews(
      getReviews(article.id)
    );

    setReviewText("");
    setReviewRating(5);
  };

  /* =========================================================
     PAGE
  ========================================================= */

  return (
    <main className="min-h-screen bg-white text-gray-950 transition-colors dark:bg-[#101014] dark:text-white">

      {/* =====================================================
          ARTICLE HEADER
      ===================================================== */}

      <section className="bg-white dark:bg-[#101014]">

        <div className="mx-auto max-w-4xl px-5 pb-10 pt-12 md:pt-16">

          {/* Back */}
          <Link
            href="/articles"
            className="flex w-fit items-center gap-2 text-sm text-gray-500 transition hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            <ArrowLeft size={16} />

            All Articles
          </Link>

          {/* Category */}
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            {article.category}
          </p>

          {/* TITLE */}

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-gray-950 dark:text-white md:text-6xl">
            {article.title}
          </h1>

          {/* DESCRIPTION */}

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200 md:text-xl">
            {article.description}
          </p>

          {/* AUTHOR */}

          <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-b border-black/10 pb-8 dark:border-white/10">

            <Link
              href={`/authors/${article.username}`}
              className="flex items-center gap-3"
            >

              {/* Avatar */}

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                {article.avatar}
              </div>

              <div>

                <p className="text-sm font-semibold text-gray-950 dark:text-white">
                  {article.author}
                </p>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {article.date} · {article.readTime}
                </p>

              </div>

            </Link>

            {/* View Author */}

            <Link
              href={`/authors/${article.username}`}
              className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium text-gray-900 transition hover:bg-gray-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
            >
              View Author
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          FEATURED IMAGE
      ===================================================== */}

      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8">

        <img
          src={article.image}
          alt={article.title}
          className="h-[300px] w-full rounded-3xl object-cover md:h-[550px]"
        />

      </div>

      {/* =====================================================
          ARTICLE CONTENT
      ===================================================== */}

      <article className="mx-auto max-w-3xl px-5 pb-16 md:px-8">

        {article.content.map(
          (section, index) => (
            <section
              key={index}
              className="mb-10"
            >

              {/* IMPORTANT:
                  DARK MODE TEXT FIX
              */}

              <h2 className="font-serif text-2xl font-semibold text-gray-950 dark:text-white md:text-3xl">
                {section.heading}
              </h2>

              {section.paragraphs.map(
                (
                  paragraph,
                  paragraphIndex
                ) => (
                  <p
                    key={paragraphIndex}
                    className="mt-5 text-lg leading-8 text-gray-700 dark:text-gray-200"
                  >
                    {paragraph}
                  </p>
                )
              )}

            </section>
          )
        )}

        {/* ===================================================
            ACTION BAR
        =================================================== */}

        <div className="flex flex-wrap items-center justify-between gap-4 border-y border-black/10 py-5 dark:border-white/10">

          <div className="flex gap-3">

            {/* LIKE */}

            <button
              type="button"
              onClick={handleLike}
              className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                liked
                  ? "border-red-200 bg-red-50 text-red-600 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400"
                  : "border-black/10 text-gray-700 hover:bg-gray-100 dark:border-white/20 dark:text-gray-200 dark:hover:bg-white/10"
              }`}
            >

              <Heart
                size={18}
                fill={
                  liked
                    ? "currentColor"
                    : "none"
                }
              />

              {likes}

            </button>

            {/* COMMENT BUTTON */}

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById(
                    "comments"
                  )
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2.5 text-sm text-gray-700 transition hover:bg-gray-100 dark:border-white/20 dark:text-gray-200 dark:hover:bg-white/10"
            >

              <MessageCircle
                size={18}
              />

              Comment

            </button>

          </div>

          <div className="flex gap-3">

            {/* BOOKMARK */}

            <button
              type="button"
              onClick={handleBookmark}
              className={`rounded-full border p-2.5 transition ${
                bookmarked
                  ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                  : "border-black/10 text-gray-700 hover:bg-gray-100 dark:border-white/20 dark:text-gray-200 dark:hover:bg-white/10"
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
              onClick={handleShare}
              className="rounded-full border border-black/10 p-2.5 text-gray-700 transition hover:bg-gray-100 dark:border-white/20 dark:text-gray-200 dark:hover:bg-white/10"
            >

              <Share2 size={18} />

            </button>

          </div>

        </div>

        {/* ===================================================
            AUTHOR CARD
        =================================================== */}

        <div className="mt-10 rounded-3xl border border-black/5 bg-white p-6 md:p-8 dark:border-white/10 dark:bg-[#18181b]">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Written by
          </p>

          <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center">

            {/* Avatar */}

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg font-semibold text-blue-600">
              {article.avatar}
            </div>

            <div className="flex-1">

              <h3 className="text-xl font-semibold text-gray-950 dark:text-white">
                {article.author}
              </h3>

              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Writer and contributor at PublishHub.
              </p>

            </div>

            {/* Profile */}

            <Link
              href={`/authors/${article.username}`}
              className="rounded-full bg-black px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-blue-600 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              View Profile
            </Link>

          </div>

        </div>

        {/* ===================================================
            COMMENTS
        =================================================== */}

        <section
          id="comments"
          className="mt-14"
        >

          <div className="flex items-center gap-3">

            <MessageCircle
              size={21}
              className="text-gray-900 dark:text-white"
            />

            <h2 className="text-2xl font-semibold text-gray-950 dark:text-white">
              Comments
            </h2>

            <span className="text-sm text-gray-500 dark:text-gray-400">
              ({comments.length})
            </span>

          </div>

          {/* COMMENT INPUT */}

          <div className="mt-5 rounded-2xl border border-black/10 p-5 dark:border-white/10 dark:bg-[#141418]">

            <textarea
              rows={4}
              value={commentText}
              onChange={(e) =>
                setCommentText(
                  e.target.value
                )
              }
              placeholder="Share your thoughts..."
              className="w-full resize-none bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white dark:placeholder:text-gray-500"
            />

            <div className="mt-3 flex justify-end">

              <button
                type="button"
                onClick={
                  handleAddComment
                }
                disabled={
                  !commentText.trim()
                }
                className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                Post Comment
              </button>

            </div>

          </div>

          {/* COMMENTS LIST */}

          <div className="mt-5 space-y-4">

            {comments.length === 0 ? (

              <div className="rounded-2xl border border-black/5 bg-gray-50 p-6 text-center dark:border-white/10 dark:bg-[#18181b]">

                <MessageCircle
                  size={30}
                  className="mx-auto mb-3 text-gray-400 dark:text-gray-500"
                />

                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  No comments yet
                </p>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Be the first to share your thoughts.
                </p>

              </div>

            ) : (

              comments.map(
                (comment) => (

                  <div
                    key={comment.id}
                    className="rounded-2xl border border-black/5 bg-white p-5 dark:border-white/10 dark:bg-[#18181b]"
                  >

                    <div className="flex items-start justify-between gap-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-600">
                          {comment.author
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        <div>

                          <p className="text-sm font-semibold text-gray-950 dark:text-white">
                            {comment.author}
                          </p>

                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {comment.date}
                          </p>

                        </div>

                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          handleRemoveComment(
                            comment.id
                          )
                        }
                        className="text-xs text-gray-500 transition hover:text-red-600 dark:text-gray-400"
                      >
                        Delete
                      </button>

                    </div>

                    <p className="mt-4 text-sm leading-7 text-gray-700 dark:text-gray-200">
                      {comment.text}
                    </p>

                  </div>

                )
              )

            )}

          </div>

        </section>

        {/* ===================================================
            REVIEWS
        =================================================== */}

        <section className="mt-14 border-t border-black/10 pt-10 dark:border-white/10">

          <div className="flex items-center gap-3">

            <h2 className="text-2xl font-semibold text-gray-950 dark:text-white">
              Reviews
            </h2>

            <span className="text-sm text-gray-500 dark:text-gray-400">
              ({reviews.length})
            </span>

          </div>

          {/* REVIEW FORM */}

          <div className="mt-5 rounded-2xl border border-black/10 p-5 dark:border-white/10 dark:bg-[#141418]">

            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Your Rating
            </p>

            {/* STARS */}

            <div className="mt-3 flex gap-1">

              {[1, 2, 3, 4, 5].map(
                (star) => (

                  <button
                    key={star}
                    type="button"
                    onClick={() =>
                      setReviewRating(
                        star
                      )
                    }
                    className={`text-2xl transition ${
                      star <= reviewRating
                        ? "text-yellow-500"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                    aria-label={`Rate ${star} stars`}
                  >
                    ★
                  </button>

                )
              )}

            </div>

            {/* REVIEW TEXT */}

            <textarea
              rows={4}
              value={reviewText}
              onChange={(e) =>
                setReviewText(
                  e.target.value
                )
              }
              placeholder="Write your review..."
              className="mt-4 w-full resize-none rounded-xl border border-black/10 bg-white p-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 dark:border-white/10 dark:bg-[#18181b] dark:text-white dark:placeholder:text-gray-500"
            />

            <div className="mt-3 flex justify-end">

              <button
                type="button"
                onClick={
                  handleAddReview
                }
                disabled={
                  !reviewText.trim()
                }
                className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                Submit Review
              </button>

            </div>

          </div>

          {/* REVIEW LIST */}

          <div className="mt-5 space-y-4">

            {reviews.length === 0 ? (

              <div className="rounded-2xl border border-black/5 bg-gray-50 p-8 text-center dark:border-white/10 dark:bg-[#18181b]">

                <p className="font-medium text-gray-900 dark:text-white">
                  No reviews yet
                </p>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Be the first to review this article.
                </p>

              </div>

            ) : (

              reviews.map(
                (review) => (

                  <div
                    key={review.id}
                    className="rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-[#18181b]"
                  >

                    <div className="flex items-start justify-between gap-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                          {review.author.charAt(
                            0
                          )}
                        </div>

                        <div>

                          <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            {review.author}
                          </p>

                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {review.date}
                          </p>

                        </div>

                      </div>

                      {review.author ===
                        "You" && (

                        <button
                          type="button"
                          onClick={() => {

                            removeReview(
                              review.id
                            );

                            setReviews(
                              (current) =>
                                current.filter(
                                  (item) =>
                                    item.id !==
                                    review.id
                                )
                            );

                          }}
                          className="text-xs font-medium text-gray-500 transition hover:text-red-600 dark:text-gray-400"
                        >
                          Delete
                        </button>

                      )}

                    </div>

                    {/* REVIEW STARS */}

                    <div className="mt-3 flex gap-1 text-lg text-yellow-500">

                      {[1, 2, 3, 4, 5].map(
                        (star) => (

                          <span
                            key={star}
                          >
                            {star <=
                            review.rating
                              ? "★"
                              : "☆"}
                          </span>

                        )
                      )}

                    </div>

                    {/* REVIEW TEXT */}

                    <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-gray-200">
                      {review.text}
                    </p>

                  </div>

                )
              )

            )}

          </div>

        </section>

      </article>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-black/10 bg-white dark:border-white/10 dark:bg-[#0b0b0d]">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-8 text-sm md:flex-row md:px-8">

          <p className="text-gray-500 dark:text-gray-400">
            © 2026 PublishHub. All rights reserved.
          </p>

          <div className="flex gap-5">

            <Link
              href="/about"
              className="text-gray-500 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
            >
              About
            </Link>

            <Link
              href="/articles"
              className="text-gray-500 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
            >
              Articles
            </Link>

            <Link
              href="/authors"
              className="text-gray-500 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
            >
              Authors
            </Link>

          </div>

        </div>

      </footer>

    </main>
  );
}