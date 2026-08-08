"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const admin = localStorage.getItem("publishhubAdmin");

    if (!admin) {
      router.replace("/admin/login");
    }
  }, [router]);

  return (
    <section>
      {/* Page Header */}
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Overview
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Welcome, Admin 👋
        </h1>

        <p className="mt-2 text-gray-500">
          Manage your PublishHub platform from here.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid gap-6 md:grid-cols-3">

        {/* Articles */}
        <Link
          href="/admin/articles"
          className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
            📝
          </div>

          <h2 className="mt-5 text-lg font-semibold text-gray-900">
            Articles
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Manage published articles, drafts, and submitted publications.
          </p>

          <p className="mt-5 text-sm font-semibold text-blue-600">
            Manage Articles →
          </p>
        </Link>

        {/* Authors */}
        <Link
          href="/admin/authors"
          className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-xl">
            👥
          </div>

          <h2 className="mt-5 text-lg font-semibold text-gray-900">
            Authors
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Manage PublishHub authors and view their publication activity.
          </p>

          <p className="mt-5 text-sm font-semibold text-blue-600">
            Manage Authors →
          </p>
        </Link>

        {/* Reviews */}
        <Link
          href="/admin/review"
          className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-xl">
            ✓
          </div>

          <h2 className="mt-5 text-lg font-semibold text-gray-900">
            Review Articles
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Review submitted publications before they are published.
          </p>

          <p className="mt-5 text-sm font-semibold text-blue-600">
            Review Articles →
          </p>
        </Link>

      </div>

      {/* Quick Actions */}
      <div className="mt-10 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">

        <h2 className="text-lg font-semibold text-gray-900">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Quickly access the main administration sections.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">

          <Link
            href="/admin/articles"
            className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Manage Articles
          </Link>

          <Link
            href="/admin/authors"
            className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Manage Authors
          </Link>

          <Link
            href="/admin/review"
            className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Review Articles
          </Link>

        </div>

      </div>
    </section>
  );
}