"use client";

import ScrollToTop from '@/components/ScrollToTop';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../node_modules/react-modal-video/css/modal-video.css';
import { SpeedInsights } from "@vercel/speed-insights/next"

// import './globals.css';
import "../styles/index.css";
import { Providers } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="dark:bg-black">
        <SpeedInsights/>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  )
}