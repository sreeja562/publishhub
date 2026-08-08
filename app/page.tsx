import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedArticle from "@/components/FeaturedArticle";
import ArticleCard from "@/components/ArticleCard";
import TopAuthors from "@/components/TopAuthors";
import AuthPrompt from "@/components/AuthPrompt";
import { articles } from "@/data/articles";

export default function Home() {
  return (
    <main className="ph-page">
      {/* Hero */}
      <Hero />

      {/* Categories */}
      <section className="ph-section">
        <CategorySection />
      </section>

      {/* Featured */}
      <section className="ph-section">
        <FeaturedArticle />
      </section>

      {/* Latest Publications */}
      <section
        className="
          ph-section
          px-6
          py-20
          sm:px-10
          lg:px-16
        "
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#7C3AED]
              "
            >
              Latest
            </p>

            <h2
              className="
                mt-2
                text-3xl
                font-bold
                tracking-tight
                text-slate-900

                sm:text-4xl

                dark:text-white
              "
            >
              Latest Publications
            </h2>

            <p
              className="
                mt-3
                max-w-2xl
                text-slate-600
                dark:text-slate-400
              "
            >
              Discover fresh ideas and perspectives
              from the PublishHub community.
            </p>
          </div>

          <div
            className="
              grid
              gap-6

              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {articles
              .slice(0, 6)
              .map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                />
              ))}
          </div>
        </div>
      </section>

      {/* Authors */}
      <section className="ph-section">
        <TopAuthors />
      </section>

      {/* Authentication prompt */}
      <AuthPrompt />
    </main>
  );
}