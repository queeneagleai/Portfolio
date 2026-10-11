import { PHONE_TEL } from "../lib/constants";

// "Book a Strategy Call" removed per instructions — only the voice agent CTA remains.
export default function LiveDemo() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8">
      <p className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-seagreen-light sm:text-sm">
        ✦ Live Demo
      </p>
      <h2 className="font-display text-2xl text-gold sm:text-3xl">
        Experience AI Automation Live
      </h2>
      <p className="mx-auto mt-3 max-w-xl font-body text-sm text-cream/65 sm:text-base">
        Call my AI Voice Agent right now and experience firsthand how
        intelligent automation sounds.
      </p>

      <div className="mt-8 flex justify-center">
        <a
          href={`tel:${PHONE_TEL}`}
          className="rounded-full bg-seagreen px-8 py-3 font-body text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
        >
          📞 Call My AI Voice Agent
        </a>
      </div>
    </section>
  );
}
