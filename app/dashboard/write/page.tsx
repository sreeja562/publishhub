"use client";

import { useState } from "react";
import {
  Save,
  Send,
  Image as ImageIcon,
  Eye,
  ArrowLeft,
} from "lucide-react";

export default function WriteArticlePage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Technology");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [message, setMessage] = useState("");

  const saveDraft = () => {
    setMessage("Article saved as draft.");
  };

  const submitArticle = () => {
    if (!title.trim() || !content.trim()) {
      setMessage("Please enter a title and article content.");
      return;
    }

    setMessage("Article submitted for review.");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <button
              onClick={() => {
                window.location.href = "/dashboard/articles";
              }}
              className="mb-4 flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900"
            >
              <ArrowLeft size={16} />
              Back to Articles
            </button>

            <h1 className="text-3xl font-bold text-gray-900">
              Write Article
            </h1>

            <p className="mt-2 text-gray-500">
              Create and submit your article for publication.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={saveDraft}
              className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              <Save size={17} />
              Save Draft
            </button>

            <button
              onClick={submitArticle}
              className="flex items-center gap-2 rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
            >
              <Send size={17} />
              Submit for Review
            </button>
          </div>
        </div>

        {/* Success / Error Message */}
        {message && (
          <div className="mb-6 rounded-lg border bg-white px-5 py-4 text-sm text-gray-700 shadow-sm">
            {message}
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-3">

          {/* Main Editor */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border bg-white p-6 shadow-sm">

              {/* Title */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Article Title
                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter your article title..."
                  className="w-full border-b border-gray-200 pb-3 text-3xl font-bold outline-none placeholder:text-gray-300 focus:border-gray-500"
                />
              </div>

              {/* Excerpt */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Short Description
                </label>

                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Write a short description of your article..."
                  rows={3}
                  className="w-full rounded-lg border border-gray-200 p-4 text-sm outline-none focus:border-gray-400"
                />
              </div>

              {/* Content */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Article Content
                </label>

                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Start writing your article here..."
                  rows={22}
                  className="w-full resize-y rounded-lg border border-gray-200 p-5 text-base leading-7 outline-none focus:border-gray-400"
                />
              </div>

              {/* Word Count */}
              <div className="mt-3 text-right text-xs text-gray-500">
                {content.trim()
                  ? content.trim().split(/\s+/).length
                  : 0}{" "}
                words
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Publishing Settings */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-lg font-semibold text-gray-900">
                Publishing Settings
              </h2>

              {/* Category */}
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Category
                </label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-white p-3 text-sm outline-none focus:border-gray-400"
                >
                  <option>Technology</option>
                  <option>Development</option>
                  <option>Design</option>
                  <option>Business</option>
                  <option>Career</option>
                  <option>Education</option>
                  <option>Science</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Author */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Author
                </label>

                <div className="rounded-lg bg-gray-50 p-3 text-sm text-gray-700">
                  Current Author
                </div>
              </div>
            </div>

            {/* Cover Image */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-lg font-semibold text-gray-900">
                Cover Image
              </h2>

              <div className="mb-4 flex h-40 items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-gray-200 bg-gray-50">
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt="Cover preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <ImageIcon
                      size={32}
                      className="mx-auto mb-2 text-gray-300"
                    />

                    <p className="text-sm text-gray-500">
                      Add a cover image
                    </p>
                  </div>
                )}
              </div>

              <input
                type="text"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                placeholder="Paste image URL..."
                className="w-full rounded-lg border border-gray-200 p-3 text-sm outline-none focus:border-gray-400"
              />
            </div>

            {/* Preview */}
            <button
              onClick={() => setMessage("Preview feature will be connected next.")}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              <Eye size={17} />
              Preview Article
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}