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

export default function ArticlePage() {
  const params = useParams();

  const id = Number(params.id);

  const article = articles.find(
    (item) => item.id === id
  );

const [liked, setLiked] = useState(false);
const [bookmarked, setBookmarked] = useState(false);
const [likes, setLikes] = useState(128);

const [comments, setComments] = useState<Comment[]>([]);
const [commentText, setCommentText] = useState("");

const [reviews, setReviews] = useState<Review[]>([]);
const [reviewText, setReviewText] = useState("");
const [reviewRating, setReviewRating] = useState(5);

useEffect(() => {
  if (article) {
    setBookmarked(isBookmarked(article.id));
    setLiked(isLiked(article.id));
    setLikes(getLikes(article.id));
    setComments(getComments(article.id));
    setReviews(getReviews(article.id));
  }
}, [article]);

  if (!article) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Article Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            No article exists with this ID.
          </p>

          <Link
            href="/articles"
            className="mt-5 inline-block rounded-full bg-black px-6 py-3 text-white"
          >
            Back to Articles
          </Link>
        </div>
      </main>
    );
  }

  const handleLike = () => {
  if (liked) {
    const updatedLikes = removeLike(article.id);

    setLiked(false);
    setLikes(updatedLikes);
  } else {
    const updatedLikes = addLike(article.id);

    setLiked(true);
    setLikes(updatedLikes);
  }
};
  const handleAddComment = () => {
  const text = commentText.trim();

  if (!text || !article) {
    return;
  }

  const newComment = addComment(
    article.id,
    "You",
    text
  );

  setComments((current) => [
    ...current,
    newComment,
  ]);

  setCommentText("");
};

const handleRemoveComment = (commentId: string) => {
  removeComment(commentId);

  setComments((current) =>
    current.filter(
      (comment) => comment.id !== commentId
    )
  );
};
 const handleAddReview = () => {
  const text = reviewText.trim();

  if (!text || !article) {
    return;
  }

  const newReview = addReview(
  article.id,
  "You",
  reviewRating,
  text
);

  setReviews((current) => [
    ...current,
    newReview,
  ]);

  setReviewText("");
  setReviewRating(5);
};

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

  return (
    <main className="min-h-screen bg-[#f8f8f6] text-[#111111]">

      {/* NAVBAR */}

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
              className="text-gray-500 hover:text-black"
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
              className="text-gray-500 hover:text-black"
            >
              Authors
            </Link>

            <Link
              href="/about"
              className="text-gray-500 hover:text-black"
            >
              About
            </Link>

          </nav>

          <Link
            href="/login"
            className="rounded-full border border-black/10 px-5 py-2 text-sm"
          >
            Login
          </Link>

        </div>

      </header>

      {/* ARTICLE HEADER */}

      <section className="bg-white">

        <div className="mx-auto max-w-4xl px-5 pb-10 pt-12 md:pt-16">

          <Link
            href="/articles"
            className="mb-8 flex w-fit items-center gap-2 text-sm text-gray-500 hover:text-black"
          >
            <ArrowLeft size={17} />
            Back to Articles
          </Link>

          <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600">
            {article.category}
          </span>

          <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight md:text-6xl">
            {article.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-500 md:text-xl">
            {article.description}
          </p>

          {/* AUTHOR */}

          <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-b border-black/10 pb-8">

            <Link
              href={`/authors/${article.username}`}
              className="flex items-center gap-3"
            >

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                {article.avatar}
              </div>

              <div>

                <p className="text-sm font-semibold">
                  {article.author}
                </p>

                <p className="text-xs text-gray-400">
                  {article.date} · {article.readTime}
                </p>

              </div>

            </Link>

            <Link
              href={`/authors/${article.username}`}
              className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium hover:bg-gray-100"
            >
              View Author
            </Link>

          </div>

        </div>

      </section>

      {/* FEATURED IMAGE */}

      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8">

        <img
          src={article.image}
          alt={article.title}
          className="h-[300px] w-full rounded-3xl object-cover md:h-[550px]"
        />

      </div>

      {/* ARTICLE CONTENT */}

      <article className="mx-auto max-w-3xl px-5 pb-12 md:px-8">

        {article.content.map((section, index) => (

          <section
            key={index}
            className="mb-10"
          >

            <h2 className="font-serif text-2xl font-semibold md:text-3xl">
              {section.heading}
            </h2>

            {section.paragraphs.map(
              (paragraph, paragraphIndex) => (

                <p
                  key={paragraphIndex}
                  className="mt-5 text-lg leading-8 text-gray-700"
                >
                  {paragraph}
                </p>

              )
            )}

          </section>

        ))}

        {/* ACTION BAR */}

        <div className="flex flex-wrap items-center justify-between gap-4 border-y border-black/10 py-5">

          <div className="flex gap-3">

            <button
              onClick={handleLike}
              className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium ${
                liked
                  ? "border-red-200 bg-red-50 text-red-600"
                  : "border-black/10 text-gray-600 hover:bg-gray-100"
              }`}
            >

              <Heart
                size={18}
                fill={
                  liked ? "currentColor" : "none"
                }
              />

              {likes}

            </button>

            <button className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-100">

              <MessageCircle size={18} />

              Comment

            </button>

          </div>

          <div className="flex gap-3">

            <button
  onClick={() => {
    if (bookmarked) {
      removeBookmark(article.id);
      setBookmarked(false);
    } else {
      addBookmark({
        id: article.id,
        title: article.title,
        description: article.description,
        author: article.author,
        username: article.username,
        category: article.category,
        date: article.date,
        readTime: article.readTime,
        image: article.image,
        avatar: article.avatar,
      });

      setBookmarked(true);
    }
  }}
  aria-label={bookmarked ? "Remove bookmark" : "Bookmark article"}
  className={`rounded-full border p-2.5 ${
    bookmarked
      ? "border-black bg-black text-white"
      : "border-black/10 text-gray-600 hover:bg-gray-100"
  }`}
>
  <Bookmark
    size={18}
    fill={bookmarked ? "currentColor" : "none"}
  />
</button>

            <button
              onClick={handleShare}
              className="rounded-full border border-black/10 p-2.5 text-gray-600 hover:bg-gray-100"
            >

              <Share2 size={18} />

            </button>

          </div>

        </div>

        {/* AUTHOR CARD */}

        <div className="mt-10 rounded-3xl border border-black/5 bg-white p-6 md:p-8">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            Written by
          </p>

          <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center">

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg font-semibold text-blue-600">
              {article.avatar}
            </div>

            <div className="flex-1">

              <h3 className="text-xl font-semibold">
                {article.author}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Writer and contributor at PublishHub.
              </p>

            </div>

            <Link
              href={`/authors/${article.username}`}
              className="rounded-full bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-600"
            >
              View Profile
            </Link>

          </div>

        </div>

        {/* COMMENTS */}

        {/* COMMENTS */}

<section className="mt-14">

  <div className="flex items-center gap-2">

    <MessageCircle size={21} />

    <h2 className="text-2xl font-semibold">
      Comments
    </h2>

    <span className="text-sm text-gray-400">
      ({comments.length})
    </span>

  </div>


  {/* COMMENT INPUT */}

  <div className="mt-6 rounded-2xl border border-black/10 bg-white p-5">

    <textarea
      rows={4}
      value={commentText}
      onChange={(e) =>
        setCommentText(e.target.value)
      }
      placeholder="Share your thoughts..."
      className="w-full resize-none bg-transparent text-sm outline-none"
    />

    <div className="mt-3 flex justify-end">

      <button
        type="button"
        onClick={handleAddComment}
        disabled={!commentText.trim()}
        className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Post Comment
      </button>

    </div>

  </div>


  {/* COMMENTS LIST */}

  <div className="mt-6 space-y-4">

    {comments.length === 0 ? (

      <div className="rounded-2xl border border-black/5 bg-gray-50 p-6 text-center">

        <MessageCircle
          size={30}
          className="mx-auto mb-3 text-gray-300"
        />

        <p className="text-sm font-medium text-gray-700">
          No comments yet
        </p>

        <p className="mt-1 text-xs text-gray-400">
          Be the first to share your thoughts.
        </p>

      </div>

    ) : (

      comments.map((comment) => (

        <div
          key={comment.id}
          className="rounded-2xl border border-black/5 bg-white p-5"
        >

          <div className="flex items-start justify-between gap-4">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-600">
                {comment.author.charAt(0).toUpperCase()}
              </div>

              <div>

                <p className="text-sm font-semibold">
                  {comment.author}
                </p>

                <p className="text-xs text-gray-400">
                  {comment.date}
                </p>

              </div>

            </div>


            <button
              type="button"
              onClick={() =>
                handleRemoveComment(comment.id)
              }
              className="text-xs text-gray-400 transition hover:text-red-600"
            >
              Delete
            </button>

          </div>


          <p className="mt-4 text-sm leading-7 text-gray-600">
            {comment.text}
          </p>

        </div>

      ))

    )}

  </div>

</section>
         {/* REVIEWS */}

<section className="mt-14">

  <div className="flex items-center gap-2">

    <h2 className="text-2xl font-semibold">
      Reviews
    </h2>

    <span className="text-sm text-gray-400">
      ({reviews.length})
    </span>

  </div>

  {/* REVIEW FORM */}

  <div className="mt-6 rounded-2xl border border-black/10 bg-white p-5">

    <p className="text-sm font-medium text-gray-700">
      Your Rating
    </p>

    <div className="mt-3 flex gap-1">

      {[1, 2, 3, 4, 5].map((star) => (

        <button
          key={star}
          type="button"
          onClick={() => setReviewRating(star)}
          className={`text-2xl transition ${
            star <= reviewRating
              ? "text-yellow-500"
              : "text-gray-300"
          }`}
          aria-label={`Rate ${star} stars`}
        >
          ★
        </button>

      ))}

    </div>

    <textarea
      rows={4}
      value={reviewText}
      onChange={(e) => setReviewText(e.target.value)}
      placeholder="Write your review..."
      className="mt-4 w-full resize-none rounded-xl border border-black/10 p-4 text-sm outline-none transition focus:border-blue-500"
    />

    <div className="mt-3 flex justify-end">

      <button
        type="button"
        onClick={handleAddReview}
        disabled={!reviewText.trim()}
        className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Submit Review
      </button>

    </div>

  </div>

  {/* REVIEW LIST */}

  <div className="mt-8 space-y-5">

    {reviews.length === 0 ? (

      <div className="rounded-2xl border border-black/5 bg-gray-50 p-8 text-center">

        <p className="font-medium text-gray-700">
          No reviews yet
        </p>

        <p className="mt-1 text-sm text-gray-400">
          Be the first to review this article.
        </p>

      </div>

    ) : (

      reviews.map((review) => (

        <div
          key={review.id}
          className="rounded-2xl border border-black/10 bg-white p-5"
        >

          <div className="flex items-start justify-between gap-4">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                {review.author.charAt(0)}
              </div>

              <div>

                <p className="text-sm font-semibold text-gray-900">
                  {review.author}
                </p>

                <p className="text-xs text-gray-400">
                  {review.date}
                </p>

              </div>

            </div>

            {review.author === "You" && (

              <button
                type="button"
                onClick={() => {
                  removeReview(review.id);

                  setReviews((current) =>
                    current.filter(
                      (item) => item.id !== review.id
                    )
                  );
                }}
                className="text-xs font-medium text-gray-400 transition hover:text-red-600"
              >
                Delete
              </button>

            )}

          </div>

          <div className="mt-3 flex gap-1 text-lg text-yellow-500">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star}>
                {star <= review.rating ? "★" : "☆"}
              </span>
            ))}
          </div>

          <p className="mt-3 text-sm leading-7 text-gray-700">
            {review.text}
          </p>

        </div>

      ))

    )}

  </div>

</section>

      </article>

      {/* FOOTER */}

      <footer className="border-t border-black/10 bg-white">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-8 text-sm text-gray-500 md:flex-row md:px-8">

          <p>
            © 2026 PublishHub. All rights reserved.
          </p>

          <div className="flex gap-5">

            <Link href="/about">
              About
            </Link>

            <Link href="/articles">
              Articles
            </Link>

            <Link href="/authors">
              Authors
            </Link>

          </div>

        </div>

      </footer>

    </main>
  );
}