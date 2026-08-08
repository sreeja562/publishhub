import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#181818] text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center md:py-32">

        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
          Discover. Read. Share.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          PublishHub is a multi-author publication platform where writers
          share knowledge, ideas, tutorials, and stories with readers
          worldwide.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/explore"
            className="rounded-lg bg-[#7C3AED] px-6 py-3 font-semibold text-white transition hover:bg-[#6D28D9]"
          >
            Explore Publications
          </Link>

          <Link
            href="/register"
            className="rounded-lg border border-[#7C3AED] px-6 py-3 font-semibold text-[#7C3AED] transition hover:bg-[#7C3AED] hover:text-white"
          >
            Become an Author
          </Link>

        </div>

      </div>
    </section>
  );
}