import React, { useEffect, useState } from "react";
import "../styles/theme.css";

export default function SlideUp({
  children,
  duration = 600,
  delay = 0,
  className = "",
}) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation after mount (no opacity change, only slide)
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className={`${animate ? "slide-up" : ""} ${className}`}
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
