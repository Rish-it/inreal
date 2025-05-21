import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "INREAL - Early Childhood Reading Masterclass",
  description:
    "Join the World's Highest-Rated Online Masterclass for Parents. Learn simple, science-backed techniques to teach your child to read — in just 15 minutes a day.",
  metadataBase: new URL("https://inreal.com"),
  openGraph: {
    title: "INREAL - Early Childhood Reading Masterclass",
    description:
      "Join the World's Highest-Rated Online Masterclass for Parents. Learn simple, science-backed techniques to teach your child to read — in just 15 minutes a day.",
    url: "https://inreal.com",
    siteName: "INREAL",
    images: [
      {
        url: "https://inreal.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "INREAL - Early Childhood Reading Masterclass",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "INREAL - Early Childhood Reading Masterclass",
    description:
      "Join the World's Highest-Rated Online Masterclass for Parents. Learn simple, science-backed techniques to teach your child to read — in just 15 minutes a day.",
    images: ["https://inreal.com/og-image.png"],
    creator: "@inreal",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Fonts: Poppins */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
