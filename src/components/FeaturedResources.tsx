import { useState, type FormEvent } from "react";
import { COHORT_MONTH } from "../lib/constants";

// NOTE: No signup/waitlist page exists yet. This is a local, UI-only
// email-capture CTA — it does NOT send data anywhere yet. Swap the
// handleSubmit body for a real webhook/page link once that page is built.
export default function FeaturedResources() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire this up to a real signup endpoint / waitlist page later.
    setSubmitted(true);
  }

  return (
    <section
      id="resources"
      className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8"
    >
      <p className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-seagreen-light sm:text-sm">
        ✦ Featured Resources
      </p>
      <h2 className="font-display text-2xl text-gold sm:text-3xl">
        Learn AI Automation
      </h2>
      <p className="mx-auto mt-3 max-w-xl font-body text-sm text-cream/65 sm:text-base">
        Practical tutorials, workflows and resources for building useful AI
        automations.
      </p>

      <div className="mx-auto mt-8 max-w-md rounded-2xl border border-seagreen/20 bg-cream/[0.03] p-6 sm:p-8">
        <p className="font-body text-sm text-cream/75">
          My {COHORT_MONTH} cohort and first guest tutorial are almost here.
          Drop your email and be the first to know when doors open.
        </p>

        {submitted ? (
          <p className="mt-5 font-body text-sm text-seagreen-light">
            You're on the list — I'll email you the moment it's live. 🎉
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-5 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full flex-1 rounded-full border border-gold/20 bg-transparent px-5 py-3 font-body text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-gold px-6 py-3 font-body text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
            >
              Notify Me
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
