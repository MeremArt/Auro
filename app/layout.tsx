import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron, Montserrat } from "next/font/google";
import Header from "./component/Header/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aureus",
  description: "A decentralized finance platform inspired by ancient Rome.",
  openGraph: {
    images: [
      {
        url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1744956938/Screenshot_2025-04-18_at_07.15.12_sbprmi.png",
        width: 1200,
        height: 630,
        alt: "Aureus Logo",
      },
    ],
  },
  twitter: {
    title: "Aureus",
    description: "A decentralized finance platform inspired by ancient Rome.",
    images: [
      {
        url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1744956938/Screenshot_2025-04-18_at_07.15.12_sbprmi.png",
        alt: "Aureus Logo",
      },
    ],
    creator: "",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
