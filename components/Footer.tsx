import Link from "next/link";
import { BookOpen, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div className="lg:col-span-2">

          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black">
              <BookOpen size={21} />
            </div>

            <span className="text-2xl font-bold">
              PublishHub
            </span>
          </Link>

          <p className="mt-5 max-w-md leading-7 text-gray-400">
            A modern multi-author publication platform for sharing
            knowledge, tutorials, ideas, and stories with the world.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex gap-3">

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-sm font-semibold text-gray-400 transition hover:bg-white hover:text-black"
            >
              IG
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-sm font-semibold text-gray-400 transition hover:bg-white hover:text-black"
            >
              X
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-sm font-semibold text-gray-400 transition hover:bg-white hover:text-black"
            >
              IN
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>

          <h3 className="mb-5 text-lg font-semibold">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>
              <Link
                href="/"
                className="transition hover:text-white"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/explore"
                className="transition hover:text-white"
              >
                Explore
              </Link>
            </li>

            <li>
              <Link
                href="/articles"
                className="transition hover:text-white"
              >
                Publications
              </Link>
            </li>

            <li>
              <Link
                href="/authors"
                className="transition hover:text-white"
              >
                Authors
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="transition hover:text-white"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="transition hover:text-white"
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>

          <h3 className="mb-5 text-lg font-semibold">
            Contact
          </h3>

          <div className="space-y-4 text-gray-400">

            <div className="flex items-start gap-3">
              <Mail
                size={18}
                className="mt-1 shrink-0"
              />

              <span>
                support@publishhub.com
              </span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin
                size={18}
                className="mt-1 shrink-0"
              />

              <span>
                Hyderabad, India
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-gray-500 md:flex-row">

          <p>
            © 2026 PublishHub. All Rights Reserved.
          </p>

          <div className="flex gap-5">

            <Link
              href="#"
              className="transition hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="transition hover:text-white"
            >
              Terms
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}