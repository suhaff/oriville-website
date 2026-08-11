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

  console.log("LOGIN BUTTON WORKED");
  console.log("Email:", email);
  console.log("Password:", password);

  if (
    email.trim().toLowerCase() === "admin@orvillegym.com" &&
    password === "orville123"
  ) {
    console.log("CREDENTIALS CORRECT");
    router.push("/admin/dashboard");
  } else {
    console.log("CREDENTIALS INCORRECT");
    setError("Invalid email or password.");
  }
}

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080909] px-6 py-12 text-[#f4f4f1]">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#d7ff3f]/5 blur-[120px]" />
      </div>

      <div className="relative w-full max-w-[440px]">
        {/* Back to website */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-[#929894] transition hover:text-white"
          >
            ← Back to website
          </Link>
        </div>

        {/* Login Card */}
        <div className="rounded-[22px] border border-[#252929] bg-[#111313] p-8 shadow-2xl md:p-10">
          {/* Logo */}
          <div className="mb-8">
            <Link
              href="/"
              className="text-[24px] font-black tracking-[-1px]"
            >
              <span className="text-[#d7ff3f]">ORVILLE</span> GYM
            </Link>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[2px] text-[#d7ff3f]">
              Administration
            </p>

            <h1 className="text-3xl font-black tracking-[-1px]">
              Welcome back.
            </h1>

            <p className="mt-2 text-sm leading-6 text-[#929894]">
              Sign in to manage your gym.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 rounded-[10px] border border-[#5a2525] bg-[#2a1111] px-4 py-3 text-sm text-[#ff7777]">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#d0d4d0]"
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
                className="w-full rounded-[10px] border border-[#252929] bg-[#090a0a] px-4 py-3 text-sm text-white outline-none placeholder:text-[#555b57] transition focus:border-[#d7ff3f] disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-[#d0d4d0]"
                >
                  Password
                </label>

                <button
                  type="button"
                  disabled={isLoading}
                  className="text-xs text-[#929894] transition hover:text-[#d7ff3f] disabled:cursor-not-allowed"
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
                  className="w-full rounded-[10px] border border-[#252929] bg-[#090a0a] px-4 py-3 pr-20 text-sm text-white outline-none placeholder:text-[#555b57] transition focus:border-[#d7ff3f] disabled:cursor-not-allowed disabled:opacity-60"
                />

                <button
                  type="button"
                  disabled={isLoading}
                  onClick={() => setShowPassword((previous) => !previous)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-[#929894] transition hover:text-white disabled:cursor-not-allowed"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Login */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-[10px] bg-[#d7ff3f] px-5 py-3 font-extrabold text-[#080909] transition hover:bg-[#c8ef32] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          {/* Development information */}
          <div className="mt-8 border-t border-[#252929] pt-6">
            <p className="text-center text-xs leading-5 text-[#626864]">
              Development prototype
              <br />
              Real authentication will be connected later.
            </p>

            <div className="mt-4 rounded-[10px] border border-[#252929] bg-[#090a0a] p-3 text-center">
              <p className="text-[11px] uppercase tracking-[1px] text-[#626864]">
                Development credentials
              </p>

              <p className="mt-2 text-xs text-[#929894]">
                admin@orvillegym.com
              </p>

              <p className="mt-1 text-xs text-[#929894]">
                orville123
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-[#555b57]">
          © 2026 Orville Gym | Suhaffinity.ltd All rights reserved.
        </p>
      </div>
    </main>
  );
}