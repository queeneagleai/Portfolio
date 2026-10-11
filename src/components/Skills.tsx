import { SKILLS } from "../lib/constants";

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <h3 className="text-center font-display text-xl text-gold sm:text-2xl">
        My Skills
      </h3>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((skill) => (
          <div
            key={skill.title}
            className="rounded-2xl border border-gold/10 bg-cream/[0.03] p-6 transition-colors hover:border-seagreen/40"
          >
            <span className="text-2xl">{skill.icon}</span>
            <h4 className="mt-3 font-display text-base text-cream sm:text-lg">
              {skill.title}
            </h4>
            <p className="mt-1 font-body text-sm text-cream/60">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
