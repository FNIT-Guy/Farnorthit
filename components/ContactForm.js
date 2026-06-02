"use client";

import Script from "next/script";
import { useState } from "react";

const emailJsConfig = {
  publicKey: "f7_0ydDfbD0xlEesp",
  serviceId: "service_y6y7ezr",
  templateId: "template_abroe0k"
};

export default function ContactForm() {
  const [isReady, setIsReady] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!window.emailjs || !isReady) {
      setStatus({
        type: "error",
        text: "The contact form is still loading. Please try again in a moment."
      });
      return;
    }

    setIsSending(true);
    setStatus(null);

    try {
      await window.emailjs.sendForm(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        event.currentTarget
      );
      event.currentTarget.reset();
      setStatus({
        type: "success",
        text: "Thank you for reaching out. We will get back to you soon."
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        text: "Sorry, there was an error sending your message. Please try again later."
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.emailjs.init(emailJsConfig.publicKey);
          setIsReady(true);
        }}
      />

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          <span>Your Contact</span>
          <input
            type="text"
            name="contact"
            placeholder="Email or phone"
            autoComplete="email"
            required
          />
        </label>
        <label>
          <span>Your Name</span>
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Best Time to Contact You</span>
          <input
            type="text"
            name="time"
            placeholder="Example: Weekdays after 2pm"
            required
          />
        </label>
        <label>
          <span>Message</span>
          <textarea
            name="message"
            placeholder="How can we help?"
            rows="6"
            required
          />
        </label>
        <button type="submit" disabled={isSending || !isReady}>
          {isSending ? "Sending..." : "Send Message"}
        </button>
        {status ? (
          <p className={`form-status ${status.type}`} role="status">
            {status.text}
          </p>
        ) : null}
      </form>
    </>
  );
}
