"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AuthPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("publishhubUser");

    if (user) {
      return;
    }

    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!showPrompt) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">

        <button
          onClick={() => setShowPrompt(false)}
          className="absolute right-4 top-4 text-2xl text-gray-400 hover:text-gray-700"
        >
          ×
        </button>

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-2xl">
          📖
        </div>

        <div className="mt-5 text-center">

          <h2 className="text-2xl font-bold text-gray-900">
            Join PublishHub
          </h2>

          <p className="mt-3 text-gray-500">
            Create an account to follow authors, like publications,
            comment, bookmark articles, and more.
          </p>

        </div>

        <div className="mt-7 grid grid-cols-2 gap-3">

          <Link
            href="/login"
            className="rounded-lg border border-gray-200 px-5 py-3 text-center font-semibold text-gray-700 hover:bg-gray-50"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-[#7C3AED] px-5 py-3 text-center font-semibold text-white hover:bg-[#6D28D9]"
          >
            Sign Up
          </Link>

        </div>

        <button
          onClick={() => setShowPrompt(false)}
          className="mt-5 block w-full text-center text-sm text-gray-400 hover:text-gray-600"
        >
          Maybe later
        </button>

      </div>
    </div>
  );
}