"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// --- Icons ---
function DashboardIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="9" />
      <rect x="14" y="3" width="7" height="5" />
      <rect x="14" y="12" width="7" height="9" />
      <rect x="3" y="16" width="7" height="5" />
    </svg>
  );
}

function MembersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="17" r="1" />
      <path d="M5.5 21a8.38 8.38 0 0 1 13 0" />
    </svg>
  );
}

function ProgramsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function PricingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export default function AdminSidebar() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `flex items-center gap-4 px-6 py-4 text-sm font-bold tracking-[0.15em] transition ${
      isActive 
        ? "bg-[#e62020] text-white" 
        : "text-gray-500 hover:text-white"
    }`;
  };

  return (
    <aside className="flex w-[260px] flex-col border-r border-[#1a1a1a] bg-[#111111]">
      <div className="flex h-[80px] items-center px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/orville_logo.png" 
            alt="Orville Logo" 
            width={28} 
            height={28} 
            className="object-contain"
          />
          <span className="text-[#e62020] font-black text-xl tracking-[0.1em] uppercase">
            ORVILLE GYM
          </span>
        </Link>
      </div>

      <nav className="flex flex-1 flex-col py-6">
        <Link href="/admin/dashboard" className={getLinkClass("/admin/dashboard")}>
          <DashboardIcon />
          DASHBOARD
        </Link>
        <Link href="/admin/members" className={getLinkClass("/admin/members")}>
          <MembersIcon />
          MEMBERS
        </Link>
        <Link href="/admin/programs" className={getLinkClass("/admin/programs")}>
          <ProgramsIcon />
          PROGRAMS
        </Link>
        <Link href="/admin/pricing" className={getLinkClass("/admin/pricing")}>
          <PricingIcon />
          PRICING
        </Link>
        {/* Updated from href="#" to href="/admin/settings" */}
        <Link href="/admin/settings" className={getLinkClass("/admin/settings")}>
          <SettingsIcon />
          SETTINGS
        </Link>
      </nav>
    </aside>
  );
}