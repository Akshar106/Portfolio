import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { experience } from '../data/portfolio';

const typeStyles: Record<string, string> = {
  'Full-time': 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  Internship: 'border-accent-500/30 bg-accent-500/10 text-accent-600 dark:text-accent-400',
  'Part-time': 'border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400',
};

export default function Experience() {
  return (
    <section id="experience" className="container-x py-24">
      <SectionHeading
        eyebrow="03 · Experience"
        title="Where I've worked"
        subtitle="A timeline of the roles where I've built and shipped machine-learning work."
      />

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 top-2 hidden h-full w-px bg-gradient-to-b from-accent-500/60 via-slate-300 to-transparent sm:left-[7px] sm:block dark:via-slate-700" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={i * 0.06}>
              <div className="relative sm:pl-10">
                {/* Timeline dot */}
                <span className="absolute left-0 top-1.5 hidden h-3.5 w-3.5 rounded-full border-2 border-accent-500 bg-slate-50 sm:block dark:bg-slate-950" />

                <div className="card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                        {job.role}
                      </h3>
                      <p className="text-accent-500">{job.company}</p>
                    </div>
                    <div className="flex flex-col items-start gap-2 sm:items-end">
                      <span
                        className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${typeStyles[job.type]}`}
                      >
                        {job.type}
                      </span>
                      <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                        {job.period}
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {job.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((h, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <span className="mt-1 text-accent-500">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
