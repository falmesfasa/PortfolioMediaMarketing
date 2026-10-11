import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
export const metadata: Metadata = {
  title: "Martin Gachucha | Digital Marketing & Media Manager, Nairobi",
  description: "Digital marketing and media management: campaigns, creative strategy, landing pages, funnels and analytics.",
  openGraph: { title: "Martin Gachucha | Digital Marketing & Media Manager", type: "website" },
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (<html lang="en" className={`${display.variable} ${body.variable}`}><body>{children}</body></html>);
}
