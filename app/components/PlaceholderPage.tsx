import { Footer } from "./Footer";
import { Header } from "./Header";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PlaceholderPage({
  eyebrow,
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <>
      <Header />
      <main className="placeholder-page" id="main-content">
        <section className="placeholder-page-card">
          <span className="placeholder-page-icon" aria-hidden="true">
            <span />
            <span />
          </span>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
          <a className="back-home" href="/">
            Back to home
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
