import { useEffect, useRef, useState } from "react";

/**
 * Animated counter that counts 0 -> target in `duration` ms,
 * holds the value until `resetEveryMs`, then restarts from 0.
 */
export default function useCounter({
  target = 10,
  duration = 1200,
  resetEveryMs = 8000,
}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(0);
  const loopRef = useRef(null);

  useEffect(() => {
    const animate = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // ease-out (cubic)
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    const start = () => {
      cancelAnimationFrame(rafRef.current);
      startRef.current = 0;
      setValue(0);
      rafRef.current = requestAnimationFrame(animate);
    };

    // start immediately
    start();

    // restart every resetEveryMs
    loopRef.current = setInterval(start, resetEveryMs);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearInterval(loopRef.current);
    };
  }, [target, duration, resetEveryMs]);

  return value;
}
