export default function SearchBar() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full max-w-2xl rounded-lg border border-gray-300 px-5 py-3 focus:border-blue-500 focus:outline-none"
        />
      </div>
    </section>
  );
}