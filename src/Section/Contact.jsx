import React from "react";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-grid">
        {/* Contact form */}
        <div className="contact-left">
          <h1>Contact</h1>
          <p className="muted">
            Want to collaborate or hire me? Send me a message.
          </p>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted! (Hook up with backend or service)");
            }}
          >
            <label>
              Name
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" required />
            </label>
            <label>
              Message
              <textarea rows="4" placeholder="Your message..." required />
            </label>
            <button type="submit" className="btn btn--primary">
              Send
            </button>
          </form>

          <div className="contact-socials">
            <a href="mailto:yourmail@gmail.com" className="social-btn">
              📧 Gmail
            </a>
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              📘 Facebook
            </a>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              📸 Instagram
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="contact-right">
          <img src="/contact/contact.png" alt="Joemarie Amante Ronday" />
        </div>
      </div>
    </section>
  );
}
