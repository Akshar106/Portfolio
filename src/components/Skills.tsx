import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-slate-200/60 bg-white/40 py-24 dark:border-slate-800/60 dark:bg-slate-900/30"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="02 · Skills"
          title="Tools I work with"
          subtitle="The languages, frameworks, and platforms I reach for when building ML systems and data products."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.08}>
              <div className="card h-full p-6">
                <h3 className="mb-4 font-display text-lg font-semibold text-slate-900 dark:text-white">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-slate-200 bg-slate-100/60 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:border-accent-400/60 hover:text-accent-500 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:text-accent-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
