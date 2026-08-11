"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const RED = "#cc1414";
const GOLD = "#c8952a";

const NAV_LINKS = [
  {
    label: "Programs",
    href: "#programs",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

/* =========================================================
   SOCIAL ICONS
========================================================= */

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  return (
    <nav
      className="
        orville-navbar
        fixed
        inset-x-0
        top-0
        z-50
        border-b
        border-white/[0.08]
        bg-[#0a0a0a]/95
        backdrop-blur-md
      "
    >
      {/* =====================================================
         MAIN NAVIGATION
      ====================================================== */}

      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-5 md:px-8">

        {/* =================================================
            LOGO
        ================================================== */}

        <Link
          href="/"
          onClick={closeMobileMenu}
          className="group flex items-center gap-2.5"
        >
          <Image
            src="/orville_logo.png"
            alt="Orville Gym"
            width={44}
            height={44}
            className="h-11 w-11 object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />

          <span
            className="font-display text-[24px] font-black tracking-[0.08em] transition-opacity duration-300 group-hover:opacity-80"
            style={{ color: RED }}
          >
            ORVILLE
          </span>
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <div className="hidden items-center gap-8 md:flex">

          {/* Links */}

          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="
                font-display
                text-[14px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#f0ede8]/70
                transition-all
                duration-300
                hover:text-[#f0ede8]
              "
            >
              {link.label}
            </Link>
          ))}

          {/* =================================================
              SOCIAL ICONS
          ================================================== */}

          <div className="ml-1 flex items-center gap-4 border-l border-white/10 pl-6">

            <a
              href="#"
              aria-label="Instagram"
              className="
                text-[#f0ede8]/45
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:text-[#c8952a]
              "
            >
              <InstagramIcon />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="
                text-[#f0ede8]/45
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:text-[#c8952a]
              "
            >
              <FacebookIcon />
            </a>

            <a
              href="#"
              aria-label="X / Twitter"
              className="
                text-[#f0ede8]/45
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:text-[#c8952a]
              "
            >
              <XIcon />
            </a>

          </div>

          {/* =================================================
              LOG IN
          ================================================== */}

          <Link
            href="/login"
            className="
              font-display
              px-[22px]
              py-2.5
              text-[14px]
              font-bold
              uppercase
              tracking-[0.14em]
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_8px_25px_rgba(204,20,20,0.25)]
            "
            style={{
              backgroundColor: RED,
            }}
          >
            Log In
          </Link>

        </div>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          type="button"
          aria-label={
            mobileOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={mobileOpen}
          onClick={() =>
            setMobileOpen((current) => !current)
          }
          className="
            relative
            z-10
            flex
            h-10
            w-10
            items-center
            justify-center
            text-2xl
            text-[#f0ede8]
            transition-colors
            hover:text-[#c8952a]
            md:hidden
          "
        >
          {mobileOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* =====================================================
         MOBILE NAVIGATION
      ====================================================== */}

      <div
        className={`
          overflow-hidden
          border-t
          border-[#1c1c1c]
          bg-[#0a0a0a]
          transition-all
          duration-300
          md:hidden
          ${
            mobileOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 border-t-0 opacity-0"
          }
        `}
      >
        <div className="px-5 pb-7 pt-4">

          {/* Links */}

          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMobileMenu}
              className="
                block
                border-b
                border-[#1c1c1c]
                py-4
                font-display
                text-lg
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#f0ede8]
                transition-colors
                hover:text-[#c8952a]
              "
            >
              {link.label}
            </Link>
          ))}

          {/* Log In */}

          <Link
            href="/login"
            onClick={closeMobileMenu}
            className="
              block
              border-b
              border-[#1c1c1c]
              py-4
              font-display
              text-lg
              font-bold
              uppercase
              tracking-[0.12em]
              transition-opacity
              hover:opacity-80
            "
            style={{
              color: RED,
            }}
          >
            Log In
          </Link>

          {/* =================================================
              MOBILE SOCIALS
          ================================================== */}

          <div className="flex gap-6 pt-6 text-[#f0ede8]/50">

            <a
              href="#"
              aria-label="Instagram"
              className="transition-colors hover:text-[#c8952a]"
            >
              <InstagramIcon />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="transition-colors hover:text-[#c8952a]"
            >
              <FacebookIcon />
            </a>

            <a
              href="#"
              aria-label="X"
              className="transition-colors hover:text-[#c8952a]"
            >
              <XIcon />
            </a>

          </div>

        </div>
      </div>
    </nav>
  );
}