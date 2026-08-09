"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AuthPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const user = localStorage.getItem("publishhubUser");

    if (user) {
      return;
    }

    // Check if popup has already been shown
    const alreadyShown = localStorage.getItem(
      "publishhubAuthPromptShown"
    );

    if (alreadyShown) {
      return;
    }

    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setShowPrompt(true);

      // Remember that popup has already been shown
      localStorage.setItem(
        "publishhubAuthPromptShown",
        "true"
      );
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!showPrompt) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/50
        px-5
        backdrop-blur-sm

        dark:bg-black/70
      "
    >
      {/* =================================================
          POPUP
      ================================================= */}

      <div
        className="
          relative
          w-full
          max-w-md
          rounded-2xl
          bg-white
          p-8
          shadow-2xl

          dark:border
          dark:border-white/10
          dark:bg-[#111116]
        "
      >

        {/* =================================================
            CLOSE BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={() => setShowPrompt(false)}
          aria-label="Close"
          className="
            absolute
            right-4
            top-4
            text-2xl
            text-gray-400
            transition-colors
            hover:text-gray-700

            dark:text-gray-500
            dark:hover:text-white
          "
        >
          ×
        </button>

        {/* =================================================
            ICON
        ================================================= */}

        <div
          className="
            mx-auto
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-xl
            bg-purple-100
            text-2xl

            dark:bg-purple-500/15
          "
        >
          📖
        </div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="mt-5 text-center">

          <h2
            className="
              text-2xl
              font-bold
              text-gray-900

              dark:text-white
            "
          >
            Join PublishHub
          </h2>

          <p
            className="
              mt-3
              text-gray-500

              dark:text-gray-400
            "
          >
            Create an account to follow authors, like
            publications, comment, bookmark articles,
            and more.
          </p>

        </div>

        {/* =================================================
            ACTION BUTTONS
        ================================================= */}

        <div className="mt-7 grid grid-cols-2 gap-3">

          {/* LOGIN */}

          <Link
            href="/login"
            className="
              rounded-lg
              border
              border-gray-200
              bg-white
              px-5
              py-3
              text-center
              font-semibold
              text-gray-700
              transition-all

              hover:border-gray-300
              hover:bg-gray-100
              hover:text-gray-900

              dark:border-white/10
              dark:bg-white/[0.04]
              dark:text-gray-300
              dark:hover:border-white/20
              dark:hover:bg-white/10
              dark:hover:text-white
            "
          >
            Login
          </Link>

          {/* SIGN UP */}

          <Link
            href="/register"
            className="
              rounded-lg
              bg-[#7C3AED]
              px-5
              py-3
              text-center
              font-semibold
              text-white
              transition-all

              hover:bg-[#6D28D9]
              hover:text-white

              dark:bg-[#7C3AED]
              dark:text-white
              dark:hover:bg-[#8B5CF6]
              dark:hover:text-white
            "
          >
            Sign Up
          </Link>

        </div>

        {/* =================================================
            MAYBE LATER
        ================================================= */}

        <button
          type="button"
          onClick={() => setShowPrompt(false)}
          className="
            mt-5
            block
            w-full
            text-center
            text-sm
            text-gray-400
            transition-colors
            hover:text-gray-600

            dark:text-gray-500
            dark:hover:text-gray-300
          "
        >
          Maybe later
        </button>

      </div>
    </div>
  );
}