import { PROJECTS } from "../lib/constants";

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div className="text-center">
        <p className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-seagreen-light sm:text-sm">
          ✦ Portfolio
        </p>
        <h2 className="font-display text-2xl text-gold sm:text-3xl">
          Featured n8n Automations
        </h2>
        <p className="mx-auto mt-3 max-w-xl font-body text-sm text-cream/65 sm:text-base">
          A curated selection of intelligent workflows engineered to save
          hours, eliminate errors, and unlock revenue.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <a
            key={project.title}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border border-gold/10 bg-cream/[0.03] p-6 transition-colors hover:border-seagreen/50"
          >
            <span className="w-fit rounded-full border border-seagreen/40 px-3 py-1 font-body text-[11px] uppercase tracking-wide text-seagreen-light">
              {project.category}
            </span>
            <h3 className="mt-4 font-display text-lg text-cream sm:text-xl">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 font-body text-sm text-cream/65">
              {project.description}
            </p>
            <span className="mt-5 inline-flex items-center gap-1 font-body text-sm text-gold transition-transform group-hover:translate-x-1">
              View Workflow →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
