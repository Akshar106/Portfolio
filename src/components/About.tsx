import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { about } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="container-x py-24">
      <SectionHeading eyebrow="01 · About" title="A bit about me" />

      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="md:col-span-3" delay={0.05}>
          <div className="space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="md:col-span-2" delay={0.15}>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
            {about.stats.map((stat) => (
              <div key={stat.label} className="card p-5">
                <div className="font-display text-3xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
