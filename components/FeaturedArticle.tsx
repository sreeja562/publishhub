import Image from "next/image";
import Link from "next/link";

export default function FeaturedArticle() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <h2 className="text-3xl font-bold mb-8">Featured Article</h2>

      <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-lg overflow-hidden">
        <Image
          src="/images/ai.jpg"
          alt="Featured Article"
          width={700}
          height={450}
          className="w-full h-full object-cover"
          priority
        />

        <div className="p-8">
          <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            Technology
          </span>

          <h3 className="text-4xl font-bold mt-4">
            The Future of Artificial Intelligence
          </h3>

          <p className="text-gray-600 mt-4">
            Discover how AI is transforming education, healthcare,
            software development, and the future of work.
          </p>

          <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
            <span>👤 Sreeja</span>
            <span>📅 Aug 2026</span>
            <span>⏱️ 8 min read</span>
          </div>

          <Link
            href="/articles/1"
            className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}