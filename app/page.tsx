import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import ArticleCard from "@/components/ArticleCard";
import FeaturedArticle from "@/components/FeaturedArticle";
import TopAuthors from "@/components/TopAuthors";
import { articles } from "@/data/articles";
import AuthPrompt from "@/components/AuthPrompt";

export default function Home() {
  return (
    <main>
      

      {/* Hero */}
      <Hero />
    
      {/* Categories */}
      <CategorySection />

      {/* Featured */}
      <FeaturedArticle />

      {/* Login / Signup Popup */}
      <AuthPrompt />

      {/* Latest Publications */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#7C3AED]">
            Fresh from the community
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Latest Publications
          </h2>

          <p className="mt-3 max-w-2xl text-gray-500">
            Explore the latest ideas, tutorials, stories, and insights
            published by our authors.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
            />
          ))}
        </div>
      </section>

      {/* Top Authors */}
      <TopAuthors />

      {/* CTA */}
      <section className="bg-[#18181B] text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#A78BFA]">
            Join PublishHub
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Have a story to share?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Join PublishHub and share your knowledge, ideas, tutorials,
            and experiences with readers around the world.
          </p>

          <a
            href="/register"
            className="mt-8 inline-block rounded-lg bg-[#7C3AED] px-6 py-3 font-semibold text-white transition hover:bg-[#6D28D9]"
          >
            Become an Author
          </a>
        </div>
      </section>
    </main>
  );
}