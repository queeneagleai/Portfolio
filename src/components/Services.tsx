import { SERVICES } from "../lib/constants";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div className="text-center">
        <p className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-seagreen-light sm:text-sm">
          ✦ Services / Expertise
        </p>
        <h2 className="font-display text-2xl text-gold sm:text-3xl">
          What I Build
        </h2>
        <p className="mx-auto mt-3 max-w-xl font-body text-sm text-cream/65 sm:text-base">
          Precision-engineered automation solutions designed to scale your
          business intelligently.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-gold/10 bg-cream/[0.03] p-6 text-center transition-colors hover:border-gold/40"
          >
            <span className="text-2xl">{service.icon}</span>
            <h4 className="mt-3 font-display text-base text-cream sm:text-lg">
              {service.title}
            </h4>
            <p className="mt-1 font-body text-sm text-cream/60">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
