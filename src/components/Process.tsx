import { PROCESS_STEPS } from "../lib/constants";

export default function Process() {
  return (
    <section id="vision" className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <div className="text-center">
        <p className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-seagreen-light sm:text-sm">
          ✦ How I Work
        </p>
        <h2 className="font-display text-2xl text-gold sm:text-3xl">
          My Automation Process
        </h2>
        <p className="mx-auto mt-3 max-w-xl font-body text-sm text-cream/65 sm:text-base">
          A practical, step-by-step approach that turns messy operations into
          self-running systems — without the guesswork.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {PROCESS_STEPS.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl border border-gold/10 bg-cream/[0.03] p-6"
          >
            <span className="font-display text-3xl text-gold/40">
              {step.number}
            </span>
            <h4 className="mt-2 font-display text-lg text-cream">
              {step.title}
            </h4>
            <p className="mt-1 font-body text-sm text-cream/65">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
