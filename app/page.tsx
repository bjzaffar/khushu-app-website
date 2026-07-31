import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const features = [
  {
    title: "Home page",
    subtitle: "Simplified summary of the day",
    image: "/khushu-today.jpg",
    imageAlt: "Khushu App today screen showing daily salah progress",
  },
  {
    title: "Pre-salah reminders",
    subtitle: "For default distractions—verified reminders only",
    image: "/khushu-fajr.jpg",
    imageAlt: "Khushu App Fajr reflection screen",
  },
  {
    title: "Add custom distractions",
    subtitle: "The default distractions may not cover all bases",
    image: "/khushu-distraction.jpg",
    imageAlt: "Khushu App distraction selection screen",
  },
  {
    title: "AI pre-salah reminders",
    subtitle: "For custom distractions—still based only on verified messages",
    image: "/khushu-maghrib.jpg",
    imageAlt: "Khushu App Maghrib reflection screen",
  },
  {
    title: "Heatmap widget",
    subtitle: "Your week summarised in a glance on your home screen",
    image: "/khushu-weekly-grid.png",
    imageAlt: "Khushu App weekly salah focus grid",
  },
  {
    title: "Top distraction for each salah",
    subtitle: "Breaks down how different distractions strike at different times",
    image: "/khushu-distractions-by-salah.jpg",
    imageAlt: "Khushu App top distractions by salah screen",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">
              Want to have <span className="hero-emphasis">more focus</span> in
              salah?
            </h1>
            <p className="hero-subtitle">
              Simple prayer focus tracking. Learn your patterns and
              distractions.
            </p>
            <div className="download-actions" aria-label="App download options">
              <button
                className="download-button download-button-primary"
                type="button"
              >
                Download for iOS
              </button>
              <button
                className="download-button download-button-secondary"
                type="button"
              >
                Download for Android
              </button>
            </div>
          </div>

          <div className="hero-visual" aria-label="Khushu App insights screen">
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="phone phone-hero">
              <div className="phone-speaker" />
              <div className="phone-screen phone-screen-image">
                <img
                  src="/khushu-insights.jpg"
                  alt="Khushu App insights screen showing prayer focus trends"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="steps-section section-shell"
          aria-labelledby="steps-title"
        >
          <div
            className="steps-visual"
            aria-label="Khushu App salah logging screen"
          >
            <div className="phone phone-steps">
              <div className="phone-speaker" />
              <div className="phone-screen phone-screen-soft phone-screen-image">
                <img
                  src="/khushu-logging.jpg"
                  alt="Khushu App Log Salah screen for rating focus and distractions"
                />
              </div>
            </div>
            <div className="steps-dot steps-dot-one" />
            <div className="steps-dot steps-dot-two" />
          </div>

          <div className="steps-copy">
            <p className="eyebrow">Designed to feel effortless</p>
            <h2 id="steps-title">Log your salah in two taps</h2>
            <p className="section-intro">
              Capture the moment without pulling your attention away from what
              matters.
            </p>
            <div className="steps-list">
              <article className="step-row">
                <div>
                  <p className="step-label">First tap</p>
                  <h3>Rate your focus 1–5</h3>
                </div>
                <span className="step-number" aria-hidden="true">
                  01
                </span>
              </article>
              <article className="step-row">
                <div>
                  <p className="step-label">Second tap</p>
                  <h3>Click your distraction</h3>
                </div>
                <span className="step-number" aria-hidden="true">
                  02
                </span>
              </article>
            </div>
          </div>
        </section>

        <section
          className="features-section section-shell"
          aria-labelledby="features-title"
        >
          <div className="features-panel">
            <div className="features-heading">
              <div>
                <p className="eyebrow eyebrow-light">
                  Built for everyday reflection
                </p>
                <h2 id="features-title">Simple, but powerful</h2>
              </div>
              <p>
                A growing set of thoughtful features to help you notice patterns
                and protect your focus.
              </p>
            </div>

            <div className="feature-grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature.title}>
                  {feature.image ? (
                    <div className="feature-placeholder feature-screenshot">
                      <img
                        src={feature.image}
                        alt={feature.imageAlt ?? "Khushu App feature screen"}
                      />
                    </div>
                  ) : (
                    <div
                      className="feature-placeholder"
                      aria-label="Feature image placeholder"
                    >
                      <div className="placeholder-landscape" aria-hidden="true">
                        <span />
                        <span />
                      </div>
                      <p>Image placeholder</p>
                    </div>
                  )}
                  <div className="feature-card-footer">
                    <h3>{feature.title}</h3>
                    <p>{feature.subtitle}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="features-more">and more...</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
