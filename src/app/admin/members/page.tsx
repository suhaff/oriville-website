"use client";

import AdminSidebar from "@/components/AdminSidebar";
import Link from "next/link";
import { useState } from "react";

function EditIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
  );
}

type Member = {
  id: string;
  name: string;
  email: string;
  plan: string;
  joined: string;
  status: "ACTIVE" | "INACTIVE";
};

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>([
    { id: "ORV-0041", name: "Hamza Tariq", email: "hamza@example.com", plan: "MMA Adults", joined: "2026-07-14", status: "ACTIVE" },
    { id: "ORV-0040", name: "Sara Rehman", email: "sara@example.com", plan: "Open Gym", joined: "2026-07-10", status: "ACTIVE" },
    { id: "ORV-0039", name: "Ali Noor", email: "ali@example.com", plan: "MMA Kids", joined: "2026-07-08", status: "ACTIVE" },
    { id: "ORV-0038", name: "Zainab Malik", email: "zainab@example.com", plan: "MMA Adults", joined: "2026-07-01", status: "ACTIVE" },
    { id: "ORV-0037", name: "Usman Farooq", email: "usman@example.com", plan: "Open Gym", joined: "2026-06-28", status: "INACTIVE" },
    { id: "ORV-0036", name: "Fatima Javed", email: "fatima@example.com", plan: "MMA Kids", joined: "2026-06-22", status: "ACTIVE" },
    { id: "ORV-0035", name: "Bilal Ahmed", email: "bilal@example.com", plan: "MMA Adults", joined: "2026-06-15", status: "ACTIVE" },
  ]);

  const [editingMember, setEditingMember] = useState<Member | null>(null);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMember) return;
    setMembers(members.map(m => m.id === editingMember.id ? editingMember : m));
    setEditingMember(null);
  };

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] font-sans text-[#f0ede8]">
      <AdminSidebar />

      <main className="flex-1 flex flex-col min-h-screen relative">
        <header className="flex h-[80px] items-center justify-between border-b border-[#1a1a1a] px-10">
          <div>
            <p className="text-[#c8952a] text-xs font-bold tracking-[0.2em] mb-1">ADMIN PANEL</p>
            <h1 className="text-2xl font-black tracking-wide uppercase text-white">MEMBERS DIRECTORY</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center h-10 w-10 border border-[#1a1a1a] bg-[#111111] hover:bg-[#1a1a1a] transition rounded-sm text-gray-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            </button>
            <Link href="/" className="ml-2 border border-[#1a1a1a] bg-[#111111] hover:bg-[#1a1a1a] transition px-4 py-2.5 text-xs font-bold tracking-[0.15em] text-gray-400 rounded-sm uppercase">
              ← VIEW SITE
            </Link>
          </div>
        </header>

        <div className="p-10 flex-1 overflow-y-auto">
          <div className="bg-[#111111] border border-[#1a1a1a] shadow-xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex items-center justify-between p-6 border-b border-[#1a1a1a]">
              <h2 className="text-white text-sm font-bold tracking-[0.15em] uppercase">All Members ({members.length})</h2>
              <button className="bg-[#e62020] hover:bg-red-700 text-white text-[11px] font-bold tracking-[0.15em] px-4 py-2 uppercase transition rounded-sm">
                + ADD NEW
              </button>
            </div>
            
            <div className="w-full">
              <div className="grid grid-cols-7 gap-4 px-6 py-4 border-b border-[#1a1a1a] text-[11px] font-bold tracking-[0.2em] text-[#c8952a] uppercase">
                <div>ID</div>
                <div className="col-span-2">NAME & EMAIL</div>
                <div>PLAN</div>
                <div>JOINED</div>
                <div>STATUS</div>
                <div className="text-right">ACTIONS</div>
              </div>
              
              {members.map((member) => (
                <div key={member.id} className="grid grid-cols-7 gap-4 px-6 py-5 border-b border-[#1a1a1a] last:border-0 text-sm items-center hover:bg-[#161616] transition-colors">
                  <div className="text-gray-500">{member.id}</div>
                  <div className="col-span-2">
                    <div className="font-bold text-white">{member.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{member.email}</div>
                  </div>
                  <div className="text-gray-400">{member.plan}</div>
                  <div className="text-gray-500">{member.joined}</div>
                  <div>
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
                  <div className="text-right flex justify-end">
                    <button 
                      onClick={() => setEditingMember(member)}
                      className="flex items-center gap-2 text-gray-400 hover:text-white border border-[#1a1a1a] hover:border-gray-600 px-3 py-1.5 rounded-sm transition text-[10px] font-bold uppercase tracking-widest"
                    >
                      <EditIcon /> Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {editingMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full max-w-md bg-[#111111] border border-[#1a1a1a] shadow-2xl p-8 animate-in zoom-in-95 duration-200">
              <h2 className="text-2xl font-black uppercase text-white mb-2">Edit Membership</h2>
              <p className="text-xs text-gray-500 tracking-widest uppercase mb-8">ID: {editingMember.id}</p>
              
              <form onSubmit={handleSave} className="space-y-5">
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">Member Name</label>
                  <input 
                    type="text" 
                    value={editingMember.name}
                    onChange={(e) => setEditingMember({...editingMember, name: e.target.value})}
                    className="w-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3 text-sm text-white focus:border-[#c8952a] focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">Plan</label>
                  <select 
                    value={editingMember.plan}
                    onChange={(e) => setEditingMember({...editingMember, plan: e.target.value})}
                    className="w-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3 text-sm text-white focus:border-[#c8952a] focus:outline-none appearance-none"
                  >
                    <option value="MMA Adults">MMA Adults</option>
                    <option value="MMA Kids">MMA Kids</option>
                    <option value="Open Gym">Open Gym</option>
                    <option value="Elite Training">Elite Training</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">Status</label>
                  <select 
                    value={editingMember.status}
                    onChange={(e) => setEditingMember({...editingMember, status: e.target.value as "ACTIVE" | "INACTIVE"})}
                    className="w-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3 text-sm text-white focus:border-[#c8952a] focus:outline-none appearance-none"
                  >
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="INACTIVE">INACTIVE</option>
                  </select>
                </div>

                <div className="flex gap-4 pt-4 mt-8 border-t border-[#1a1a1a]">
                  <button 
                    type="button" 
                    onClick={() => setEditingMember(null)}
                    className="flex-1 py-3 text-xs font-bold tracking-[0.15em] uppercase border border-[#1a1a1a] text-gray-400 hover:text-white hover:bg-[#1a1a1a] transition"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="flex-1 py-3 text-xs font-bold tracking-[0.15em] uppercase bg-[#e62020] text-white hover:bg-red-700 transition"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}