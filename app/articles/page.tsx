import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Next.js 16 requires params to be awaited
  const { id } = await params;

  // Find article by ID
  const article = articles.find(
    (item) => String(item.id) === id
  );

  // Show 404 if article doesn't exist
  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">

      {/* ==============================
          ARTICLE HEADER
      ============================== */}
      <section className="border-b border-gray-100">

        <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">

          <Link
            href="/articles"
            className="inline-flex items-center text-sm font-semibold text-[#7C3AED] hover:text-[#6D28D9]"
          >
            ← Back to Articles
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.15em] text-[#7C3AED]">
            {article.category}
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-gray-950 md:text-5xl lg:text-6xl">
            {article.title}
          </h1>

          <div className="mt-7 flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7C3AED] text-sm font-bold text-white">
              {article.author.charAt(0).toUpperCase()}
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900">
                {article.author}
              </p>

              <p className="text-sm text-gray-500">
                PublishHub Author
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ==============================
          ARTICLE
      ============================== */}
      <article className="mx-auto max-w-4xl px-6 py-12 md:py-16">

        {/* Article Image */}
        <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-gray-100 md:h-[450px]">

          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
          />

        </div>


        {/* Article Body */}
        <div className="mx-auto mt-12 max-w-3xl">

          <p className="text-lg leading-8 text-gray-600 md:text-xl">
            Welcome to this article on PublishHub. This publication
            contains ideas, insights, and useful information shared
            by our community of authors.
          </p>

          <p className="mt-7 text-lg leading-8 text-gray-600">
            PublishHub is a platform where writers can share their
            knowledge, tutorials, experiences, and perspectives
            with readers.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-gray-950">
            About this article
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            This is currently sample article content for the frontend
            version of PublishHub. Later, when the backend and database
            are connected, the complete article content can be loaded
            dynamically from the database.
          </p>

          <p className="mt-7 text-lg leading-8 text-gray-600">
            Authors will be able to create articles, save drafts,
            publish their work, and share their knowledge with the
            PublishHub community.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-gray-950">
            Keep exploring
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Continue exploring PublishHub to discover more articles,
            topics, and authors.
          </p>

        </div>

      </article>


      {/* ==============================
          BOTTOM CTA
      ============================== */}
      <section className="border-t border-gray-100 bg-gray-50">

        <div className="mx-auto max-w-4xl px-6 py-10">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

            <div>
              <p className="text-sm text-gray-500">
                Want to read more?
              </p>

              <p className="mt-1 font-semibold text-gray-900">
                Explore more PublishHub articles
              </p>
            </div>

            <Link
              href="/articles"
              className="rounded-lg bg-[#7C3AED] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#6D28D9]"
            >
              Browse Articles
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}