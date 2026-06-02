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

    if (isSending) {
      return;
    }

    if (!window.emailjs || !isReady) {
      setStatus({
        type: "error",
        text: "The contact form is still loading. Please try again in a moment."
      });
      return;
    }

    setIsSending(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const templateParams = {
      contact: formData.get("contact"),
      name: formData.get("name"),
      time: formData.get("time"),
      message: formData.get("message")
    };

    try {
      const result = await window.emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        templateParams,
        emailJsConfig.publicKey
      );
      if (result?.status && result.status !== 200) {
        throw result;
      }
      form.reset();
      setStatus({
        type: "success",
        text: "Thanks, your message has been sent. FarNorth IT will get back to you soon."
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        text: "Sorry, the form could not confirm delivery. Please try again or email us directly."
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
          <p
            className={`form-status ${status.type}`}
            role={status.type === "error" ? "alert" : "status"}
          >
            {status.text}
          </p>
        ) : null}
      </form>
    </>
  );
}
