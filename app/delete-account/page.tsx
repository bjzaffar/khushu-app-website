import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { DeleteAccountForm } from "./DeleteAccountForm";

export const metadata: Metadata = {
  title: "Delete account",
  description: "Request deletion of your Khushu App account and associated data.",
};

export default function DeleteAccountPage() {
  return (
    <>
      <Header />
      <main className="deletion-page" id="main-content">
        <article className="deletion-card">
          <p className="eyebrow">Khushu App</p>
          <h1>Delete account</h1>
          <p className="deletion-intro">
            You can request permanent deletion of your Khushu App account and
            associated data here.
          </p>

          <section className="deletion-section">
            <h2>Delete account in the app</h2>
            <p>
              To delete your account and any associated data, open the Khushu
              App, select <strong>Settings</strong>, then choose{" "}
              <strong>Delete account</strong>.
            </p>
          </section>

          <section className="deletion-section">
            <h2>Can&apos;t access the app or your account?</h2>
            <p>
              Send us a deletion request below. We&apos;ll review it and contact you
              to verify account ownership before completing the deletion.
            </p>
            <DeleteAccountForm />
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
