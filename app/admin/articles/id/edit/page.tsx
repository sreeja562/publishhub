"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditArticlePage() {
  const params = useParams();
  const router = useRouter();

  const [title, setTitle] = useState(
    "The Future of Artificial Intelligence"
  );

  const [description, setDescription] = useState(
    "Explore how artificial intelligence is changing the way we work, learn and build products."
  );

  const [category, setCategory] = useState("Technology");

  const handleSave = () => {
    alert(`Article ${params.id} updated successfully!`);
    router.push("/admin/articles");
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] p-6 md:p-8">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Edit Article
          </h1>

          <p className="mt-2 text-gray-500">
            Update the article details and save your changes.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-xl border bg-white p-6 shadow-sm md:p-8">

          {/* Title */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Article Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Category */}
          <div className="mb-8">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="Technology">Technology</option>
              <option value="AI">AI</option>
              <option value="Design">Design</option>
              <option value="Development">Development</option>
              <option value="Research">Research</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 border-t pt-6">

            <button
              type="button"
              onClick={() => router.push("/admin/articles")}
              className="rounded-lg border px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
            >
              Save Changes
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}