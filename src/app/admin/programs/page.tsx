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

type Program = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  status: "ACTIVE" | "INACTIVE";
};

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([
    {
      id: "PRG-101",
      number: "01",
      title: "MMA",
      subtitle: "ADULTS",
      description: "Build real fighting skills, conditioning, confidence, and discipline through structured MMA training.",
      status: "ACTIVE",
    },
    {
      id: "PRG-102",
      number: "02",
      title: "MMA",
      subtitle: "KIDS",
      description: "A structured and positive environment where young athletes develop confidence, discipline, coordination, and respect.",
      status: "ACTIVE",
    },
    {
      id: "PRG-103",
      number: "03",
      title: "OPEN",
      subtitle: "GYM",
      description: "Train on your own schedule with access to professional equipment and a focused training environment.",
      status: "ACTIVE",
    },
  ]);

  const [currentProgram, setCurrentProgram] = useState<Program | null>(null);

  const handleOpenAddModal = () => {
    setCurrentProgram({
      id: "",
      number: `0${programs.length + 1}`.slice(-2),
      title: "",
      subtitle: "",
      description: "",
      status: "ACTIVE",
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentProgram) return;
    
    if (currentProgram.id === "") {
      const newProgram = {
        ...currentProgram,
        id: `PRG-${Math.floor(Math.random() * 1000) + 200}`,
      };
      setPrograms([...programs, newProgram]);
    } else {
      setPrograms(programs.map(p => p.id === currentProgram.id ? currentProgram : p));
    }
    
    setCurrentProgram(null);
  };

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] font-sans text-[#f0ede8]">
      <AdminSidebar />

      <main className="flex-1 flex flex-col min-h-screen relative">
        <header className="flex h-[80px] items-center justify-between border-b border-[#1a1a1a] px-10">
          <div>
            <p className="text-[#c8952a] text-xs font-bold tracking-[0.2em] mb-1">ADMIN PANEL</p>
            <h1 className="text-2xl font-black tracking-wide uppercase text-white">PROGRAMS DIRECTORY</h1>
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
              <h2 className="text-white text-sm font-bold tracking-[0.15em] uppercase">All Programs ({programs.length})</h2>
              <button 
                onClick={handleOpenAddModal}
                className="bg-[#e62020] hover:bg-red-700 text-white text-[11px] font-bold tracking-[0.15em] px-4 py-2 uppercase transition rounded-sm"
              >
                + ADD NEW
              </button>
            </div>
            
            <div className="w-full">
              <div className="grid grid-cols-8 gap-4 px-6 py-4 border-b border-[#1a1a1a] text-[11px] font-bold tracking-[0.2em] text-[#c8952a] uppercase">
                <div>NO.</div>
                <div className="col-span-2">PROGRAM</div>
                <div className="col-span-3">DESCRIPTION</div>
                <div>STATUS</div>
                <div className="text-right">ACTIONS</div>
              </div>
              
              {programs.map((program) => (
                <div key={program.id} className="grid grid-cols-8 gap-4 px-6 py-6 border-b border-[#1a1a1a] last:border-0 text-sm items-start hover:bg-[#161616] transition-colors">
                  <div className="text-[#c8952a] font-black text-lg pt-1">{program.number}</div>
                  <div className="col-span-2 pt-1">
                    <div className="font-black text-white text-lg tracking-tight uppercase">{program.title}</div>
                    <div className="text-xs text-[#e62020] font-black uppercase mt-1">{program.subtitle}</div>
                  </div>
                  <div className="col-span-3 text-gray-400 text-xs leading-relaxed pr-6 pt-1">
                    {program.description}
                  </div>
                  <div className="pt-2">
                    {program.status === "ACTIVE" ? (
                      <span className="inline-block px-3 py-1 border border-[#e62020]/40 bg-[#e62020]/10 text-[#e62020] text-[10px] font-bold tracking-[0.15em] rounded-sm">
                        ACTIVE
                      </span>
                    ) : (
                      <span className="inline-block px-3 py-1 border border-gray-600 bg-gray-800/40 text-gray-500 text-[10px] font-bold tracking-[0.15em] rounded-sm">
                        INACTIVE
                      </span>
                    )}
                  </div>
                  <div className="text-right flex justify-end pt-1">
                    <button 
                      onClick={() => setCurrentProgram(program)}
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

        {currentProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full max-w-md bg-[#111111] border border-[#1a1a1a] shadow-2xl p-8 animate-in zoom-in-95 duration-200">
              <h2 className="text-2xl font-black uppercase text-white mb-2">
                {currentProgram.id === "" ? "Add New Program" : "Edit Program"}
              </h2>
              <p className="text-xs text-gray-500 tracking-widest uppercase mb-8">
                {currentProgram.id === "" ? "Create a new offering" : `ID: ${currentProgram.id}`}
              </p>
              
              <form onSubmit={handleSave} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">Number</label>
                    <input 
                      type="text" 
                      value={currentProgram.number}
                      onChange={(e) => setCurrentProgram({...currentProgram, number: e.target.value})}
                      placeholder="e.g. 04"
                      className="w-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3 text-sm text-white focus:border-[#c8952a] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">Status</label>
                    <select 
                      value={currentProgram.status}
                      onChange={(e) => setCurrentProgram({...currentProgram, status: e.target.value as "ACTIVE" | "INACTIVE"})}
                      className="w-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3 text-sm text-white focus:border-[#c8952a] focus:outline-none appearance-none"
                    >
                      <option value="ACTIVE">ACTIVE</option>
                      <option value="INACTIVE">INACTIVE</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">Title</label>
                    <input 
                      type="text" 
                      value={currentProgram.title}
                      onChange={(e) => setCurrentProgram({...currentProgram, title: e.target.value})}
                      placeholder="e.g. MMA"
                      className="w-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3 text-sm text-white focus:border-[#c8952a] focus:outline-none uppercase"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">Subtitle</label>
                    <input 
                      type="text" 
                      value={currentProgram.subtitle}
                      onChange={(e) => setCurrentProgram({...currentProgram, subtitle: e.target.value})}
                      placeholder="e.g. ADULTS"
                      className="w-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3 text-sm text-white focus:border-[#c8952a] focus:outline-none uppercase"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">Description</label>
                  <textarea 
                    value={currentProgram.description}
                    onChange={(e) => setCurrentProgram({...currentProgram, description: e.target.value})}
                    rows={4}
                    placeholder="Describe the program..."
                    className="w-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3 text-sm text-white focus:border-[#c8952a] focus:outline-none resize-none"
                  />
                </div>

                <div className="flex gap-4 pt-4 mt-8 border-t border-[#1a1a1a]">
                  <button 
                    type="button" 
                    onClick={() => setCurrentProgram(null)}
                    className="flex-1 py-3 text-xs font-bold tracking-[0.15em] uppercase border border-[#1a1a1a] text-gray-400 hover:text-white hover:bg-[#1a1a1a] transition"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="flex-1 py-3 text-xs font-bold tracking-[0.15em] uppercase bg-[#e62020] text-white hover:bg-red-700 transition"
                  >
                    Save Program
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