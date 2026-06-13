import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import Tilt from './ui/Tilt';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-slate-200/60 bg-white/40 py-24 dark:border-slate-800/60 dark:bg-slate-900/30"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="04 · Projects"
          title="Things I've built"
          subtitle="A selection of projects that show how I think and what I like to work on."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06} className="h-full">
              <Tilt className="h-full">
                <article className="card group flex h-full flex-col p-6">
                <div className="mb-4 flex items-center justify-between">
                  {/* Folder-style icon */}
                  <svg
                    className="h-9 w-9 text-accent-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>

                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} source`}
                        className="text-slate-400 transition-colors hover:text-accent-500"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="text-slate-400 transition-colors hover:text-accent-500"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-slate-900 transition-colors group-hover:text-accent-500 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-accent-600 dark:text-accent-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
