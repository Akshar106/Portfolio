import { useEffect, useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: highlight the nav link for the section currently in view.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/70 bg-slate-50/80 backdrop-blur-lg dark:border-slate-800/70 dark:bg-slate-950/80'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        {/* Logo / monogram */}
        <a
          href="#home"
          className="font-display text-lg font-bold text-slate-900 dark:text-white"
        >
          <span className="text-gradient">{'</>'}</span> Portfolio
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors hover:text-accent-500 dark:hover:text-accent-400 ${
                    isActive
                      ? 'text-accent-500 dark:text-accent-400'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-accent-500 transition-all duration-300 dark:bg-accent-400 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-200/60 hover:text-accent-500 dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-accent-400"
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-200/60 md:hidden dark:text-slate-200 dark:hover:bg-slate-800/60"
          >
            {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-slate-200/70 bg-slate-50/95 backdrop-blur-lg transition-[max-height] duration-300 md:hidden dark:border-slate-800/70 dark:bg-slate-950/95 ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-accent-500/10 hover:text-accent-500 dark:text-slate-200 dark:hover:text-accent-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
