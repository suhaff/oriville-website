"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    setError("");
    setIsLoading(true);

    setTimeout(() => {
      if (
        email.trim().toLowerCase() === "admin@orvillegym.com" &&
        password === "orville123"
      ) {
        router.push("/admin/dashboard");
      } else {
        setError("Invalid email or password.");
        setIsLoading(false);
      }
    }, 800);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0a0a0a] px-6 py-12 text-[#f0ede8] font-sans">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#e62020]/10 blur-[120px]" />
      </div>

      <div className="relative w-full max-w-[440px]">
        {/* Back to website */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-xs font-bold tracking-[0.15em] text-gray-400 transition hover:text-white uppercase"
          >
            ← Back to Site
          </Link>
        </div>

        {/* Login Card */}
        <div className="border border-[#1a1a1a] bg-[#111111] p-8 shadow-2xl md:p-10">
          {/* Logo */}
          <div className="mb-8">
            <Link
              href="/"
              className="text-[24px] font-black tracking-[0.1em] uppercase"
            >
              <span className="text-[#e62020]">ORVILLE</span> GYM
            </Link>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">
              Administration
            </p>

            <h1 className="text-3xl font-black uppercase tracking-wide text-white">
              Welcome Back.
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Sign in to manage your gym.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 border border-[#e62020]/40 bg-[#e62020]/10 px-4 py-3 text-xs font-bold tracking-widest uppercase text-[#e62020] animate-in fade-in slide-in-from-top-2">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="admin@orvillegym.com"
                autoComplete="email"
                disabled={isLoading}
                className="w-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-[#c8952a] disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8952a]"
                >
                  Password
                </label>

                <button
                  type="button"
                  disabled={isLoading}
                  className="text-[10px] font-bold uppercase tracking-[0.1em] text-gray-500 transition hover:text-[#c8952a] disabled:cursor-not-allowed"
                  onClick={() =>
                    alert("Password recovery will be implemented later.")
                  }
                >
                  Forgot password?
                </button>
              </div>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  disabled={isLoading}
                  className="w-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3.5 pr-20 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-[#c8952a] disabled:cursor-not-allowed disabled:opacity-60"
                />

                <button
                  type="button"
                  disabled={isLoading}
                  onClick={() => setShowPassword((previous) => !previous)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-widest text-gray-500 transition hover:text-white disabled:cursor-not-allowed"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Login */}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-4 w-full bg-[#e62020] px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? "Signing in..." : "Sign In →"}
            </button>
          </form>

          {/* Development information */}
          <div className="mt-10 border-t border-[#1a1a1a] pt-8">
            <p className="text-center text-[10px] uppercase tracking-widest leading-5 text-gray-500">
              Development prototype
              <br />
              Real authentication will be connected later.
            </p>

            <div className="mt-4 border border-[#1a1a1a] bg-[#0a0a0a] p-4 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#c8952a]">
                Development credentials
              </p>

              <p className="mt-3 text-xs text-gray-400">
                admin@orvillegym.com
              </p>

              <p className="mt-1 text-xs text-gray-400">
                orville123
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-[10px] uppercase tracking-widest text-gray-600">
          © 2026 Orville Gym | Suhaffinity.ltd
        </p>
      </div>
    </main>
  );
}