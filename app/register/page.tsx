"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  Check,
  PenLine,
  Users,
  Eye,
  EyeOff,
} from "lucide-react";

type Role = "reader" | "author" | "reader-author";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [role, setRole] = useState<Role>("reader");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");

  function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const user = {
      name: name.trim(),
      email: email.trim(),
      password,
      role,
    };

    // Temporary storage until backend/database is connected.
    localStorage.setItem("publishhubUser", JSON.stringify(user));

    // Notify the navbar that login/signup state changed.
    window.dispatchEvent(new Event("publishhubAuthChange"));

    // Redirect based on selected role.
    if (role === "author" || role === "reader-author") {
      router.push("/dashboard");
    } else {
      router.push("/");
    }
  }

  const roles = [
    {
      id: "reader" as Role,
      title: "Reader",
      description:
        "Read publications, like, comment, bookmark, share, and follow authors.",
      icon: BookOpen,
    },
    {
      id: "author" as Role,
      title: "Author",
      description:
        "Write publications, save drafts, submit articles, manage publications, and follow authors.",
      icon: PenLine,
    },
    {
      id: "reader-author" as Role,
      title: "Reader & Author",
      description:
        "Get all reader and author features in one account.",
      icon: Users,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-950 transition-colors dark:bg-[#0b0b0d] dark:text-white">

      {/* ================= BACK BUTTON ================= */}
      <div className="mx-auto max-w-6xl px-5 pt-6 md:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>

      {/* ================= SIGNUP AREA ================= */}
      <section className="mx-auto flex w-full max-w-2xl justify-center px-5 py-10 md:px-8 md:py-14">

        <div className="w-full">

          {/* ================= HEADER ================= */}
          <div className="mb-8 text-center">

            {/* Logo */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#7C3AED] text-white shadow-lg shadow-purple-500/20">
              <BookOpen size={30} strokeWidth={2} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#7C3AED]">
              Join PublishHub
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white md:text-4xl">
              Create your account
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500 dark:text-gray-400 md:text-base">
              Join a community where readers and authors come together
              to discover and share ideas.
            </p>

          </div>

          {/* ================= REGISTRATION CARD ================= */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200/40 dark:border-white/10 dark:bg-[#151518] dark:shadow-black/30 md:p-8">

            <form
              onSubmit={handleRegister}
              className="space-y-6"
            >

              {/* ================= NAME ================= */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200"
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
                  className="
                    w-full rounded-xl border border-gray-200
                    bg-gray-50 px-4 py-3.5 text-sm text-gray-950
                    outline-none transition
                    placeholder:text-gray-400
                    focus:border-[#7C3AED]
                    focus:ring-4 focus:ring-[#7C3AED]/10
                    dark:border-white/10
                    dark:bg-[#0f0f12]
                    dark:text-white
                    dark:placeholder:text-gray-500
                    dark:focus:border-[#8B5CF6]
                    dark:focus:ring-[#7C3AED]/10
                  "
                />
              </div>

              {/* ================= EMAIL ================= */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200"
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
                  className="
                    w-full rounded-xl border border-gray-200
                    bg-gray-50 px-4 py-3.5 text-sm text-gray-950
                    outline-none transition
                    placeholder:text-gray-400
                    focus:border-[#7C3AED]
                    focus:ring-4 focus:ring-[#7C3AED]/10
                    dark:border-white/10
                    dark:bg-[#0f0f12]
                    dark:text-white
                    dark:placeholder:text-gray-500
                    dark:focus:border-[#8B5CF6]
                    dark:focus:ring-[#7C3AED]/10
                  "
                />
              </div>

              {/* ================= PASSWORD ================= */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200"
                >
                  Password
                </label>

                <div className="relative">

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a password"
                    required
                    className="
                      w-full rounded-xl border border-gray-200
                      bg-gray-50 px-4 py-3.5 pr-12 text-sm text-gray-950
                      outline-none transition
                      placeholder:text-gray-400
                      focus:border-[#7C3AED]
                      focus:ring-4 focus:ring-[#7C3AED]/10
                      dark:border-white/10
                      dark:bg-[#0f0f12]
                      dark:text-white
                      dark:placeholder:text-gray-500
                      dark:focus:border-[#8B5CF6]
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((current) => !current)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-gray-400 transition hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

                <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                  Minimum 6 characters
                </p>
              </div>

              {/* ================= CONFIRM PASSWORD ================= */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200"
                >
                  Confirm Password
                </label>

                <div className="relative">

                  <input
                    id="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                    placeholder="Confirm your password"
                    required
                    className="
                      w-full rounded-xl border border-gray-200
                      bg-gray-50 px-4 py-3.5 pr-12 text-sm text-gray-950
                      outline-none transition
                      placeholder:text-gray-400
                      focus:border-[#7C3AED]
                      focus:ring-4 focus:ring-[#7C3AED]/10
                      dark:border-white/10
                      dark:bg-[#0f0f12]
                      dark:text-white
                      dark:placeholder:text-gray-500
                      dark:focus:border-[#8B5CF6]
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        (current) => !current
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-gray-400 transition hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                    aria-label={
                      showConfirmPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>
              </div>

              {/* ================= ROLE ================= */}
              <div>

                <div className="mb-3">

                  <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Choose your role
                  </label>

                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                    Select how you want to use PublishHub.
                  </p>

                </div>

                <div className="space-y-3">

                  {roles.map((item) => {

                    const Icon = item.icon;
                    const selected = role === item.id;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setRole(item.id)}
                        className={`
                          relative w-full rounded-2xl border p-4
                          text-left transition-all duration-200
                          ${
                            selected
                              ? "border-[#7C3AED] bg-purple-50 ring-2 ring-[#7C3AED]/15 dark:border-[#8B5CF6] dark:bg-[#24183d] dark:ring-[#7C3AED]/20"
                              : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 dark:border-white/10 dark:bg-[#101014] dark:hover:border-white/20 dark:hover:bg-[#18181c]"
                          }
                        `}
                      >

                        <div className="flex items-start gap-4">

                          {/* Icon */}
                          <div
                            className={`
                              flex h-11 w-11 shrink-0 items-center
                              justify-center rounded-xl
                              ${
                                selected
                                  ? "bg-[#7C3AED] text-white"
                                  : "bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-300"
                              }
                            `}
                          >
                            <Icon size={21} />
                          </div>

                          {/* Text */}
                          <div className="flex-1 pr-6">

                            <p
                              className={`
                                font-semibold
                                ${
                                  selected
                                    ? "text-[#6D28D9] dark:text-[#C4B5FD]"
                                    : "text-gray-900 dark:text-white"
                                }
                              `}
                            >
                              {item.title}
                            </p>

                            <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                              {item.description}
                            </p>

                          </div>

                          {/* Selected indicator */}
                          {selected && (
                            <div className="absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#7C3AED] text-white">
                              <Check size={13} strokeWidth={3} />
                            </div>
                          )}

                        </div>

                      </button>
                    );
                  })}

                </div>

              </div>

              {/* ================= ERROR ================= */}
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
                  {error}
                </div>
              )}

              {/* ================= SUBMIT ================= */}
              <button
                type="submit"
                className="
                  w-full rounded-xl bg-[#7C3AED]
                  px-6 py-3.5 text-sm font-semibold text-white
                  shadow-lg shadow-purple-500/20
                  transition-all duration-200
                  hover:bg-[#6D28D9]
                  hover:shadow-purple-500/30
                  active:scale-[0.99]
                "
              >
                Create Account
              </button>

            </form>

          </div>

          {/* ================= LOGIN ================= */}
          <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">

            Already have an account?{" "}

            <Link
              href="/login"
              className="font-semibold text-[#7C3AED] transition hover:text-[#6D28D9] dark:text-[#A78BFA] dark:hover:text-[#C4B5FD]"
            >
              Login
            </Link>

          </p>

          {/* ================= FOOTNOTE ================= */}
          <p className="mt-5 text-center text-xs leading-5 text-gray-400 dark:text-gray-600">
            By creating an account, you agree to use PublishHub
            responsibly and respectfully.
          </p>

        </div>

      </section>

    </main>
  );
}