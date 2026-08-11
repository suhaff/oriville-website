"use client";

import Navbar from "@/components/Navbar";
import { ChangeEvent, FormEvent, useState } from "react";

/* =========================================================
   DATA
========================================================= */

const programs = [
  {
    number: "01",
    title: "MMA",
    subtitle: "ADULTS",
    description:
      "Build real fighting skills, conditioning, confidence, and discipline through structured MMA training.",
  },
  {
    number: "02",
    title: "MMA",
    subtitle: "KIDS",
    description:
      "A structured and positive environment where young athletes develop confidence, discipline, coordination, and respect.",
  },
  {
    number: "03",
    title: "OPEN",
    subtitle: "GYM",
    description:
      "Train on your own schedule with access to professional equipment and a focused training environment.",
  },
];

const memberships = [
  {
    name: "DROP-IN",
    price: "₹500",
    period: "/ SESSION",
    description:
      "Perfect for visitors and occasional training.",
    features: [
      "Single gym session",
      "Full equipment access",
      "No commitment",
    ],
  },
  {
    name: "MONTHLY",
    price: "₹2,500",
    period: "/ MONTH",
    description:
      "Our most popular option for consistent training.",
    features: [
      "Unlimited gym access",
      "All standard equipment",
      "Member-only sessions",
      "Flexible cancellation",
    ],
    popular: true,
  },
  {
    name: "ELITE",
    price: "₹5,000",
    period: "/ MONTH",
    description:
      "For athletes who want the complete Orville experience.",
    features: [
      "Unlimited gym access",
      "Personal training sessions",
      "Priority class booking",
      "Nutrition guidance",
      "Performance tracking",
    ],
  },
];

/* =========================================================
   TYPES
========================================================= */

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

/* =========================================================
   PAGE
========================================================= */

export default function Home() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formStatus, setFormStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  /* =======================================================
     FORM HANDLING
  ======================================================= */

  function handleInputChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (formStatus !== "idle") {
      setFormStatus("idle");
      setErrorMessage("");
    }
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      setFormStatus("error");
      setErrorMessage(
        "Please complete all fields before sending your message."
      );
      return;
    }

    setIsSubmitting(true);
    setFormStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
            "Something went wrong while sending your message."
        );
      }

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setFormStatus("success");
    } catch (error) {
      setFormStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f0ede8]">
      <Navbar />

      {/* =====================================================
         HERO
      ====================================================== */}

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/background_image.png')",
          }}
        />

        {/* Main dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Left-side gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/40" />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

        {/* Red glow */}
        <div className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-[#cc1414]/10 blur-[140px]" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 pb-20 pt-32 md:px-8">
          <div className="max-w-[1000px]">

            {/* Eyebrow */}
            <div className="mb-7 flex flex-wrap items-center gap-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c8952a] md:text-sm">
              <span>EST. 2011 · DOWNTOWN · OPEN XAM–XPM</span>
            </div>

          {/* Heading */}
          <div className="orville-hero-title">
            <h1 className="font-display text-[clamp(64px,11vw,170px)] font-black uppercase leading-[0.78] tracking-[-0.045em]">

              {/* Strength */}
              <span className="orville-word-mask block">
                <span className="orville-strength block text-[#c8952a]">
                  STRENGTH.
                </span>
              </span>

              {/* Discipline */}
              <span className="orville-word-mask block">
                <span className="orville-discipline block text-[#c1c1c1]">
                  DISCIPLINE.
                </span>
              </span>

              {/* Destiny */}
              <span className="orville-word-mask block">
                <span className="orville-destiny block text-[#cc1414]">
                  DESTINY.
                </span>
              </span>

            </h1>
          </div>

            {/* Description */}
            <p className="mt-10 max-w-[570px] text-base leading-7 text-[#f0ede8]/80 md:text-lg">
              World-class equipment. Expert coaches. A community
              that pushes you further than you thought possible.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="font-display inline-flex items-center justify-center bg-[#cc1414] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#e01a1a]"
              >
                Start Today
              </a>

              <a
                href="#programs"
                className="font-display inline-flex items-center justify-center border border-white/20 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-[#f0ede8] transition hover:border-white/50 hover:bg-white/5"
              >
                View Programs
              </a>
            </div>
          </div>

          {/* Bottom metadata */}
          <div className="mt-24 flex flex-col justify-between gap-5 border-t border-white/10 pt-5 font-display text-xs uppercase tracking-[0.16em] text-[#f0ede8]/40 md:flex-row">
            <span>
              Strength · Combat · Performance
            </span>

            <a
              href="#programs"
              className="transition hover:text-white"
            >
              Scroll to explore ↓
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
         PHILOSOPHY
      ====================================================== */}

      <section className="border-b border-white/[0.07] bg-[#0a0a0a]">
        <div className="mx-auto max-w-[1280px] px-5 py-24 md:px-8 md:py-32">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-end">

            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c8952a]">
                The Orville Standard
              </p>

              <h2 className="mt-5 font-display text-5xl font-black uppercase leading-[0.88] tracking-[-0.035em] sm:text-6xl md:text-7xl">
                TRAIN
                <br />
                WITH
                <br />
                PURPOSE.
              </h2>
            </div>

            <div>
              <p className="max-w-[680px] text-xl leading-8 text-[#f0ede8]/65 md:text-2xl md:leading-9">
                We believe training is more than lifting weights
                and counting repetitions. It is about showing up,
                pushing through discomfort, and becoming more
                capable every single day.
              </p>

              <div className="mt-8 h-px w-24 bg-[#cc1414]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
         PROGRAMS
      ====================================================== */}

      <section
        id="programs"
        className="border-b border-white/[0.07] bg-[#0d0d0d]"
      >
        <div className="mx-auto max-w-[1280px] px-5 py-24 md:px-8 md:py-32">

          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#cc1414]">
                What We Do
              </p>

              <h2 className="mt-3 font-display text-6xl font-black uppercase leading-[0.85] tracking-[-0.04em] md:text-8xl">
                PROGRAMS.
              </h2>
            </div>

            <p className="max-w-[400px] text-sm leading-6 text-[#f0ede8]/50">
              Choose your path. Train with purpose. Every program
              is designed to make you stronger.
            </p>
          </div>

          <div className="grid overflow-hidden border border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
            {programs.map((program) => (
              <article
                key={program.number}
                className="group relative border-b border-white/[0.08] bg-[#111111] p-8 transition hover:bg-[#161616] md:border-b-0 md:border-r last:md:border-r-0 md:p-10"
              >
                <span className="font-display text-sm font-bold tracking-[0.18em] text-[#c8952a]">
                  {program.number}
                </span>

                <div className="mt-24">
                  <h3 className="font-display text-6xl font-black uppercase leading-[0.8] tracking-[-0.035em]">
                    {program.title}
                  </h3>

                  <h4 className="font-display text-4xl font-black uppercase leading-none text-[#cc1414]">
                    {program.subtitle}
                  </h4>
                </div>

                <p className="mt-8 min-h-[100px] text-sm leading-6 text-[#f0ede8]/50">
                  {program.description}
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.14em] text-[#f0ede8] transition group-hover:text-[#cc1414]"
                >
                  Learn More

                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#cc1414] transition-all duration-300 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
         PRICING
      ====================================================== */}

      <section
        id="pricing"
        className="border-b border-white/[0.07] bg-[#0a0a0a]"
      >
        <div className="mx-auto max-w-[1280px] px-5 py-24 md:px-8 md:py-32">

          <div className="mb-14">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c8952a]">
              Membership
            </p>

            <h2 className="mt-3 font-display text-6xl font-black uppercase leading-[0.85] tracking-[-0.04em] md:text-8xl">
              PRICING.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {memberships.map((membership) => (
              <article
                key={membership.name}
                className={`relative flex flex-col border p-8 md:p-10 ${
                  membership.popular
                    ? "border-[#cc1414] bg-[#111111]"
                    : "border-white/[0.09] bg-[#0d0d0d]"
                }`}
              >
                {membership.popular && (
                  <div className="absolute right-5 top-5 bg-[#cc1414] px-3 py-1.5 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                    Most Popular
                  </div>
                )}

                <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-[#c8952a]">
                  {membership.name}
                </p>

                <div className="mt-8">
                  <span className="font-display text-6xl font-black tracking-[-0.04em]">
                    {membership.price}
                  </span>

                  <span className="ml-2 font-display text-sm font-bold uppercase tracking-[0.12em] text-[#f0ede8]/40">
                    {membership.period}
                  </span>
                </div>

                <p className="mt-5 min-h-[48px] text-sm leading-6 text-[#f0ede8]/50">
                  {membership.description}
                </p>

                <div className="my-8 h-px bg-white/[0.08]" />

                <ul className="flex-1 space-y-4">
                  {membership.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm text-[#f0ede8]/70"
                    >
                      <span className="text-[#cc1414]">
                        +
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-10 block w-full px-6 py-3.5 text-center font-display text-sm font-bold uppercase tracking-[0.15em] transition ${
                    membership.popular
                      ? "bg-[#cc1414] text-white hover:bg-[#e01a1a]"
                      : "border border-white/15 text-[#f0ede8] hover:border-white/40"
                  }`}
                >
                  Choose Plan
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
         CONTACT
      ====================================================== */}

      <section
        id="contact"
        className="border-b border-white/[0.07] bg-[#0a0a0a]"
      >
        <div className="mx-auto max-w-[1280px] px-5 py-24 md:px-8 md:py-32">

          {/* Heading */}
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-[#c8952a]">
              Get In Touch
            </p>

            <h2 className="mt-4 font-display text-[64px] font-black uppercase leading-[0.82] tracking-[-0.035em] text-[#f0ede8] sm:text-[76px] md:text-[84px] lg:text-[88px]">
              CONTACT US
            </h2>
          </div>

          {/* Two-column layout */}
          <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-20 lg:mt-20">

            {/* =================================================
                LEFT SIDE
            ================================================== */}

            <div>
              <p className="max-w-[540px] text-[16px] leading-[1.8] text-[#f0ede8]/70 md:text-[17px]">
                Questions about membership, programs, or
                scheduling? We'd love to hear from you. Drop us
                a message and our team will get back to you
                within 24 hours.
              </p>

              <div className="mt-12 space-y-8">

                <ContactDetail
                  label="Address"
                  value="142 Iron Street, Downtown"
                />

                <ContactDetail
                  label="Phone"
                  value="(555) 820-4100"
                />

                <ContactDetail
                  label="Email"
                  value="hello@orvillegym.com"
                />

                <ContactDetail
                  label="Hours"
                  value="Mon–Sun, 6AM–11PM"
                />

              </div>

              {/* Socials */}
              <div className="mt-11 flex gap-4">

                <SocialButton
                  label="Instagram"
                  href="#"
                >
                  <InstagramIcon />
                </SocialButton>

                <SocialButton
                  label="Facebook"
                  href="#"
                >
                  <FacebookIcon />
                </SocialButton>

                <SocialButton
                  label="X"
                  href="#"
                >
                  <XIcon />
                </SocialButton>

              </div>
            </div>

            {/* =================================================
                RIGHT SIDE
            ================================================== */}

            <div>

              {formStatus === "success" ? (
                <div className="flex min-h-[420px] flex-col justify-center border border-[#c8952a]/30 bg-[#111111] p-8 md:p-10">

                  <div className="mb-6 flex h-12 w-12 items-center justify-center bg-[#cc1414] font-display text-xl font-bold text-white">
                    ✓
                  </div>

                  <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c8952a]">
                    Message Sent
                  </p>

                  <h3 className="mt-3 font-display text-4xl font-black uppercase">
                    Thank You.
                  </h3>

                  <p className="mt-4 max-w-[420px] leading-7 text-[#f0ede8]/50">
                    We've received your message. Our team will
                    get back to you as soon as possible.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setFormStatus("idle")
                    }
                    className="mt-8 w-fit border border-white/15 px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:border-white/40"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block font-display text-[12px] font-bold uppercase tracking-[0.2em] text-[#c8952a]"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleInputChange}
                      placeholder="Marcus Bell"
                      autoComplete="name"
                      required
                      className="h-[52px] w-full border border-white/[0.12] bg-[#131313] px-4 text-[15px] text-[#f0ede8] placeholder:text-[#555] transition focus:border-[#c8952a] focus:outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-display text-[12px] font-bold uppercase tracking-[0.2em] text-[#c8952a]"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleInputChange}
                      placeholder="marcus@example.com"
                      autoComplete="email"
                      required
                      className="h-[52px] w-full border border-white/[0.12] bg-[#131313] px-4 text-[15px] text-[#f0ede8] placeholder:text-[#555] transition focus:border-[#c8952a] focus:outline-none"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block font-display text-[12px] font-bold uppercase tracking-[0.2em] text-[#c8952a]"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about yourself or what you're looking for..."
                      required
                      rows={6}
                      className="w-full resize-none border border-white/[0.12] bg-[#131313] px-4 py-4 text-[15px] text-[#f0ede8] placeholder:text-[#555] transition focus:border-[#c8952a] focus:outline-none"
                    />
                  </div>

                  {/* Error */}
                  {formStatus === "error" && (
                    <div className="border border-red-900/60 bg-red-950/30 px-4 py-3 text-sm text-red-300">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center gap-3 bg-[#cc1414] px-6 py-4 font-display text-[14px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#e01a1a] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting
                      ? "Sending..."
                      : "Send Message"}

                    {!isSubmitting && (
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
         FOOTER
      ====================================================== */}

      <footer className="bg-[#080808]">
        <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-8">

          <div className="flex flex-col justify-between gap-10 md:flex-row">

            {/* Brand */}
            <div>
              <div className="font-display text-3xl font-black uppercase tracking-[0.08em]">
                <span className="text-[#cc1414]">
                  ORVILLE
                </span>{" "}
                GYM
              </div>

              <p className="mt-3 max-w-[300px] text-sm leading-6 text-[#f0ede8]/40">
                Strength. Discipline. Destiny.
              </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">

              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[#c8952a]">
                  Explore
                </p>

                <div className="mt-4 space-y-3 text-sm text-[#f0ede8]/50">
                  <a
                    href="#programs"
                    className="block transition hover:text-white"
                  >
                    Programs
                  </a>

                  <a
                    href="#pricing"
                    className="block transition hover:text-white"
                  >
                    Pricing
                  </a>

                  <a
                    href="#contact"
                    className="block transition hover:text-white"
                  >
                    Contact
                  </a>
                </div>
              </div>

              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[#c8952a]">
                  Visit
                </p>

                <div className="mt-4 space-y-3 text-sm leading-5 text-[#f0ede8]/50">
                  <p>
                    Downtown
                    <br />
                    Kashmir
                  </p>

                  <p>
                    06:00 — 23:00
                    <br />
                    Daily
                  </p>
                </div>
              </div>

              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[#c8952a]">
                  Admin
                </p>

                <div className="mt-4">
                  <a
                    href="/admin/dashboard"
                    className="text-sm text-[#f0ede8]/50 transition hover:text-white"
                  >
                    Admin Dashboard →
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-12 border-t border-white/[0.07] pt-6 font-display text-xs uppercase tracking-[0.12em] text-[#f0ede8]/25">
            © 2026 Orville Gym. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

/* =========================================================
   CONTACT DETAIL
========================================================= */

type ContactDetailProps = {
  label: string;
  value: string;
};

function ContactDetail({
  label,
  value,
}: ContactDetailProps) {
  return (
    <div className="grid grid-cols-[72px_1fr] gap-4">
      <span className="pt-1 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-[#c8952a]">
        {label}
      </span>

      <span className="text-[15px] text-[#f0ede8]/85">
        {value}
      </span>
    </div>
  );
}

/* =========================================================
   SOCIAL BUTTON
========================================================= */

type SocialButtonProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

function SocialButton({
  href,
  label,
  children,
}: SocialButtonProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-[44px] w-[44px] items-center justify-center border border-white/[0.12] text-[#f0ede8]/50 transition hover:border-[#c8952a] hover:text-[#c8952a]"
    >
      {children}
    </a>
  );
}

/* =========================================================
   INSTAGRAM
========================================================= */

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

/* =========================================================
   FACEBOOK
========================================================= */

function FacebookIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

/* =========================================================
   X / TWITTER
========================================================= */

function XIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}