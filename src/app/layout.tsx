import type { Metadata } from "next";
import { Inter, Inconsolata } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import content from "@/lib/content.json";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
});

export const metadata: Metadata = {
  title: content.metadata.home.title,
  description: content.metadata.home.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inconsolata.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
