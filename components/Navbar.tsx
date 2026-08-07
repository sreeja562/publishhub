import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          PublishHub
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/authors">Authors</Link>
          <Link href="/about">About</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}