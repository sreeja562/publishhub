import Link from "next/link";
import {
  BookOpen,
  PenLine,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Users,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main
      className="
        min-h-screen
        bg-white
        text-slate-900

        dark:bg-[#09090b]
        dark:text-white

        transition-colors
        duration-300
      "
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden

          border-b
          border-gray-200

          bg-gradient-to-b
          from-purple-50
          via-white
          to-white

          dark:border-white/10
          dark:from-purple-950/20
          dark:via-[#09090b]
          dark:to-[#09090b]
        "
      >

        {/* Decorative glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            -top-40

            h-96
            w-96

            rounded-full

            bg-purple-500/10

            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-32

            h-80
            w-80

            rounded-full

            bg-purple-500/5

            blur-3xl
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-5xl

            px-6
            py-20

            text-center

            sm:px-10
            sm:py-24
          "
        >

          <div
            className="
              mx-auto
              flex
              h-14
              w-14
              items-center
              justify-center

              rounded-2xl

              bg-purple-100

              text-[#7C3AED]

              shadow-sm

              dark:bg-purple-500/10
            "
          >
            <Sparkles size={25} />
          </div>

          <p
            className="
              mt-6

              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]

              text-[#7C3AED]
            "
          >
            About PublishHub
          </p>

          <h1
            className="
              mt-4

              text-4xl
              font-extrabold
              leading-tight
              tracking-tight

              text-slate-900

              sm:text-5xl
              lg:text-6xl

              dark:text-white
            "
          >
            A place for ideas
            <br className="hidden sm:block" />
            worth sharing
            <span className="text-[#7C3AED]">.</span>
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl

              text-base
              leading-7

              text-slate-600

              sm:text-lg
              sm:leading-8

              dark:text-slate-400
            "
          >
            PublishHub is a modern multi-author publication
            platform where writers, creators, and knowledge
            seekers come together to share ideas, tutorials,
            stories, and useful insights.
          </p>

        </div>
      </section>

      {/* =====================================================
          MISSION
      ===================================================== */}

      <section
        className="
          px-6
          py-20

          sm:px-10
          sm:py-24

          lg:px-16
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-12

            lg:grid-cols-2
            lg:items-center
          "
        >

          {/* Left */}

          <div>

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]

                text-[#7C3AED]
              "
            >
              Our Mission
            </p>

            <h2
              className="
                mt-3

                text-3xl
                font-extrabold
                tracking-tight

                text-slate-900

                sm:text-4xl

                dark:text-white
              "
            >
              Helping people share
              knowledge with the world
            </h2>

            <p
              className="
                mt-6

                leading-7

                text-slate-600

                dark:text-slate-400
              "
            >
              PublishHub makes it simple for authors
              to create and share meaningful publications
              while giving readers a comfortable place
              to discover and explore new ideas.
            </p>

            <p
              className="
                mt-4

                leading-7

                text-slate-600

                dark:text-slate-400
              "
            >
              Whether you are interested in technology,
              programming, design, artificial intelligence,
              business, or lifestyle, PublishHub brings
              different perspectives together in one platform.
            </p>

          </div>

          {/* Right */}

          <div
            className="
              relative
              overflow-hidden

              rounded-3xl

              border
              border-white/10

              bg-[#111114]

              p-8

              shadow-2xl
              shadow-purple-500/5

              sm:p-10
            "
          >

            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20

                h-48
                w-48

                rounded-full

                bg-purple-600/20

                blur-3xl
              "
            />

            <div className="relative">

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center

                  rounded-xl

                  bg-purple-500/10

                  text-purple-400
                "
              >
                <Users size={22} />
              </div>

              <h3
                className="
                  mt-6

                  text-2xl
                  font-bold
                  text-white
                "
              >
                Why PublishHub?
              </h3>

              <div className="mt-7 space-y-6">

                {/* Readers */}

                <div>

                  <h4
                    className="
                      font-semibold
                      text-purple-400
                    "
                  >
                    For Readers
                  </h4>

                  <p
                    className="
                      mt-1

                      text-sm
                      leading-6

                      text-slate-400
                    "
                  >
                    Discover useful publications, follow
                    authors, and engage with content you enjoy.
                  </p>

                </div>

                {/* Authors */}

                <div>

                  <h4
                    className="
                      font-semibold
                      text-purple-400
                    "
                  >
                    For Authors
                  </h4>

                  <p
                    className="
                      mt-1

                      text-sm
                      leading-6

                      text-slate-400
                    "
                  >
                    Write, organize, and share your knowledge
                    with a wider audience.
                  </p>

                </div>

                {/* Community */}

                <div>

                  <h4
                    className="
                      font-semibold
                      text-purple-400
                    "
                  >
                    For the Community
                  </h4>

                  <p
                    className="
                      mt-1

                      text-sm
                      leading-6

                      text-slate-400
                    "
                  >
                    Create a space where ideas can be
                    discovered, discussed, and shared.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PLATFORM FEATURES
      ===================================================== */}

      <section
        className="
          border-y
          border-gray-200

          bg-gray-50

          dark:border-white/10
          dark:bg-white/[0.02]
        "
      >

        <div
          className="
            mx-auto
            max-w-7xl

            px-6
            py-20

            sm:px-10
            sm:py-24

            lg:px-16
          "
        >

          {/* Heading */}

          <div className="text-center">

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]

                text-[#7C3AED]
              "
            >
              Our Platform
            </p>

            <h2
              className="
                mt-3

                text-3xl
                font-extrabold
                tracking-tight

                text-slate-900

                sm:text-4xl

                dark:text-white
              "
            >
              Built for readers and authors
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl

                text-sm
                leading-6

                text-slate-500

                dark:text-slate-400
              "
            >
              Everything you need to discover,
              create, and engage with meaningful content.
            </p>

          </div>

          {/* Feature cards */}

          <div
            className="
              mt-12

              grid
              gap-6

              md:grid-cols-3
            "
          >

            {/* =================================================
                CARD 1
            ================================================= */}

            <div
              className="
                group

                rounded-2xl

                border
                border-gray-200

                bg-white

                p-7

                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-purple-200
                hover:shadow-xl
                hover:shadow-purple-500/10

                dark:border-white/10
                dark:bg-white/[0.04]

                dark:hover:border-purple-500/30
              "
            >

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center

                  rounded-xl

                  bg-purple-100

                  text-[#7C3AED]

                  transition-transform
                  duration-300

                  group-hover:scale-110

                  dark:bg-purple-500/10
                "
              >
                <BookOpen size={22} />
              </div>

              <h3
                className="
                  mt-5

                  text-xl
                  font-bold

                  text-slate-900

                  dark:text-white
                "
              >
                Discover Publications
              </h3>

              <p
                className="
                  mt-3

                  leading-7

                  text-slate-600

                  dark:text-slate-400
                "
              >
                Browse publications across different
                categories and discover content that
                matches your interests.
              </p>

              <div
                className="
                  mt-5

                  flex
                  items-center

                  text-sm
                  font-semibold

                  text-[#7C3AED]
                "
              >
                Explore content

                <ArrowRight
                  size={15}
                  className="
                    ml-2

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </div>

            </div>

            {/* =================================================
                CARD 2
            ================================================= */}

            <div
              className="
                group

                rounded-2xl

                border
                border-gray-200

                bg-white

                p-7

                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-purple-200
                hover:shadow-xl
                hover:shadow-purple-500/10

                dark:border-white/10
                dark:bg-white/[0.04]

                dark:hover:border-purple-500/30
              "
            >

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center

                  rounded-xl

                  bg-purple-100

                  text-[#7C3AED]

                  transition-transform
                  duration-300

                  group-hover:scale-110

                  dark:bg-purple-500/10
                "
              >
                <PenLine size={22} />
              </div>

              <h3
                className="
                  mt-5

                  text-xl
                  font-bold

                  text-slate-900

                  dark:text-white
                "
              >
                Create & Publish
              </h3>

              <p
                className="
                  mt-3

                  leading-7

                  text-slate-600

                  dark:text-slate-400
                "
              >
                Authors can create publications, save
                drafts, and share their work with the
                PublishHub community.
              </p>

              <div
                className="
                  mt-5

                  flex
                  items-center

                  text-sm
                  font-semibold

                  text-[#7C3AED]
                "
              >
                Start writing

                <ArrowRight
                  size={15}
                  className="
                    ml-2

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </div>

            </div>

            {/* =================================================
                CARD 3
            ================================================= */}

            <div
              className="
                group

                rounded-2xl

                border
                border-gray-200

                bg-white

                p-7

                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-purple-200
                hover:shadow-xl
                hover:shadow-purple-500/10

                dark:border-white/10
                dark:bg-white/[0.04]

                dark:hover:border-purple-500/30
              "
            >

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center

                  rounded-xl

                  bg-purple-100

                  text-[#7C3AED]

                  transition-transform
                  duration-300

                  group-hover:scale-110

                  dark:bg-purple-500/10
                "
              >
                <MessageCircle size={22} />
              </div>

              <h3
                className="
                  mt-5

                  text-xl
                  font-bold

                  text-slate-900

                  dark:text-white
                "
              >
                Connect & Engage
              </h3>

              <p
                className="
                  mt-3

                  leading-7

                  text-slate-600

                  dark:text-slate-400
                "
              >
                Readers can interact with publications,
                follow authors, and become part of the
                community.
              </p>

              <div
                className="
                  mt-5

                  flex
                  items-center

                  text-sm
                  font-semibold

                  text-[#7C3AED]
                "
              >
                Join the community

                <ArrowRight
                  size={15}
                  className="
                    ml-2

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden

          bg-[#111114]
        "
      >

        {/* Glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0

            h-64
            w-96

            -translate-x-1/2

            rounded-full

            bg-purple-600/20

            blur-3xl
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-4xl

            px-6
            py-20

            text-center

            sm:py-24
          "
        >

          <div
            className="
              mx-auto
              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-xl

              bg-purple-500/10

              text-purple-400
            "
          >
            <PenLine size={21} />
          </div>

          <h2
            className="
              mt-6

              text-3xl
              font-extrabold
              tracking-tight

              text-white

              sm:text-4xl
            "
          >
            Have something worth sharing?
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl

              leading-7

              text-slate-400
            "
          >
            Join PublishHub and share your knowledge,
            experiences, and ideas with readers around
            the world.
          </p>

          <Link
            href="/register"
            className="
              mt-8

              inline-flex
              items-center
              gap-2

              rounded-xl

              bg-[#7C3AED]

              px-6
              py-3.5

              text-sm
              font-semibold
              text-white

              shadow-lg
              shadow-purple-500/20

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-[#6D28D9]
              hover:shadow-xl
              hover:shadow-purple-500/30
            "
          >
            Join PublishHub

            <ArrowRight
              size={17}
            />
          </Link>

        </div>

      </section>

    </main>
  );
}