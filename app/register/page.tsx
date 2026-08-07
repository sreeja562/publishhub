"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  PenLine,
} from "lucide-react";
import { useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="min-h-screen bg-[#f8f8f6] text-[#111111]">

      {/* HEADER */}

      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">

        <div className="flex h-16 items-center justify-between px-5 md:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-black"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

        </div>

      </header>


      {/* REGISTER AREA */}

      <section className="flex items-center justify-center px-5 py-12 md:py-16">

        <div className="w-full max-w-md">

          {/* TITLE */}

          <div className="text-center">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <PenLine size={21} />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              Become an Author
            </p>

            <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">
              Create your account
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Join PublishHub and share your ideas with the community.
            </p>

          </div>


          {/* REGISTER CARD */}

          <div className="mt-8 rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:p-8">

            <form className="space-y-5">

              {/* FULL NAME */}

              <div>

                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Full name
                </label>

                <div className="relative">

                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-black/10 bg-[#f8f8f6] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                  />

                </div>

              </div>


              {/* EMAIL */}

              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email address
                </label>

                <div className="relative">

                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-black/10 bg-[#f8f8f6] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                  />

                </div>

              </div>


              {/* PASSWORD */}

              <div>

                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium"
                >
                  Password
                </label>

                <div className="relative">

                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="w-full rounded-xl border border-black/10 bg-[#f8f8f6] py-3 pl-11 pr-12 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-black"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

              </div>


              {/* CONFIRM PASSWORD */}

              <div>

                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium"
                >
                  Confirm password
                </label>

                <div className="relative">

                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm your password"
                    className="w-full rounded-xl border border-black/10 bg-[#f8f8f6] py-3 pl-11 pr-12 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-black"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

              </div>


              {/* TERMS */}

              <div className="flex items-start gap-2">

                <input
                  id="terms"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-gray-300"
                />

                <label
                  htmlFor="terms"
                  className="text-xs leading-5 text-gray-500"
                >
                  I agree to the PublishHub terms and
                  community guidelines.
                </label>

              </div>


              {/* CREATE ACCOUNT */}

              <button
                type="submit"
                className="w-full rounded-xl bg-black py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Create Author Account
              </button>

            </form>


            {/* LOGIN */}

            <div className="mt-7 border-t border-black/5 pt-6 text-center">

              <p className="text-sm text-gray-500">

                Already have an account?{" "}

                <Link
                  href="/login"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Sign in
                </Link>

              </p>

            </div>

          </div>


          {/* NOTE */}

          <p className="mt-6 text-center text-xs leading-5 text-gray-400">
            Your author profile will allow readers to discover
            your articles and follow your work.
          </p>

        </div>

      </section>

    </main>
  );
}