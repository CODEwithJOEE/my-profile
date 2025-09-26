import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import useTypewriter from "../hooks/useTypewriter";
import profilePic from "../assets/logo.png";
import profile from "../data/profile";

export default function Home() {
  const words = useMemo(
    () => ["JavaScript", "Kotlin", "HTML", "CSS", "React", "PHP"],
    []
  );

  const skill = useTypewriter(words, {
    typingSpeed: 90,
    deletingSpeed: 55,
    pauseBetween: 1100,
  });

  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Hi, I’m <span className="accent">{profile.name}</span>{" "}
          <span className="wave">👋</span>
        </h1>

        <p className="hero__lead">{profile.title}</p>

        <p className="hero__sub">
          <span>{profile.specializing}</span>
          <span className="typed">{skill}</span>
          <span className="cursor" aria-hidden>
            |
          </span>
        </p>

        <div className="hero__socials">
          <a
            href="https://github.com/CODEwithJOEE"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourhandle"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://facebook.com/yourhandle"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>

        <p className="hero__meta">
          {profile.age} years old · Born: {profile.Birthdate} · {profile.Status}
          <br />
          Address: {profile.Address}
        </p>

        <div className="hero__actions">
          <Link to="/projects" className="btn btn--primary">
            View Projects
          </Link>
          <Link to="/contact" className="btn btn--ghost">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="hero__avatar">
        {/* ✅ Now uses imported image */}
        <img src={profilePic} alt="Joemarie portrait" />
      </div>
    </section>
  );
}
