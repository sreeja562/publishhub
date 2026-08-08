export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">

      {/* Hero */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-[#7C3AED]">
            About PublishHub
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            A place for ideas worth sharing
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            PublishHub is a modern multi-author publication platform where
            writers, creators, and knowledge seekers come together to share
            ideas, tutorials, stories, and useful insights.
          </p>

        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#7C3AED]">
              Our Mission
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Helping people share knowledge with the world
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              PublishHub makes it simple for authors to create and share
              meaningful publications while giving readers a comfortable
              place to discover and explore new ideas.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Whether you are interested in technology, programming, design,
              artificial intelligence, business, or lifestyle, PublishHub
              brings different perspectives together in one platform.
            </p>
          </div>

          <div className="rounded-2xl bg-[#18181B] p-8 text-white shadow-lg">

            <h3 className="text-2xl font-bold">
              Why PublishHub?
            </h3>

            <div className="mt-6 space-y-5">

              <div>
                <h4 className="font-semibold text-[#A78BFA]">
                  For Readers
                </h4>
                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Discover useful publications, follow authors, and engage
                  with content you enjoy.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#A78BFA]">
                  For Authors
                </h4>
                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Write, organize, and share your knowledge with a wider
                  audience.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#A78BFA]">
                  For the Community
                </h4>
                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Create a space where ideas can be discovered, discussed,
                  and shared.
                </p>
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* Platform Features */}
      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-[#7C3AED]">
              Our Platform
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Built for both readers and authors
            </h2>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-2xl border border-gray-200 bg-[#FAFAFA] p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-xl">
                📖
              </div>

              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                Discover Publications
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Browse publications across different categories and discover
                content that matches your interests.
              </p>

            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-gray-200 bg-[#FAFAFA] p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-xl">
                ✍️
              </div>

              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                Create & Publish
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Authors can create publications, save drafts, and share their
                work with the PublishHub community.
              </p>

            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-gray-200 bg-[#FAFAFA] p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-xl">
                💬
              </div>

              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                Connect & Engage
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Readers can interact with publications, follow authors, and
                become part of the community.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#18181B]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center text-white">

          <h2 className="text-3xl font-bold md:text-4xl">
            Have something worth sharing?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            Join PublishHub and share your knowledge, experiences, and ideas
            with readers around the world.
          </p>

          <a
            href="/register"
            className="mt-8 inline-block rounded-lg bg-[#7C3AED] px-7 py-3 font-semibold text-white transition hover:bg-[#6D28D9]"
          >
            Join PublishHub
          </a>

        </div>
      </section>

    </main>
  );
}