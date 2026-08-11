"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ClientLoginPage() {
  const [activeTab, setActiveTab] = useState<"signin" | "register">("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Track inputs to mock role-based login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const router = useRouter();

  // Smart Login Handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); 
    
    // MOCK ROLE CHECK: Admin
    if (email.toLowerCase() === "admin@orvillegym.com") {
      router.push("/admin/dashboard");
    } 
    // MOCK ROLE CHECK: Member/User
    else if (email.toLowerCase() === "abc.com" && password === "12345") {
      router.push("/user/dashboard");
    } 
    // Fallback for anything else
    else {
      alert("Invalid credentials. Try abc.com / 12345 or admin@orvillegym.com");
    }
  };

  return (
    <main className="flex min-h-screen bg-[#0a0a0a] font-sans text-[#f0ede8]">
      
      {/* ================= LEFT PANE (IMAGE) ================= */}
      <div className="relative hidden w-1/2 lg:block">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/background_image.png')" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-[#0a0a0a]" />

        {/* Back to Site Link */}
        <div className="absolute left-10 top-10 z-10">
          <Link
            href="/"
            className="text-xs font-bold tracking-[0.15em] text-gray-400 transition hover:text-white uppercase"
          >
            ← Back to Site
          </Link>
        </div>

        {/* Bottom Left Branding */}
        <div className="absolute bottom-12 left-10 z-10">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/orville_logo.png"
              alt="Orville Logo"
              width={48}
              height={48}
              className="object-contain"
            />
            <div>
              <h2 className="text-2xl font-black tracking-[0.1em] text-[#e62020] uppercase leading-none">
                ORVILLE GYM
              </h2>
              <p className="text-xs font-bold tracking-[0.2em] text-[#c8952a] uppercase mt-1">
                Member Portal
              </p>
            </div>
          </div>
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#c8952a] uppercase">
            Strength. <span className="text-gray-400">Discipline.</span> <span className="text-[#e62020]">Destiny.</span>
          </p>
        </div>
      </div>

      {/* ================= RIGHT PANE (FORM) ================= */}
      <div className="flex w-full flex-col px-8 py-12 md:px-16 lg:w-1/2 lg:px-24 overflow-y-auto">
        
        {/* Mobile Back Link (Visible only on small screens) */}
        <Link href="/" className="mb-10 text-xs font-bold tracking-[0.15em] text-gray-400 transition hover:text-white uppercase lg:hidden">
          ← Back to Site
        </Link>

        <div className="mx-auto w-full max-w-[480px] flex-1 flex flex-col justify-center">
          
          {/* Tabs */}
          <div className="mb-12 flex gap-8 border-b border-[#1a1a1a]">
            <button
              onClick={() => setActiveTab("signin")}
              className={`pb-4 text-xs font-bold tracking-[0.15em] uppercase transition ${
                activeTab === "signin"
                  ? "border-b-2 border-[#e62020] text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`pb-4 text-xs font-bold tracking-[0.15em] uppercase transition ${
                activeTab === "register"
                  ? "border-b-2 border-[#e62020] text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Register
            </button>
          </div>

          {/* ================= SIGN IN TAB ================= */}
          {activeTab === "signin" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h1 className="mb-4 text-5xl sm:text-6xl font-black uppercase leading-[0.85] tracking-tight text-white">
                WELCOME <br />
                <span className="text-[#e62020]">BACK.</span>
              </h1>
              <p className="mb-10 text-sm leading-relaxed text-gray-400">
                Sign in to manage your membership, book classes, and track your progress.
              </p>

              <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">
                    Email Address
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com (Try: abc.com)"
                    required
                    className="w-full border border-[#1a1a1a] bg-[#111111] px-4 py-3.5 text-sm text-white placeholder-gray-600 transition focus:border-[#c8952a] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Your password (Try: 12345)"
                      required
                      className="w-full border border-[#1a1a1a] bg-[#111111] px-4 py-3.5 pr-20 text-sm text-white placeholder-gray-600 transition focus:border-[#c8952a] focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-widest text-gray-500 transition hover:text-white"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                  <div className="mt-3 text-right">
                    <button type="button" className="text-[11px] font-bold tracking-[0.1em] text-[#c8952a] hover:text-white transition">
                      Forgot password?
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full bg-[#e62020] px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-red-700"
                >
                  Sign In →
                </button>
              </form>

              {/* Social Logins */}
              <div className="my-10 flex items-center gap-4">
                <div className="h-px flex-1 bg-[#1a1a1a]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
                  Or Continue With
                </span>
                <div className="h-px flex-1 bg-[#1a1a1a]" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <button className="border border-[#1a1a1a] bg-transparent py-3.5 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 transition hover:bg-[#111111] hover:text-white">
                  Google
                </button>
                <button className="border border-[#1a1a1a] bg-transparent py-3.5 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 transition hover:bg-[#111111] hover:text-white">
                  Facebook
                </button>
                <button className="border border-[#1a1a1a] bg-transparent py-3.5 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 transition hover:bg-[#111111] hover:text-white">
                  Apple
                </button>
              </div>

              <p className="mt-10 text-center text-xs text-gray-500">
                Don't have an account?{" "}
                <button onClick={() => setActiveTab("register")} className="font-bold tracking-wider text-[#e62020] hover:text-white transition uppercase">
                  Register
                </button>
              </p>
            </div>
          )}

          {/* ================= REGISTER TAB ================= */}
          {activeTab === "register" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h1 className="mb-4 text-5xl sm:text-6xl font-black uppercase leading-[0.85] tracking-tight text-white">
                JOIN <br />
                <span className="text-[#e62020]">US.</span>
              </h1>
              <p className="mb-10 text-sm leading-relaxed text-gray-400">
                Create your member account and start your journey with Orville Gym.
              </p>

              <form className="space-y-6">
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Hamza Tariq"
                    className="w-full border border-[#1a1a1a] bg-[#111111] px-4 py-3.5 text-sm text-white placeholder-gray-600 transition focus:border-[#c8952a] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border border-[#1a1a1a] bg-[#111111] px-4 py-3.5 text-sm text-white placeholder-gray-600 transition focus:border-[#c8952a] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+92 300 0000000"
                    className="w-full border border-[#1a1a1a] bg-[#111111] px-4 py-3.5 text-sm text-white placeholder-gray-600 transition focus:border-[#c8952a] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      className="w-full border border-[#1a1a1a] bg-[#111111] px-4 py-3.5 pr-20 text-sm text-white placeholder-gray-600 transition focus:border-[#c8952a] focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-widest text-gray-500 transition hover:text-white"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Re-enter your password"
                      className="w-full border border-[#1a1a1a] bg-[#111111] px-4 py-3.5 pr-20 text-sm text-white placeholder-gray-600 transition focus:border-[#c8952a] focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-widest text-gray-500 transition hover:text-white"
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 h-4 w-4 shrink-0 cursor-pointer appearance-none rounded-sm border border-[#252929] bg-[#111111] checked:bg-[#e62020] checked:border-[#e62020] focus:outline-none transition"
                  />
                  <label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
                    I agree to the <span className="text-[#c8952a] hover:text-white transition">Terms & Conditions</span> and <span className="text-[#c8952a] hover:text-white transition">Privacy Policy</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full bg-[#e62020] px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-red-700"
                >
                  Register →
                </button>
              </form>
              
              <p className="mt-8 text-center text-xs text-gray-500 pb-12">
                Already have an account?{" "}
                <button onClick={() => setActiveTab("signin")} className="font-bold tracking-wider text-[#e62020] hover:text-white transition uppercase">
                  Sign In
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}