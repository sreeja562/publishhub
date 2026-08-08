"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Temporary admin credentials
    const adminEmail = "admin@publishhub.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("publishhubAdmin", "true");

      router.push("/admin");
    } else {
      setError("Invalid admin email or password");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            PublishHub
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Administrator Login
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Admin Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@publishhub.com"
              required
              className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-[#7C3AED] focus:ring-2 focus:ring-purple-100"
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
              placeholder="Enter admin password"
              required
              className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-[#7C3AED] focus:ring-2 focus:ring-purple-100"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#7C3AED] px-5 py-3 font-semibold text-white transition hover:bg-[#6D28D9]"
          >
            Login as Admin
          </button>

        </form>

        {/* Back */}
        <button
          onClick={() => router.push("/")}
          className="mt-6 w-full text-center text-sm text-gray-500 hover:text-gray-900"
        >
          ← Back to PublishHub
        </button>

      </div>
    </main>
  );
}