import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: {
      default: "Khushu App — Simple prayer focus tracking",
      template: "%s | Khushu App",
    },
    description:
      "Simple prayer focus tracking. Learn your patterns and distractions.",
    icons: {
      icon: "/khushu-logo.png",
      apple: "/khushu-logo.png",
    },
    openGraph: {
      title: "Want to have more focus in salah?",
      description: "Simple prayer focus tracking.",
      url: metadataBase,
      siteName: "Khushu App",
      type: "website",
      images: [
        {
          url: new URL("/og.png", metadataBase),
          width: 1731,
          height: 909,
          alt: "Khushu App — Want to have more focus in salah?",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Want to have more focus in salah?",
      description: "Simple prayer focus tracking.",
      images: [new URL("/og.png", metadataBase)],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
