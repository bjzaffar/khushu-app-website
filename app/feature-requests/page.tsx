import type { Metadata } from "next";
import { PlaceholderPage } from "../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Feature requests",
  description: "Feature requests for Khushu App are coming soon.",
};

export default function FeatureRequestsPage() {
  return (
    <PlaceholderPage
      eyebrow="Feature requests"
      title="Help shape what comes next"
      description="A dedicated place to share and vote on ideas. Coming soon..."
    />
  );
}
