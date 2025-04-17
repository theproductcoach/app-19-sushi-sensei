import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";

export const metadata: Metadata = {
  title: "Sushi Sensei",
  description: "Master the art and etiquette of sushi dining",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={GeistSans.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
