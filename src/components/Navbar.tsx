"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const RED = "#cc1414";
const GOLD = "#c8952a";

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
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
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
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-[#0a0a0a]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
        >
          <Image
            src="../orille_logo.png"
            alt="Orville Gym"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            priority
          />

          <span
            className="font-display text-[24px] font-black tracking-[0.08em]"
            style={{ color: RED }}
          >
            ORVILLE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 md:flex">

          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-display text-[15px] font-semibold uppercase tracking-[0.12em] text-[#f0ede8]/70 transition hover:text-[#f0ede8] hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}

          {/* Socials */}
          <div className="ml-[-4px] flex items-center gap-3.5 border-l border-white/10 pl-6">

            <a
              href="#"
              aria-label="Instagram"
              className="text-[#f0ede8]/45 transition hover:text-[#c8952a]"
            >
              <InstagramIcon />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="text-[#f0ede8]/45 transition hover:text-[#c8952a]"
            >
              <FacebookIcon />
            </a>

            <a
              href="#"
              aria-label="X / Twitter"
              className="text-[#f0ede8]/45 transition hover:text-[#c8952a]"
            >
              <XIcon />
            </a>

          </div>

          {/* Admin Dashboard */}
          <Link
            href="/admin/dashboard"
            className="font-display border border-[#f0ede8]/20 px-[18px] py-2 text-[14px] font-semibold uppercase tracking-[0.12em] text-[#f0ede8] transition hover:border-[#f0ede8]/60"
          >
            Admin
          </Link>

          {/* Join */}
          <Link
            href="#pricing"
            className="font-display px-[22px] py-2.5 text-[14px] font-bold uppercase tracking-[0.14em] text-white transition hover:opacity-85"
            style={{ backgroundColor: RED }}
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Menu */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-2xl text-[#f0ede8] md:hidden"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-[#1c1c1c] bg-[#0a0a0a] px-8 pb-6 pt-4 md:hidden">

          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block border-b border-[#1c1c1c] py-2.5 font-display text-lg font-semibold uppercase tracking-[0.12em] text-[#f0ede8]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/admin/dashboard"
            onClick={() => setMobileOpen(false)}
            className="block border-b border-[#1c1c1c] py-2.5 font-display text-lg font-semibold uppercase tracking-[0.12em] text-[#f0ede8]"
          >
            Admin
          </Link>

          <Link
            href="#pricing"
            onClick={() => setMobileOpen(false)}
            className="block border-b border-[#1c1c1c] py-2.5 font-display text-lg font-bold uppercase tracking-[0.12em]"
            style={{ color: RED }}
          >
            Join Now
          </Link>

          <div className="flex gap-5 pt-5 text-[#f0ede8]/50">
            <a href="#" aria-label="Instagram">
              <InstagramIcon />
            </a>

            <a href="#" aria-label="Facebook">
              <FacebookIcon />
            </a>

            <a href="#" aria-label="X">
              <XIcon />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}