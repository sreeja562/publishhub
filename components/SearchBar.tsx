"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = search.trim();

    if (query) {
      router.push(`/explore?search=${encodeURIComponent(query)}`);
    } else {
      router.push("/explore");
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <form onSubmit={handleSearch} className="flex justify-center">
        <div className="flex w-full max-w-2xl gap-3">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-full border border-gray-300 bg-white px-5 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
          />

          <button
            type="submit"
            className="rounded-full bg-[#7C3AED] px-6 py-3 font-medium text-white transition hover:bg-[#6D28D9]"
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
}