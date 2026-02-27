import type { Metadata } from "next";
import { Space_Mono, Syne } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const syne = Syne({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Tita Rahmawati — Data Analyst",
  description:
    "Data analyst specializing in machine learning, customer segmentation, predictive modeling, and business intelligence. Jakarta, Indonesia.",
  openGraph: {
    title: "Tita Rahmawati — Data Analyst",
    description: "Turning data into decisions.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
