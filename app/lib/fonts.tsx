import { Poppins, Roboto, Titillium_Web } from "next/font/google";

export const poppins = Poppins({
  weight: ['300', '400', '600'],
  subsets: ["latin"],
  display: 'swap'
});

export const titillium = Titillium_Web({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ["latin"],
  display: 'swap'
});
