import Image from "next/image";

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
    <section className="max-w-7xl mx-auto px-6 py-14">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Top Authors
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {authors.map((author) => (
          <div
            key={author.id}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition"
          >
            <Image
              src={author.image}
              alt={author.name}
              width={120}
              height={120}
              className="rounded-full mx-auto object-cover"
            />

            <h3 className="mt-4 text-xl font-semibold">
              {author.name}
            </h3>

            <p className="text-gray-500">
              {author.role}
            </p>

            <p className="mt-2 text-blue-600 font-medium">
              {author.articles} Articles
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}