import Image from "next/image";
import Link from "next/link";

export default function FeaturedArticle() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">

      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          Featured
        </p>

        <h2 className="mt-2 text-3xl font-bold text-gray-900">
          Featured Publication
        </h2>
      </div>

      <div className="grid overflow-hidden rounded-2xl bg-white shadow-lg md:grid-cols-2">

        <div className="relative min-h-[300px] md:min-h-[450px]">
          <Image
            src="/images/ai.jpg"
            alt="The Future of Artificial Intelligence"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="p-8 md:p-10">

          <span className="inline-block rounded-full bg-[#EDE9E9] px-3 py-1 text-sm text-blue-700">
            Technology
          </span>

          <h3 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
            The Future of Artificial Intelligence
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            Discover how AI is transforming education, healthcare,
            software development, and the future of work.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500">
            <span>👤 Sreeja</span>
            <span>📅 Aug 2026</span>
            <span>⏱️ 8 min read</span>
          </div>

          <Link
            href="/articles/1"
            className="mt-8 inline-block rounded-lg bg-[#7C3AED] px-6 py-3 font-semibold text-white transition hover:bg-[#6D28D9]"
          >
            Read More
          </Link>

        </div>

      </div>

    </section>
  );
}