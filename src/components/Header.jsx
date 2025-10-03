import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import useTheme from "../hooks/useTheme";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const dark = theme === "dark";
  const { pathname } = useLocation();
  const btnRef = useRef(null);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const linkClass = ({ isActive }) => `nav-link ${isActive ? "active" : ""}`;

  return (
    <header className="site-header">
      <nav className="nav">
        <div className="brand">
          <NavLink to="/" className="brand-link">
            <span className="brand-badge">JOE</span>
            <span className="brand-text">Personal Website!</span>
          </NavLink>
        </div>

        {/* RIGHT SIDE: theme + hamburger */}
        <div className="nav-actions">
          <button
            className="theme-toggle"
            aria-label="Toggle dark mode"
            aria-pressed={dark}
            onClick={() => setTheme(dark ? "light" : "dark")}
            title={dark ? "Switch to light" : "Switch to dark"}
          >
            {dark ? "🌙" : "☀️"}
          </button>

          <button
            ref={btnRef}
            className="menu-toggle"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

        <ul
          id="primary-navigation"
          className={`nav-list ${open ? "open" : ""}`}
        >
          <li>
            <NavLink end to="/" className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={linkClass}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" className={linkClass}>
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={linkClass}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" className={linkClass}>
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/certificates" className={linkClass}>
              Certificates
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
