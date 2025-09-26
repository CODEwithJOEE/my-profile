import { useEffect, useRef, useState } from "react";

/**
 * useTypewriter(words, { typingSpeed, deletingSpeed, pauseBetween })
 * Returns the currently typed substring.
 */
export default function useTypewriter(
  words = [],
  { typingSpeed = 100, deletingSpeed = 60, pauseBetween = 1000 } = {}
) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const mounted = useRef(false);

  // Handle React StrictMode double-mount in dev
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!words.length) return;

    const current = words[index % words.length];

    // Pause when full word is typed
    if (!deleting && subIndex === current.length) {
      const id = setTimeout(() => {
        if (!mounted.current) return;
        setDeleting(true);
      }, pauseBetween);
      return () => clearTimeout(id);
    }

    // Move to next word when cleared
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }

    const step = deleting ? -1 : 1;
    const delay = deleting ? deletingSpeed : typingSpeed;

    const id = setTimeout(() => {
      if (!mounted.current) return;
      setSubIndex((s) => Math.max(0, Math.min(current.length, s + step)));
    }, delay);

    return () => clearTimeout(id);
  }, [
    words,
    index,
    subIndex,
    deleting,
    typingSpeed,
    deletingSpeed,
    pauseBetween,
  ]);

  if (!words.length) return "";
  const current = words[index % words.length];
  return current.slice(0, subIndex);
}
