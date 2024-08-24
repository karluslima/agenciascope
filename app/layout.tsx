import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
