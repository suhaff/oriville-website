"use client";

import Link from "next/link";
import AdminSidebar from "@/components/AdminSidebar";

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#0a0a0a] font-sans text-[#f0ede8]">
      
      {/* --- Dynamic Sidebar Component --- */}
      <AdminSidebar />

      {/* --- Main Content --- */}
      <main className="flex-1 flex flex-col min-h-screen">
        
        {/* Top Header Bar (Slides down from the top) */}
        <header className="flex h-[80px] items-center justify-between border-b border-[#1a1a1a] px-10 animate-in fade-in slide-in-from-top-8 duration-700">
          <div>
            <p className="text-[#c8952a] text-xs font-bold tracking-[0.2em] mb-1">ADMIN PANEL</p>
            <h1 className="text-2xl font-black tracking-wide uppercase text-white">DASHBOARD</h1>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Notification Icon */}
            <button className="flex items-center justify-center h-10 w-10 border border-[#1a1a1a] bg-[#111111] hover:bg-[#1a1a1a] transition rounded-sm text-gray-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            </button>

            {/* View Site Button */}
            <Link href="/" className="ml-2 border border-[#1a1a1a] bg-[#111111] hover:bg-[#1a1a1a] transition px-4 py-2.5 text-xs font-bold tracking-[0.15em] text-gray-400 rounded-sm uppercase">
              ← VIEW SITE
            </Link>
          </div>
        </header>

        {/* Scrollable Area */}
        <div className="p-10 overflow-y-auto overflow-x-hidden">
          
          {/* Top Row: Full Width Traffic Chart (Staggered Animation 1) */}
          <div 
            className="mb-8 bg-[#111111] border border-[#1a1a1a] p-8 shadow-xl animate-in fade-in slide-in-from-bottom-8 duration-700" 
            style={{ animationFillMode: 'backwards', animationDelay: '150ms' }}
          >
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-white text-sm font-bold tracking-[0.15em] uppercase">Site Visits (Traffic)</h2>
                <p className="text-gray-500 text-xs mt-2">Daily unique visitors over the last 14 days</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-black text-white">12,450</p>
                <p className="text-[#c8952a] text-[10px] font-bold uppercase tracking-[0.15em] mt-1">+18% vs previous period</p>
              </div>
            </div>
            
            {/* Custom CSS Bar Chart (Individual bars animate up dynamically) */}
            <div className="flex items-end gap-3 h-48 w-full mt-4">
              {[20, 35, 25, 45, 50, 30, 65, 55, 80, 70, 90, 85, 100, 95].map((h, i) => (
                <div key={i} className="group relative flex-1 flex flex-col justify-end h-full">
                  <div 
                    className="w-full bg-[#1a1a1a] hover:bg-[#e62020] transition-colors duration-300 rounded-t-sm animate-in fade-in slide-in-from-bottom-full" 
                    style={{ 
                      height: `${h}%`, 
                      animationDuration: '1000ms',
                      animationDelay: `${300 + (i * 40)}ms`, 
                      animationFillMode: 'backwards' 
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Grid: 3 Analytics Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* 1. Total Member Growth (Staggered Animation 2) */}
            <div 
              className="bg-[#111111] border border-[#1a1a1a] p-8 shadow-xl flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationFillMode: 'backwards', animationDelay: '300ms' }}
            >
              <h2 className="text-white text-sm font-bold tracking-[0.15em] uppercase mb-1">Total Members</h2>
              <p className="text-gray-500 text-xs mb-8">Growth over last 8 months</p>
              
              <div className="flex-1 flex flex-col justify-between">
                <div className="mb-6">
                  <p className="text-5xl font-black text-white">92</p>
                  <p className="text-[#c8952a] text-[10px] font-bold uppercase tracking-[0.15em] mt-2">+4 THIS WEEK</p>
                </div>
                
                {/* SVG Sparkline Chart */}
                <div className="w-full h-32 relative mt-auto animate-in fade-in duration-1000" style={{ animationFillMode: 'backwards', animationDelay: '800ms' }}>
                   <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                     {/* Grid lines */}
                     <line x1="0" y1="25" x2="100" y2="25" stroke="#1a1a1a" strokeWidth="1" />
                     <line x1="0" y1="50" x2="100" y2="50" stroke="#1a1a1a" strokeWidth="1" />
                     <line x1="0" y1="75" x2="100" y2="75" stroke="#1a1a1a" strokeWidth="1" />
                     
                     {/* Line Data */}
                     <polyline 
                       points="0,80 14,75 28,60 42,65 56,40 70,45 84,20 100,8" 
                       fill="none" 
                       stroke="#e62020" 
                       strokeWidth="4" 
                       strokeLinecap="round"
                       strokeLinejoin="round"
                     />
                     
                     {/* Latest Data Point Node */}
                     <circle cx="100" cy="8" r="3.5" fill="#0a0a0a" stroke="#e62020" strokeWidth="2.5" />
                   </svg>
                </div>
              </div>
            </div>

            {/* 2. Active Membership Analytics (Staggered Animation 3) */}
            <div 
              className="bg-[#111111] border border-[#1a1a1a] p-8 shadow-xl flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationFillMode: 'backwards', animationDelay: '450ms' }}
            >
              <h2 className="text-white text-sm font-bold tracking-[0.15em] uppercase mb-1">Active Status</h2>
              <p className="text-gray-500 text-xs mb-8">Current active vs inactive</p>
              
              <div className="flex-1 flex flex-col items-center justify-center">
                {/* SVG Donut Chart */}
                <div className="relative w-44 h-44 animate-in fade-in zoom-in-50 duration-700" style={{ animationFillMode: 'backwards', animationDelay: '900ms' }}>
                  <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                    <path
                      className="text-[#1a1a1a]"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                    />
                    <path
                      className="text-[#c8952a]"
                      strokeDasharray="94.5, 100" // 87 out of 92 is approx 94.5%
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-black text-white">87</span>
                    <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mt-1">Active</span>
                  </div>
                </div>
                
                <div className="mt-10 w-full flex justify-between border-t border-[#1a1a1a] pt-6 px-4">
                   <div className="text-center">
                     <p className="text-white font-bold text-xl">87</p>
                     <p className="text-[9px] text-[#c8952a] font-bold uppercase tracking-widest mt-1">Active</p>
                   </div>
                   <div className="text-center">
                     <p className="text-white font-bold text-xl">5</p>
                     <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest mt-1">Inactive</p>
                   </div>
                </div>
              </div>
            </div>

            {/* 3. Membership Split (Staggered Animation 4) */}
            <div 
              className="bg-[#111111] border border-[#1a1a1a] p-8 shadow-xl flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationFillMode: 'backwards', animationDelay: '600ms' }}
            >
              <h2 className="text-white text-sm font-bold tracking-[0.15em] uppercase mb-1">Membership Split</h2>
              <p className="text-gray-500 text-xs mb-8">Distribution by active plans</p>
              
              <div className="flex-1 flex flex-col justify-center space-y-8">
                {/* MMA Adults */}
                <div>
                  <div className="flex justify-between text-xs font-bold tracking-[0.1em] mb-3">
                    <span className="text-white">MMA ADULTS</span>
                    <span className="text-[#c8952a]">48</span>
                  </div>
                  <div className="h-2 w-full bg-[#1a1a1a] rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-[#e62020] animate-in slide-in-from-left-full duration-1000" style={{ width: '52%', animationFillMode: 'backwards', animationDelay: '900ms' }}></div>
                  </div>
                  <div className="text-right text-[10px] text-gray-500 font-bold tracking-widest">52%</div>
                </div>
                
                {/* MMA Kids */}
                <div>
                  <div className="flex justify-between text-xs font-bold tracking-[0.1em] mb-3">
                    <span className="text-white">MMA KIDS</span>
                    <span className="text-[#c8952a]">27</span>
                  </div>
                  <div className="h-2 w-full bg-[#1a1a1a] rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-[#e62020] animate-in slide-in-from-left-full duration-1000" style={{ width: '29%', animationFillMode: 'backwards', animationDelay: '1050ms' }}></div>
                  </div>
                  <div className="text-right text-[10px] text-gray-500 font-bold tracking-widest">29%</div>
                </div>
                
                {/* Open Gym */}
                <div>
                  <div className="flex justify-between text-xs font-bold tracking-[0.1em] mb-3">
                    <span className="text-white">OPEN GYM</span>
                    <span className="text-[#c8952a]">17</span>
                  </div>
                  <div className="h-2 w-full bg-[#1a1a1a] rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-[#e62020] animate-in slide-in-from-left-full duration-1000" style={{ width: '19%', animationFillMode: 'backwards', animationDelay: '1200ms' }}></div>
                  </div>
                  <div className="text-right text-[10px] text-gray-500 font-bold tracking-widest">19%</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}