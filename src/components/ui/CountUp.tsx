import { useEffect, useRef, useState } from 'react';

type CountUpProps = {
  /** The display value, e.g. "4.0", "2+", "5", "6+". Non-numeric parts are preserved. */
  value: string;
  duration?: number;
};

/**
 * Counts a number up from 0 to its target when scrolled into view.
 * Preserves any prefix/suffix (like "+") and decimal precision.
 */
export default function CountUp({ value, duration = 1400 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState('0');
  const started = useRef(false);

  // Parse leading number + suffix (e.g. "2+" -> 2, "+")
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const decimals = match && match[1].includes('.') ? match[1].split('.')[1].length : 0;
  const suffix = match ? match[2] : value;

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
            setDisplay((eased * target).toFixed(decimals));
            if (t < 1) requestAnimationFrame(tick);
            else setDisplay(target.toFixed(decimals));
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, target, decimals, duration, match]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
