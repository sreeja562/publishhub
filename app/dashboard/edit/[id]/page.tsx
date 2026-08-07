"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
  ArrowLeft,
  Save,
  Eye,
  Image as ImageIcon,
} from "lucide-react";

const articles = {
  "1": {
    title: "The Future of Artificial Intelligence",
    category: "Technology",
    description:
      "Explore how artificial intelligence is changing the way we work, learn and build products.",
    content:
      "Artificial intelligence is one of the most important technologies shaping the modern digital world.\n\nIt enables computers and software systems to perform tasks that traditionally require human intelligence.\n\nAs AI continues to develop, responsible development and human oversight will remain important.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },

  "2": {
    title: "Understanding Generative AI",
    category: "AI",
    description:
      "A simple introduction to generative AI, large language models and their real-world applications.",
    content:
      "Generative AI refers to systems that can create new content such as text, images, audio and other forms of media.\n\nThese systems learn patterns from large datasets and use those patterns to generate new outputs.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
  },

  "3": {
    title: "Building Better Web Experiences",
    category: "Development",
    description:
      "Practical ideas for creating websites that are fast, accessible and enjoyable to use.",
    content:
      "A successful website should make it easy for visitors to find information and complete tasks.\n\nPerformance, responsive design, readable content and clear navigation all contribute to a better experience.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },

  "4": {
    title: "Modern Design Trends for 2026",
    category: "Design",
    description:
      "A look at the design principles and visual trends shaping modern digital experiences.",
    content:
      "Modern digital design focuses on clarity, accessibility and ease of use.\n\nConsistency, responsive layouts and clear visual hierarchy are essential for creating interfaces that work well across different devices.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
  },

  "5": {
    title: "Building Better Web Experiences",
    category: "Development",
    description:
      "Practical ideas for creating websites that are fast, accessible and enjoyable to use.",
    content:
      "A successful website should make it easy for visitors to find information and complete tasks.\n\nDevelopers should consider performance and accessibility from the beginning of a project.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },

  "6": {
    title: "A Beginner's Guide to Next.js",
    category: "Development",
    description:
      "Learn the fundamentals of Next.js and understand how to build modern React applications.",
    content:
      "Next.js is a framework for building modern web applications with React.\n\nIt provides routing, rendering features, image optimization and other tools for production-ready applications.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  },
};

export default function EditArticlePage() {
  const params = useParams();

  const id = String(params.id);

  const article =
    articles[id as keyof typeof articles];

  const [title, setTitle] = useState(
    article?.title || ""
  );

  const [category, setCategory] = useState(
    article?.category || "Technology"
  );

  const [description, setDescription] =
    useState(article?.description || "");

  const [content, setContent] = useState(
    article?.content || ""
  );

  const [image, setImage] = useState(
    article?.image || ""
  );

  const [saved, setSaved] = useState(false);

  if (!article) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f8f8f6]">

        <div className="text-center">

          <h1 className="text-3xl font-bold">
            Article Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            The article you are trying to edit does not exist.
          </p>

          <Link
            href="/dashboard/articles"
            className="mt-6 inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white"
          >
            Back to My Articles
          </Link>

        </div>

      </main>
    );
  }

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-[#f8f8f6] text-[#111111]">

      {/* HEADER */}

      <header className="border-b border-black/10 bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">

          <Link
            href="/"
            className="text-2xl font-bold"
          >
            Publish<span className="text-blue-600">
              Hub
            </span>
          </Link>

          <Link
            href="/dashboard/articles"
            className="text-sm text-gray-500 hover:text-black"
          >
            My Articles
          </Link>

        </div>

      </header>

      {/* PAGE */}

      <div className="mx-auto max-w-5xl px-5 py-8 md:px-8">

        {/* TOP */}

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

          <div>

            <Link
              href="/dashboard/articles"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-black"
            >
              <ArrowLeft size={16} />
              Back to My Articles
            </Link>

            <h1 className="mt-4 text-3xl font-bold">
              Edit Article
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Update your article and save your changes.
            </p>

          </div>

          <div className="flex gap-3">

            <Link
              href={`/article/${id}`}
              className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium hover:bg-gray-100"
            >
              <Eye size={17} />
              Preview
            </Link>

            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white hover:bg-blue-600"
            >
              <Save size={17} />
              {saved ? "Saved!" : "Save Changes"}
            </button>

          </div>

        </div>

        {/* FORM */}

        <div className="mt-8 space-y-6">

          {/* TITLE */}

          <section className="rounded-2xl border border-black/5 bg-white p-6">

            <label className="text-sm font-semibold">
              Article Title
            </label>

            <input
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="mt-3 w-full rounded-xl border border-black/10 px-4 py-3 text-lg outline-none focus:border-blue-500"
              placeholder="Enter article title"
            />

          </section>

          {/* CATEGORY */}

          <section className="rounded-2xl border border-black/5 bg-white p-6">

            <label className="text-sm font-semibold">
              Category
            </label>

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="mt-3 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="Technology">
                Technology
              </option>

              <option value="AI">
                AI
              </option>

              <option value="Development">
                Development
              </option>

              <option value="Design">
                Design
              </option>

              <option value="Research">
                Research
              </option>

              <option value="Education">
                Education
              </option>
            </select>

          </section>

          {/* DESCRIPTION */}

          <section className="rounded-2xl border border-black/5 bg-white p-6">

            <label className="text-sm font-semibold">
              Short Description
            </label>

            <textarea
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              rows={3}
              className="mt-3 w-full resize-none rounded-xl border border-black/10 px-4 py-3 text-sm leading-6 outline-none focus:border-blue-500"
              placeholder="Write a short description..."
            />

          </section>

          {/* IMAGE */}

          <section className="rounded-2xl border border-black/5 bg-white p-6">

            <div className="flex items-center gap-2">

              <ImageIcon size={18} />

              <label className="text-sm font-semibold">
                Cover Image URL
              </label>

            </div>

            <input
              value={image}
              onChange={(e) =>
                setImage(e.target.value)
              }
              className="mt-3 w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-blue-500"
              placeholder="https://..."
            />

            {image && (
              <img
                src={image}
                alt="Article cover"
                className="mt-5 h-64 w-full rounded-xl object-cover"
              />
            )}

          </section>

          {/* CONTENT */}

          <section className="rounded-2xl border border-black/5 bg-white p-6">

            <label className="text-sm font-semibold">
              Article Content
            </label>

            <textarea
              value={content}
              onChange={(e) =>
                setContent(e.target.value)
              }
              rows={18}
              className="mt-3 w-full resize-y rounded-xl border border-black/10 px-4 py-4 text-base leading-8 outline-none focus:border-blue-500"
              placeholder="Write your article..."
            />

            <p className="mt-3 text-xs text-gray-400">
              Separate paragraphs with a blank line.
            </p>

          </section>

          {/* SAVE */}

          <div className="flex justify-end gap-3 pb-10">

            <Link
              href="/dashboard/articles"
              className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium hover:bg-gray-100"
            >
              Cancel
            </Link>

            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-blue-600"
            >
              <Save size={17} />
              {saved ? "Changes Saved!" : "Save Changes"}
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}