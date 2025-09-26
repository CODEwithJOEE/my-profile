import React from "react";

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      items: [
        { name: "PHP", icon: "/icons/PHP-logo.png" },
        { name: "JavaScript", icon: "/icons/JavaScript_logo.png" },
        { name: "Kotlin", icon: "/icons/Kotlin_Icon.png" },
        { name: "HTML", icon: "/icons/HTML5_logo.png" },
        { name: "CSS", icon: "/icons/CSS3_logo.svg" },
      ],
    },
    {
      title: "Frameworks & Tools",
      items: [
        { name: "Laravel", icon: "/icons/Laravel.svg" },
        {
          name: "WordPress (themes & plugins)",
          icon: "/icons/Wordpress-logo.png",
        },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "MySQL", icon: "/icons/mysql-logo.svg" },
        { name: "SQLite", icon: "/icons/SQLite.png" },
        { name: "MySQL Workbench", icon: "/icons/MySQLWorkbench.png" },
      ],
    },
    {
      title: "Version Control & Collaboration",
      items: [{ name: "Git / GitHub", icon: "/icons/GitHub.svg" }],
    },
    {
      title: "UI/UX & Design",
      items: [
        { name: "Canva", icon: "/icons/Canva.svg" },
        { name: "Figma", icon: "/icons/Figma.svg" },
      ],
    },
    {
      title: "Hosting & Deployment",
      items: [
        { name: "XAMPP", icon: "/icons/Xampp.png" },
        { name: "GitHub Pages", icon: "/icons/github.svg" },
        { name: "WordPress Hosting", icon: "/icons/Wordpress-logo.png" },
      ],
    },
    {
      title: "Strengths",
      items: [
        { name: "Clean & Maintainable Code" },
        { name: "Problem-Solving" },
        { name: "Accessibility-First Approach" },
        { name: "SEO Awareness" },
        { name: "Continuous Learning" },
      ],
    },
    {
      title: "Soft Skills",
      items: [
        { name: "Team Collaboration" },
        { name: "Client Communication" },
        { name: "Time Management" },
        { name: "Adaptability" },
        { name: "Project Ownership" },
      ],
    },
  ];

  return (
    <section className="skills">
      <h1>Skills</h1>
      <div className="skills-grid">
        {categories.map((cat, i) => (
          <div key={i} className="skill-card">
            <h2>{cat.title}</h2>
            <div className="skill-items">
              {cat.items.map((item, j) => (
                <span key={j} className="skill-pill">
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt={item.name + " icon"}
                      className="skill-icon"
                    />
                  )}
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
