"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Role = "reader" | "author" | "reader-author";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("reader");
  const [error, setError] = useState("");

  function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    const user = {
      name,
      email,
      password,
      role,
    };

    // Temporary storage until the backend/database is connected.
    localStorage.setItem("publishhubUser", JSON.stringify(user));

    // Redirect based on selected role.
    if (role === "author" || role === "reader-author") {
      router.push("/dashboard");
    } else {
      router.push("/");
    }
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-lg">

        {/* Header */}
        <div className="mb-8 text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-black text-white">
            📖
          </div>

          <h1 className="mt-5 text-3xl font-bold text-gray-900">
            Create your account
          </h1>

          <p className="mt-2 text-gray-500">
            Join the PublishHub community
          </p>

        </div>

        {/* Registration Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

          <form onSubmit={handleRegister} className="space-y-5">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
              />

              <p className="mt-1 text-xs text-gray-400">
                Minimum 6 characters
              </p>
            </div>

            {/* Role */}
            <div>
              <label className="mb-3 block text-sm font-medium text-gray-700">
                Choose your role
              </label>

              <div className="space-y-3">

                {/* Reader */}
                <button
                  type="button"
                  onClick={() => setRole("reader")}
                  className={`w-full rounded-xl border p-4 text-left transition ${
                    role === "reader"
                      ? "border-[#7C3AED] bg-purple-50 ring-2 ring-[#7C3AED]/20"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-start gap-3">

                    <span className="text-2xl">
                      📖
                    </span>

                    <div>
                      <p className="font-semibold text-gray-900">
                        Reader
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        Read publications, like, comment, bookmark, share,
                        and follow authors.
                      </p>
                    </div>

                  </div>
                </button>

                {/* Author */}
                <button
                  type="button"
                  onClick={() => setRole("author")}
                  className={`w-full rounded-xl border p-4 text-left transition ${
                    role === "author"
                      ? "border-[#7C3AED] bg-purple-50 ring-2 ring-[#7C3AED]/20"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-start gap-3">

                    <span className="text-2xl">
                      ✍️
                    </span>

                    <div>
                      <p className="font-semibold text-gray-900">
                        Author
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        Write publications, save drafts, submit articles,
                        manage your publications, and follow authors.
                      </p>
                    </div>

                  </div>
                </button>

                {/* Reader + Author */}
                <button
                  type="button"
                  onClick={() => setRole("reader-author")}
                  className={`w-full rounded-xl border p-4 text-left transition ${
                    role === "reader-author"
                      ? "border-[#7C3AED] bg-purple-50 ring-2 ring-[#7C3AED]/20"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-start gap-3">

                    <span className="text-2xl">
                      👥
                    </span>

                    <div>
                      <p className="font-semibold text-gray-900">
                        Reader & Author
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        Get all reader and author features in one account.
                      </p>
                    </div>

                  </div>
                </button>

              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#7C3AED] py-3 font-semibold text-white transition hover:bg-[#6D28D9]"
            >
              Create Account
            </button>

          </form>

        </div>

        {/* Login */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-[#7C3AED] hover:text-[#6D28D9]"
          >
            Login
          </Link>
        </p>

      </div>

    </main>
  );
}