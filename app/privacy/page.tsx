import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Khushu App handles your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="policy-page" id="main-content">
        <article className="policy-card">
          <p className="eyebrow">Khushu App</p>
          <h1>Privacy Policy</h1>
          <p className="policy-date">Last updated: 2 August 2026</p>
          <p className="policy-lead">
            Khushu App helps you reflect on your salah. We believe that the
            information you record is personal, and we aim to collect and use
            only what is needed to provide the app and keep it secure.
          </p>

          <section>
            <h2>What this policy covers</h2>
            <p>
              This policy applies to the Khushu App mobile app and this
              website. Khushu App is responsible for the personal information
              described here. If you have a question, contact us at{" "}
              <a href="mailto:khushu.help@gmail.com">khushu.help@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2>Information we handle</h2>
            <p>Depending on how you use Khushu App, this may include:</p>
            <ul>
              <li>
                your prayer-focus ratings, selected distractions, reflections,
                and related app preferences;
              </li>
              <li>
                information you send us when you contact us, such as your email
                address and message; and
              </li>
              <li>
                limited device, diagnostic, and security information needed to
                operate and improve the app or website.
              </li>
            </ul>
            <p>
              Prayer and reflection entries may reveal information about your
              religious practice. We treat them as sensitive and use them only
              to provide the features you choose to use.
            </p>
          </section>

          <section>
            <h2>How we use information</h2>
            <p>
              We use information to provide and maintain Khushu App, show your
              personal insights, respond to you, keep the service secure, and
              improve its reliability. If you are a Premium user and log a
              custom distraction as your top distraction for a prayer, the
              relevant app input may be processed by a service provider solely
              to generate an AI reminder.
            </p>
          </section>

          <section>
            <h2>Sharing and advertising</h2>
            <p>
              We do not sell your personal information or use your prayer data
              for advertising. We may use carefully selected providers for
              hosting, security, app operations, or optional AI features. They
              may access information only where necessary to provide their
              service to us and under appropriate safeguards.
            </p>
          </section>

          <section>
            <h2>Legal basis</h2>
            <p>
              Where UK or EEA privacy law applies, we process information to
              provide the service you request, with your consent where required
              (including for sensitive reflection data), to meet legal duties,
              and for our legitimate interests in running a safe and reliable
              service. You can withdraw consent at any time; this will not
              affect processing already carried out.
            </p>
          </section>

          <section>
            <h2>Retention and security</h2>
            <p>
              We keep information only for as long as needed for the purposes
              above, or as required by law. We use reasonable technical and
              organisational measures to protect it, but no online service can
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>Your choices and rights</h2>
            <p>
              Depending on where you live, you may have rights to request
              access, correction, deletion, restriction, objection, or a copy
              of your personal information, and to complain to your local data
              protection authority. To make a request, email{" "}
              <a href="mailto:khushu.help@gmail.com">khushu.help@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2>Children and updates</h2>
            <p>
              Khushu App is designed for a general audience. If you are under
              the age at which you can consent to data processing in your
              country, please use the app with a parent or guardian&apos;s
              permission. We do not knowingly collect personal information from
              children in breach of applicable law. We may update this policy as
              the app develops. If we do, we will post the new version here and
              update the date above.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
