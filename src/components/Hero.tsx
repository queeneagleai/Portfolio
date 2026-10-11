import { GITHUB_URL, CALENDLY_URL } from "../lib/constants";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-6xl flex-col items-center px-5 pb-16 pt-14 text-center sm:px-8 sm:pt-20"
    >
      {/* Profile photo — gentle breathing pulse + 3 dots orbiting around it */}
      <div className="relative mb-8 h-40 w-40 animate-breathe sm:h-48 sm:w-48">
        <div className="absolute inset-0 rounded-full bg-gold/20 blur-2xl" />

        {/* Orbit ring 1 — dot travels the full circle */}
        <div className="absolute inset-[-14px] animate-orbit">
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-seagreen-light shadow-[0_0_8px_rgba(79,174,151,0.8)]" />
        </div>
        {/* Orbit ring 2 — opposite direction, slightly larger, slower */}
        <div className="absolute inset-[-24px] animate-orbit-reverse">
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_8px_rgba(227,190,85,0.8)]" />
        </div>
        {/* Orbit ring 3 — fastest, smallest, tight to the photo */}
        <div className="absolute inset-[-6px] animate-orbit-fast">
          <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cream shadow-[0_0_6px_rgba(243,238,221,0.7)]" />
        </div>

        <div className="absolute inset-0 rounded-full border-2 border-gold shadow-[0_0_40px_rgba(227,190,85,0.25)]">
          <img
            src="/queen-ikwuji.jpg"
            alt="Queen Ikwuji — AI Automation Consultant and Engineer"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>

      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.035); }
        }
        .animate-breathe {
          animation: breathe 4.5s ease-in-out infinite;
        }
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-orbit {
          animation: orbit 6s linear infinite;
        }
        .animate-orbit-reverse {
          animation: orbit-reverse 9s linear infinite;
        }
        .animate-orbit-fast {
          animation: orbit 4s linear infinite;
        }
      `}</style>

      <p className="mb-4 flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-seagreen-light sm:text-sm">
        ✦ n8n · AI Agents · APIs
      </p>

      <h1 className="font-display text-3xl leading-tight text-gold sm:text-4xl md:text-5xl">
        Queen Ikwuji
        <span className="block text-seagreen">
          AI Automation Consultant and Engineer
        </span>
        <span className="block text-2xl text-cream sm:text-3xl md:text-4xl">
          Turning Complex Operations into Intelligent Systems
        </span>
      </h1>

      <p className="mt-6 max-w-2xl font-body text-sm text-cream/75 sm:text-base">
        I design and build custom AI agents and intelligent automations that
        save businesses dozens of hours every week, slash operational costs,
        and eliminate repetitive manual tasks — so you can focus on growth
        while your systems run 24/7.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gold px-7 py-3 font-body text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
        >
          View My Portfolio
        </a>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-seagreen px-7 py-3 font-body text-sm font-medium text-seagreen-light transition-colors hover:bg-seagreen hover:text-ink"
        >
          Book a Strategy Call
        </a>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-6 sm:gap-16">
        {[
          { value: "50+", label: "Workflows Built" },
          { value: "18+", label: "Clients Served" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-2xl text-gold sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 font-body text-[11px] uppercase tracking-wider text-cream/60 sm:text-xs">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
