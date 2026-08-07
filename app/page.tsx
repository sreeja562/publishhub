import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CategorySection from "@/components/CategorySection";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import FeaturedArticle from "@/components/FeaturedArticle";
import TopAuthors from "@/components/TopAuthors";
export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedArticle />
      <TopAuthors />

      <SearchBar />

      <CategorySection />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">
          Latest Articles
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
            />
          ))}
        </div>
      </section>
    </main>
  );
}