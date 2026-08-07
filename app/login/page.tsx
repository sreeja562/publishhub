"use client";

import Link from "next/link";
import { Eye, EyeOff, ArrowLeft, Mail, Lock } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-[#f8f8f6] text-[#111111]">

      {/* HEADER */}


      {/* LOGIN AREA */}

      <section className="flex min-h-[calc(100vh-73px)] items-center justify-center px-5 py-12">

        <div className="w-full max-w-md">

          {/* TITLE */}

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              Welcome Back
            </p>

            <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">
              Sign in to PublishHub
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Sign in to manage your articles and continue writing.
            </p>

          </div>


          {/* LOGIN CARD */}

          <div className="mt-8 rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:p-8">

            <form className="space-y-5">

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

                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="text-sm font-medium"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-medium text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </button>

                </div>


                <div className="relative">

                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-black/10 bg-[#f8f8f6] py-3 pl-11 pr-12 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                  />


                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-black"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

              </div>


              {/* REMEMBER ME */}

              <div className="flex items-center gap-2">

                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-gray-500"
                >
                  Remember me
                </label>

              </div>


              {/* LOGIN BUTTON */}

              <button
                type="submit"
                className="w-full rounded-xl bg-black py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Sign In
              </button>

            </form>


            {/* REGISTER */}

            <div className="mt-7 border-t border-black/5 pt-6 text-center">

              <p className="text-sm text-gray-500">

                Don't have an author account?{" "}

                <Link
                  href="/register"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Create account
                </Link>

              </p>

            </div>

          </div>


          {/* AUTHOR NOTE */}

          <div className="mt-6 text-center">

            <p className="text-xs leading-5 text-gray-400">
              Only registered authors can create and submit
              articles on PublishHub.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}