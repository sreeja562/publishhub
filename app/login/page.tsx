"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const demoUsers = [
  {
    email: "reader@publishhub.com",
    password: "Reader@123",
    name: "Demo Reader",
    role: "reader",
  },
  {
    email: "author@publishhub.com",
    password: "Author@123",
    name: "Demo Author",
    role: "author",
  },
  {
    email: "creator@publishhub.com",
    password: "Creator@123",
    name: "Demo Creator",
    role: "reader-author",
  },
];

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    const user = demoUsers.find(
      (demoUser) =>
        demoUser.email === email.trim() &&
        demoUser.password === password
    );

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem(
      "publishhubUser",
      JSON.stringify({
        name: user.name,
        email: user.email,
        role: user.role,
      })
    );
   if (user.role === "reader") {
  router.push("/reader");
} else if (user.role === "author" || user.role === "reader-author") {
  router.push("/dashboard");
} else {
  router.push("/");
}
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-black text-white text-2xl">
            📖
          </div>

          <h1 className="mt-5 text-3xl font-bold text-gray-900">
            Welcome back
          </h1>

          <p className="mt-2 text-gray-500">
            Login to your PublishHub account
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>

              <input
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
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#7C3AED] py-3 font-semibold text-white transition hover:bg-[#6D28D9]"
            >
              Login
            </button>

          </form>

          {/* Demo Credentials */}
          <div className="mt-8 rounded-xl bg-gray-50 p-4">

            <h3 className="font-semibold text-gray-900">
              Demo Credentials
            </h3>

            <div className="mt-3 space-y-4 text-sm text-gray-600">

              {/* Reader */}
              <div>
                <p className="font-medium text-gray-800">
                  Reader
                </p>
                <p>reader@publishhub.com</p>
                <p>Reader@123</p>
              </div>

              {/* Author */}
              <div>
                <p className="font-medium text-gray-800">
                  Author
                </p>
                <p>author@publishhub.com</p>
                <p>Author@123</p>
              </div>

              {/* Reader + Author */}
              <div>
                <p className="font-medium text-gray-800">
                  Reader + Author
                </p>
                <p>creator@publishhub.com</p>
                <p>Creator@123</p>
              </div>

            </div>
          </div>

        </div>

        {/* Register */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-[#7C3AED] hover:text-[#6D28D9]"
          >
            Sign up
          </Link>
        </p>

      </div>
    </main>
  );
}