import React, { useEffect, useRef, useState } from "react";

/**
 * CountUp
 * - from: starting number (default 0)
 * - to: target number
 * - duration: ms to reach target (e.g., 1200)
 * - replayEvery: loop interval in ms (e.g., 8000)
 * - delayMs: wait before each run (useful for staggering)
 * - suffix/prefix: optional text
 * - decimals: number of decimal places
 */
export default function CountUp({
  from = 0,
  to = 100,
  duration = 1200,
  replayEvery = 8000,
  delayMs = 0,
  suffix = "",
  prefix = "",
  decimals = 0,
}) {
  const [val, setVal] = useState(from);
  const startRef = useRef(null);
  const rafRef = useRef(null);
  const loopRef = useRef(null);
  const delayRef = useRef(null);

  const animate = (ts) => {
    if (!startRef.current) startRef.current = ts;
    const elapsed = ts - startRef.current;
    const t = Math.min(1, elapsed / duration);
    // easeOutCubic for a smooth finish
    const eased = 1 - Math.pow(1 - t, 3);
    const current = from + (to - from) * eased;
    setVal(current);
    if (t < 1) rafRef.current = requestAnimationFrame(animate);
  };

  const run = () => {
    cancelAnimationFrame(rafRef.current);
    startRef.current = null;
    setVal(from); // <-- always reset to 0 (or `from`) before each run
    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // kick off with optional delay
    delayRef.current = setTimeout(run, delayMs);

    // replay every X ms (8s)
    loopRef.current = setInterval(() => {
      clearTimeout(delayRef.current);
      delayRef.current = setTimeout(run, delayMs);
    }, replayEvery);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearInterval(loopRef.current);
      clearTimeout(delayRef.current);
    };
  }, [from, to, duration, replayEvery, delayMs]);

  const formatted = (
    decimals ? val.toFixed(decimals) : Math.round(val)
  ).toLocaleString();

  return (
    <span aria-live="polite" aria-atomic="true">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
