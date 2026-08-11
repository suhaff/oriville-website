"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UserDashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0a] font-sans text-[#f0ede8]">
      {/* ================= HEADER ================= */}
      <header className="flex h-[80px] items-center justify-between border-b border-[#1a1a1a] px-6 md:px-12">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/orville_logo.png"
            alt="Orville Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="font-black text-xl tracking-[0.1em] text-[#e62020] uppercase">
            ORVILLE GYM
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-xs font-bold tracking-[0.15em] text-gray-400 transition hover:text-white uppercase"
          >
            ← SITE
          </Link>
          <button
            onClick={handleLogout}
            className="border border-[#1a1a1a] bg-[#111111] px-4 py-2 text-xs font-bold tracking-[0.15em] text-gray-300 transition hover:bg-[#1a1a1a] hover:text-white uppercase"
          >
            LOG OUT
          </button>
        </div>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12 md:px-10">
        {/* Page Heading */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-bold tracking-[0.2em] text-[#c8952a] uppercase">
              MEMBER PORTAL
            </span>
            <span className="border border-gray-700 bg-gray-800/40 px-2 py-0.5 text-[9px] font-bold text-gray-400 uppercase tracking-widest rounded-sm">
              Preview
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tight uppercase">
            <span className="text-white">MY </span>
            <span className="text-[#e62020]">DASHBOARD</span>
          </h1>
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-[#1a1a1a] bg-[#111111] shadow-2xl divide-y md:divide-y-0 md:divide-x divide-[#1a1a1a]">
          {/* ================= LEFT PANE: YOUR DETAILS ================= */}
          <div className="p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="mb-8 text-[11px] font-bold tracking-[0.2em] text-[#c8952a] uppercase">
                YOUR DETAILS
              </p>

              {/* Profile Card Header */}
              <div className="flex items-center gap-5 mb-8">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-[#e62020] text-xl font-black text-white">
                  HT
                </div>
                <div>
                  <h2 className="text-2xl font-black uppercase text-white tracking-wide">
                    HAMZA TARIQ
                  </h2>
                  <p className="mt-1 text-xs font-bold tracking-widest text-[#c8952a] uppercase">
                    MEMBER · ORV-0041
                  </p>
                </div>
              </div>

              <div className="my-6 h-px bg-[#1a1a1a]" />

              {/* Details List */}
              <div className="space-y-5 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold tracking-[0.15em] text-gray-500 uppercase">
                    EMAIL
                  </span>
                  <span className="font-medium text-gray-300">
                    hamza.tariq@example.com
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold tracking-[0.15em] text-gray-500 uppercase">
                    PHONE
                  </span>
                  <span className="font-medium text-gray-300">
                    +92 300 1234567
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold tracking-[0.15em] text-gray-500 uppercase">
                    MEMBER SINCE
                  </span>
                  <span className="font-medium text-gray-300">
                    July 14, 2026
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold tracking-[0.15em] text-gray-500 uppercase">
                    MEMBER ID
                  </span>
                  <span className="font-medium text-gray-300">
                    ORV-0041
                  </span>
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <div className="pt-10">
              <button className="border border-[#222222] bg-[#0a0a0a] px-6 py-3 text-xs font-bold tracking-[0.15em] text-gray-300 transition hover:border-gray-500 hover:text-white uppercase">
                EDIT PROFILE
              </button>
            </div>
          </div>

          {/* ================= RIGHT PANE: MEMBERSHIP ================= */}
          <div className="p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="mb-8 text-[11px] font-bold tracking-[0.2em] text-[#c8952a] uppercase">
                MEMBERSHIP
              </p>

              {/* Membership Title & Price */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-black uppercase text-white tracking-wide">
                    MMA ADULTS
                  </h2>
                  <p className="mt-1 text-xl font-black text-[#e62020]">
                    $89 <span className="text-xs font-normal text-gray-500 uppercase">/ month</span>
                  </p>
                </div>
                <span className="border border-[#e62020]/40 bg-[#e62020]/10 px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-[#e62020] uppercase">
                  ACTIVE
                </span>
              </div>

              <div className="my-6 h-px bg-[#1a1a1a]" />

              {/* Dates */}
              <div className="space-y-5 text-sm mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold tracking-[0.15em] text-gray-500 uppercase">
                    START DATE
                  </span>
                  <span className="font-medium text-gray-300">
                    July 14, 2026
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold tracking-[0.15em] text-gray-500 uppercase">
                    RENEWAL DATE
                  </span>
                  <span className="font-medium text-gray-300">
                    August 14, 2026
                  </span>
                </div>
              </div>

              {/* Classes Tracker Container */}
              <div className="border-l-2 border-[#e62020] bg-[#0a0a0a] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                    CLASSES THIS MONTH
                  </span>
                  <span className="text-xl font-black text-white">
                    11 <span className="text-xs font-medium text-gray-500">/ 19</span>
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="my-3 h-1.5 w-full bg-[#222222] rounded-full overflow-hidden">
                  <div className="h-full w-[58%] bg-[#c8952a]" />
                </div>

                <p className="text-xs text-gray-500 font-medium">
                  8 classes remaining
                </p>
              </div>
            </div>

            {/* Renew Button */}
            <div className="pt-10">
              <button className="w-full bg-[#e62020] px-6 py-4 text-xs font-bold tracking-[0.15em] text-white transition hover:bg-red-700 uppercase">
                RENEW MEMBERSHIP
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}