import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from "./layouts/partials/Footer";
import Header from "./layouts/partials/Header";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Agência Scope",
  description: "Scope - Agência full commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <SpeedInsights />
        <Analytics/>
      </body>
    </html>
  );
}
