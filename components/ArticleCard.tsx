import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

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
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}
      <Link
        href={`/articles/${article.id}`}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-800 shadow-sm">
          {article.category}
        </span>

        {/* Arrow */}
        <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </span>
      </Link>

      {/* Content */}
      <div className="p-5">

        {/* Meta */}
        <div className="mb-3 flex items-center gap-3 text-xs text-gray-400">
          <span>By {article.author}</span>

          <span className="h-1 w-1 rounded-full bg-gray-300" />

          <span className="flex items-center gap-1">
            <Clock size={12} />
            5 min read
          </span>
        </div>

        {/* Title */}
        <Link href={`/articles/${article.id}`}>
          <h2 className="font-serif text-xl font-semibold leading-snug text-gray-900 transition-colors duration-200 group-hover:text-blue-600">
            {article.title}
          </h2>
        </Link>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
          Explore insights and ideas about {article.category.toLowerCase()}.
          Discover something new from our community of authors.
        </p>

        {/* Read More */}
        <Link
          href={`/articles/${article.id}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-blue-600"
        >
          Read article
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>

      </div>
    </article>
  );
}