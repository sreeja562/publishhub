"use client";

import Link from "next/link";
import {
  BookOpen,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const user = localStorage.getItem("publishhubUser");
      setIsLoggedIn(!!user);
    };

    checkLogin();

    const savedTheme = localStorage.getItem("publishhub-theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }

    window.addEventListener("storage", checkLogin);
    window.addEventListener("publishhub-login", checkLogin);
    window.addEventListener("publishhub-logout", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
      window.removeEventListener("publishhub-login", checkLogin);
      window.removeEventListener("publishhub-logout", checkLogin);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;

    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("publishhub-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("publishhub-theme", "light");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("publishhubUser");

    setIsLoggedIn(false);
    setIsOpen(false);

    window.dispatchEvent(new Event("publishhub-logout"));

    window.location.href = "/";
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black">
            <BookOpen size={21} />
          </div>

          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            PublishHub
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">

          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-[#7C3AED] dark:text-gray-300"
          >
            Home
          </Link>

          <Link
            href="/explore"
            className="text-sm font-medium text-gray-700 transition hover:text-[#7C3AED] dark:text-gray-300"
          >
            Explore
          </Link>

          <Link
            href="/articles"
            className="text-sm font-medium text-gray-700 transition hover:text-[#7C3AED] dark:text-gray-300"
          >
            Publications
          </Link>

          <Link
            href="/authors"
            className="text-sm font-medium text-gray-700 transition hover:text-[#7C3AED] dark:text-gray-300"
          >
            Authors
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 transition hover:text-[#7C3AED] dark:text-gray-300"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-gray-700 transition hover:text-[#7C3AED] dark:text-gray-300"
          >
            Contact
          </Link>

        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-3 md:flex">

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            {isDark ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>

          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
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
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Account
              </Link>

              <button
                type="button"
                onClick={handleLogout}
                className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Right Side */}
        <div className="flex items-center gap-2 md:hidden">

          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            {isDark ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-800 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-5 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950 md:hidden">

          <div className="flex flex-col gap-4">

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#7C3AED] dark:text-gray-300"
            >
              Home
            </Link>

            <Link
              href="/explore"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#7C3AED] dark:text-gray-300"
            >
              Explore
            </Link>

            <Link
              href="/articles"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#7C3AED] dark:text-gray-300"
            >
              Publications
            </Link>

            <Link
              href="/authors"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#7C3AED] dark:text-gray-300"
            >
              Authors
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#7C3AED] dark:text-gray-300"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#7C3AED] dark:text-gray-300"
            >
              Contact
            </Link>

            {/* Mobile Auth */}
            <div className="mt-2 border-t border-gray-200 pt-4 dark:border-gray-800">

              {!isLoggedIn ? (
                <div className="flex gap-3">

                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 rounded-lg border border-gray-200 py-2 text-center text-sm font-medium text-gray-700 hover:border-[#7C3AED] hover:text-[#7C3AED] dark:border-gray-700 dark:text-gray-300"
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
                    className="flex-1 rounded-lg border border-gray-200 py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    Account
                  </Link>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex-1 rounded-lg bg-gray-900 py-2 text-sm font-medium text-white hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200"
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