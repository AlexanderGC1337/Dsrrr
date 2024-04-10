import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/header/page';
import Footer from './components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dansk Super Rally",
  description: "DSR er toppen af dansk rally. DSR afvikles over 6 afdelinger, hvor der køres i flere landsdele.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer/>
      </body>
    </html>
  );
}
