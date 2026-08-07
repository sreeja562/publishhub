"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold">
          PublishHub
        </Link>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/authors">Authors</Link>
        </div>
      </nav>
    </header>
  );
}