import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";

import { ThemeProvider } from "@/components/theme-provider";

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
      <head>
        <meta name="apple-mobile-web-app-title" content="Perceptron 2k25" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-11GMXT55VN"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-11GMXT55VN');
          `}
        </Script>
      </head>
      <body className={`${font.className} no-scrollbar bg-slate-950`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* <BgPattern /> */}
      </body>
    </html>
  );
}
