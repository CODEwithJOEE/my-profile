import React from "react";

// Option A: import from /src/assets (bundled by Vite/Cra)
import cert1 from "../assets/Certificate.jpeg";
// import cert2 from "../assets/Certificate2.jpeg";
// import cert3 from "../assets/Certificate3.jpeg";

// If you prefer /public/assets, remove imports and use src="/assets/...."

const CERTS = [
  {
    id: "frontend-dev",
    title: "Frontend Development",
    org: "XYZ Academy",
    year: "2024",
    img: cert1, // or "/assets/Certificate.jpeg"
  },
  // Add more when ready:
  // { id: "react-adv", title: "React.js Advanced", org: "ABC Bootcamp", year: "2025", img: cert2 },
  // { id: "php-mysql", title: "PHP & MySQL", org: "DEF Institute", year: "2023", img: cert3 },
];

export default function Certificates() {
  return (
    <section className="certificates" aria-labelledby="certificates-title">
      <div className="certificates__inner">
        <header className="certificates__header">
          <h1 id="certificates-title">Certificates</h1>
          <p className="muted">Proof of skills and achievements</p>
        </header>

        <div className="certificates__grid">
          {CERTS.map((c) => (
            <article className="certificate" key={c.id}>
              <img src={c.img} alt={`${c.title} certificate`} loading="lazy" />
              <h3>{c.title}</h3>
              <p>
                Issued by {c.org} — {c.year}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
