import type { Metadata } from "next";
import { PlaceholderPage } from "../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Privacy",
  description: "The Khushu App privacy policy is coming soon.",
};

export default function PrivacyPage() {
  return (
    <PlaceholderPage
      eyebrow="Privacy"
      title="Your privacy matters"
      description="The full Khushu App privacy policy will live here. This placeholder will be replaced before the app is released."
    />
  );
}
