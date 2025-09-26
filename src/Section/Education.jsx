import React from "react";

export default function Education() {
  const schools = [
    {
      name: "Jose Rizal Memorial State University – Katipunan Campus",
      year: "Graduated (2024–2025) — Bachelor of Science in Computer Science",
      details: [
        "Developed multiple web and mobile projects using PHP, JavaScript, Kotlin, and MySQL.",
        "Completed On-the-Job Training in IT infrastructure and website management.",
        "Actively participated in campus technology events and coding competitions.",
      ],
    },
    {
      name: "Don Jose Aguirre Senior High School",
      year: "Graduated (2019–2020) — Humanities and Social Sciences",
      details: [
        "Focused on communication, research, and analytical skills.",
        "Served as a class officer, organizing academic and extracurricular activities.",
        "Engaged in school debates and community outreach programs.",
      ],
    },
    {
      name: "Don Jose Aguirre National High School",
      year: "Graduated (2018–2019)",
      details: [
        "Participated in campus organizations and science-related clubs.",
        "Joined inter-school competitions in academic and technical events.",
        "Consistently achieved honors in academics.",
      ],
    },
    {
      name: "Don Jose Aguirre Elementary School",
      year: "Graduated (2013–2014)",
      details: [
        "Maintained excellent academic performance throughout primary education.",
        "Actively joined school activities such as sports and arts programs.",
        "Built foundational skills in communication, teamwork, and leadership.",
      ],
    },
  ];

  return (
    <section className="education">
      <h1>Education</h1>
      <div className="edu-list">
        {schools.map((school, i) => (
          <div key={i} className="edu-card">
            <h2>{school.name}</h2>
            <p className="edu-year">{school.year}</p>
            <ul>
              {school.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
