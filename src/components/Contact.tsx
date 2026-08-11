"use client";

import { FormEvent, useState } from "react";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setIsSubmitting(true);

    // Temporary frontend behaviour.
    // Later this will send the form to our backend/API.
    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    setIsSubmitting(false);
    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section
      id="contact"
      className="border-t border-white/[0.06] bg-[#0a0a0a]"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-24 md:px-8 md:py-32">

        {/* Section heading */}
        <div>
          <p className="font-display text-[12px] font-bold uppercase tracking-[0.22em] text-[#c8952a]">
            Get In Touch
          </p>

          <h2 className="mt-4 font-display text-[64px] font-black uppercase leading-[0.85] tracking-[-0.035em] text-[#f0ede8] sm:text-[76px] md:text-[82px] lg:text-[86px]">
            Contact Us
          </h2>
        </div>

        {/* Main content */}
        <div className="mt-16 grid gap-16 md:grid-cols-[1fr_1fr] md:gap-20 lg:mt-20">

          {/* =====================================================
              LEFT SIDE
          ====================================================== */}

          <div>
            <p className="max-w-[540px] text-[16px] leading-[1.8] text-[#f0ede8]/70 md:text-[17px]">
              Questions about membership, programs, or scheduling?
              We'd love to hear from you. Drop us a message and our
              team will get back to you within 24 hours.
            </p>

            {/* Contact information */}
            <div className="mt-12 space-y-8">

              {/* Address */}
              <ContactDetail
                label="Address"
                value="142 Iron Street, Downtown"
              />

              {/* Phone */}
              <ContactDetail
                label="Phone"
                value="(555) 820-4100"
              />

              {/* Email */}
              <ContactDetail
                label="Email"
                value="hello@orvillegym.com"
              />

              {/* Hours */}
              <ContactDetail
                label="Hours"
                value="Mon–Sun, 6AM–11PM"
              />

            </div>

            {/* Social icons */}
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

          {/* =====================================================
              RIGHT SIDE — FORM
          ====================================================== */}

          <div>

            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-start justify-center border border-white/[0.1] bg-[#111111] p-8 md:p-10">

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
                  We've received your message. Our team will get
                  back to you within 24 hours.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 border border-white/15 px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:border-white/40"
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
                <FormField
                  label="Full Name"
                  name="name"
                  type="text"
                  placeholder="Marcus Bell"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

                {/* Email */}
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="marcus@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

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
                    onChange={handleChange}
                    placeholder="Tell us about yourself or what you're looking for..."
                    required
                    rows={6}
                    className="w-full resize-none border border-white/[0.12] bg-[#131313] px-4 py-4 text-[15px] text-[#f0ede8] placeholder:text-[#555] transition focus:border-[#c8952a] focus:outline-none"
                  />
                </div>

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
  );
}

/* =============================================================
   CONTACT DETAIL
============================================================= */

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

/* =============================================================
   FORM FIELD
============================================================= */

type FormFieldProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  required?: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  required = false,
  onChange,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-display text-[12px] font-bold uppercase tracking-[0.2em] text-[#c8952a]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="h-[52px] w-full border border-white/[0.12] bg-[#131313] px-4 text-[15px] text-[#f0ede8] placeholder:text-[#555] transition focus:border-[#c8952a] focus:outline-none"
      />
    </div>
  );
}

/* =============================================================
   SOCIAL BUTTON
============================================================= */

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

/* =============================================================
   ICONS
============================================================= */

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