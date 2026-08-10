import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const authors = [
  {
    id: 1,
    name: "Emma Wilson",
    role: "AI Researcher",
    articles: 42,
    image: "/images/authors/author1.jpg",
  },
  {
    id: 2,
    name: "James Carter",
    role: "Web Developer",
    articles: 35,
    image: "/images/authors/author2.jpg",
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "UI/UX Designer",
    articles: 28,
    image: "/images/authors/author3.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Cloud Engineer",
    articles: 31,
    image: "/images/authors/author4.jpg",
  },
];

export default function TopAuthors() {
  return (
    <section className="bg-gray-50 py-16">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Community
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Top Authors
          </h2>

          <p className="mt-3 max-w-2xl text-gray-500">
            Meet some of the writers and creators sharing their knowledge
            with the PublishHub community.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {authors.map((author) => (
            <div
              key={author.id}
              className="rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <Image
                src={author.image}
                alt={author.name}
                width={120}
                height={120}
                className="mx-auto h-[120px] w-[120px] rounded-full object-cover"
              />

              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {author.name}
              </h3>

              <p className="mt-1 text-gray-500">
                {author.role}
              </p>

              <p className="mt-3 font-medium text-[14px] text-[#7C3AED]">
                {author.articles} Publications
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}