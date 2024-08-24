import type { Metadata } from "next";
import "./globals.css";
import Footer from "./layouts/partials/Footer";
import Header from "./layouts/partials/Header";

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
      </body>
    </html>
  );
}
