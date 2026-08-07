import { articles } from "@/data/articles";
import ArticleCard from "@/components/article/ArticleCard";

export default function FeaturedArticles() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16">
          <p className="text-blue-600 font-semibold">
            FEATURED
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Featured Articles
          </h2>

          <p className="mt-4 max-w-2xl text-gray-600">
            Discover hand-picked articles from our editors covering
            technology, design, business, and innovation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              {...article}
            />
          ))}
        </div>

      </div>
    </section>
  );
}