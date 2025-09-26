import React from "react";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      {title !== "" && (
        <h2 id={`${id}-title`} className="section-title">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
