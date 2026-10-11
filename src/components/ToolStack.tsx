import { TOOL_STACK } from "../lib/constants";

export default function ToolStack() {
  const loop = [...TOOL_STACK, ...TOOL_STACK];

  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <div className="text-center">
        <h3 className="font-display text-xl text-gold sm:text-2xl">
          My Tool Stack
        </h3>
        <p className="mt-2 font-body text-sm text-cream/60">
          Technologies I use to deliver fast, reliable AI automations
        </p>
      </div>

      <div className="relative mt-8 overflow-hidden">
        <div className="flex w-max animate-marquee gap-4">
          {loop.map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="whitespace-nowrap rounded-full border border-seagreen/30 bg-seagreen/5 px-5 py-2 font-body text-sm text-cream/80"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </section>
  );
}
