"use client";

import AdminSidebar from "@/components/AdminSidebar";
import Link from "next/link";
import { useState } from "react";

export default function AdminSettingsPage() {
  const [gymName, setGymName] = useState("Orville Gym");
  const [email, setEmail] = useState("admin@orvillegym.com");
  const [currency, setCurrency] = useState("INR (₹)");
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] font-sans text-[#f0ede8]">
      <AdminSidebar />

      <main className="flex-1 flex flex-col min-h-screen relative">
        <header className="flex h-[80px] items-center justify-between border-b border-[#1a1a1a] px-10">
          <div>
            <p className="text-[#c8952a] text-xs font-bold tracking-[0.2em] mb-1">ADMIN PANEL</p>
            <h1 className="text-2xl font-black tracking-wide uppercase text-white">SYSTEM SETTINGS</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/" className="border border-[#1a1a1a] bg-[#111111] hover:bg-[#1a1a1a] transition px-4 py-2.5 text-xs font-bold tracking-[0.15em] text-gray-400 rounded-sm uppercase">
              ← VIEW SITE
            </Link>
          </div>
        </header>

        <div className="p-10 flex-1 overflow-y-auto">
          <div className="mx-auto max-w-4xl bg-[#111111] border border-[#1a1a1a] shadow-xl p-8 md:p-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            
            <div className="mb-8 border-b border-[#1a1a1a] pb-6">
              <h2 className="text-white text-lg font-black uppercase tracking-wider">General Configuration</h2>
              <p className="text-gray-500 text-xs mt-1">Manage core platform parameters, branding, and operational rules.</p>
            </div>

            {saved && (
              <div className="mb-8 border border-green-900/60 bg-green-950/30 px-4 py-3 text-sm text-green-300 animate-in fade-in">
                Settings updated successfully!
              </div>
            )}

            <form onSubmit={handleSave} className="space-y-8">
              {/* Section 1: Business Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">Gym / Business Name</label>
                  <input 
                    type="text" 
                    value={gymName}
                    onChange={(e) => setGymName(e.target.value)}
                    className="w-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3.5 text-sm text-white focus:border-[#c8952a] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">Admin Contact Email</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3.5 text-sm text-white focus:border-[#c8952a] focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">Default Currency</label>
                  <select 
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3.5 text-sm text-white focus:border-[#c8952a] focus:outline-none appearance-none"
                  >
                    <option value="INR (₹)">INR (₹)</option>
                    <option value="USD ($)">USD ($)</option>
                    <option value="EUR (€)">EUR (€)</option>
                  </select>
                </div>
              </div>

              <div className="h-px bg-[#1a1a1a] my-6" />

              {/* Section 2: Operational Toggles */}
              <div className="space-y-6">
                <h3 className="text-white text-xs font-bold uppercase tracking-[0.15em]">System Preferences</h3>
                
                <div className="flex items-center justify-between border border-[#1a1a1a] bg-[#0a0a0a] p-5">
                  <div>
                    <p className="text-sm font-bold text-white uppercase tracking-wider">Email Notifications</p>
                    <p className="text-xs text-gray-500 mt-1">Receive automated alerts when new members register or contact forms are filled.</p>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={emailAlerts}
                    onChange={(e) => setEmailAlerts(e.target.checked)}
                    className="h-5 w-5 accent-[#e62020] cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between border border-[#1a1a1a] bg-[#0a0a0a] p-5">
                  <div>
                    <p className="text-sm font-bold text-white uppercase tracking-wider">Maintenance Mode</p>
                    <p className="text-xs text-gray-500 mt-1">Temporarily block client portal logins while updating equipment schedules or software.</p>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={maintenanceMode}
                    onChange={(e) => setMaintenanceMode(e.target.checked)}
                    className="h-5 w-5 accent-[#e62020] cursor-pointer"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[#1a1a1a] flex justify-end">
                <button 
                  type="submit" 
                  className="bg-[#e62020] hover:bg-red-700 text-white text-xs font-bold uppercase tracking-[0.15em] px-8 py-4 transition rounded-sm"
                >
                  Save Configuration
                </button>
              </div>
            </form>

          </div>
        </div>
      </main>
    </div>
  );
}