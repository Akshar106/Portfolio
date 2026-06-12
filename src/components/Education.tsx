import { HiAcademicCap } from 'react-icons/hi';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { education } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="container-x py-24">
      <SectionHeading eyebrow="05 · Education" title="My education" />

      <div className="space-y-6">
        {education.map((edu, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <div className="card flex gap-5 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                <HiAcademicCap size={26} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    {edu.period}
                  </span>
                </div>
                <p className="text-accent-500">{edu.school}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {edu.details}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
