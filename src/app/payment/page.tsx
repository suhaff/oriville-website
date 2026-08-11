"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type PaymentMethod = "card" | "paypal" | "gpay" | "netbanking";

export default function PaymentPage() {
  const [activeMethod, setActiveMethod] = useState<PaymentMethod>("card");
  const [selectedBank, setSelectedBank] = useState("");

  const banks = [
    "J&K Bank",
    "State Bank of India",
    "HDFC Bank",
    "Punjab National Bank",
    "ICICI Bank",
    "Axis Bank",
    "Yes Bank",
    "Bank of Baroda"
  ];

  // Using realistic monthly plan values in Rupees
  const baseFee = 2500;
  const tax = 125;
  const total = baseFee + tax;

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
          <span className="font-black text-xl tracking-[0.1em] text-[#cc1414] uppercase">
            ORVILLE GYM
          </span>
        </Link>

        <div className="flex items-center gap-2 text-gray-500 text-xs font-bold tracking-widest uppercase">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          Secure Payment
        </div>

        <Link
          href="/user/dashboard"
          className="text-xs font-bold tracking-[0.15em] text-gray-400 transition hover:text-white uppercase"
        >
          ← DASHBOARD
        </Link>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="mx-auto w-full max-w-[1100px] flex-1 px-6 py-12 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr]">
          
          {/* ================= LEFT COLUMN: PAYMENT ================= */}
          <div>
            <p className="mb-2 text-[11px] font-bold tracking-[0.2em] text-[#c8952a] uppercase">
              COMPLETE YOUR PAYMENT
            </p>
            <h1 className="mb-10 text-5xl md:text-6xl font-black tracking-tight uppercase">
              <span className="text-white">CHOOSE A </span>
              <br/>
              <span className="text-[#cc1414]">METHOD</span>
            </h1>

            {/* Method Selection Grid */}
            <div className="grid grid-cols-2 gap-[1px] bg-[#1a1a1a] border border-[#1a1a1a] mb-8">
              
              {/* Card */}
              <button
                onClick={() => setActiveMethod("card")}
                className={`relative flex items-start gap-4 bg-[#111111] p-6 text-left transition hover:bg-[#161616] ${activeMethod === "card" ? "border-l-2 border-[#cc1414]" : ""}`}
              >
                <svg className="mt-1 shrink-0 text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="2" y1="10" x2="22" y2="10"></line>
                </svg>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">Credit / Debit Card</h3>
                  <p className="text-xs text-gray-500 mt-1">Visa · Mastercard · Amex</p>
                </div>
                {activeMethod === "card" && <div className="absolute right-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#cc1414]" />}
              </button>

              {/* PayPal */}
              <button
                onClick={() => setActiveMethod("paypal")}
                className={`relative flex items-start gap-4 bg-[#111111] p-6 text-left transition hover:bg-[#161616] ${activeMethod === "paypal" ? "border-l-2 border-[#cc1414]" : ""}`}
              >
                <svg className="mt-1 shrink-0 text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"/>
                </svg>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">PayPal</h3>
                  <p className="text-xs text-gray-500 mt-1">Fast & secure checkout</p>
                </div>
                {activeMethod === "paypal" && <div className="absolute right-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#cc1414]" />}
              </button>

              {/* Google Pay */}
              <button
                onClick={() => setActiveMethod("gpay")}
                className={`relative flex items-start gap-4 bg-[#111111] p-6 text-left transition hover:bg-[#161616] ${activeMethod === "gpay" ? "border-l-2 border-[#cc1414]" : ""}`}
              >
                <svg className="mt-1 shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">Google Pay</h3>
                  <p className="text-xs text-gray-500 mt-1">One-tap payment</p>
                </div>
                {activeMethod === "gpay" && <div className="absolute right-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#cc1414]" />}
              </button>

              {/* Net Banking */}
              <button
                onClick={() => setActiveMethod("netbanking")}
                className={`relative flex items-start gap-4 bg-[#111111] p-6 text-left transition hover:bg-[#161616] ${activeMethod === "netbanking" ? "border-l-2 border-[#cc1414]" : ""}`}
              >
                <svg className="mt-1 shrink-0 text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
                </svg>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">Net Banking</h3>
                  <p className="text-xs text-gray-500 mt-1">All major banks supported</p>
                </div>
                {activeMethod === "netbanking" && <div className="absolute right-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#cc1414]" />}
              </button>
            </div>

            {/* Dynamic Payment Forms */}
            <div className="min-h-[300px]">
              
              {/* CARD FORM */}
              {activeMethod === "card" && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">Card Number</label>
                    <input type="text" placeholder="1234 5678 9012 3456" className="w-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3.5 text-sm text-white focus:border-[#c8952a] focus:outline-none placeholder-gray-700" />
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">Cardholder Name</label>
                    <input type="text" placeholder="As printed on card" className="w-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3.5 text-sm text-white focus:border-[#c8952a] focus:outline-none placeholder-gray-700" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">Expiry</label>
                      <input type="text" placeholder="MM/YY" className="w-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3.5 text-sm text-white focus:border-[#c8952a] focus:outline-none placeholder-gray-700" />
                    </div>
                    <div>
                      <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">CVV</label>
                      <input type="password" placeholder="•••" className="w-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3.5 text-sm text-white focus:border-[#c8952a] focus:outline-none placeholder-gray-700" />
                    </div>
                  </div>
                  <button className="w-full bg-[#cc1414] py-4 mt-4 text-xs font-bold tracking-[0.15em] text-white hover:bg-red-700 transition uppercase">
                    PAY — ₹{total.toLocaleString()} →
                  </button>
                </div>
              )}

              {/* PAYPAL FORM */}
              {activeMethod === "paypal" && (
                <div className="flex flex-col items-center justify-center border border-[#1a1a1a] bg-[#111111] p-12 text-center animate-in fade-in duration-300 min-h-[350px]">
                  <div className="w-16 h-16 bg-[#00457C] flex items-center justify-center rounded-sm mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"/></svg>
                  </div>
                  <p className="text-gray-400 text-sm max-w-[250px] mb-8">
                    You'll be redirected to PayPal to securely complete your payment of <span className="font-bold text-white">₹{total.toLocaleString()}</span>.
                  </p>
                  <button className="w-full max-w-[320px] bg-[#cc1414] py-4 text-xs font-bold tracking-[0.15em] text-white hover:bg-red-700 transition uppercase">
                    CONTINUE TO PAYPAL — ₹{total.toLocaleString()} →
                  </button>
                </div>
              )}

              {/* GPAY FORM */}
              {activeMethod === "gpay" && (
                <div className="flex flex-col items-center justify-center border border-[#1a1a1a] bg-[#111111] p-12 text-center animate-in fade-in duration-300 min-h-[350px]">
                  <div className="w-16 h-16 bg-white flex items-center justify-center rounded-sm mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                  </div>
                  <p className="text-gray-400 text-sm max-w-[280px] mb-8">
                    Confirm your <span className="font-bold text-white">₹{total.toLocaleString()}</span> payment using Google Pay. You'll be prompted to authenticate with your device.
                  </p>
                  <button className="w-full max-w-[320px] bg-[#cc1414] py-4 text-xs font-bold tracking-[0.15em] text-white hover:bg-red-700 transition uppercase">
                    PAY WITH GOOGLE PAY — ₹{total.toLocaleString()} →
                  </button>
                </div>
              )}

              {/* NET BANKING FORM */}
              {activeMethod === "netbanking" && (
                <div className="animate-in fade-in duration-300">
                  <label className="mb-4 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">Select Your Bank</label>
                  <div className="grid grid-cols-2 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
                    {banks.map((bank) => (
                      <button 
                        key={bank}
                        onClick={() => setSelectedBank(bank)}
                        className={`bg-[#111111] p-4 text-left text-sm text-gray-400 transition hover:bg-[#161616] hover:text-white ${selectedBank === bank ? "text-white font-bold bg-[#1a1a1a]" : ""}`}
                      >
                        {bank}
                      </button>
                    ))}
                  </div>
                  <button 
                    disabled={!selectedBank}
                    className="w-full bg-[#cc1414] py-4 mt-6 text-xs font-bold tracking-[0.15em] text-white hover:bg-red-700 transition uppercase disabled:bg-[#1a1a1a] disabled:text-gray-500 disabled:cursor-not-allowed"
                  >
                    PROCEED TO NET BANKING — ₹{total.toLocaleString()} →
                  </button>
                </div>
              )}

            </div>
            
            {/* Footer lock */}
            <div className="mt-12 flex items-center gap-3 text-[10px] uppercase tracking-widest text-gray-600">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              <span>256-bit SSL encryption · PCI-DSS compliant · Your data is never stored</span>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: ORDER SUMMARY ================= */}
          <div className="bg-[#111111] p-8 md:p-10 border border-[#1a1a1a] h-fit">
            <p className="mb-6 text-[11px] font-bold tracking-[0.2em] text-[#c8952a] uppercase">
              ORDER SUMMARY
            </p>

            {/* Profile Info */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#cc1414] text-sm font-black text-white">
                HT
              </div>
              <div>
                <h2 className="text-sm font-bold uppercase text-white tracking-wide">
                  HAMZA TARIQ
                </h2>
                <p className="text-[10px] text-gray-500 tracking-widest mt-0.5">
                  ORV-0041
                </p>
              </div>
            </div>

            {/* Plan Info */}
            <div className="mb-8">
              <h3 className="text-2xl font-black uppercase text-white tracking-wide">
                MMA ADULTS
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Aug 14 — Sep 13, 2026
              </p>
            </div>

            <div className="h-px bg-[#1a1a1a] mb-6" />

            {/* Price Breakdown */}
            <div className="space-y-4 text-sm mb-6">
              <div className="flex justify-between text-gray-400">
                <span>Membership Fee</span>
                <span className="font-medium text-white">₹{baseFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Tax (5%)</span>
                <span className="font-medium text-white">₹{tax.toLocaleString()}</span>
              </div>
            </div>

            <div className="h-px bg-[#1a1a1a] mb-6" />

            {/* Total */}
            <div className="flex items-end justify-between mb-8">
              <span className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase pb-2">
                TOTAL
              </span>
              <span className="text-4xl font-black text-white tracking-[-0.02em]">
                ₹{total.toLocaleString()}
              </span>
            </div>

            {/* Active Method Indicator */}
            <div className="border border-[#1a1a1a] bg-[#0a0a0a] p-4 flex items-center gap-3 border-l-2 border-l-[#cc1414]">
              {activeMethod === "card" && (
                <>
                  <svg className="text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-300">Credit / Debit Card</span>
                </>
              )}
              {activeMethod === "paypal" && (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#cc1414"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"/></svg>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-300">PayPal</span>
                </>
              )}
              {activeMethod === "gpay" && (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-300">Google Pay</span>
                </>
              )}
              {activeMethod === "netbanking" && (
                <>
                  <svg className="text-[#cc1414]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" /></svg>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-300">Net Banking</span>
                </>
              )}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}