import React from "react";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-grid">
        {/* Left: heading + social buttons */}
        <div className="contact-left">
          <h1>Contact</h1>
          <p className="muted">Reach me on any platform below.</p>

          <div className="contact-socials">
            {/* Gmail */}
            <a
              href="mailto:joemarie27r@gmail.com"
              className="social-btn"
              aria-label="Send me an email"
            >
              <img
                src="/icons/Gmail_icon.webp"
                alt="Email"
                className="social-icon"
                loading="lazy"
              />{" "}
              Email
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/joemarie.amante.ronday/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Visit my Facebook profile"
            >
              <img
                src="/icons/Facebook_icon.webp"
                alt="Facebook"
                className="social-icon"
                loading="lazy"
              />{" "}
              Facebook
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/joemari_e69/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Visit my Instagram profile"
            >
              <img
                src="/icons/Instagram_icon.webp"
                alt="Instagram"
                className="social-icon"
                loading="lazy"
              />{" "}
              Instagram
            </a>

            {/* LinkedIn */}
            <a
              href="https://ph.linkedin.com/in/joemarie-ronday-908a9a360"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Visit my LinkedIn profile"
            >
              <img
                src="/icons/LinkIn_icon.png"
                alt="LinkedIn"
                className="social-icon"
                loading="lazy"
              />{" "}
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right: image */}
        <div className="contact-right">
          <img
            src="/contact/contact.png"
            alt="Joemarie Amante Ronday"
            className="contact-portrait"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
