import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';
import Reveal from './ui/Reveal';
import { profile, socials } from '../data/portfolio';

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-200/60 bg-white/40 py-24 dark:border-slate-800/60 dark:bg-slate-900/30"
    >
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-mono text-sm font-medium tracking-widest text-accent-500 uppercase">
            06 · Contact
          </p>
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Let's build something together
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            I'm currently open to new-grad roles and interesting ML/Data Science
            opportunities. Whether you have a question or just want to say hi, my
            inbox is always open.
          </p>

          <a
            href={socials.email}
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-accent-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all hover:-translate-y-0.5 hover:bg-accent-500 hover:shadow-accent-500/40"
          >
            <HiOutlineMail size={18} />
            Say hello
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="mt-10 flex items-center justify-center gap-6">
            {[
              { href: socials.github, icon: FaGithub, label: 'GitHub' },
              { href: socials.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
              { href: `mailto:${profile.email}`, icon: HiOutlineMail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="text-slate-500 transition-colors hover:text-accent-500 dark:text-slate-400 dark:hover:text-accent-400"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
