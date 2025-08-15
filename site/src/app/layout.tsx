import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ErrorBoundary } from "./components/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#3b82f6',
};

export const metadata: Metadata = {
  title: "Mini MIDI Magic - Design Your Custom MIDI Controller",
  description: "Design your custom MIDI controller from scratch. Get a kit full of components and a grant for the PCB. Learn to design PCBs, CAD cases, and write firmware.",
  keywords: ["MIDI controller", "Arduino", "PCB design", "CAD", "firmware", "electronics", "music production"],
  authors: [{ name: "Mini MIDI Magic Team" }],
  creator: "Mini MIDI Magic",
  publisher: "Mini MIDI Magic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://minimidimagic.com'),
  openGraph: {
    title: "Mini MIDI Magic - Design Your Custom MIDI Controller",
    description: "Design your custom MIDI controller from scratch. Get a kit full of components and a grant for the PCB.",
    type: "website",
    locale: "en_US",
    siteName: "Mini MIDI Magic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini MIDI Magic - Design Your Custom MIDI Controller",
    description: "Design your custom MIDI controller from scratch. Get a kit full of components and a grant for the PCB.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MIDI Magic" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
