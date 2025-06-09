"use client";

import Head from "next/head";
import Link from "next/link";
import QuickPoll from "../components/QuickPoll"; // Assuming QuickPoll is in the components folder
import "./documentation.css"; // Assuming you have a CSS file for styling
import "../styles/secondary-base.css";
import { useState, useEffect } from "react";

export default function Documentation() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

        <div className="overlay-text1">
          <div className="bg-heading">DOCUMENTATION</div>
          <div className="fg-subtitle">
            Get a more in-depth view of what is being done
          </div>
        </div>
      </div>

      <div
        className="content-section"
        style={{
          marginTop: "0rem",
          font: "Roboto, sans-serif",
        }}
      >
        {/* Move title outside the grid to align only with right content */}

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
            padding: isMobile ? "0" : "0 2rem 4rem 2rem",
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
              width: isMobile ? "80%" : "auto",
              transform: isMobile ? "none" : "translateX(3rem)", // Adjust this to move it closer without affecting content size
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <h3
              className="sidebar-title"
              style={{
                textAlign: "center",
                color: "#377eff",
                fontWeight: "bold",
                marginBottom: "1.5rem",
                borderBottom: "2px solid #ccc",
                paddingBottom: "0.5rem",  
              }}
            >
              Safe System Approach
            </h3>

            <p
              style={{
                marginBottom: "1.5rem",
                color: "#4b5563",
                fontSize: "clamp(14px, 1.5vw, 15px)",
                fontWeight: "normal",
                lineHeight: "1.5",
                textAlign: "justify",
              }}
            >
              The U.S. Department of Transportation adopted the Safe System
              Approach as the guiding paradigm to address roadway safety. The
              Safe System Approach has been embraced by the transportation
              community as an effective way to address and mitigate the risks
              inherent in our enormous and complex transportation system.
              <br />
              <br />
              It works by building and reinforcing multiple layers of protection
              to both prevent crashes from happening in the first place and
              minimize the harm caused to those involved when crashes do occur.
              It is a holistic and comprehensive approach that provides a
              guiding framework to make places safer for people.
            </p>

            <div style={{ paddingTop: "0.5rem", textAlign: "center" }}>
              <img
                src="/images/system appraoch.webp"
                alt="System Approach Image"
                style={{
                  maxWidth: isMobile ? "100%" : "300px",
                  height: "auto",
                  borderRadius: "12px", // optional: adds rounded corners
                }}
              />
            </div>
          </aside>

          {/* Center Text Section */}
          <div
            className="overview-text-group"
            style={{
              padding: isMobile ? "1rem" : "2rem 2rem",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            <div
              className="project-overview-title with-underline"
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "3rem",
                borderBottom: "2px solid #ccc",
                paddingBottom: "0.5rem",
                textAlign: "center",
              }}
            >
              Available Documentation
            </div>

            <div
              className="project-overview-text"
              style={{
                fontSize: isMobile ? "15px" : "16px",
                padding: isMobile ? "1rem" : "0 2rem",
                maxWidth: "100%",
                lineHeight: "1.8",
                color: "#4b5563",
                marginBottom: "2.5rem",
                textAlign: "justify",
              }}
            >
              We are currently preparing the Safety Action Plan. Please check in
              back later to access the latest report and resources related to to
              our transportation plan initiatives.
            </div>

            {/* Events Section */}
            <div
              className="documentation-grid"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                marginTop: "2rem",
              }}
            >
              {/* Documentations */}
              <div
                className="documentation-card"
                style={{
                  background: "rgb(0, 0, 0, 0.1)",
                  padding: "2rem",
                  borderRadius: "16px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                  textAlign: "center",
                }}
              >
                <div
                  className="documentation-icon"
                  style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
                >
                  📄
                </div>

                <h3
                  className="documentation-title"
                  style={{
                    fontSize: "1.75rem",
                    marginBottom: "1rem",
                    color: "#377eff",
                  }}
                >
                  Documentation (Coming Soon)
                </h3>

                <p
                  className="documentation-text"
                  style={{
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                    color: "#374151",
                  }}
                >
                  Check back in the future for more information to stay
                  up-to-date.
                </p>

                {/* 📄 Final Report Box Inserted Here CURRENTLY NOT RENDERED ON SITE- WAS ASKED TO BE REMOVED BUT COULD BE USED IN THE FUTURE */}
                {/* <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "1.25rem 2rem",
                      borderRadius: "12px",
                      backgroundColor: "#ffffff",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.06)",
                      width: "fit-content",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#6b7280"
                      style={{ width: "32px", height: "32px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v1.125c0 .621-.504 1.125-1.125 
              1.125h-12.75A1.125 1.125 0 015 15.375V14.25m14.5-4.5v-1.125c0-.621-.504-1.125-1.125-1.125h-12.75A1.125 
              1.125 0 015 8.625V9.75m14.5-4.5V4.125C19.5 3.504 18.996 3 18.375 3H5.625C5.004 3 4.5 3.504 4.5 
              4.125V5.25"
                      />
                    </svg>
                    <div style={{ textAlign: "left" }}>
                      <div
                        style={{
                          fontWeight: "600",
                          fontSize: "1rem",
                          color: "#4b5563",
                        }}
                      >
                        Final Report
                      </div>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          color: "#9ca3af",
                        }}
                      >
                        Coming soon
                      </div>
                    </div>
                  </div>
                </div> */}

                <p
                  className="documentation-subtext"
                  style={{ fontSize: "0.9rem", color: "#6b7280" }}
                >
                  Project details and information will be documented here. Stay
                  tuned to see what is going on in the Tribe of Robinson
                  Rancheria!
                </p>
              </div>

              {/* Old 2019 ATP Document for Thousand Oaks */}
            </div>
          </div>

          {/* Right Sidebar - Poll */}
          {/* Right Sidebar - Poll (currently commented out not needed for this project ATM)
          <QuickPoll isMobile={isMobile} /> */}
        </div>
      </div>
    </div>
  );
}
