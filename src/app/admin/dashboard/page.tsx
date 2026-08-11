import Image from "next/image";
import Link from "next/link";

const RED = "#e62020";
const GOLD = "#c8952a";

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

function MessagesIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 6l10 7 10-7" />
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

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export default function AdminDashboardPage() {
  // Table Data
  const recentMembers = [
    { id: "ORV-0041", name: "Hamza Tariq", plan: "MMA Adults", joined: "2026-07-14", fee: "$89", status: "ACTIVE" },
    { id: "ORV-0040", name: "Sara Rehman", plan: "Open Gym", joined: "2026-07-10", fee: "$89", status: "ACTIVE" },
    { id: "ORV-0039", name: "Ali Noor", plan: "MMA Kids", joined: "2026-07-08", fee: "$59", status: "ACTIVE" },
    { id: "ORV-0038", name: "Zainab Malik", plan: "MMA Adults", joined: "2026-07-01", fee: "$89", status: "ACTIVE" },
    { id: "ORV-0037", name: "Usman Farooq", plan: "Open Gym", joined: "2026-06-28", fee: "$89", status: "INACTIVE" },
    { id: "ORV-0036", name: "Fatima Javed", plan: "MMA Kids", joined: "2026-06-22", fee: "$59", status: "ACTIVE" },
    { id: "ORV-0035", name: "Bilal Ahmed", plan: "MMA Adults", joined: "2026-06-15", fee: "$89", status: "ACTIVE" },
  ];

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] font-sans text-[#f0ede8]">
      
      {/* --- Sidebar --- */}
      <aside className="flex w-[260px] flex-col border-r border-[#1a1a1a] bg-[#111111]">
        {/* Logo Area */}
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

        {/* Navigation */}
        <nav className="flex flex-1 flex-col py-6">
          <Link href="/admin/dashboard" className="flex items-center gap-4 bg-[#e62020] px-6 py-4 text-sm font-bold tracking-[0.15em] text-white">
            <DashboardIcon />
            DASHBOARD
          </Link>
          <Link href="#" className="flex items-center gap-4 px-6 py-4 text-sm font-bold tracking-[0.15em] text-gray-500 hover:text-white transition">
            <MembersIcon />
            MEMBERS
          </Link>
          <Link href="#" className="flex items-center gap-4 px-6 py-4 text-sm font-bold tracking-[0.15em] text-gray-500 hover:text-white transition">
            <ProgramsIcon />
            PROGRAMS
          </Link>
          <Link href="#" className="flex items-center gap-4 px-6 py-4 text-sm font-bold tracking-[0.15em] text-gray-500 hover:text-white transition">
            <PricingIcon />
            PRICING
          </Link>
          <Link href="#" className="flex items-center gap-4 px-6 py-4 text-sm font-bold tracking-[0.15em] text-gray-500 hover:text-white transition">
            <MessagesIcon />
            MESSAGES
          </Link>
          <Link href="#" className="flex items-center gap-4 px-6 py-4 text-sm font-bold tracking-[0.15em] text-gray-500 hover:text-white transition">
            <SettingsIcon />
            SETTINGS
          </Link>
        </nav>
      </aside>

      {/* --- Main Content --- */}
      <main className="flex-1 flex flex-col min-h-screen">
        
        {/* Top Header Bar */}
        <header className="flex h-[80px] items-center justify-between border-b border-[#1a1a1a] px-10">
          <div>
            <p className="text-[#c8952a] text-xs font-bold tracking-[0.2em] mb-1">ADMIN PANEL</p>
            <h1 className="text-2xl font-black tracking-wide uppercase text-white">DASHBOARD</h1>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative flex items-center">
              <div className="absolute left-4 text-gray-500">
                <SearchIcon />
              </div>
              <input 
                type="text" 
                placeholder="Search members..." 
                className="bg-[#111111] border border-[#1a1a1a] rounded-sm py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 w-[240px]"
              />
            </div>
            
            {/* Notification Icon */}
            <button className="flex items-center justify-center h-10 w-10 border border-[#1a1a1a] bg-[#111111] hover:bg-[#1a1a1a] transition rounded-sm text-gray-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            </button>
            
            {/* Avatar Box */}
            <div className="flex items-center justify-center h-10 w-10 bg-[#e62020] text-white font-bold text-sm tracking-widest rounded-sm">
              AD
            </div>

            {/* View Site Button */}
            <Link href="/" className="ml-2 border border-[#1a1a1a] bg-[#111111] hover:bg-[#1a1a1a] transition px-4 py-2.5 text-xs font-bold tracking-[0.15em] text-gray-400 rounded-sm uppercase">
              ← VIEW SITE
            </Link>
          </div>
        </header>

        {/* Scrollable Area */}
        <div className="p-10 overflow-y-auto">
          
          {/* Stats Row */}
          <div className="flex bg-[#111111] border border-[#1a1a1a] mb-10">
            {/* Stat Block 1 */}
            <div className="flex-1 p-8">
              <h3 className="text-gray-500 text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">Total Members</h3>
              <p className="text-5xl font-black text-white mb-2 tracking-tighter">92</p>
              <p className="text-[#c8952a] text-xs font-bold">+4 this week</p>
            </div>
            {/* Stat Block 2 */}
            <div className="flex-1 p-8 border-l-2 border-[#e62020]">
              <h3 className="text-gray-500 text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">Monthly Revenue</h3>
              <p className="text-5xl font-black text-white mb-2 tracking-tighter">$7,840</p>
              <p className="text-[#c8952a] text-xs font-bold">+12% vs last mo</p>
            </div>
            {/* Stat Block 3 */}
            <div className="flex-1 p-8 border-l-2 border-[#e62020]">
              <h3 className="text-gray-500 text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">Active Plans</h3>
              <p className="text-5xl font-black text-white mb-2 tracking-tighter">87</p>
              <p className="text-gray-500 text-xs font-bold">5 inactive</p>
            </div>
            {/* Stat Block 4 */}
            <div className="flex-1 p-8 border-l-2 border-[#e62020]">
              <h3 className="text-gray-500 text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">New This Week</h3>
              <p className="text-5xl font-black text-white mb-2 tracking-tighter">4</p>
              <p className="text-[#c8952a] text-xs font-bold">2 kids • 2 adults</p>
            </div>
          </div>

          {/* Grid Container for Tables & Actions */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* Left Column: Recent Members Table */}
            <div className="xl:col-span-2 bg-[#111111] border border-[#1a1a1a]">
              <div className="flex items-center justify-between p-6 border-b border-[#1a1a1a]">
                <h2 className="text-white text-sm font-bold tracking-[0.15em] uppercase">RECENT MEMBERS</h2>
                <button className="bg-[#e62020] hover:bg-red-700 text-white text-[11px] font-bold tracking-[0.15em] px-4 py-2 uppercase transition rounded-sm">
                  + ADD MEMBER
                </button>
              </div>
              
              <div className="w-full">
                <div className="grid grid-cols-6 gap-4 px-6 py-4 border-b border-[#1a1a1a] text-[11px] font-bold tracking-[0.2em] text-[#c8952a] uppercase">
                  <div>ID</div>
                  <div className="col-span-2">NAME</div>
                  <div>PLAN</div>
                  <div>JOINED</div>
                  <div>FEE</div>
                  <div className="text-right">STATUS</div>
                </div>
                
                {recentMembers.map((member, idx) => (
                  <div key={idx} className="grid grid-cols-6 gap-4 px-6 py-5 border-b border-[#1a1a1a] last:border-0 text-sm items-center">
                    <div className="text-gray-500">{member.id}</div>
                    <div className="col-span-2 font-bold text-white">{member.name}</div>
                    <div className="text-gray-400">{member.plan}</div>
                    <div className="text-gray-500">{member.joined}</div>
                    <div className="text-[#c8952a] font-bold">{member.fee}</div>
                    <div className="text-right flex justify-end">
                      {member.status === "ACTIVE" ? (
                        <span className="inline-block px-3 py-1 border border-[#e62020]/40 bg-[#e62020]/10 text-[#e62020] text-[10px] font-bold tracking-[0.15em] rounded-sm">
                          ACTIVE
                        </span>
                      ) : (
                        <span className="inline-block px-3 py-1 border border-gray-600 bg-gray-800/40 text-gray-500 text-[10px] font-bold tracking-[0.15em] rounded-sm">
                          INACTIVE
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Widgets */}
            <div className="flex flex-col gap-8">
              
              {/* Membership Split */}
              <div className="bg-[#111111] border border-[#1a1a1a] p-6">
                <h2 className="text-white text-sm font-bold tracking-[0.15em] uppercase mb-8">MEMBERSHIP SPLIT</h2>
                
                <div className="space-y-6">
                  {/* MMA Adults */}
                  <div>
                    <div className="flex justify-between text-xs font-bold tracking-[0.1em] mb-2">
                      <span className="text-white">MMA ADULTS</span>
                      <span className="text-[#c8952a]">48 members</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#1a1a1a] rounded-full overflow-hidden mb-1">
                      <div className="h-full bg-[#e62020] w-[52%]"></div>
                    </div>
                    <div className="text-right text-[10px] text-gray-500">52%</div>
                  </div>
                  
                  {/* MMA Kids */}
                  <div>
                    <div className="flex justify-between text-xs font-bold tracking-[0.1em] mb-2">
                      <span className="text-white">MMA KIDS</span>
                      <span className="text-[#c8952a]">27 members</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#1a1a1a] rounded-full overflow-hidden mb-1">
                      <div className="h-full bg-[#e62020] w-[29%]"></div>
                    </div>
                    <div className="text-right text-[10px] text-gray-500">29%</div>
                  </div>
                  
                  {/* Open Gym */}
                  <div>
                    <div className="flex justify-between text-xs font-bold tracking-[0.1em] mb-2">
                      <span className="text-white">OPEN GYM</span>
                      <span className="text-[#c8952a]">17 members</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#1a1a1a] rounded-full overflow-hidden mb-1">
                      <div className="h-full bg-[#e62020] w-[19%]"></div>
                    </div>
                    <div className="text-right text-[10px] text-gray-500">19%</div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-[#111111] border border-[#1a1a1a] p-6">
                <h2 className="text-white text-sm font-bold tracking-[0.15em] uppercase mb-6">QUICK ACTIONS</h2>
                <div className="flex flex-col gap-3">
                  <button className="w-full text-left px-4 py-3 border border-[#1a1a1a] bg-[#0a0a0a] hover:bg-[#161616] transition text-xs font-bold tracking-[0.15em] text-gray-400 rounded-sm">
                    EXPORT MEMBER LIST
                  </button>
                  <button className="w-full text-left px-4 py-3 border border-[#1a1a1a] bg-[#0a0a0a] hover:bg-[#161616] transition text-xs font-bold tracking-[0.15em] text-gray-400 rounded-sm">
                    SEND BULK EMAIL
                  </button>
                  <button className="w-full text-left px-4 py-3 border border-[#1a1a1a] bg-[#0a0a0a] hover:bg-[#161616] transition text-xs font-bold tracking-[0.15em] text-gray-400 rounded-sm">
                    GENERATE INVOICE
                  </button>
                  <button className="w-full text-left px-4 py-3 border border-[#1a1a1a] bg-[#0a0a0a] hover:bg-[#161616] transition text-xs font-bold tracking-[0.15em] text-gray-400 rounded-sm">
                    VIEW CONTACT FORMS
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}