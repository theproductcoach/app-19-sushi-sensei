import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4338CA",
};

export const metadata: Metadata = {
  title: "Sushi Sensei",
  description:
    "Master the art and etiquette of sushi dining with Sushi Sensei - your comprehensive guide to Japanese culinary traditions.",
  keywords: [
    "sushi",
    "Japanese cuisine",
    "dining etiquette",
    "sushi etiquette",
    "Japanese culture",
  ],
  authors: [{ name: "Sushi Sensei" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Sushi Sensei",
    description:
      "Master the art and etiquette of sushi dining with Sushi Sensei",
    type: "website",
    locale: "en_US",
    siteName: "Sushi Sensei",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.className} ${notoSerifJP.className}`}
    >
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
