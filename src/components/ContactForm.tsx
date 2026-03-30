"use client";
import { EnvelopeIcon } from "@/components/icons";
import { FadeUp } from "@/components/motion";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const c = t.contact;
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Failed to send message.");
      }
      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="bg-[#010254] py-20 relative overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9333EA] rounded-full opacity-5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E32066] rounded-full opacity-5 blur-3xl pointer-events-none" />

      <div className="max-w-300 mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: text content */}
          <FadeUp className="lg:w-96 shrink-0">
            <h2 className="gradient-text text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {c.title}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-5">
              {c.cta}
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              {c.sideP2}
            </p>
            <div className="flex items-center gap-3 text-sm">
              <EnvelopeIcon />
              <span className="text-white/50">{c.emailLabel}</span>
            </div>
            <a
              href="mailto:info@initconf.org"
              className="inline-block mt-2 text-[#1FC7D8] font-semibold text-base hover:underline"
            >
              info@initconf.org
            </a>
          </FadeUp>

          {/* Right: form */}
          <FadeUp delay={0.15} className="flex-1 w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  {c.name}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder={c.name}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#1FC7D8] focus:ring-1 focus:ring-[#1FC7D8] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  {c.email}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder={c.email}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#1FC7D8] focus:ring-1 focus:ring-[#1FC7D8] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">
                  {c.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  placeholder={c.message}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#1FC7D8] focus:ring-1 focus:ring-[#1FC7D8] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="btn-shimmer w-full h-14 bg-[#D3165A] text-white font-bold text-xl rounded-xl hover:bg-[#B8134E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? "..." : c.send}
              </button>
              {error && (
                <p className="text-center text-red-400 font-medium pt-2">
                  {error}
                </p>
              )}
              {submitted && (
                <p className="text-center text-[#1FC7D8] font-medium pt-2">
                  {c.success}
                </p>
              )}
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
