"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  PenLine,
  Users,
  Settings,
  LogOut,
  ArrowLeft,
  Camera,
  User,
  Mail,
  MapPin,
  Globe,
  Save,
} from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [name, setName] = useState("Sreeja Kumbaji");
  const [email, setEmail] = useState("sreeja@example.com");
  const [bio, setBio] = useState(
    "Technology enthusiast and author sharing ideas about development, AI, design and research."
  );
  const [location, setLocation] = useState("Hyderabad, India");
  const [website, setWebsite] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [github, setGithub] = useState("");

  return (
    <main className="min-h-screen bg-[#f8f8f6] text-[#111111]">

      {/* ================= TOP NAVBAR ================= */}

      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">

        <div className="flex h-16 items-center justify-between px-5 md:px-8">

          <Link
            href="/"
            className="text-2xl font-bold"
          >
            Publish<span className="text-blue-600">Hub</span>
          </Link>

          <div className="flex items-center gap-3">

            <Link
              href="/"
              className="hidden text-sm text-gray-500 transition hover:text-black sm:block"
            >
              View Website
            </Link>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
              S
            </div>

          </div>

        </div>

      </header>


      {/* ================= DASHBOARD LAYOUT ================= */}

      <div className="flex min-h-[calc(100vh-64px)]">


        {/* ================= SIDEBAR ================= */}

        <aside className="hidden w-64 shrink-0 border-r border-black/5 bg-white lg:block">

          <div className="flex h-full flex-col p-5">

            {/* AUTHOR CARD */}

            <div className="mb-7 rounded-2xl bg-[#f8f8f6] p-4">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                  S
                </div>

                <div className="min-w-0">

                  <p className="truncate text-sm font-semibold">
                    Sreeja Kumbaji
                  </p>

                  <p className="truncate text-xs text-gray-400">
                    Author
                  </p>

                </div>

              </div>

            </div>


            {/* NAVIGATION */}

            <nav className="space-y-1">

              <SidebarLink
                href="/dashboard"
                icon={<LayoutDashboard size={18} />}
                label="Overview"
              />

              <SidebarLink
                href="/dashboard/articles"
                icon={<FileText size={18} />}
                label="My Articles"
              />

              <SidebarLink
                href="/dashboard/write"
                icon={<PenLine size={18} />}
                label="Write Article"
              />

              <SidebarLink
                href="/dashboard/followers"
                icon={<Users size={18} />}
                label="Followers"
              />

              <SidebarLink
                href="/dashboard/settings"
                icon={<Settings size={18} />}
                label="Profile Settings"
                active
              />

            </nav>


            {/* LOGOUT */}

            <div className="mt-auto border-t border-black/5 pt-4">

              <Link
                href="/"
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-500 transition hover:bg-red-50 hover:text-red-600"
              >
                <LogOut size={18} />
                Log out
              </Link>

            </div>

          </div>

        </aside>


        {/* ================= MAIN CONTENT ================= */}

        <section className="w-full px-5 py-8 md:px-8 md:py-10">

          <div className="mx-auto max-w-5xl">


            {/* BACK TO DASHBOARD */}

            <Link
              href="/dashboard"
              className="mb-5 flex w-fit items-center gap-2 text-sm text-gray-400 transition hover:text-black"
            >
              <ArrowLeft size={15} />
              Dashboard
            </Link>


            {/* PAGE HEADER */}

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                Account
              </p>

              <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight">
                Profile Settings
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Manage your author profile and public information.
              </p>

            </div>


            {/* ================= PROFILE IMAGE ================= */}

            <div className="mt-8 rounded-3xl border border-black/5 bg-white p-6 md:p-8">

              <h2 className="font-semibold">
                Profile Picture
              </h2>

              <p className="mt-1 text-xs text-gray-400">
                This image will appear on your author profile and articles.
              </p>


              <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">

                {/* AVATAR */}

                <div className="relative">

                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-3xl font-semibold text-blue-600">
                    S
                  </div>

                  <button
                    type="button"
                    className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white shadow-md transition hover:bg-blue-600"
                    aria-label="Change profile picture"
                  >
                    <Camera size={15} />
                  </button>

                </div>


                <div>

                  <p className="text-sm font-medium">
                    Sreeja Kumbaji
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    JPG, PNG or WEBP · Maximum 2MB
                  </p>

                  <button
                    type="button"
                    className="mt-3 rounded-full border border-black/10 px-4 py-2 text-xs font-medium transition hover:bg-gray-100"
                  >
                    Upload New Picture
                  </button>

                </div>

              </div>

            </div>


            {/* ================= BASIC INFORMATION ================= */}

            <div className="mt-6 rounded-3xl border border-black/5 bg-white p-6 md:p-8">

              <div>

                <h2 className="font-semibold">
                  Basic Information
                </h2>

                <p className="mt-1 text-xs text-gray-400">
                  This information will be visible on your public author profile.
                </p>

              </div>


              <div className="mt-6 grid gap-5 md:grid-cols-2">


                {/* NAME */}

                <InputField
                  label="Full Name"
                  icon={<User size={17} />}
                  value={name}
                  onChange={setName}
                  placeholder="Enter your name"
                />


                {/* EMAIL */}

                <InputField
                  label="Email Address"
                  icon={<Mail size={17} />}
                  value={email}
                  onChange={setEmail}
                  placeholder="Enter your email"
                  type="email"
                />


                {/* LOCATION */}

                <InputField
                  label="Location"
                  icon={<MapPin size={17} />}
                  value={location}
                  onChange={setLocation}
                  placeholder="City, Country"
                />


                {/* WEBSITE */}

                <InputField
                  label="Website"
                  icon={<Globe size={17} />}
                  value={website}
                  onChange={setWebsite}
                  placeholder="https://yourwebsite.com"
                />

              </div>


              {/* BIO */}

              <div className="mt-5">

                <label
                  htmlFor="bio"
                  className="mb-2 block text-sm font-medium"
                >
                  Author Bio
                </label>

                <textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={5}
                  maxLength={300}
                  placeholder="Tell readers about yourself..."
                  className="w-full resize-none rounded-xl border border-black/10 bg-[#f8f8f6] px-4 py-3 text-sm leading-6 outline-none transition focus:border-blue-500 focus:bg-white"
                />

                <p className="mt-1 text-right text-xs text-gray-400">
                  {bio.length}/300
                </p>

              </div>

            </div>


            {/* ================= SOCIAL LINKS ================= */}

            <div className="mt-6 rounded-3xl border border-black/5 bg-white p-6 md:p-8">

              <h2 className="font-semibold">
                Social Links
              </h2>

              <p className="mt-1 text-xs text-gray-400">
                Add your social profiles so readers can connect with you.
              </p>


              <div className="mt-6 space-y-5">


                {/* LINKEDIN */}

               


                {/* TWITTER */}

        


                {/* GITHUB */}

                

              </div>

            </div>


            {/* ================= SAVE ================= */}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">

              <Link
                href="/dashboard"
                className="rounded-full border border-black/10 px-6 py-3 text-center text-sm font-medium transition hover:bg-gray-100"
              >
                Cancel
              </Link>

              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
              >
                <Save size={16} />
                Save Changes
              </button>

            </div>


            {/* ================= PUBLIC PROFILE PREVIEW ================= */}

            <div className="mt-10 rounded-3xl border border-blue-100 bg-blue-50/50 p-6 md:p-8">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Public Profile
              </p>

              <h2 className="mt-2 font-serif text-2xl font-semibold">
                This is how readers will see you
              </h2>


              <div className="mt-6 rounded-2xl border border-black/5 bg-white p-5">

                <div className="flex items-start gap-4">

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xl font-semibold text-blue-600">
                    {name.charAt(0).toUpperCase()}
                  </div>

                  <div className="min-w-0">

                    <h3 className="font-semibold">
                      {name || "Your Name"}
                    </h3>

                    <p className="mt-1 text-xs text-gray-400">
                      Author · {location || "Your Location"}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {bio || "Your author bio will appear here."}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}


/* ================= SIDEBAR LINK ================= */

function SidebarLink({
  href,
  icon,
  label,
  active = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
        active
          ? "bg-blue-50 text-blue-600"
          : "text-gray-500 hover:bg-gray-50 hover:text-black"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}


/* ================= INPUT FIELD ================= */

function InputField({
  label,
  icon,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-medium">
        {label}
      </label>

      <div className="relative">

        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>

        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-xl border border-black/10 bg-[#f8f8f6] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
        />

      </div>

    </div>
  );
}


/* ================= SOCIAL INPUT ================= */

function SocialInput({
  label,
  icon,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-medium">
        {label}
      </label>

      <div className="relative">

        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>

        <input
          type="url"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-xl border border-black/10 bg-[#f8f8f6] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
        />

      </div>

    </div>
  );
}