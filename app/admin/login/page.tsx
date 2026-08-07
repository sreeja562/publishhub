"use client";

import { useState } from "react";
import { ShieldCheck, Eye, EyeOff } from "lucide-react";

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Temporary frontend login
    if (
      email === "admin@publishhub.com" &&
      password === "admin123"
    ) {
      window.location.href = "/admin";
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f8f6] px-5">
      <div className="w-full max-w-md">

        {/* ADMIN ICON */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
          <ShieldCheck size={28} />
        </div>

        {/* TITLE */}
        <div className="mt-6 text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            Administration
          </p>

          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">
            Admin Login
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Sign in to manage PublishHub.
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleLogin}
          className="mt-8 rounded-3xl border border-black/5 bg-white p-7 shadow-sm"
        >

          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Admin Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@publishhub.com"
              required
              className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500"
            />
          </div>

          {/* PASSWORD */}
          <div className="mt-5">

            <label className="text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="relative mt-2">

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 pr-12 text-sm outline-none transition focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-black px-4 py-3.5 text-sm font-medium text-white transition hover:bg-blue-600"
          >
            Sign in as Admin
          </button>

        </form>

        {/* SMALL NOTE */}
        <p className="mt-5 text-center text-xs text-gray-400">
          Restricted administrative access
        </p>

      </div>
    </main>
  );
}