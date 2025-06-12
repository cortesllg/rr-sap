
import Link from "next/link";
import "../styles/base.css";

// These may not be necessary, but are included for completeness to see what pages are avaiable
// import {
//   FaFacebook,
//   FaInstagram,
//   FaYoutube,
//   FaXTwitter,
//   FaEnvelope,
// } from "react-icons/fa6";


export default function Footer() {
  return (
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
  );
}
