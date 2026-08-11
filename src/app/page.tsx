import Navbar from "@/components/Navbar";
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
    description: "Perfect for visitors and occasional training.",
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
    description: "Our most popular option for consistent training.",
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
    description: "For athletes who want the complete Orville experience.",
    features: [
      "Unlimited gym access",
      "Personal training sessions",
      "Priority class booking",
      "Nutrition guidance",
      "Performance tracking",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f0ede8]">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative flex min-h-screen items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/images/background_image.png')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Red atmospheric glow */}
        <div className="absolute left-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#cc1414]/10 blur-[140px]" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-8 pb-20 pt-32">
          <div className="max-w-[950px]">

            {/* Eyebrow */}
            <div className="mb-7 flex flex-wrap items-center gap-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-[#f0ede8]/65">
              <span>EST. 2011</span>

              <span className="h-1 w-1 rounded-full bg-[#cc1414]" />

              <span>DOWNTOWN</span>

              <span className="h-1 w-1 rounded-full bg-[#cc1414]" />

              <span>OPEN 06:00 — 23:00</span>
            </div>

            {/* Main heading */}
            <h1 className="font-display text-[clamp(70px,12vw,180px)] font-black uppercase leading-[0.78] tracking-[-0.045em]">
              <span className="block text-[#f0ede8]">
                STRENGTH.
              </span>

              <span className="block text-[#cc1414]">
                DISCIPLINE.
              </span>

              <span className="block text-[#f0ede8]">
                DESTINY.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-10 max-w-[560px] text-base leading-7 text-[#f0ede8]/65 md:text-lg">
              A serious training environment for people who refuse
              to settle. Build strength, sharpen your discipline,
              and become something stronger.
            </p>

            {/* Actions */}
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

          {/* Hero bottom metadata */}
          <div className="mt-24 flex flex-col justify-between gap-6 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.16em] text-[#f0ede8]/45 md:flex-row">
            <span>
              Strength · Combat · Performance
            </span>

            <span>
              Scroll to explore ↓
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / PHILOSOPHY
      ========================================================= */}

      <section className="border-b border-white/[0.07] bg-[#0a0a0a]">
        <div className="mx-auto max-w-[1280px] px-8 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-end">

            <div>
              <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-[#c8952a]">
                The Orville Standard
              </p>

              <h2 className="mt-5 font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.03em] md:text-7xl">
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
                pushing through discomfort, and becoming more capable
                every single day.
              </p>

              <div className="mt-8 h-px w-24 bg-[#cc1414]" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROGRAMS
      ========================================================= */}

      <section
        id="programs"
        className="border-b border-white/[0.07] bg-[#0d0d0d]"
      >
        <div className="mx-auto max-w-[1280px] px-8 py-24 md:py-32">

          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-[#cc1414]">
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

          <div className="grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
            {programs.map((program) => (
              <article
                key={program.number}
                className="group relative bg-[#111111] p-8 transition hover:bg-[#161616] md:p-10"
              >
                {/* Number */}
                <span className="font-display text-sm font-bold tracking-[0.18em] text-[#c8952a]">
                  {program.number}
                </span>

                {/* Title */}
                <div className="mt-24">
                  <h3 className="font-display text-6xl font-black uppercase leading-[0.8] tracking-[-0.035em]">
                    {program.title}
                  </h3>

                  <h4 className="font-display text-4xl font-black uppercase leading-none text-[#cc1414]">
                    {program.subtitle}
                  </h4>
                </div>

                {/* Description */}
                <p className="mt-8 min-h-[100px] text-sm leading-6 text-[#f0ede8]/50">
                  {program.description}
                </p>

                {/* Link */}
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.14em] text-[#f0ede8] transition group-hover:text-[#cc1414]"
                >
                  Learn More
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#cc1414] transition-all duration-300 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PRICING
      ========================================================= */}

      <section
        id="pricing"
        className="border-b border-white/[0.07] bg-[#0a0a0a]"
      >
        <div className="mx-auto max-w-[1280px] px-8 py-24 md:py-32">

          <div className="mb-14">
            <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-[#c8952a]">
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

      {/* =========================================================
          CTA
      ========================================================= */}

      <section
        id="contact"
        className="relative overflow-hidden bg-[#cc1414]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_50%,rgba(255,255,255,0.14),transparent_35%)]" />

        <div className="relative mx-auto max-w-[1280px] px-8 py-24 md:py-32">
          <div className="max-w-[850px]">

            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              Your next chapter starts here
            </p>

            <h2 className="mt-5 font-display text-7xl font-black uppercase leading-[0.8] tracking-[-0.045em] text-white md:text-9xl">
              NO
              <br />
              EXCUSES.
            </h2>

            <p className="mt-8 max-w-[520px] text-base leading-7 text-white/70 md:text-lg">
              Stop waiting for the right time. Start building
              the stronger version of yourself today.
            </p>

            <a
              href="#pricing"
              className="mt-9 inline-flex bg-[#0a0a0a] px-7 py-4 font-display text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#181818]"
            >
              Join Orville
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="bg-[#080808]">
        <div className="mx-auto max-w-[1280px] px-8 py-12">

          <div className="flex flex-col justify-between gap-10 md:flex-row">

            <div>
              <div className="font-display text-3xl font-black uppercase tracking-[0.08em]">
                <span className="text-[#cc1414]">
                  ORVILLE
                </span>
                {" "}
                GYM
              </div>

              <p className="mt-3 max-w-[300px] text-sm leading-6 text-[#f0ede8]/40">
                Strength. Discipline. Destiny.
              </p>
            </div>

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
                    href="/admin/login"
                    className="text-sm text-[#f0ede8]/50 transition hover:text-white"
                  >
                    Admin Login →
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-12 border-t border-white/[0.07] pt-6 text-xs uppercase tracking-[0.12em] text-[#f0ede8]/25">
            © 2026 Orville Gym. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}