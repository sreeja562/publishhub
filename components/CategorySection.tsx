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
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8">
        Browse Categories
      </h2>

      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className="px-5 py-3 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white transition"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}