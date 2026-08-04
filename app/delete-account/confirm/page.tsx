import type { Metadata } from "next";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { DeleteAccountConfirmation } from "./DeleteAccountConfirmation";

export const metadata: Metadata = {
  title: "Confirm deletion request",
  description: "Send a deletion request for your Khushu App account.",
};

export default function ConfirmDeleteAccountPage() {
  return (
    <>
      <Header />
      <main className="deletion-page" id="main-content">
        <article className="deletion-card deletion-confirm-card">
          <p className="eyebrow">Khushu App</p>
          <h1>Confirm deletion request</h1>
          <DeleteAccountConfirmation />
        </article>
      </main>
      <Footer />
    </>
  );
}
