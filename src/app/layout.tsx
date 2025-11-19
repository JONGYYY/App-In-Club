import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
	title: {
		default: "APP‑IN Club — Global Student‑Run Organization",
		template: "%s — APP‑IN Club",
	},
	description:
		"APP‑IN Club: A global student‑run organization promoting impact‑driven learning through app creation, workshops, competitions, and community.",
	openGraph: {
		title: "APP‑IN Club — Global Student‑Run Organization",
		description:
			"APP‑IN Club empowers students through app creation, workshops, competitions, and community.",
		type: "website",
		siteName: "APP‑IN Club",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "APP‑IN Club — Global Student‑Run Organization",
		description:
			"APP‑IN Club empowers students through app creation, workshops, competitions, and community.",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
				<a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 site-cta">Skip to content</a>
				<Header />
				<main id="content">{children}</main>
				<Footer />
      </body>
    </html>
  );
}
