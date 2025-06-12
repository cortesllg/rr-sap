// layout.tsx
import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";
import "./styles/base.css";
import Footer from "./components/Footer";

// These may not be necessary, but are included for completeness to see what pages are avaiable
// import {
//   FaFacebook,
//   FaInstagram,
//   FaYoutube,
//   FaXTwitter,
//   FaEnvelope,
// } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Robinson Rancheria Safety Action Plan",
  description:
    "Official website for the Robinson Rancheria Safety Action Plan.",
  icons: {
    icon: "images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="page-container">
          {/* Header with logo + Translation button on top right*/}
          <header className="hero">
            <Link href="/">
              <img src="/images/rr-logo.png" alt="Robinson Rancheria Logo" />
            </Link>
          </header>

          {/* Navigation buttons */}
          {/* Can be used to add a subtext within each link<div className="cta-description">Home page</div>*/}
          <nav className="button-container">
            <Link href="/" className="cta-button">
              <span>❖Home❖</span>
            </Link>
            <Link href="/get-involved" className="cta-button">
              <span>❖Get Involved❖</span>
            </Link>
            <Link href="/project-status" className="cta-button">
              <span>❖Project Status❖</span>
            </Link>
            <Link href="/documentation" className="cta-button">
              <span>❖Documentation❖</span>
            </Link>
            <Link href="/contact-us" className="cta-button">
              <span>❖Contact Us❖</span>
            </Link>
          </nav>

          {/* Main content area */}
          <main className="main-content">{children}</main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
