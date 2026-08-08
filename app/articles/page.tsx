import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles";

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ================= NAVBAR ================= */}
      

      {/* ================= PAGE HEADER ================= */}
      <section className="border-b border-black/5 bg-[#fafaf8]">

        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            PublishHub
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
            All Articles
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
            Explore ideas, tutorials, insights and stories from
            the PublishHub community.
          </p>

        </div>

      </section>


      {/* ================= ARTICLES ================= */}
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">

        {articles.length === 0 ? (

          /* Empty state */
          <div className="rounded-2xl border border-black/5 bg-[#fafaf8] px-6 py-16 text-center">

            <h2 className="text-2xl font-semibold text-gray-900">
              No articles yet
            </h2>

            <p className="mt-3 text-gray-500">
              There are no published articles to display.
            </p>

          </div>

        ) : (

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {articles.map((article) => (

              <article
                key={article.id}
                className="group overflow-hidden rounded-2xl border border-black/5 bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >

                {/* Image */}
                <Link href={`/article/${article.id}`}>

                  <div className="relative h-56 w-full overflow-hidden bg-gray-100">

                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                  </div>

                </Link>


                {/* Content */}
                <div className="p-6">

                  {/* Category */}
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                    {article.category}
                  </p>


                  {/* Title */}
                  <Link href={`/article/${article.id}`}>

                    <h2 className="mt-3 text-xl font-bold leading-7 text-gray-950 transition group-hover:text-blue-600">
                      {article.title}
                    </h2>

                  </Link>


                  {/* Description */}
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
  Explore this article and discover ideas, insights, and useful information from the PublishHub community.
</p>


                  {/* Author */}
                  <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-5">

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                        {article.author
                          ? article.author.charAt(0).toUpperCase()
                          : "A"}
                      </div>

                      <div>

                        <p className="text-sm font-semibold text-gray-900">
                          {article.author}
                        </p>

                        <p className="text-xs text-gray-400">
                          PublishHub Author
                        </p>

                      </div>

                    </div>


                    {/* Read */}
                    <Link
                      href={`/article/${article.id}`}
                      className="text-sm font-semibold text-gray-600 transition hover:text-blue-600"
                    >
                      Read →
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>

        )}

      </section>


      {/* ================= CTA ================= */}
      <section className="border-t border-black/5 bg-[#f8f8f6]">

        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

            <div>

              <p className="text-sm text-gray-500">
                Want to contribute?
              </p>

              <h2 className="mt-1 text-xl font-semibold text-gray-950">
                Share your ideas with PublishHub
              </h2>

            </div>

            <Link
              href="/login"
              className="w-fit rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              Start Writing
            </Link>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-black/5 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-8 text-sm text-gray-400 md:px-8">

          © 2026 PublishHub

        </div>

      </footer>

    </main>
  );
}