import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/header/page';
import Footer from './components/Footer';
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dansk Super Rally - Toppen af Dansk rally",
  description: "DSR afvikles over 6 afdelinger, hvor der køres i flere landsdele. Hver afdeling tæller omkring 4-5 forskellige hastighedsprøver der køres flere gange.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <Script src="https://player.vimeo.com/api/player.js"/>
      <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="da2a0979-d1bf-4dba-8d31-bfe50cc7e383" data-blockingmode="auto" type="text/javascript" />
      <body className={inter.className}>
        <Header />
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
