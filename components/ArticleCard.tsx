import Link from "next/link";
import Image from "next/image";

interface Article {
  id: number;
  title: string;
  author: string;
  image: string;
  category: string;
}

export default function ArticleCard({
  article,
}: {
  article: Article;
}) {
  return (
    <Link
      href={`/articles/${article.id}`}
      className="group block"
    >
      <article className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg">

        {/* Image */}
        <div className="relative h-52 w-full overflow-hidden bg-gray-100">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6">

          <p className="text-xs font-semibold uppercase tracking-wider text-[#7C3AED]">
            {article.category}
          </p>

          <h2 className="mt-2 line-clamp-2 text-xl font-bold text-gray-900 transition group-hover:text-[#7C3AED]">
            {article.title}
          </h2>

          <p className="mt-4 text-sm text-gray-500">
            By {article.author}
          </p>

          <div className="mt-5 text-sm font-semibold text-[#7C3AED]">
            Read article →
          </div>

        </div>

      </article>
    </Link>
  );
}