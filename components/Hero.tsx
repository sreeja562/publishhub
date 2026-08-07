import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">
          Discover. Read. Share.
        </h1>

        <p className="mt-6 text-lg max-w-2xl mx-auto">
          PublishHub is a multi-author publication platform where writers share
          knowledge, ideas, tutorials, and stories with readers worldwide.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/articles"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Explore Articles
          </Link>

          <Link
            href="/register"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600"
          >
            Become an Author
          </Link>
        </div>
      </div>
    </section>
  );
}