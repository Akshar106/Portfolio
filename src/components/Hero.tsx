import { useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { FiArrowRight, FiDownload, FiUser } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { profile, socials } from '../data/portfolio';
import NeuralBackground from './ui/NeuralBackground';

// Staggered entrance for the hero text content.
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/** Simple typewriter that cycles through the role strings. */
function useTypewriter(words: string[], speed = 90, pause = 1400) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: number;

    if (!deleting && text === current) {
      timeout = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = window.setTimeout(
        () => {
          setText((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
          );
        },
        deleting ? speed / 2 : speed,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);
  // Falls back to the placeholder if the photo file can't be loaded yet.
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Decorative background: animated aurora glows, grid, and neural net */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/4 h-72 w-72 animate-aurora rounded-full bg-accent-500/25 blur-3xl dark:bg-accent-600/20" />
        <div className="absolute right-1/4 top-1/3 h-80 w-80 animate-aurora rounded-full bg-cyan-400/20 blur-3xl [animation-delay:-5s] dark:bg-cyan-500/10" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 animate-aurora rounded-full bg-indigo-500/20 blur-3xl [animation-delay:-9s] dark:bg-indigo-600/10" />
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>
      {/* Neural-network canvas (interactive, behind content) */}
      <NeuralBackground className="absolute inset-0 -z-10 h-full w-full" />

      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          {profile.available && (
            <motion.span
              variants={item}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to opportunities
            </motion.span>
          )}

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-tight text-slate-900 sm:text-6xl dark:text-white"
          >
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-4 flex items-center text-2xl font-semibold text-slate-700 sm:text-3xl dark:text-slate-200"
          >
            <span className="text-gradient">{typed}</span>
            <span className="ml-1 inline-block h-7 w-[3px] animate-pulse bg-accent-500 sm:h-8" />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400"
          >
            {profile.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all hover:-translate-y-0.5 hover:bg-accent-500 hover:shadow-accent-500/40"
            >
              View my work
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-accent-400 hover:text-accent-500 dark:border-slate-700 dark:text-slate-200 dark:hover:border-accent-500 dark:hover:text-accent-400"
            >
              <FiDownload />
              Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={item} className="mt-8 flex items-center gap-5">
            {[
              { href: socials.github, icon: FaGithub, label: 'GitHub' },
              { href: socials.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
              { href: socials.email, icon: HiOutlineMail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="text-slate-500 transition-colors hover:text-accent-500 dark:text-slate-400 dark:hover:text-accent-400"
              >
                <Icon size={22} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="order-first mx-auto w-full max-w-xs sm:max-w-sm lg:order-none lg:max-w-none"
        >
          <div className="relative animate-float">
            {/* Soft glow behind the frame */}
            <div className="absolute -inset-3 -z-10 rounded-[2.25rem] bg-gradient-to-tr from-accent-500/40 to-cyan-400/40 blur-2xl" />

            {/* Gradient ring frame */}
            <div className="rounded-[2rem] bg-gradient-to-tr from-accent-500 to-cyan-400 p-[3px] shadow-2xl shadow-accent-600/20">
              <div className="aspect-[4/5] overflow-hidden rounded-[calc(2rem-3px)] bg-slate-200 dark:bg-slate-800">
                {profile.avatarUrl && !imgError ? (
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    onError={() => setImgError(true)}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  // Placeholder shown until you add a real photo (see data/portfolio.ts)
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400 dark:from-slate-800 dark:to-slate-900 dark:text-slate-500">
                    <FiUser size={56} />
                    <span className="px-4 text-center text-sm font-medium">
                      Add your photo
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Floating accent badge */}
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:block dark:border-slate-700 dark:bg-slate-900/90">
              <div className="font-display text-lg font-bold text-gradient">2+ yr</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">AI/ML experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
