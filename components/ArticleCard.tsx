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
      <article
        className="
          ph-card
          relative
          overflow-hidden
        "
      >
        {/* =================================================
            IMAGE
        ================================================= */}

        <div
          className="
            relative
            h-52
            w-full
            overflow-hidden
            bg-gray-100

            dark:bg-[#18181b]
          "
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-105
            "
          />

          {/* Image overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/30
              via-transparent
              to-transparent
              opacity-0

              transition-opacity
              duration-300

              group-hover:opacity-100
            "
          />

          {/* Category badge */}

          <div
            className="
              absolute
              left-4
              top-4
            "
          >
            <span
              className="
                rounded-full

                border
                border-white/20

                bg-white/90
                px-3
                py-1.5

                text-[11px]
                font-bold
                uppercase
                tracking-wider
                text-[#7C3AED]

                shadow-sm
                backdrop-blur-md

                dark:border-white/10
                dark:bg-black/60
                dark:text-purple-300
              "
            >
              {article.category}
            </span>
          </div>
        </div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="p-6">

          {/* Category */}

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#7C3AED]
            "
          >
            {article.category}
          </p>

          {/* Title */}

          <h2
            className="
              mt-2
              line-clamp-2

              text-xl
              font-bold
              leading-snug
              tracking-tight

              text-slate-900

              transition-colors
              duration-300

              group-hover:text-[#7C3AED]

              dark:text-white
              dark:group-hover:text-purple-400
            "
          >
            {article.title}
          </h2>

          {/* Author */}

          <p
            className="
              mt-4
              text-sm
              text-slate-500

              dark:text-slate-400
            "
          >
            By{" "}
            <span
              className="
                font-medium
                text-slate-700

                dark:text-slate-300
              "
            >
              {article.author}
            </span>
          </p>

          {/* Read Article */}

          <div
            className="
              mt-5
              flex
              items-center
              text-sm
              font-semibold
              text-[#7C3AED]

              dark:text-purple-400
            "
          >
            <span>
              Read article
            </span>

            <span
              className="
                ml-2
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            >
              →
            </span>
          </div>

        </div>

        {/* =================================================
            BOTTOM PURPLE ACCENT
        ================================================= */}

        <div
          className="
            absolute
            bottom-0
            left-0
            h-0.5
            w-0

            bg-[#7C3AED]

            transition-all
            duration-500

            group-hover:w-full
          "
        />

      </article>
    </Link>
  );
}