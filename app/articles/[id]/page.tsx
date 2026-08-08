"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Star,
  User,
} from "lucide-react";
import { articles } from "@/data/articles";
import { useState } from "react";

export default function ArticlePage() {
  const params = useParams();
  const id = Number(params.id);

  const article = articles.find((item) => item.id === id);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const [reviews, setReviews] = useState<
    { rating: number; text: string }[]
  >([]);

  if (!article) {
    return (
      <main className="min-h-screen bg-white px-6 py-20 text-center text-gray-900 dark:bg-[#0b0b0f] dark:text-white">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Article not found
        </h1>

        <Link
          href="/articles"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#7C3AED] px-6 py-3 font-semibold text-white transition hover:bg-[#6D28D9]"
        >
          <ArrowLeft size={18} />
          Back to Publications
        </Link>
      </main>
    );
  }

  /* =========================
     COMMENT
  ========================= */

  const handleComment = () => {
    if (!comment.trim()) return;

    setComments((prev) => [...prev, comment.trim()]);
    setComment("");
  };

  /* =========================
     REVIEW
  ========================= */

  const handleReview = () => {
    if (!review.trim() || rating === 0) return;

    setReviews((prev) => [
      ...prev,
      {
        rating,
        text: review.trim(),
      },
    ]);

    setReview("");
    setRating(0);
  };

  return (
    <main
      className="
        min-h-screen
        bg-white
        text-gray-900
        transition-colors
        duration-300
        dark:bg-[#0b0b0f]
        dark:text-white
      "
    >
      {/* =====================================================
          BACK BUTTON
      ===================================================== */}

      <div className="mx-auto max-w-6xl px-6 pt-8">
        <Link
          href="/articles"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-gray-600
            transition
            hover:text-[#7C3AED]
            dark:text-slate-200
            dark:hover:text-purple-400
          "
        >
          <ArrowLeft size={18} />
          Back to Publications
        </Link>
      </div>

      {/* =====================================================
          ARTICLE HEADER
      ===================================================== */}

      <section className="mx-auto max-w-6xl px-6 pb-12 pt-12">
        {/* CATEGORY */}

        <p
          className="
            text-sm
            font-bold
            uppercase
            tracking-[0.25em]
            text-[#7C3AED]
            dark:text-purple-400
          "
        >
          {article.category}
        </p>

        {/* TITLE */}

        <h1
          className="
            mt-5
            max-w-5xl
            text-4xl
            font-bold
            leading-tight
            tracking-tight
            text-gray-900
            dark:text-white
            md:text-6xl
            lg:text-7xl
          "
        >
          {article.title}
        </h1>

        {/* DESCRIPTION */}

        {"description" in article && article.description && (
          <p
            className="
              mt-7
              max-w-4xl
              text-lg
              leading-8
              text-gray-600
              dark:text-slate-100
              md:text-xl
            "
          >
            {article.description}
          </p>
        )}

        {/* AUTHOR */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-6
            border-b
            border-gray-200
            pb-10
            dark:border-white/15
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-4">
            {/* Avatar */}

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-purple-100
                text-lg
                font-bold
                text-[#7C3AED]
                dark:bg-purple-500/20
                dark:text-purple-300
              "
            >
              {article.author.charAt(0).toUpperCase()}
            </div>

            {/* Author name */}

            <div>
              <p
                className="
                  font-semibold
                  text-gray-900
                  dark:text-white
                "
              >
                {article.author}
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  text-gray-500
                  dark:text-slate-300
                "
              >
                PublishHub Author
              </p>
            </div>
          </div>

          {/* View Author */}

          <Link
            href={`/authors/${article.author
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            className="
              inline-flex
              items-center
              gap-2
              self-start
              rounded-full
              border
              border-gray-200
              px-5
              py-2.5
              text-sm
              font-semibold
              text-gray-700
              transition
              hover:border-[#7C3AED]
              hover:text-[#7C3AED]
              dark:border-white/20
              dark:text-white
              dark:hover:border-purple-500
              dark:hover:text-purple-300
              sm:self-auto
            "
          >
            View Author
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* =====================================================
          FEATURE IMAGE
      ===================================================== */}

      <section className="mx-auto max-w-6xl px-6">
        <div
          className="
            relative
            aspect-[16/8]
            overflow-hidden
            rounded-3xl
            bg-gray-100
            dark:bg-[#18181f]
          "
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* =====================================================
          ARTICLE CONTENT
      ===================================================== */}

      <section className="mx-auto max-w-4xl px-6 py-16">
        <article>
          {"content" in article && article.content ? (
            <div
              className="
                whitespace-pre-line
                text-lg
                leading-8
                text-gray-700
                dark:text-slate-100
                md:text-xl
                md:leading-9
              "
            >
              {article.content}
            </div>
          ) : (
            <>
              <p
                className="
                  text-lg
                  leading-8
                  text-gray-700
                  dark:text-slate-100
                  md:text-xl
                "
              >
                This publication explores important ideas, practical
                insights, and perspectives related to{" "}
                <strong className="font-bold text-gray-900 dark:text-white">
                  {article.title}
                </strong>
                .
              </p>

              <p
                className="
                  mt-7
                  text-lg
                  leading-8
                  text-gray-700
                  dark:text-slate-100
                  md:text-xl
                "
              >
                PublishHub brings together writers, developers,
                researchers, and creators who want to share useful
                knowledge with readers around the world.
              </p>

              <p
                className="
                  mt-7
                  text-lg
                  leading-8
                  text-gray-700
                  dark:text-slate-100
                  md:text-xl
                "
              >
                Through articles like this, readers can discover new
                ideas, learn practical concepts, and explore different
                perspectives from the PublishHub community.
              </p>
            </>
          )}
        </article>
      </section>

      {/* =====================================================
          COMMENTS
      ===================================================== */}

      <section className="mx-auto max-w-4xl px-6 pb-20">
        {/* Heading */}

        <div className="mb-8 flex items-center gap-3">
          <MessageCircle
            size={28}
            className="text-gray-700 dark:text-white"
          />

          <h2
            className="
              text-3xl
              font-bold
              text-gray-900
              dark:text-white
            "
          >
            Comments
          </h2>

          <span
            className="
              text-sm
              text-gray-500
              dark:text-slate-300
            "
          >
            ({comments.length})
          </span>
        </div>

        {/* COMMENT BOX */}

        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-white
            shadow-sm
            dark:border-white/15
            dark:bg-[#17171e]
          "
        >
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts..."
            rows={7}
            className="
              w-full
              resize-none
              bg-transparent
              px-6
              py-6
              text-base
              text-gray-900
              outline-none
              placeholder:text-gray-400
              focus:outline-none
              dark:text-white
              dark:placeholder:text-slate-300
            "
          />

          <div
            className="
              flex
              justify-end
              border-t
              border-gray-200
              px-5
              py-4
              dark:border-white/15
            "
          >
            <button
              onClick={handleComment}
              disabled={!comment.trim()}
              className="
                rounded-full
                bg-[#7C3AED]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-[#6D28D9]
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >
              Post Comment
            </button>
          </div>
        </div>

        {/* COMMENT LIST */}

        {comments.length > 0 ? (
          <div className="mt-8 space-y-4">
            {comments.map((item, index) => (
              <div
                key={index}
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-6
                  dark:border-white/15
                  dark:bg-[#17171e]
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-purple-100
                      text-[#7C3AED]
                      dark:bg-purple-500/20
                      dark:text-purple-300
                    "
                  >
                    <User size={18} />
                  </div>

                  <p
                    className="
                      font-semibold
                      text-gray-900
                      dark:text-white
                    "
                  >
                    Reader
                  </p>
                </div>

                <p
                  className="
                    mt-4
                    leading-7
                    text-gray-600
                    dark:text-slate-100
                  "
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="
              mt-8
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              px-6
              py-12
              text-center
              dark:border-white/15
              dark:bg-[#17171e]
            "
          >
            <MessageCircle
              size={38}
              className="mx-auto text-gray-400 dark:text-slate-200"
            />

            <h3
              className="
                mt-4
                text-lg
                font-semibold
                text-gray-900
                dark:text-white
              "
            >
              No comments yet
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-gray-500
                dark:text-slate-300
              "
            >
              Be the first to share your thoughts.
            </p>
          </div>
        )}
      </section>

      {/* =====================================================
          REVIEWS
      ===================================================== */}

      <section className="mx-auto max-w-4xl px-6 pb-24">
        {/* Heading */}

        <div className="mb-8 flex items-center gap-3">
          <Star
            size={28}
            className="text-gray-700 dark:text-white"
          />

          <h2
            className="
              text-3xl
              font-bold
              text-gray-900
              dark:text-white
            "
          >
            Reviews
          </h2>

          <span
            className="
              text-sm
              text-gray-500
              dark:text-slate-300
            "
          >
            ({reviews.length})
          </span>
        </div>

        {/* REVIEW BOX */}

        <div
          className="
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-6
            shadow-sm
            dark:border-white/15
            dark:bg-[#17171e]
          "
        >
          <h3
            className="
              text-lg
              font-semibold
              text-gray-900
              dark:text-white
            "
          >
            Your Rating
          </h3>

          {/* STARS */}

          <div className="mt-4 flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="transition hover:scale-110"
              >
                <Star
                  size={28}
                  className={
                    star <= rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300 dark:text-slate-400"
                  }
                />
              </button>
            ))}
          </div>

          {/* REVIEW TEXT */}

          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review..."
            rows={5}
            className="
              mt-6
              w-full
              resize-none
              rounded-xl
              border
              border-gray-200
              bg-gray-50
              px-5
              py-4
              text-gray-900
              outline-none
              placeholder:text-gray-400
              focus:border-[#7C3AED]
              focus:ring-2
              focus:ring-purple-500/20
              dark:border-white/15
              dark:bg-[#101014]
              dark:text-white
              dark:placeholder:text-slate-300
            "
          />

          <div className="mt-4 flex justify-end">
            <button
              onClick={handleReview}
              disabled={!review.trim() || rating === 0}
              className="
                rounded-full
                bg-[#7C3AED]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-[#6D28D9]
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >
              Submit Review
            </button>
          </div>
        </div>

        {/* REVIEW LIST */}

        {reviews.length > 0 && (
          <div className="mt-8 space-y-4">
            {reviews.map((item, index) => (
              <div
                key={index}
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-6
                  dark:border-white/15
                  dark:bg-[#17171e]
                "
              >
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={17}
                      className={
                        star <= item.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300 dark:text-slate-400"
                      }
                    />
                  ))}
                </div>

                <p
                  className="
                    mt-4
                    leading-7
                    text-gray-600
                    dark:text-slate-100
                  "
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section
        className="
          border-t
          border-gray-200
          bg-gray-50
          dark:border-white/15
          dark:bg-[#15151b]
        "
      >
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2
            className="
              text-3xl
              font-bold
              text-gray-900
              dark:text-white
            "
          >
            Enjoyed this publication?
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-gray-600
              dark:text-slate-200
            "
          >
            Discover more stories, tutorials, and ideas from the
            PublishHub community.
          </p>

          <Link
            href="/articles"
            className="
              mt-7
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#7C3AED]
              px-7
              py-3
              font-semibold
              text-white
              transition
              hover:bg-[#6D28D9]
            "
          >
            Explore Publications
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}