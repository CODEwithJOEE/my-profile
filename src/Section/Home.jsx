import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import useTypewriter from "../hooks/useTypewriter";
import useAge from "../hooks/useAge"; // <-- add this
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

  const age = useAge(profile.birthdateISO); // <-- compute age

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
            <img
              src="/icons/Github_icon.png"
              alt="GitHub"
              className="social-icon"
            />{" "}
            GitHub
          </a>

          <a
            href="https://ph.linkedin.com/in/joemarie-ronday-908a9a360"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/icons/LinkIn_icon.png"
              alt="LinkedIn"
              className="social-icon"
            />{" "}
            LinkedIn
          </a>

          <a
            href="https://www.facebook.com/joemarie.amante.ronday/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/icons/facebook_icon.webp"
              alt="Facebook"
              className="social-icon"
            />{" "}
            Facebook
          </a>
        </div>

        <p className="hero__meta">
          {age} years old · Born: {profile.birthdateDisplay} · {profile.Status}
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
        <img src={profilePic} alt="Joemarie portrait" />
      </div>
    </section>
  );
}
