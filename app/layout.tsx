import type { Metadata } from "next";
import { Nunito, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ["latin"],
  display: 'swap'
});

const nunito = Nunito({
  weight: ['400', '600'],
  subsets: ["latin"],
  display: 'swap'
});

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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
