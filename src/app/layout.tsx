import type { Metadata } from "next";
import { Inter, Inconsolata } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getContent } from "@/lib/content";
import { getLocale } from "@/lib/get-locale";
import { LanguageProvider } from "@/lib/language-context";
import Welcome from "@/components/Welcome";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
});

export function generateMetadata(): Metadata {
  const { metadata } = getContent(getLocale());
  return {
    title: metadata.home.title,
    description: metadata.home.description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = getLocale();

  return (
    <html lang={locale}>
      <Head>
        <link rel="icon" href="/favicon.svg" sizes="16x16" />
      </Head>
      <body
        className={`${inter.variable} ${inconsolata.variable} flex min-h-screen flex-col font-sans antialiased overflow-auto`}
      >
        <LanguageProvider initialLocale={locale}>
          <Welcome />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
