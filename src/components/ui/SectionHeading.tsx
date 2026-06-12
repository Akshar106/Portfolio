import Reveal from './Reveal';

type SectionHeadingProps = {
  /** Small label above the title, e.g. "01." or "About" */
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-sm font-medium tracking-widest text-accent-500 uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
