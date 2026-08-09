"use client";

import {
  FileText,
  Users,
  Eye,
  Clock,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-[#0b0b0f] dark:text-white">

      {/* Header */}

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7C3AED] dark:text-[#A78BFA]">
          Overview
        </p>

        <h1 className="mt-3 text-5xl font-serif font-bold text-slate-900 dark:text-white">
          Welcome, Admin 👋
        </h1>

        <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
          Manage your PublishHub platform from here.
        </p>
      </div>

      {/* Statistics */}

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        {/* Total Articles */}

        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.06]">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Total Articles
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
                24
              </h2>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/10">
              <FileText className="h-6 w-6 text-slate-700 dark:text-slate-200" />
            </div>

          </div>
        </div>

        {/* Authors */}

        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.06]">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Authors
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
                12
              </h2>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/10">
              <Users className="h-6 w-6 text-slate-700 dark:text-slate-200" />
            </div>

          </div>
        </div>

        {/* Total Views */}

        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.06]">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Total Views
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
                8.4K
              </h2>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/10">
              <Eye className="h-6 w-6 text-slate-700 dark:text-slate-200" />
            </div>

          </div>
        </div>

        {/* Pending Review */}

        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.06]">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Pending Review
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
                5
              </h2>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/10">
              <Clock className="h-6 w-6 text-slate-700 dark:text-slate-200" />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}