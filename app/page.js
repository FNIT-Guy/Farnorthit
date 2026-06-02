import Image from "next/image";
import ContactForm from "../components/ContactForm";

const services = [
  {
    title: "Local IT Consulting",
    text: "Expert IT advice tailored to Cairns businesses, with deep understanding of local market needs and challenges in Far North Queensland."
  },
  {
    title: "24/7 Managed IT Services",
    text: "Round-the-clock IT monitoring and support from our local Cairns team, ensuring minimal downtime for your business operations."
  },
  {
    title: "Industry-Specific IT Solutions",
    text: "Specialized IT support for hospitality, healthcare, and retail sectors in Cairns, with proven experience in Queensland's unique business environment."
  },
  {
    title: "Cybersecurity & Compliance",
    text: "Comprehensive IT security solutions meeting Australian standards, protecting your Cairns business data and operations."
  }
];

const strengths = [
  {
    title: "Local Presence",
    text: "Based in Cairns, with nearby support when your business needs help."
  },
  {
    title: "Always-On Support",
    text: "Practical IT assistance for the systems your business depends on."
  },
  {
    title: "Industry Experience",
    text: "A strong understanding of Cairns hospitality, healthcare, retail, and professional service environments."
  }
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
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-media" aria-hidden="true">
            <Image
              src="/assets/images/hero-cairns.webp"
              alt=""
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className="hero-content">
            <p className="eyebrow">Managed IT Services in Cairns</p>
            <h1>FarNorth IT</h1>
            <p className="hero-copy">
              Professional IT support, managed services, and practical consulting for
              Cairns and Far North Queensland businesses.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Schedule a Free IT Consultation
              </a>
              <a className="button secondary" href="#services">
                Explore Services
              </a>
            </div>
          </div>
        </section>

        <section className="intro-band" aria-label="Service highlights">
          <p>24/7 local IT support</p>
          <p>Industry-specific solutions</p>
          <p>Cybersecurity and compliance</p>
        </section>

        <section id="services" className="section">
          <div className="section-heading">
            <p className="eyebrow">What We Do</p>
            <h2>IT services built for Cairns businesses</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
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
            <h2>Your trusted IT partner in Far North Queensland</h2>
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

        <section className="section compact">
          <div className="strength-grid">
            {strengths.map((item) => (
              <article className="strength" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
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
