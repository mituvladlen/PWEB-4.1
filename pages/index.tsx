import Head from "next/head";
import { useEffect } from "react";
import { useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";

type HomeProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  query: string;
  variables: Record<string, unknown>;
};

export default function Home(props: HomeProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const p = data.home as Record<string, unknown>;

  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.matches('a[href^="#"]')) {
        e.preventDefault();
        const el = document.querySelector(target.getAttribute("href") || "");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", handleClick);
    const timer = setTimeout(() => {
      document.getElementById("mascot")?.classList.add("mascot--visible");
    }, 3000);
    return () => {
      document.removeEventListener("click", handleClick);
      clearTimeout(timer);
    };
  }, []);

  function toggleMenu() {
    document.getElementById("nav-links")?.classList.toggle("open");
    document.getElementById("hamburger")?.classList.toggle("active");
    document.getElementById("mobile-overlay")?.classList.toggle("active");
  }

  function closeMenu() {
    document.getElementById("nav-links")?.classList.remove("open");
    document.getElementById("hamburger")?.classList.remove("active");
    document.getElementById("mobile-overlay")?.classList.remove("active");
  }

  const steps = (p.steps as Array<{ number: string; title: string; description: string }>) || [];
  const benefits = (p.benefits as Array<{ icon: string; title: string; description: string }>) || [];
  const stats = (p.stats as Array<{ number: string; label: string }>) || [];

  return (
    <>
      <Head>
        <title>{String(p.siteTitle || "MediaGrowth")}</title>
        <meta name="description" content={String(p.siteDescription || "")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-wrapper">
            <a href="#" className="logo">
              <img src="/images/mediagrowth.png" alt="MediaGrowth Logo" />
            </a>
            <ul className="nav-links" id="nav-links">
              <li><a href="#how-it-works" onClick={closeMenu}>How It Works</a></li>
              <li><a href="#benefits" onClick={closeMenu}>Benefits</a></li>
              <li><a href="#testimonials" onClick={closeMenu}>Results</a></li>
              <li><a href="#contact" className="cta-button" onClick={closeMenu}>Contact Us</a></li>
            </ul>
            <button className="hamburger" id="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>
      <div className="mobile-menu-overlay" id="mobile-overlay" onClick={closeMenu}></div>

      {/* Hero */}
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>{String(p.heroTitle || "")}</h1>
            <p className="hero-subtitle">{String(p.heroSubtitle || "")}</p>
            <p className="hero-description">{String(p.heroDescription || "")}</p>
            <a href="#contact" className="cta-button-large">{String(p.heroCtaText || "Start Your Campaign")}</a>
          </div>
        </div>
      </section>

      {/* Mobile-Only Banner */}
      <section className="mobile-only-banner">
        <div className="container">
          <div className="mobile-only-content">
            <span className="mobile-only-icon">📲</span>
            <div>
              <h3>{String(p.mobileBannerTitle || "")}</h3>
              <p>{String(p.mobileBannerText || "")}</p>
            </div>
            <a href="#contact" className="cta-button">{String(p.mobileBannerCtaText || "Start Now")}</a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title">{String(p.howItWorksTitle || "How It Works")}</h2>
          <div className="steps-grid">
            {steps.map((step, i) => (
              <div className="step-card" key={i}>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="benefits">
        <div className="container">
          <h2 className="section-title">{String(p.benefitsTitle || "Why Choose MediaGrowth?")}</h2>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div className="benefit-card" key={i}>
                <div className="benefit-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">{String(p.testimonialsTitle || "Real Results from Real Creators")}</h2>
          <div className="testimonials-grid">
            {[1, 2, 3, 4, 5].map((n) => (
              <div className="testimonial-card" key={n}>
                <img src={`/images/${n}.png`} alt={`Success story ${n}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile-Only Stats */}
      <section className="mobile-only-stats">
        <div className="container">
          <h2 className="mobile-only-stats__title">{String(p.statsTitle || "Join the Creator Movement")}</h2>
          <p className="mobile-only-stats__subtitle">{String(p.statsSubtitle || "")}</p>
          <img src="/images/mediagrowth.png" alt="MediaGrowth" className="mobile-only-stats__img" />
          <div className="mobile-only-stats__grid">
            {stats.map((s, i) => (
              <div className="mobile-only-stats__item" key={i}>
                <span className="mobile-only-stats__number">{s.number}</span>
                <span className="mobile-only-stats__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <h2>{String(p.contactTitle || "Ready to Scale Your Reach?")}</h2>
            <p>{String(p.contactText || "")}</p>
            <div className="social-links">
              <a href={String(p.instagramUrl || "#")} className="social-link" target="_blank" rel="noopener">Instagram</a>
              <a href={`mailto:${String(p.emailAddress || "")}`} className="social-link">Email</a>
            </div>
            <a href="#hero" className="cta-button-large">{String(p.contactCtaText || "Get Started Today")}</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>{String(p.footerCopyright || "")}</p>
          <p>{String(p.footerTagline || "")}</p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="mobile-sticky-cta">
        <a href="#contact">🚀 {String(p.heroCtaText || "Start Your Campaign")}</a>
      </div>

      {/* Mascot */}
      <div className="mascot" id="mascot" role="img" aria-label="MediaGrowth mascot">
        <div className="mascot__bubble">
          <p>{String(p.mascotBubbleLine1 || "")}</p>
          <p>{String(p.mascotBubbleLine2 || "")}</p>
          <a href="#contact">{String(p.mascotCtaText || "Start your campaign →")}</a>
        </div>
        <img src="/images/mediagrowth.png" alt="MediaGrowth Mascot" className="mascot__img" />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { data, query, variables } = await client.queries.home({ relativePath: "home.md" });
  return { props: { data, query, variables } };
}
