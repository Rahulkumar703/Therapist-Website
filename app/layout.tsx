import type { Metadata } from "next";
import { Open_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Serena Blake, PsyD (Clinical Psychologist)",
    template: "%s | Dr. Serena Blake, PsyD (Clinical Psychologist)",
  },
  description: "Therapist specializing in mental health and wellness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${plexMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
