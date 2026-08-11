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

type PricingPlan = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  popular: boolean;
  status: "ACTIVE" | "INACTIVE";
};

export default function AdminPricingPage() {
  const [plans, setPlans] = useState<PricingPlan[]>([
    {
      id: "PLN-01",
      name: "DROP-IN",
      price: "₹500",
      period: "/ SESSION",
      description: "Perfect for visitors and occasional training.",
      popular: false,
      status: "ACTIVE",
    },
    {
      id: "PLN-02",
      name: "MONTHLY",
      price: "₹2,500",
      period: "/ MONTH",
      description: "Our most popular option for consistent training.",
      popular: false, // Updated to false
      status: "ACTIVE",
    },
    {
      id: "PLN-03",
      name: "ELITE",
      price: "₹5,000",
      period: "/ MONTH",
      description: "For athletes who want the complete Orville experience.",
      popular: false,
      status: "ACTIVE",
    },
  ]);

  const [currentPlan, setCurrentPlan] = useState<PricingPlan | null>(null);

  const handleOpenAddModal = () => {
    setCurrentPlan({
      id: "",
      name: "",
      price: "₹",
      period: "/ MONTH",
      description: "",
      popular: false,
      status: "ACTIVE",
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPlan) return;

    if (currentPlan.id === "") {
      const newPlan = {
        ...currentPlan,
        id: `PLN-0${plans.length + 1}`,
      };
      setPlans([...plans, newPlan]);
    } else {
      setPlans(plans.map((p) => (p.id === currentPlan.id ? currentPlan : p)));
    }

    setCurrentPlan(null);
  };

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] font-sans text-[#f0ede8]">
      <AdminSidebar />

      <main className="flex-1 flex flex-col min-h-screen relative">
        <header className="flex h-[80px] items-center justify-between border-b border-[#1a1a1a] px-10">
          <div>
            <p className="text-[#c8952a] text-xs font-bold tracking-[0.2em] mb-1">ADMIN PANEL</p>
            <h1 className="text-2xl font-black tracking-wide uppercase text-white">PRICING MANAGEMENT</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/" className="border border-[#1a1a1a] bg-[#111111] hover:bg-[#1a1a1a] transition px-4 py-2.5 text-xs font-bold tracking-[0.15em] text-gray-400 rounded-sm uppercase">
              ← VIEW SITE
            </Link>
          </div>
        </header>

        <div className="p-10 flex-1 overflow-y-auto">
          <div className="bg-[#111111] border border-[#1a1a1a] shadow-xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex items-center justify-between p-6 border-b border-[#1a1a1a]">
              <h2 className="text-white text-sm font-bold tracking-[0.15em] uppercase">All Pricing Plans ({plans.length})</h2>
              <button 
                onClick={handleOpenAddModal}
                className="bg-[#e62020] hover:bg-red-700 text-white text-[11px] font-bold tracking-[0.15em] px-4 py-2 uppercase transition rounded-sm"
              >
                + ADD NEW PLAN
              </button>
            </div>
            
            <div className="w-full">
              <div className="grid grid-cols-7 gap-4 px-6 py-4 border-b border-[#1a1a1a] text-[11px] font-bold tracking-[0.2em] text-[#c8952a] uppercase">
                <div>ID</div>
                <div className="col-span-2">PLAN NAME & RATE</div>
                <div className="col-span-2">DESCRIPTION</div>
                <div>STATUS</div>
                <div className="text-right">ACTIONS</div>
              </div>
              
              {plans.map((plan) => (
                <div key={plan.id} className="grid grid-cols-7 gap-4 px-6 py-6 border-b border-[#1a1a1a] last:border-0 text-sm items-center hover:bg-[#161616] transition-colors">
                  <div className="text-gray-500">{plan.id}</div>
                  <div className="col-span-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white uppercase tracking-wider">{plan.name}</span>
                      {plan.popular && (
                        <span className="bg-[#e62020] text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-widest">Popular</span>
                      )}
                    </div>
                    <div className="text-xs text-[#c8952a] font-black mt-1">
                      {plan.price} <span className="text-gray-500 font-normal">{plan.period}</span>
                    </div>
                  </div>
                  <div className="col-span-2 text-gray-400 text-xs pr-4">
                    {plan.description}
                  </div>
                  <div>
                    {plan.status === "ACTIVE" ? (
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
                      onClick={() => setCurrentPlan(plan)}
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

        {currentPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full max-w-md bg-[#111111] border border-[#1a1a1a] shadow-2xl p-8 animate-in zoom-in-95 duration-200">
              <h2 className="text-2xl font-black uppercase text-white mb-2">
                {currentPlan.id === "" ? "Add New Plan" : "Edit Plan"}
              </h2>
              <p className="text-xs text-gray-500 tracking-widest uppercase mb-8">
                {currentPlan.id === "" ? "Create a new pricing tier" : `ID: ${currentPlan.id}`}
              </p>
              
              <form onSubmit={handleSave} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">Plan Name</label>
                    <input 
                      type="text" 
                      value={currentPlan.name}
                      onChange={(e) => setCurrentPlan({...currentPlan, name: e.target.value})}
                      placeholder="e.g. WEEKLY"
                      className="w-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3 text-sm text-white focus:border-[#c8952a] focus:outline-none uppercase"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">Status</label>
                    <select 
                      value={currentPlan.status}
                      onChange={(e) => setCurrentPlan({...currentPlan, status: e.target.value as "ACTIVE" | "INACTIVE"})}
                      className="w-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3 text-sm text-white focus:border-[#c8952a] focus:outline-none appearance-none"
                    >
                      <option value="ACTIVE">ACTIVE</option>
                      <option value="INACTIVE">INACTIVE</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">Price</label>
                    <input 
                      type="text" 
                      value={currentPlan.price}
                      onChange={(e) => setCurrentPlan({...currentPlan, price: e.target.value})}
                      placeholder="e.g. ₹1,200"
                      className="w-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3 text-sm text-white focus:border-[#c8952a] focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">Period</label>
                    <input 
                      type="text" 
                      value={currentPlan.period}
                      onChange={(e) => setCurrentPlan({...currentPlan, period: e.target.value})}
                      placeholder="e.g. / WEEK"
                      className="w-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3 text-sm text-white focus:border-[#c8952a] focus:outline-none uppercase"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">Description</label>
                  <textarea 
                    value={currentPlan.description}
                    onChange={(e) => setCurrentPlan({...currentPlan, description: e.target.value})}
                    rows={3}
                    placeholder="Short description of the plan..."
                    className="w-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3 text-sm text-white focus:border-[#c8952a] focus:outline-none resize-none"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <input 
                    type="checkbox" 
                    id="popular"
                    checked={currentPlan.popular}
                    onChange={(e) => setCurrentPlan({...currentPlan, popular: e.target.checked})}
                    className="h-4 w-4 accent-[#e62020]"
                  />
                  <label htmlFor="popular" className="text-xs text-gray-300 uppercase tracking-widest font-bold">Mark as "Most Popular"</label>
                </div>

                <div className="flex gap-4 pt-4 mt-8 border-t border-[#1a1a1a]">
                  <button 
                    type="button" 
                    onClick={() => setCurrentPlan(null)}
                    className="flex-1 py-3 text-xs font-bold tracking-[0.15em] uppercase border border-[#1a1a1a] text-gray-400 hover:text-white hover:bg-[#1a1a1a] transition"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="flex-1 py-3 text-xs font-bold tracking-[0.15em] uppercase bg-[#e62020] text-white hover:bg-red-700 transition"
                  >
                    Save Plan
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