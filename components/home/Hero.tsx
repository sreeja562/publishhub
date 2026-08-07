import Link from "next/link";
import FeatureCard from "@/components/common/FeatureCard";

export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

        {/* Left */}
        <div>
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            ✨ Multi-Author Publication Platform
          </span>

          <h1 className="mt-8 text-6xl font-bold leading-tight text-gray-900">
            Read.
            <br />
            Write.
            <br />
            Inspire.
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Discover quality articles from expert authors and
            publish your own stories in one beautiful platform.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              href="/articles"
              className="rounded-full bg-black px-7 py-3 text-white"
            >
              Explore
            </Link>

            <Link
              href="/register"
              className="rounded-full border px-7 py-3"
            >
              Become Author
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-6">

          <FeatureCard
            title="Featured Article"
            description="How modern publishing platforms improve collaboration among multiple authors."
          />

          <FeatureCard
            title="Trending Topic"
            description="Artificial Intelligence in Technical Writing"
          />

          <FeatureCard
            title="Editor's Pick"
            description="10 UX principles every content platform should follow."
          />

        </div>

      </div>
    </section>
  );
}