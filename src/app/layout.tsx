import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import { siteConfig } from "@/config/site";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "Sayan Das",
      url: "https://github.com/SayanDasDev",
    },
  ],
  creator: "Sayan Das",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@imdassayan",
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-light.ico",
        href: "/favicon-light.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-dark.ico",
        href: "/favicon-dark.ico",
      },
    ],
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

const font = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const wavesConfig = {
    dotSize: 5.5,
    dotSpacing: 13,
    dotOpacity: 0.7,
    waveIntensity: 99,
    waveRadius: 200,
    dotColor: "rgba(100, 100, 255, 1)",
    glowColor: "rgba(100, 100, 255, 1)",
    enableNoise: false,
    noiseOpacity: 0.03,
    enableMouseGlow: false,
    initialPerformance: "medium" as const,
  };

  return (
    <html lang="en">
      <body className={`${font.className} no-scrollbar relative`}>
        {children}
      </body>
    </html>
  );
}
