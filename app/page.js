import Image from "next/image";
import ContactForm from "../components/ContactForm";

const services = [
  {
    title: "Local IT Consulting",
    text: "Practical advice for improving systems, reducing risk, and planning technology around how your Cairns business actually works."
  },
  {
    title: "24/7 Managed IT Services",
    text: "Monitoring, maintenance, user support, and fast response when the systems your team depends on need attention."
  },
  {
    title: "Cybersecurity & Compliance",
    text: "Layered security, backup planning, access control, and compliance-minded support for Australian business environments."
  },
  {
    title: "Cloud & Workplace Systems",
    text: "Microsoft 365, device management, email, networking, and workplace tools configured for reliability and ease of use."
  }
];

const strengths = [
  {
    value: "Cairns",
    label: "Local support"
  },
  {
    value: "24/7",
    label: "Monitoring options"
  },
  {
    value: "MSP",
    label: "Managed IT focus"
  }
];

const process = [
  "Assess the current setup",
  "Stabilise critical systems",
  "Improve security and backups",
  "Support the team ongoing"
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="FarNorth IT home">
          <Image
            src="/assets/images/logo.webp"
            alt="FarNorth IT"
            width="360"
            height="203"
          />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">Managed IT Services in Cairns</p>
            <h1>Reliable IT support for Far North Queensland businesses.</h1>
            <p className="hero-copy">
              FarNorth IT helps local teams keep their systems secure, supported,
              and ready for the workday. Clear advice, practical fixes, and ongoing
              managed services without the city-sized runaround.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Book a Free Consultation
              </a>
              <a className="button secondary" href="#services">
                View Services
              </a>
            </div>
            <div className="hero-proof" aria-label="Service highlights">
              {strengths.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual" aria-label="Managed IT support in Cairns">
            <Image
              src="/assets/images/hero-cairns.webp"
              alt="Technology infrastructure with network cabling"
              width="900"
              height="1200"
              priority
            />
            <div className="status-card">
              <span>Systems monitored</span>
              <strong>Support ready</strong>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-heading">
            <p className="eyebrow">What We Do</p>
            <h2>IT services that keep operations moving</h2>
            <p>
              From one-off advice to ongoing managed support, the focus is simple:
              fewer surprises, safer systems, and better day-to-day technology.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span aria-hidden="true" />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="split-section">
          <div className="split-media">
            <Image
              src="/assets/images/technician-work.webp"
              alt="IT technician working with business technology"
              width="1400"
              height="934"
            />
          </div>
          <div className="split-copy">
            <p className="eyebrow">About FarNorth IT</p>
            <h2>Local experience, practical support, and calm execution.</h2>
            <p>
              FarNorth IT delivers reliable IT solutions tailored to local business
              needs. Our founder, currently serving as Systems Administrator at the
              Cairns Casino, brings extensive experience managing mission-critical
              IT systems in the region&apos;s demanding business environment.
            </p>
            <p>
              We understand the unique challenges faced by Cairns businesses and
              provide personalized support that keeps operations running smoothly.
            </p>
          </div>
        </section>

        <section id="approach" className="approach-section">
          <div className="section-heading">
            <p className="eyebrow">Approach</p>
            <h2>A simple path from messy IT to managed confidence</h2>
          </div>
          <div className="process-list">
            {process.map((item, index) => (
              <article className="process-step" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Tell us what you need help with</h2>
            <p>
              Send through your contact details, the best time to reach you, and a
              quick note about your IT needs. FarNorth IT will get back to you soon.
            </p>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer>
        <p>
          &copy; 2026 FarNorth IT - Professional IT Support in Cairns,
          Queensland.
        </p>
      </footer>
    </>
  );
}
