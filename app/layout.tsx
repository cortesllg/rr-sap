// layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import "./styles/base.css";
// These may not be necessary, but are included for completeness to see what pages are avaiable
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

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
        <main>{children}</main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-links">
              <div>
                <h3>
                  <Link href="/">HOME</Link>
                </h3>
              </div>
              <div>
                <h3>
                  <Link href={"/get-involved"}>GET INVOLVED</Link>
                </h3>
              </div>
              <div>
                <h3>
                  <Link href="/project-status">PROJECT STATUS</Link>
                </h3>
              </div>
              <div>
                <h3>
                  <Link href="/contact-us">CONTACT US</Link>
                </h3>
              </div>
              <div>
                <h3>
                  <Link href="/documentation">DOCUMENTATION</Link>
                </h3>
              </div>
              <div>
                <h3>
                  <Link href="/get-involved?section=Survey">SURVEY</Link>
                </h3>
              </div>
            </div>
            <div className="footer-contact">
              <h3>
                Robinson Rancheria
                <br />
                P.O. Box 4015 1545 E. Hwy 20
                <br />
                Nice, CA 95464
              </h3>
            </div>
          </div>
          <div className="footer-copyright">
            <p>
              &copy; {new Date().getFullYear()} All Rights Reserved Robinson
              Rancheria
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
