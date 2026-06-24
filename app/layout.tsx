import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "@/globals.css";

export const metadata: Metadata = {
  title: "Bharat Paints — Paint Expert | Karnal",
  description:
    "Trusted paint expert since 1976. Interior, exterior, waterproofing, and industrial coatings. Free consultation. Professional application. 10,000+ homes transformed. 200+ rice mills coated.",
  keywords: [
    "paints karnal",
    "interior painting",
    "exterior painting",
    "waterproofing",
    "paint dealer",
  ],
  openGraph: {
    title: "Bharat Paints — Paint Expert | Karnal",
    description: "Trusted paint expert since 1976",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ "--font-fraunces": "Georgia, serif", "--font-inter": "system-ui" } as React.CSSProperties}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
