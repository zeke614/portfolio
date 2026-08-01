import type { Metadata } from "next";
// import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

import {
  Bricolage_Grotesque,
  Instrument_Sans,
  IBM_Plex_Mono,
} from "next/font/google";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

const sans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Medium.otf",
      weight: "400",
      style: "normal",
    },
    { path: "./fonts/Satoshi-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-usesatoshi",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eaamissah.vercel.app"),

  title: {
    default: "Ezekiel A. Amissah | Frontend Developer",
    template: "%s | Ezekiel A. Amissah",
  },
  description:
    "Frontend developer with a business background, building fintech tools like Assay and Exchango. Self-taught, based in Ghana.",
  keywords: [
    "Ezekiel A. Amissah",
    "frontend developer Ghana",
    "fintech developer",
    "Next.js developer",
  ],
  authors: [{ name: "Ezekiel A. Amissah" }],
  openGraph: {
    type: "website",
    title: "Ezekiel A. Amissah | Frontend Developer",
    description:
      "Frontend developer with a business background, building fintech tools like Assay and Exchango.",
    siteName: "Ezekiel A. Amissah",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezekiel A. Amissah | Frontend Developer",
    description:
      "Frontend developer with a business background, building fintech tools like Assay and Exchango.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "ledger" || stored === "terminal" ? stored : "terminal";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${mono.variable} ${satoshi.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
