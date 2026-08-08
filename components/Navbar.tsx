"use client";

import Link from "next/link";
import {
  Moon,
  Sun,
  Menu,
  X,
  BookOpen,
} from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const { theme, toggleTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  /* =====================================================
     CHECK LOGIN
  ===================================================== */

  useEffect(() => {
    const checkLogin = () => {
      const user =
        localStorage.getItem("publishhubUser");

      setLoggedIn(!!user);
    };

    checkLogin();

    window.addEventListener(
      "publishhub-auth-change",
      checkLogin
    );

    window.addEventListener(
      "storage",
      checkLogin
    );

    return () => {
      window.removeEventListener(
        "publishhub-auth-change",
        checkLogin
      );

      window.removeEventListener(
        "storage",
        checkLogin
      );
    };
  }, []);

  /* =====================================================
     HIDE PUBLIC NAVBAR ON ADMIN PAGES
  ===================================================== */

  if (pathname.startsWith("/admin")) {
    return null;
  }

  /* =====================================================
     NAVIGATION
  ===================================================== */

  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Explore",
      href: "/explore",
    },
    {
      name: "Publications",
      href: "/publications",
    },
    {
      name: "Authors",
      href: "/authors",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  /* =====================================================
     LOGOUT
  ===================================================== */

  const handleLogout = () => {
    localStorage.removeItem("publishhubUser");

    window.dispatchEvent(
      new Event("publishhub-auth-change")
    );

    setLoggedIn(false);
    setMenuOpen(false);

    router.push("/");
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full

        border-b
        border-gray-200

        bg-white/90
        backdrop-blur-xl

        dark:border-white/10
        dark:bg-[#09090b]/90

        transition-colors
        duration-300
      "
    >
      <nav
        className="
          mx-auto
          flex
          h-[76px]
          max-w-7xl
          items-center
          justify-between

          px-5
          sm:px-8
          lg:px-10
        "
      >

        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          href="/"
          className="
            flex
            shrink-0
            items-center
            gap-3
          "
        >
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-xl

              bg-slate-950
              text-white

              shadow-sm

              transition-all
              duration-300

              dark:bg-white
              dark:text-slate-950
            "
          >
            <BookOpen
              size={23}
              strokeWidth={2}
            />
          </div>

          <span
            className="
              text-xl
              font-bold
              tracking-tight

              text-slate-900

              dark:text-white
            "
          >
            PublishHub
          </span>
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <div
          className="
            hidden
            items-center
            gap-7

            lg:flex
          "
        >
          {navItems.map((item) => {
            const active =
              pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative
                  py-2

                  text-sm
                  font-medium

                  transition-colors
                  duration-200

                  ${
                    active
                      ? "text-[#7C3AED]"
                      : "text-slate-600 hover:text-[#7C3AED] dark:text-slate-300 dark:hover:text-purple-400"
                  }
                `}
              >
                {item.name}

                {/* Active indicator */}

                {active && (
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-0.5
                      w-full
                      rounded-full
                      bg-[#7C3AED]
                    "
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* =================================================
            DESKTOP RIGHT SIDE
        ================================================= */}

        <div
          className="
            hidden
            items-center
            gap-3

            lg:flex
          "
        >

          {/* Theme Button */}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-xl

              border
              border-gray-200

              bg-gray-50

              text-slate-700

              transition-all
              duration-300

              hover:border-[#7C3AED]
              hover:bg-purple-50
              hover:text-[#7C3AED]

              dark:border-white/10
              dark:bg-white/5
              dark:text-white

              dark:hover:border-purple-500/40
              dark:hover:bg-purple-500/10
              dark:hover:text-purple-400
            "
          >
            {theme === "dark" ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>

          {/* =================================================
              LOGGED IN
          ================================================= */}

          {loggedIn ? (
            <>
              <Link
                href="/account"
                className="
                  rounded-lg
                  px-3
                  py-2

                  text-sm
                  font-medium

                  text-slate-700

                  transition-colors

                  hover:text-[#7C3AED]

                  dark:text-slate-300
                  dark:hover:text-purple-400
                "
              >
                Account
              </Link>

              <button
                type="button"
                onClick={handleLogout}
                className="
                  rounded-xl

                  bg-slate-900

                  px-5
                  py-2.5

                  text-sm
                  font-semibold
                  text-white

                  transition-all
                  duration-300

                  hover:bg-[#7C3AED]
                  hover:shadow-lg
                  hover:shadow-purple-500/20

                  dark:bg-white
                  dark:text-slate-900

                  dark:hover:bg-[#7C3AED]
                  dark:hover:text-white
                "
              >
                Logout
              </button>
            </>
          ) : (

            /* =================================================
               LOGGED OUT
            ================================================= */

            <Link
              href="/login"
              className="
                rounded-xl

                bg-slate-900

                px-5
                py-2.5

                text-sm
                font-semibold
                text-white

                transition-all
                duration-300

                hover:bg-[#7C3AED]
                hover:shadow-lg
                hover:shadow-purple-500/20

                dark:bg-white
                dark:text-slate-900

                dark:hover:bg-[#7C3AED]
                dark:hover:text-white
              "
            >
              Login
            </Link>
          )}

        </div>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle menu"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-xl

            border
            border-gray-200

            bg-gray-50

            text-slate-800

            lg:hidden

            dark:border-white/10
            dark:bg-white/5
            dark:text-white
          "
        >
          {menuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>

      </nav>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      {menuOpen && (
        <div
          className="
            border-t
            border-gray-200

            bg-white

            px-5
            pb-6
            pt-4

            dark:border-white/10
            dark:bg-[#09090b]

            lg:hidden
          "
        >
          <div
            className="
              flex
              flex-col
              gap-1
            "
          >

            {/* Navigation Links */}

            {navItems.map((item) => {
              const active =
                pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className={`
                    rounded-xl
                    px-4
                    py-3

                    text-sm
                    font-medium

                    transition-colors

                    ${
                      active
                        ? "bg-purple-50 text-[#7C3AED] dark:bg-purple-500/10 dark:text-purple-400"
                        : "text-slate-700 hover:bg-gray-50 dark:text-slate-300 dark:hover:bg-white/5"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Divider */}

            <div
              className="
                my-3
                h-px
                bg-gray-200

                dark:bg-white/10
              "
            />

            {/* Mobile Theme */}

            <button
              type="button"
              onClick={toggleTheme}
              className="
                flex
                items-center
                gap-3

                rounded-xl

                px-4
                py-3

                text-left
                text-sm
                font-medium

                text-slate-700

                hover:bg-gray-50

                dark:text-slate-300
                dark:hover:bg-white/5
              "
            >
              {theme === "dark" ? (
                <>
                  <Sun size={19} />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon size={19} />
                  Dark Mode
                </>
              )}
            </button>

            {/* =================================================
                MOBILE AUTH
            ================================================= */}

            {loggedIn ? (
              <>
                <Link
                  href="/account"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="
                    rounded-xl
                    px-4
                    py-3

                    text-sm
                    font-medium

                    text-slate-700

                    hover:bg-gray-50

                    dark:text-slate-300
                    dark:hover:bg-white/5
                  "
                >
                  Account
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="
                    mt-2
                    rounded-xl

                    bg-slate-900

                    px-4
                    py-3

                    text-sm
                    font-semibold
                    text-white

                    dark:bg-white
                    dark:text-slate-900
                  "
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="
                  mt-2
                  rounded-xl

                  bg-[#7C3AED]

                  px-4
                  py-3

                  text-center

                  text-sm
                  font-semibold
                  text-white

                  transition-all

                  hover:bg-[#6D28D9]
                "
              >
                Login
              </Link>
            )}

          </div>
        </div>
      )}
    </header>
  );
}