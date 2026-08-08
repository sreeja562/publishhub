import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

export default function PublicationsPage() {
  return (
    <main
      className="
        min-h-screen
        bg-white
        text-slate-900

        dark:bg-[#09090b]
        dark:text-white

        transition-colors
        duration-300
      "
    >
      <section
        className="
          px-6
          py-16

          sm:px-10
          sm:py-20

          lg:px-16
        "
      >
        <div className="mx-auto max-w-7xl">

          {/* Header */}

          <div className="mb-12">
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#7C3AED]
              "
            >
              PublishHub
            </p>

            <h1
              className="
                mt-3
                text-4xl
                font-extrabold
                tracking-tight

                text-slate-900

                sm:text-5xl

                dark:text-white
              "
            >
              Publications
              <span className="text-[#7C3AED]">
                .
              </span>
            </h1>

            <p
              className="
                mt-4
                max-w-2xl
                text-base
                leading-7

                text-slate-600

                dark:text-slate-400
              "
            >
              Discover articles, tutorials, ideas,
              research, and stories from the
              PublishHub community.
            </p>
          </div>

          {/* Publications Grid */}

          <div
            className="
              grid
              grid-cols-1
              gap-6

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
              />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}