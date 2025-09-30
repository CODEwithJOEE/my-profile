import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Coffee Shop Website",
      img: "/projects/Coffee-Shop.jpg",
      desc: "A business site for a coffee shop with menu pages and basic ordering forms. Built with PHP, JavaScript, HTML & CSS. Data stored in MySQL.",
      status: "Completed",
      link: "https://example.com/coffee-shop",
      tech: [
        { name: "PHP", icon: "/icons/PHP-logo.png" },
        { name: "JavaScript", icon: "/icons/JavaScript_logo.png" },
        { name: "MySQL", icon: "/icons/mysql-logo.svg" },
      ],
    },
    {
      title: "Milk Tea Shop Website",
      img: "/projects/Boba-Bliss.avif",
      desc: "Brand website for a milk tea shop including product catalog and contact form. Built with PHP, JavaScript, HTML & CSS with a MySQL database.",
      status: "Completed",
      link: "https://example.com/milk-tea",
      tech: [
        { name: "PHP", icon: "/icons/PHP-logo.png" },
        { name: "JavaScript", icon: "/icons/JavaScript_logo.png" },
        { name: "MySQL", icon: "/icons/mysql-logo.svg" },
      ],
    },
    {
      title: "Disaster Master 2.0 (Kotlin)",
      img: "/projects/Disaster-Master.png",
      desc: "A Kotlin app showing disasters (earthquakes, landslides, tsunamis, floods, fires, typhoons) with Tagalog/English/Bisaya support and before/after videos.",
      status: "Completed",
      link: "https://example.com/disaster-master",
      tech: [
        { name: "Kotlin", icon: "/icons/Kotlin_Icon.png" },
        { name: "SQLite", icon: "/icons/SQLite.png" },
      ],
    },
    {
      title: "Client Portfolio Website Project",
      img: "/projects/myprofilewebsite.png",
      desc: "A portfolio website showcasing projects, and skills. Built with HTML, styled CSS, and JavaScript features to ensure accessibility, and mobile-friendly design across devices.",
      status: "Completed",
      link: "https://codewithjoee.github.io/MyWebsiteProfile/",
      tech: [
        { name: "HTML", icon: "/icons/HTML5_logo.png" },
        { name: "CSS", icon: "/icons/CSS3_logo.svg" },
        { name: "JavaScript", icon: "/icons/JavaScript_logo.png" },
      ],
    },
    {
      title: "Sample Portfolio Website Project",
      img: "/projects/profilewebsite.jpg",
      desc: "A sample profile website showcasing projects, about, educations, Experience, and skills. Built with HTML, styled CSS, and JavaScript.",
      status: "Live",
      link: "https://codewithjoee.github.io/WebsiteProfile2.0/",
      tech: [
        { name: "HTML", icon: "/icons/HTML5_logo.png" },
        { name: "CSS", icon: "/icons/CSS3_logo.svg" },
        { name: "JavaScript", icon: "/icons/JavaScript_logo.png" },
      ],
    },
    {
      title: "OBI Services Corporate Website",
      img: "/projects/OBI-Homepage.png", // ✅ lives in public/projects/
      desc: "Corporate site work including SEO optimization, UI improvements, content updates, and performance enhancements.",
      status: "Ongoing",
      link: "https://obi.services/",
      cta: "Visit Website",
      tech: [
        { name: "WordPress", icon: "/icons/Wordpress-logo.png" },
        { name: "PHP", icon: "/icons/PHP-logo.png" },
        { name: "JavaScript", icon: "/icons/JavaScript_logo.png" },
        { name: "HTML", icon: "/icons/HTML5_logo.png" },
        { name: "CSS", icon: "/icons/CSS3_logo.svg" },
      ],
    },
  ];

  return (
    <section className="projects">
      <h1>Projects</h1>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <article className="project-card" key={i}>
            <div className="project-thumb">
              <img src={p.img} alt={`${p.title} preview`} />
              {p.status && (
                <span className={`status ${p.status.toLowerCase()}`}>
                  {p.status}
                </span>
              )}
            </div>

            <div className="project-body">
              <h2>{p.title}</h2>
              <p className="project-desc">{p.desc}</p>

              {p.tech?.length > 0 && (
                <div className="tech-list">
                  {p.tech.map((t, j) => (
                    <span className="tech-pill" key={j}>
                      {t.icon && <img src={t.icon} alt="" aria-hidden="true" />}
                      {t.name}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="project-actions">
              <a
                className="btn btn--primary"
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                {p.cta || "View Live"}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
