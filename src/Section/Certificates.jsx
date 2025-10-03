import React, { useState } from "react";
import cert1 from "../assets/Certificate.jpeg";
import cert2 from "../assets/Certificate.jpeg";
import cert3 from "../assets/Certificate.jpeg";

const CERTS = [
  {
    id: "webops-excellence-2025",
    title: "Certificate of Excellence",
    org: "OBI Services",
    year: "July 2025",
    img: cert1,
    description:
      "Awarded to Joemarie A. Ronday for achieving Top 1 Agent in Team WebOps, recognizing outstanding performance, dedication, and excellence.",
  },
  /*{
    id: "react-advanced-2025",
    title: "React.js Advanced",
    org: "ABC Bootcamp",
    year: "2025",
    img: cert2,
    description:
      "Completed an advanced React.js training covering hooks, context, performance optimization, and full app deployment.",
  },
  {
    id: "php-mysql-2023",
    title: "PHP & MySQL",
    org: "DEF Institute",
    year: "2023",
    img: cert3,
    description:
      "Certification in PHP and MySQL development with focus on backend systems, CRUD applications, and database optimization.",
  },*/
];

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  const openModal = (cert) => setActiveCert(cert);
  const closeModal = () => setActiveCert(null);

  return (
    <>
      <section className="certificates" aria-labelledby="certificates-title">
        <div className="certificates__inner">
          <header className="certificates__header">
            <h1 id="certificates-title">Certificates</h1>
            <p className="muted">Proof of skills and achievements</p>
          </header>

          <div className="certificates__grid">
            {CERTS.map((c) => (
              <article className="certificate" key={c.id}>
                <img
                  src={c.img}
                  alt={`${c.title} certificate`}
                  loading="lazy"
                  onClick={() => openModal(c)}
                  className="clickable"
                />
                <h3>{c.title}</h3>
                <p>
                  Issued by {c.org} — {c.year}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeCert && (
        <div className="modal" onClick={closeModal}>
          <span className="modal__close" onClick={closeModal}>
            &times;
          </span>
          <div className="modal__content">
            <img
              src={activeCert.img}
              alt={`${activeCert.title} enlarged`}
              className="modal__img"
            />
            <h2>{activeCert.title}</h2>
            <p>
              Issued by {activeCert.org} — {activeCert.year}
            </p>
            <p className="modal__desc">{activeCert.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
