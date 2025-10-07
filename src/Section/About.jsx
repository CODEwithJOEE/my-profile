import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/about.webp";
import useCounter from "../hooks/useCounter";
import SlideUp from "../components/SlideUp";

export default function About() {
  // counters: animate to target, reset every 8s
  const years = useCounter({ target: 3, duration: 1200, resetEveryMs: 8000 });
  const projects = useCounter({
    target: 10,
    duration: 1200,
    resetEveryMs: 8000,
  });
  const clients = useCounter({ target: 5, duration: 1200, resetEveryMs: 8000 });

  return (
    <SlideUp duration={1000}>
      <section className="about">
        <div className="about__inner">
          <header className="about__header">
            <h1>About</h1>
            <p className="muted">
              Turning ideas into high-performance websites & apps that work
              anywhere.
            </p>
          </header>

          <div className="about__grid">
            <figure className="about__photo">
              <img src={aboutImg} alt="Joemarie Amante Ronday at work" />
            </figure>

            <div className="about__content">
              <p>
                I’m <strong>Joemarie Amante Ronday</strong>, a web developer
                passionate about building fast, clean, and user-friendly web
                apps. I enjoy transforming ideas into products, whether it’s a
                store website or a Kotlin mobile app connected to a MySQL
                database.
              </p>

              <ul className="about__bullets">
                <li>
                  Built and launched 10+ websites for small businesses and
                  startups.
                </li>
                <li>
                  Improved website load speed by up to 60% through optimization.
                </li>
                <li>
                  Hands-on experience with PHP, JavaScript, Kotlin & MySQL.
                </li>
              </ul>

              <p>
                My approach is simple: <em>clean, maintainable code</em>, a
                focus on
                <em> accessibility and performance</em>, and clear
                communication. I iterate quickly, ship reliably, and stay
                current with tools and best practices so the solutions I build
                keep working long after launch.
              </p>

              {/* Stats */}
              <div className="about__stats">
                <div className="stat">
                  <div className="stat__num">{years}+</div>
                  <div className="stat__label">Years Experience</div>
                </div>
                <div className="stat">
                  <div className="stat__num">{projects}+</div>
                  <div className="stat__label">Projects Shipped</div>
                </div>
                <div className="stat">
                  <div className="stat__num">{clients}+</div>
                  <div className="stat__label">Happy Clients</div>
                </div>
              </div>

              <p className="about__extra">
                Outside of coding, I explore UI/UX trends, develop mobile apps,
                and enjoy a strong cup of coffee while brainstorming my next
                project.
              </p>

              <div className="about__actions">
                <Link to="/projects" className="btn btn--primary">
                  See My Work
                </Link>
                <Link to="/contact" className="btn btn--ghost">
                  Let’s Collaborate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SlideUp>
  );
}
