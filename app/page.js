import Image from "next/image";
import ContactForm from "../components/ContactForm";

const services = [
  {
    title: "Local IT Consulting",
    tag: "Advisory",
    text: "Practical advice for improving systems, reducing risk, and planning technology around how your Cairns business actually works."
  },
  {
    title: "24/7 Managed IT Services",
    tag: "Support",
    text: "Monitoring, maintenance, user support, and fast response when the systems your team depends on need attention."
  },
  {
    title: "Cybersecurity & Compliance",
    tag: "Security",
    text: "Layered security, backup planning, access control, and compliance-minded support for Australian business environments."
  },
  {
    title: "Cloud & Workplace Systems",
    tag: "Cloud",
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
  {
    title: "Assess the current setup",
    text: "Map devices, users, software, risks, backups, and pain points."
  },
  {
    title: "Stabilise critical systems",
    text: "Fix the recurring problems first so staff can work with less friction."
  },
  {
    title: "Improve security and backups",
    text: "Tighten access, recovery, updates, and day-to-day protection."
  },
  {
    title: "Support the team ongoing",
    text: "Keep systems monitored, maintained, and easier to improve over time."
  }
];

const outcomes = [
  "Reduced downtime",
  "Clearer IT roadmap",
  "Safer access and backups",
  "Better staff support"
];

const contactDetails = {
  phoneDisplay: "0434 822 076",
  phoneSchema: "+61434822076",
  email: "guy.corrigan@farnorthit.com.au",
  locality: "Edmonton",
  region: "QLD"
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://farnorthit.com.au/#business",
      name: "FarNorth IT",
      url: "https://farnorthit.com.au",
      logo: "https://farnorthit.com.au/assets/images/logo.webp",
      image: "https://farnorthit.com.au/assets/images/og-image.webp",
      telephone: contactDetails.phoneSchema,
      email: contactDetails.email,
      description:
        "Managed IT services, cybersecurity, cloud systems, and practical IT support for Cairns and Far North Queensland businesses.",
      areaServed: [
        {
          "@type": "City",
          name: "Cairns"
        },
        {
          "@type": "AdministrativeArea",
          name: "Far North Queensland"
        },
        {
          "@type": "AdministrativeArea",
          name: "Queensland"
        }
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: contactDetails.locality,
        addressRegion: contactDetails.region,
        addressCountry: "AU"
      },
      priceRange: "$$",
      knowsAbout: [
        "Managed IT services",
        "IT support",
        "Cybersecurity",
        "Microsoft 365",
        "Cloud systems",
        "Business technology consulting"
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "FarNorth IT services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.text
          }
        }))
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://farnorthit.com.au/#website",
      url: "https://farnorthit.com.au",
      name: "FarNorth IT",
      publisher: {
        "@id": "https://farnorthit.com.au/#business"
      },
      inLanguage: "en-AU"
    },
    {
      "@type": "WebPage",
      "@id": "https://farnorthit.com.au/#webpage",
      url: "https://farnorthit.com.au",
      name: "FarNorth IT | Managed IT Services in Cairns",
      isPartOf: {
        "@id": "https://farnorthit.com.au/#website"
      },
      about: {
        "@id": "https://farnorthit.com.au/#business"
      },
      inLanguage: "en-AU"
    }
  ]
};

function SectionHeader({ eyebrow, title, children, align = "left" }) {
  return (
    <div className={`section-heading ${align === "center" ? "center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <span className="card-tag">{service.tag}</span>
      <h3>{service.title}</h3>
      <p>{service.text}</p>
      <a href="#contact" aria-label={`Ask about ${service.title}`}>
        Discuss this service
      </a>
    </article>
  );
}

function ProcessStep({ item, index }) {
  return (
    <article className="process-step">
      <span>{String(index + 1).padStart(2, "0")}</span>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <header className="site-header">
        <a className="brand" href="#home" aria-label="FarNorth IT home">
          <span className="brand-mark" aria-hidden="true">FN</span>
          <span className="brand-text">
            <strong>FarNorth IT</strong>
            <small>Managed IT</small>
          </span>
        </a>
        <nav className="nav-shell" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#approach">Approach</a>
          <a className="nav-cta" href="#contact">
            Contact
          </a>
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

        <section id="services" className="section section-light section-card">
          <SectionHeader
            eyebrow="What We Do"
            title="IT services that keep operations moving"
          >
            From one-off advice to ongoing managed support, the focus is simple:
            fewer surprises, safer systems, and better day-to-day technology.
          </SectionHeader>
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard service={service} key={service.title} />
            ))}
          </div>
        </section>

        <section className="outcomes-band" aria-label="Business outcomes">
          <div>
            <p className="eyebrow">Outcomes</p>
            <h2>Technology should feel steady, secure, and easier to manage.</h2>
          </div>
          <ul>
            {outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="about" className="split-section section-card">
          <div className="split-media">
            <Image
              src="/assets/images/technician-work.webp"
              alt="IT technician working with business technology"
              width="1400"
              height="934"
            />
          </div>
          <div className="split-copy">
            <SectionHeader
              eyebrow="About FarNorth IT"
              title="Local experience, practical support, and calm execution."
            />
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

        <div className="final-stack">
          <section id="approach" className="approach-section">
            <SectionHeader
              eyebrow="Approach"
              title="A simple path from messy IT to managed confidence"
              align="center"
            />
            <div className="process-list">
              {process.map((item, index) => (
                <ProcessStep item={item} index={index} key={item.title} />
              ))}
            </div>
          </section>

          <section id="contact" className="contact-section">
            <div>
              <SectionHeader
                eyebrow="Contact"
                title="Tell us what you need help with"
              />
              <p>
                Send through your contact details, the best time to reach you, and a
                quick note about your IT needs. FarNorth IT will get back to you soon.
              </p>
              <address className="contact-details">
                <a href={`tel:${contactDetails.phoneSchema}`}>
                  {contactDetails.phoneDisplay}
                </a>
                <a href={`mailto:${contactDetails.email}`}>
                  {contactDetails.email}
                </a>
                <span>
                  {contactDetails.locality}, {contactDetails.region} - serving
                  Cairns and Far North Queensland
                </span>
              </address>
            </div>
            <ContactForm />
          </section>
        </div>
      </main>

      <footer>
        <p>
          Managed IT services, cybersecurity, cloud systems, and IT consulting
          for Cairns and Far North Queensland businesses.
        </p>
        <address>
          <a href={`tel:${contactDetails.phoneSchema}`}>
            {contactDetails.phoneDisplay}
          </a>
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          <span>
            {contactDetails.locality}, {contactDetails.region}
          </span>
        </address>
        <p>
          &copy; 2026 FarNorth IT - Professional IT Support in Cairns,
          Queensland.
        </p>
      </footer>
    </>
  );
}
