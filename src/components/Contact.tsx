import { useState, type FormEvent } from "react";
import { submitContactForm } from "../lib/webhook";
import { LINKEDIN_URL, WHATSAPP_URL, EMAIL } from "../lib/constants";
import type { ContactFormData, SubmitStatus } from "../types";

const EMPTY_FORM: ContactFormData = {
  fullName: "",
  emailAddress: "",
  businessType: "",
  whatSlowsYouDown: "",
};

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function update<K extends keyof ContactFormData>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "submitting") return; // guard against double-submit

    setStatus("submitting");
    setErrorMsg("");

    const result = await submitContactForm(form);

    if (result.success) {
      setStatus("success");
      setForm(EMPTY_FORM);
    } else {
      setStatus("error");
      setErrorMsg(result.message);
    }
  }

  return (
    <section id="connect" className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <div className="text-center">
        <p className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-seagreen-light sm:text-sm">
          ✦ Let's Connect
        </p>
        <h2 className="font-display text-2xl leading-snug text-gold sm:text-3xl">
          Have a repetitive process slowing your business down?
          <span className="block text-cream">
            Let's identify what can be automated.
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-sm text-cream/65 sm:text-base">
          Whether you seek to scale with AI, refine your operations, or build
          a system that runs itself — I'm a click away. Send a message or pick
          a channel below.
        </p>
      </div>

      {status === "success" ? (
        <div className="mx-auto mt-10 max-w-md rounded-2xl border border-seagreen/30 bg-seagreen/5 p-8 text-center">
          <p className="font-display text-lg text-seagreen-light">
            Message sent successfully!
          </p>
          <p className="mt-2 font-body text-sm text-cream/70">
            Thanks for reaching out — I'll get back to you shortly.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-5 font-body text-sm text-gold underline underline-offset-4"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="fullName" className="font-body text-sm text-cream/70">
              Name
            </label>
            <input
              id="fullName"
              required
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              placeholder="Your full name"
              className="rounded-xl border border-gold/20 bg-transparent px-4 py-3 font-body text-sm text-cream placeholder:text-cream/35 focus:border-gold focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="emailAddress" className="font-body text-sm text-cream/70">
              Email Address
            </label>
            <input
              id="emailAddress"
              type="email"
              required
              value={form.emailAddress}
              onChange={(e) => update("emailAddress", e.target.value)}
              placeholder="you@company.com"
              className="rounded-xl border border-gold/20 bg-transparent px-4 py-3 font-body text-sm text-cream placeholder:text-cream/35 focus:border-gold focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label htmlFor="businessType" className="font-body text-sm text-cream/70">
              Business Type
            </label>
            <input
              id="businessType"
              required
              value={form.businessType}
              onChange={(e) => update("businessType", e.target.value)}
              placeholder="e.g. Consulting, Real Estate, Marketing,..."
              className="rounded-xl border border-gold/20 bg-transparent px-4 py-3 font-body text-sm text-cream placeholder:text-cream/35 focus:border-gold focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label htmlFor="whatSlowsYouDown" className="font-body text-sm text-cream/70">
              What slows you down?
            </label>
            <textarea
              id="whatSlowsYouDown"
              required
              rows={4}
              value={form.whatSlowsYouDown}
              onChange={(e) => update("whatSlowsYouDown", e.target.value)}
              placeholder="Tell me about the process you'd love to automate..."
              className="resize-none rounded-xl border border-gold/20 bg-transparent px-4 py-3 font-body text-sm text-cream placeholder:text-cream/35 focus:border-gold focus:outline-none"
            />
          </div>

          {status === "error" && (
            <p className="font-body text-sm text-red-400 sm:col-span-2">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-full bg-gold px-7 py-3 font-body text-sm font-medium text-ink transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 sm:col-span-2"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}

      <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm text-cream/70 underline underline-offset-4 hover:text-gold"
        >
          LinkedIn
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm text-cream/70 underline underline-offset-4 hover:text-gold"
        >
          WhatsApp
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="font-body text-sm text-cream/70 underline underline-offset-4 hover:text-gold"
        >
          Email
        </a>
      </div>
    </section>
  );
}
