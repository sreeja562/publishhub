"use client";

import {
  FileText,
  Users,
  Eye,
  Clock,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-white px-10 py-14">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-semibold tracking-[0.25em] text-blue-600 uppercase">
          Overview
        </p>

        <h1 className="mt-3 text-5xl font-serif font-bold text-slate-900">
          Welcome, Admin 👋
        </h1>

        <p className="mt-4 text-lg text-slate-500">
          Manage your PublishHub platform from here.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">
          
          {/* Total Articles */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Total Articles
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  24
                </h2>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                <FileText className="h-6 w-6 text-slate-700" />
              </div>
            </div>
          </div>

          {/* Authors */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Authors
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  12
                </h2>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                <Users className="h-6 w-6 text-slate-700" />
              </div>
            </div>
          </div>

          {/* Views */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Total Views
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  8.4K
                </h2>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                <Eye className="h-6 w-6 text-slate-700" />
              </div>
            </div>
          </div>

          {/* Pending Review */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Pending Review
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  5
                </h2>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                <Clock className="h-6 w-6 text-slate-700" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}