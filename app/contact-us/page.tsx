"use client";

import Head from "next/head";
// import Link from "next/link";
import "./contact-us.css"; // Import your CSS file
// import QuickPoll from "../components/QuickPoll";
import "../styles/secondary-base.css";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    // Make sure to update the service ID, template ID, and user ID with your own EmailJS credentials
    // You can find these in your EmailJS dashboard
    emailjs
      .sendForm(
        "service_3t5eqhp",
        "template_jfgnaed",
        form.current,
        "SI8aWGGuqvqbjZp6x"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsModalOpen(true);
          form.current?.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Head>
        <title>Robinson Rancheria Safety Action Plan</title>
        <meta
          name="description"
          content="Robinson Rancheria Safety Action Plan"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="image-container1">
        <div className="overlay-text1 fade-in">
          <div
            className="fg-top-subtitle"
            style={{
              fontSize: "clamp(12px, 2vw, 28px)",
              position: "relative",
              top: isMobile ? "60px" : "60px",
              left: isMobile ? "0px" : "-5px",
              marginLeft: "0",
              marginRight: "clamp(10px, 6vw, 80px)",
              fontWeight: "normal",
              fontFamily: "Roboto, sans-serif",
              color: "#ffffff",
              zIndex: 1,
              marginTop: "0",
              textShadow: " 2px 2px 4px rgba(0, 0, 0, 0.5)",
              wordBreak: "break-word",
            }}
          >
            Robinson Rancheria Comprehensive Safety Action Plan
          </div>
          <div className="bg-heading">GET IN TOUCH</div>
          <div className="fg-subtitle">
            Have a question or message? Send a message to the team!
          </div>
        </div>
      </div>

      <section
        className="content-section"
        style={{
          marginTop: "0rem",
          font: "Roboto, sans-serif",
        }}
      >
        <div
          className="overview-grid"
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: isMobile ? "2rem" : "3rem",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "16px",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
            padding: isMobile ? "0" : "0 2rem 0 2rem",
            marginTop: ".78rem",
            marginBottom: "2rem",
          }}
        >
          {/* Left Sidebar - Survey */}
          {/* marginTop is to align it with the Center Content */}
          <aside
            style={{
              flex: isMobile ? "unset" : "0 0 22%",
              backgroundColor: "white",
              padding: "1rem 1rem",
              marginTop: isMobile ? "1rem" : "2rem",
              fontSize: "14px",
              borderRadius: "16px",
              alignSelf: isMobile ? "center" : "flex-start",
              textAlign: "center",
              width: isMobile ? "80%" : "auto",
              transform: isMobile ? "none" : "translateX(3rem)", // Adjust this to move it closer without affecting content size
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <h3
              className="sidebar-title  fade-in"
              style={{
                textDecoration: "underline",
                textAlign: "center",
                color: "#377eff",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Help Shape the Future
            </h3>

            <p
              className="fade-in"
              style={{
                marginBottom: "1.5rem",
                color: "#4b5563",
                fontSize: "clamp(14px, 1.5vw, 15px)",
                fontWeight: "bold",
                lineHeight: "1.5",
                textAlign: "justify",
              }}
            >
              Your feedback will directly impact transportation planning
              efforts! Come back soon to take the survey and share your thoughts
              on the Safety Action Plan. Your input is crucial in shaping a
              safer future for everyone!
            </p>

            <span
              className="fade-in"
              title="Survey is currently unavailable. Come back later!"
              style={{
                backgroundColor: "#cccccc",
                color: "#666666",
                fontWeight: "bold",
                padding: "0.5rem 1.5rem",
                fontSize: "14px",
                borderRadius: "9999px",
                textDecoration: "none",
                display: "inline-block",
                alignSelf: "center",
                cursor: "not-allowed",
                userSelect: "none",
                transition: "none",
              }}
            >
              Take The Survey (To be Opened Soon)
            </span>
          </aside>

          {/* Center Text Section with Send a Message Section */}
          <div
            className="overview-text-group"
            style={{
              padding: isMobile ? "1rem" : "2rem 2rem",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            <div
              className="project-overview-title with-underline  fade-in"
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "3rem",
                borderBottom: "2px solid #ccc",
                paddingBottom: "0.5rem",
                textAlign: "center",
              }}
            >
              Send a Message
            </div>

            {/* Contact Form */}
            <form
              ref={form}
              onSubmit={sendEmail}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {/* Name Field */}
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                style={{
                  padding: "0.75rem 1rem",
                  fontSize: "14px",
                  fontFamily: "Roboto, sans-serif",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.backgroundColor = "#b2cbf7";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.transform = "scale(1)";
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#b2cbf7";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseOut={(e) => {
                  if (document.activeElement !== e.currentTarget) {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.transform = "scale(1)";
                  }
                }}
              />

              {/* Email Field */}
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                style={{
                  padding: "0.75rem 1rem",
                  fontSize: "14px",
                  fontFamily: "Roboto, sans-serif",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.backgroundColor = "#b2cbf7";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.transform = "scale(1)";
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#b2cbf7";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseOut={(e) => {
                  if (document.activeElement !== e.currentTarget) {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.transform = "scale(1)";
                  }
                }}
              />

              {/* Message Field */}
              <textarea
                name="message"
                placeholder="Your Message or Suggestions"
                rows={12}
                required
                style={{
                  padding: "1rem",
                  fontSize: "14px",
                  fontFamily: "Roboto, sans-serif",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                  resize: "vertical",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.backgroundColor = "#b2cbf7";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.transform = "scale(1)";
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#b2cbf7";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseOut={(e) => {
                  if (document.activeElement !== e.currentTarget) {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.transform = "scale(1)";
                  }
                }}
              />

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  backgroundColor: "#377eff",
                  color: "white",
                  fontWeight: "bold",
                  padding: "0.5rem 1.5rem",
                  fontSize: "14px",
                  fontFamily: "Roboto, sans-serif",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                  textTransform: "uppercase",
                  alignSelf: "center",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#005fa3")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#377eff")
                }
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Thank You Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "2rem",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            }}
          >
            <h2 style={{ marginBottom: "1rem", color: "#377eff" }}>
              Thank You!
            </h2>
            <p>
              Your message has been sent successfully. We&apos;ll get back to
              you soon.
            </p>
            <button
              onClick={closeModal}
              style={{
                marginTop: "1.5rem",
                backgroundColor: "#377eff",
                color: "white",
                fontWeight: "bold",
                padding: "0.5rem 1.5rem",
                fontSize: "14px",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#005fa3")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#377eff")
              }
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
