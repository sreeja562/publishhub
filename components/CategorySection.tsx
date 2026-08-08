import SearchBar from "@/components/SearchBar";

const categories = [
  "Technology",
  "Programming",
  "Design",
  "AI",
  "Business",
  "Lifestyle",
];

export default function CategorySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">

      {/* Heading */}
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#7C3AED]">
          Explore
        </p>

        <h2 className="mt-2 text-3xl font-bold text-gray-900">
          Browse Categories
        </h2>

        <p className="mt-3 text-gray-500">
          Explore publications by topic and discover something interesting.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8 max-w-2xl">
        <SearchBar />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className="rounded-full border border-gray-200 bg-white px-6 py-3 font-medium text-gray-700 shadow-sm transition hover:border-[#7C3AED] hover:bg-[#7C3AED] hover:text-white"
          >
            {category}
          </button>
        ))}
      </div>

    </section>
  );
}