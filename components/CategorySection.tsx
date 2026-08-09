import Link from "next/link";
import SearchBar from "@/components/SearchBar";

const categories = [
  "Technology",
  "Programming",
  "Design",
  "AI",
  "Business",
  "Lifestyle",
];

export default function CategorySection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* =================================================
            HEADING
        ================================================= */}

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
            Explore
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
              sm:text-4xl
              dark:text-white
            "
          >
            Browse Categories
            <span className="ph-gradient-text">.</span>
          </h2>

          <p
            className="
              mt-3
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              dark:text-slate-400
            "
          >
            Explore publications by topic and discover
            something interesting.
          </p>
        </div>

        {/* =================================================
            SEARCH BAR
        ================================================= */}

        <div className="mb-10 max-w-2xl">
          <SearchBar />
        </div>

        {/* =================================================
            CATEGORY BUTTONS
        ================================================= */}

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/articles?category=${encodeURIComponent(category)}`}
              className="
                rounded-full
                border
                border-gray-200
                bg-white
                px-6
                py-3
                text-sm
                font-semibold
                text-gray-700
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#7C3AED]
                hover:bg-[#7C3AED]
                hover:text-white
                hover:shadow-lg
                hover:shadow-purple-500/20

                dark:border-white/10
                dark:bg-white/[0.04]
                dark:text-gray-300

                dark:hover:border-[#8B5CF6]
                dark:hover:bg-[#7C3AED]
                dark:hover:text-white
              "
            >
              {category}
            </Link>
          ))}
        </div>

        {/* =================================================
            CATEGORY PREVIEW CARDS
        ================================================= */}

        <div
          className="
            mt-12
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {categories.slice(0, 3).map((category, index) => (
            <Link
              key={category}
              href={`/articles?category=${encodeURIComponent(category)}`}
              className="
                ph-card
                group
                relative
                block
                overflow-hidden
                p-6

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-xl

                focus:outline-none
                focus:ring-2
                focus:ring-[#7C3AED]
                focus:ring-offset-2

                dark:focus:ring-offset-[#0b0b0f]
              "
            >
              {/* Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-24
                  w-24
                  rounded-full
                  bg-purple-500/10
                  blur-2xl

                  transition-all
                  duration-500

                  group-hover:bg-purple-500/20
                "
              />

              <div className="relative z-10">

                {/* Number */}

                <span
                  className="
                    text-sm
                    font-semibold
                    text-[#7C3AED]
                    dark:text-[#A78BFA]
                  "
                >
                  0{index + 1}
                </span>

                {/* Category */}

                <h3
                  className="
                    mt-4
                    text-xl
                    font-bold
                    text-slate-900
                    transition-colors
                    duration-300

                    group-hover:text-[#7C3AED]

                    dark:text-white
                    dark:group-hover:text-[#A78BFA]
                  "
                >
                  {category}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-500

                    dark:text-slate-400
                  "
                >
                  Discover the latest publications,
                  ideas, and perspectives in {category}.
                </p>

                {/* Bottom line */}

                <div
                  className="
                    mt-6
                    h-1
                    w-10
                    rounded-full
                    bg-[#7C3AED]

                    transition-all
                    duration-300

                    group-hover:w-20
                  "
                />

                {/* View category */}

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-[#7C3AED]

                    dark:text-[#A78BFA]
                  "
                >
                  Explore {category}

                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}