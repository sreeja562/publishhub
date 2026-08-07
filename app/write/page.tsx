"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Image as ImageIcon,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Quote,
  Link as LinkIcon,
  Save,
  Eye,
  Send,
} from "lucide-react";

import { useState } from "react";

export default function WriteArticlePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Technology");

  return (
    <main className="min-h-screen bg-[#f5f5f2] text-[#111111]">

      {/* TOP NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">

          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-black"
          >
            <ArrowLeft size={18} />
            Dashboard
          </Link>

          <div className="text-xl font-bold">
            Publish<span className="text-blue-600">Hub</span>
          </div>

          <div className="flex items-center gap-2">

            <button
              type="button"
              className="hidden items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm transition hover:bg-gray-100 sm:flex"
            >
              <Eye size={16} />
              Preview
            </button>

            <button
              type="button"
              className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              <Save size={16} />
              Save Draft
            </button>

          </div>

        </div>
      </header>


      {/* MAIN */}
      <div className="mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-14">

        {/* HEADER */}
        <div className="mb-10">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
            Create
          </p>

          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Write an article
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Share your ideas, knowledge and stories with the community.
          </p>

        </div>


        {/* ARTICLE FORM */}
        <div className="rounded-3xl border border-black/5 bg-white shadow-sm">

          {/* COVER IMAGE */}
          <div className="border-b border-black/5 p-6 md:p-8">

            <label className="mb-3 block text-sm font-semibold">
              Cover Image
            </label>

            <div className="flex min-h-[220px] cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed border-black/10 bg-[#f8f8f6] transition hover:border-blue-400 hover:bg-blue-50/30">

              <div className="text-center">

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                  <ImageIcon
                    size={21}
                    className="text-gray-400"
                  />
                </div>

                <p className="mt-4 text-sm font-medium">
                  Add a cover image
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  JPG, PNG or WEBP · Recommended 1600 × 900
                </p>

                <button
                  type="button"
                  className="mt-4 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-medium hover:bg-black hover:text-white"
                >
                  Choose Image
                </button>

              </div>

            </div>

          </div>


          {/* TITLE */}
          <div className="p-6 md:p-8">

            <label
              htmlFor="title"
              className="mb-3 block text-sm font-semibold"
            >
              Article Title
            </label>

            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Write a powerful title..."
              className="w-full border-none bg-transparent font-serif text-3xl font-semibold outline-none placeholder:text-gray-300 md:text-5xl"
            />

          </div>


          {/* CATEGORY */}
          <div className="border-t border-black/5 px-6 py-6 md:px-8">

            <label
              htmlFor="category"
              className="mb-3 block text-sm font-semibold"
            >
              Category
            </label>

            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-xl border border-black/10 bg-[#f8f8f6] px-4 py-3 text-sm outline-none focus:border-blue-500"
            >
              <option>Technology</option>
              <option>AI</option>
              <option>Design</option>
              <option>Development</option>
              <option>Research</option>
              <option>Career</option>
            </select>

          </div>


          {/* EDITOR */}
          <div className="border-t border-black/5">

            {/* TOOLBAR */}
            <div className="flex flex-wrap items-center gap-1 border-b border-black/5 px-4 py-3 md:px-8">

              <ToolbarButton>
                <Bold size={17} />
              </ToolbarButton>

              <ToolbarButton>
                <Italic size={17} />
              </ToolbarButton>

              <ToolbarButton>
                <Underline size={17} />
              </ToolbarButton>

              <div className="mx-2 h-6 w-px bg-black/10" />

              <ToolbarButton>
                <List size={17} />
              </ToolbarButton>

              <ToolbarButton>
                <ListOrdered size={17} />
              </ToolbarButton>

              <ToolbarButton>
                <Quote size={17} />
              </ToolbarButton>

              <ToolbarButton>
                <LinkIcon size={17} />
              </ToolbarButton>

              <ToolbarButton>
                <ImageIcon size={17} />
              </ToolbarButton>

            </div>


            {/* TEXT AREA */}
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Start writing your story..."
              className="min-h-[450px] w-full resize-none border-none bg-transparent px-6 py-8 text-base leading-8 outline-none placeholder:text-gray-300 md:px-8 md:text-lg"
            />

          </div>


          {/* ARTICLE FOOTER */}
          <div className="flex flex-col gap-5 border-t border-black/5 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">

            <div className="text-xs text-gray-400">
              {content.length} characters
            </div>

            <div className="flex gap-3">

              <button
                type="button"
                className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium transition hover:bg-gray-100"
              >
                Save Draft
              </button>

              <button
                type="button"
                className="flex items-center gap-2 rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
              >
                <Send size={16} />
                Submit for Review
              </button>

            </div>

          </div>

        </div>


        {/* WRITING TIPS */}
        <section className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/50 p-6">

          <h2 className="text-sm font-semibold">
            Writing Tips
          </h2>

          <div className="mt-4 grid gap-4 text-sm text-gray-500 md:grid-cols-3">

            <div>
              <p className="font-medium text-gray-800">
                Keep it focused
              </p>

              <p className="mt-1">
                Give your article one clear central idea.
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-800">
                Use headings
              </p>

              <p className="mt-1">
                Break long content into easy-to-read sections.
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-800">
                Add value
              </p>

              <p className="mt-1">
                Share useful knowledge and meaningful insights.
              </p>
            </div>

          </div>

        </section>

      </div>

    </main>
  );
}


/* TOOLBAR BUTTON */

function ToolbarButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-black"
    >
      {children}
    </button>
  );
}