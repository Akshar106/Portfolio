import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 py-8 dark:border-slate-800/60">
      <div className="container-x flex flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs">
          Built with React, TypeScript &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
