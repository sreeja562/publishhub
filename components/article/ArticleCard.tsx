interface ArticleCardProps {
  title: string;
  author: string;
  category: string;
  date: string;
  readTime: string;
}

export default function ArticleCard({
  title,
  author,
  category,
  date,
  readTime,
}: ArticleCardProps) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
        {category}
      </span>

      <h3 className="mt-5 text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-8 text-sm text-gray-500">
        {author}
      </p>

      <div className="mt-4 flex justify-between text-sm text-gray-400">
        <span>{date}</span>
        <span>{readTime}</span>
      </div>
    </article>
  );
}