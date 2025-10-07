import React from "react";

export default function Experience() {
  const summary = [
    "Build and maintain responsive websites and apps using PHP, JavaScript, HTML, CSS, and MySQL.",
    "Enhance site performance, accessibility, and SEO rankings.",
    "Develop and maintain client and corporate websites, including e-commerce platforms.",
  ];

  const jobs = [
    {
      company: "Jose Rizal Memorial State University – Katipunan Campus",
      role: "OJT Trainee",
      duration: "200 Hours — 3 Months",
      bullets: [
        "Installed Wi-Fi routers and network cables across campus buildings.",
        "Performed maintenance on computer laboratory systems, including cleaning and hardware checks.",
        "Upgraded operating systems from Windows 10 to Windows 11 for multiple workstations.",
      ],
    },
    {
      company: "OBI Services",
      role: "Web Developer",
      duration: "4 months — Present",
      bullets: [
        "Maintained OBI Services corporate website, implementing new features and improving SEO.",
        "Integrated WordPress custom themes with PHP and JavaScript for advanced functionality.",
        "Optimized website load speed and mobile responsiveness for better user experience.",
      ],
    },
    {
      company: "MLhuillier Financial Services",
      role: "Staff",
      duration: "8 months",
      bullets: [
        "Supported branch operations, documentation, and customer service tasks.",
        "Processed financial transactions including remittances, bills payments, and pawnshop services.",
        "Managed and verified customer records for accuracy and compliance.",
        "Assisted in resolving customer concerns quickly and professionally.",
        "Maintained confidentiality and security of sensitive customer information.",
      ],
    },
  ];

  return (
    <section className="experience">
      <h1>Experience</h1>

      <ul className="exp-summary">
        {summary.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <div className="exp-list">
        {jobs.map((job, i) => (
          <article
            className="exp-card slide-up"
            key={i}
            style={{
              "--slide-delay": `${i * 120}ms`, // stagger each box
              "--slide-duration": "1000ms",
            }}
          >
            <div className="exp-card__head">
              <h2>{job.company}</h2>
              <span className="badge">{job.role}</span>
            </div>
            <p className="exp-duration">{job.duration}</p>
            <ul className="exp-bullets">
              {job.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
