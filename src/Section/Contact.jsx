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
            <a href="joemarie27r@gmail.com" className="social-btn">
              <img
                src="/icons/Gmail_icon.webp"
                alt="GitHub"
                className="social-icon"
              />{" "}
              Gmail
            </a>
            <a
              href="https://www.facebook.com/joemarie.amante.ronday/"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <img
                src="/icons/Facebook_icon.webp"
                alt="GitHub"
                className="social-icon"
              />{" "}
              Facebook
            </a>
            <a
              href="https://www.instagram.com/joemari_e69/?hl=de"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <img
                src="/icons/Instagram_icon.webp"
                alt="GitHub"
                className="social-icon"
              />{" "}
              Instagram
            </a>
            <a
              href="https://ph.linkedin.com/in/joemarie-ronday-908a9a360"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <img
                src="/icons/LinkIn_icon.png"
                alt="GitHub"
                className="social-icon"
              />{" "}
              Gmail
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
