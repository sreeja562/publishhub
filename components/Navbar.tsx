"use client";

import Link from "next/link";
import { BookOpen, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const user = localStorage.getItem("publishhubUser");
      setIsLoggedIn(!!user);
    };

    checkLogin();

    window.addEventListener("storage", checkLogin);
    window.addEventListener("publishhub-login", checkLogin);
    window.addEventListener("publishhub-logout", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
      window.removeEventListener("publishhub-login", checkLogin);
      window.removeEventListener("publishhub-logout", checkLogin);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("publishhubUser");

    setIsLoggedIn(false);
    setIsOpen(false);

    window.dispatchEvent(new Event("publishhub-logout"));

    window.location.href = "/";
  };

  return (
    <nav className="border-b border-gray-100 bg-white">
      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white">
            <BookOpen size={21} />
          </div>

          <span className="text-xl font-bold tracking-tight text-gray-900">
            PublishHub
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">

          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-[#7C3AED]"
          >
            Home
          </Link>

          <Link
            href="/explore"
            className="text-sm font-medium text-gray-700 transition hover:text-[#7C3AED]"
          >
            Explore
          </Link>

          <Link
            href="/articles"
            className="text-sm font-medium text-gray-700 transition hover:text-[#7C3AED]"
          >
            Publications
          </Link>

          <Link
            href="/authors"
            className="text-sm font-medium text-gray-700 transition hover:text-[#7C3AED]"
          >
            Authors
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 transition hover:text-[#7C3AED]"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-gray-700 transition hover:text-[#7C3AED]"
          >
            Contact
          </Link>

        </div>

        {/* Desktop Auth */}
        <div className="hidden items-center gap-3 md:flex">

          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-lg bg-[#7C3AED] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#6D28D9]"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/dashboard"
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                Account
              </Link>

              <button
                onClick={handleLogout}
                className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700"
              >
                Logout
              </button>
            </>
          )}

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-gray-800 transition hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-5 md:hidden">

          <div className="flex flex-col gap-4">

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#7C3AED]"
            >
              Home
            </Link>

            <Link
              href="/explore"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#7C3AED]"
            >
              Explore
            </Link>

            <Link
              href="/articles"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#7C3AED]"
            >
              Publications
            </Link>

            <Link
              href="/authors"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#7C3AED]"
            >
              Authors
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#7C3AED]"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#7C3AED]"
            >
              Contact
            </Link>

            {/* Mobile Auth */}
            <div className="mt-2 border-t border-gray-100 pt-4">

              {!isLoggedIn ? (
                <div className="flex gap-3">

                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 rounded-lg border border-gray-200 py-2 text-center text-sm font-medium text-gray-700 hover:border-[#7C3AED] hover:text-[#7C3AED]"
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 rounded-lg bg-[#7C3AED] py-2 text-center text-sm font-medium text-white hover:bg-[#6D28D9]"
                  >
                    Sign Up
                  </Link>

                </div>
              ) : (
                <div className="flex gap-3">

                  <Link
                    href="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 rounded-lg border border-gray-200 py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Account
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="flex-1 rounded-lg bg-gray-900 py-2 text-sm font-medium text-white hover:bg-gray-700"
                  >
                    Logout
                  </button>

                </div>
              )}

            </div>

          </div>

        </div>
      )}

    </nav>
  );
}