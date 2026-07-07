import type { Metadata } from "next";
import { Chakra_Petch, Manrope } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });
const chakra = Chakra_Petch({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-display" });
export const metadata: Metadata = {
  metadataBase: new URL("https://coldsolutionz.vercel.app"),
  title: "Cold Solutions — Websites. Automations. Systems.",
  description: "Clean digital systems for businesses that want to move faster.",
  alternates: { canonical: "/" },
  openGraph: { title: "Cold Solutions", description: "Websites. Automations. Systems.", url: "/", siteName: "Cold Solutions", type: "website" },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${manrope.variable} ${chakra.variable}`}><body><a className="skip-link" href="#main-content">Skip to content</a>{children}</body></html>;
}
