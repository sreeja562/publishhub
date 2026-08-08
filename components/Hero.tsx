"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  BookOpen,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        ph-hero
        relative
        flex
        min-h-[680px]
        items-center
        overflow-hidden
        px-6
        py-24

        sm:px-10
        lg:px-16
      "
    >
      {/* Decorative glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-10
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-purple-500/10
          blur-[120px]

          dark:bg-purple-600/20
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          bottom-0
          h-72
          w-72
          rounded-full
          bg-purple-500/5
          blur-[100px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-6xl
          text-center
        "
      >
        {/* Small label */}

        <div
          className="
            mx-auto
            mb-7
            inline-flex
            items-center
            gap-2
            rounded-full

            border
            border-purple-200

            bg-purple-50

            px-4
            py-2

            text-sm
            font-medium
            text-[#7C3AED]

            dark:border-purple-500/20
            dark:bg-purple-500/10
            dark:text-purple-300
          "
        >
          <Sparkles size={16} />

          A home for ideas
        </div>

        {/* Heading */}

        <h1
          className="
            mx-auto
            max-w-5xl

            text-5xl
            font-extrabold
            tracking-[-0.055em]

            text-slate-950

            sm:text-6xl
            lg:text-8xl

            dark:text-white
          "
        >
          Discover.
          <br />

          <span className="ph-gradient-text">
            Read. Share.
          </span>
        </h1>

        {/* Description */}

        <p
          className="
            mx-auto
            mt-8
            max-w-2xl

            text-base
            leading-8
            text-slate-600

            sm:text-lg

            dark:text-slate-400
          "
        >
          PublishHub is a multi-author publication
          platform where writers share knowledge,
          ideas, tutorials, and stories with readers
          worldwide.
        </p>

        {/* Buttons */}

        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-center
            gap-4

            sm:flex-row
          "
        >
          <Link
            href="/explore"
            className="ph-primary-button group"
          >
            Explore Publications

            <ArrowRight
              size={18}
              className="
                ml-2
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

          <Link
            href="/register"
            className="ph-secondary-button"
          >
            Become an Author
          </Link>
        </div>

        {/* Feature visual */}

        <div
          className="
            mx-auto
            mt-20
            max-w-4xl
          "
        >
          <div
            className="
              ph-glass
              relative
              overflow-hidden
              rounded-3xl
              p-2
            "
          >
            <div
              className="
                rounded-[22px]
                border
                border-gray-200
                bg-white
                p-6

                dark:border-white/10
                dark:bg-[#111114]

                sm:p-8
              "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-6

                  sm:flex-row
                  sm:items-center
                "
              >
                {/* Icon */}

                <div
                  className="
                    flex
                    h-16
                    w-16
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-purple-50
                    text-[#7C3AED]

                    dark:bg-purple-500/10
                    dark:text-purple-400
                  "
                >
                  <BookOpen size={30} />
                </div>

                {/* Text */}

                <div className="flex-1 text-left">
                  <p
                    className="
                      mb-1
                      text-sm
                      font-medium
                      text-[#7C3AED]
                    "
                  >
                    FEATURED PUBLICATION
                  </p>

                  <h2
                    className="
                      text-xl
                      font-bold
                      tracking-tight
                      text-slate-900

                      sm:text-2xl

                      dark:text-white
                    "
                  >
                    Ideas that inspire.
                    Stories that matter.
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-slate-500

                      dark:text-slate-400
                    "
                  >
                    Explore perspectives from
                    writers, developers, designers,
                    researchers, and creators.
                  </p>
                </div>

                {/* Arrow */}

                <Link
                  href="/explore"
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl

                    bg-slate-100
                    text-slate-700

                    transition-all

                    hover:bg-[#7C3AED]
                    hover:text-white

                    dark:bg-white/5
                    dark:text-white
                  "
                >
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}