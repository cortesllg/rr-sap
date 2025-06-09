"use client";

import Head from "next/head";
// Will be used once we have our surveys set
// import Link from "next/link";
import "./project-status.css";
import "../styles/secondary-base.css";
// import Survey from "../components/Survey";
import Timeline from "../components/Timeline";
// import QuickPoll from "../components/QuickPoll";
import { useState, useEffect } from "react";

export default function ProjectStatus() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Poll options for the QuickPoll component
  // These options are used in the QuickPoll component, but we don't need it for this project
  // const pollOptions = [
  //   "People driving too fast",
  //   "Drivers not yielding or stopping at intersections",
  //   "Distracted driving",
  //   "Lack of connected sidewalks/bike paths",
  //   "Poor maintenance of sidewalks/bike paths",
  //   "Lack of crosswalks",
  //   "Lack of protected bike lanes",
  //   "Lack of lighting",
  //   "Poor visibility at intersections",
  //   "Lack of traffic violation enforcement",
  //   "Potholes",
  //   "Other (please specify)",
  // ];

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
          <div className="bg-heading">PROJECT STATUS</div>
          <div className="fg-subtitle">
            See what is ongoing with the Robinson Rancheria Safety Action Plan
            in your Tribe
          </div>
        </div>
      </div>

      {/* Main Content Section - can add marginTop if we want a margin of the entire box*/}
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
              alignSelf: isMobile ? "center" : "flex-start",
              textAlign: "center",
              borderRadius: "16px",
              width: isMobile ? "80%" : "auto",
              transform: isMobile ? "none" : "translateX(3rem)", // Adjust this to move it closer without affecting content size
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <h3
              className="sidebar-title"
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
                color: "#377eff", // Primary color
                marginBottom: "3rem",
                borderBottom: "2px solid #ccc",
                paddingBottom: "0.5rem",
                textAlign: "center",
              }}
            >
              Project Overview
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
              Robinson Rancheria, in collaboration with LLG Engineers, a
              transportation consulting firm, is actively working on the Safety
              Action Plan. We encourage everyone to share their input and help
              shape a stronger, more effective Safety Action Plan for the Tribe.
            </div>

            {/* Events Section */}
            <div
              className="events-grid"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              {/* Upcoming Events */}
              <div
                className="event-card"
                style={{
                  background: "rgb(0, 0, 0, 0.1)",
                  padding: "2rem",
                  borderRadius: "16px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                  textAlign: "center",
                  border: "1px solid #c8e6c9",
                }}
              >
                <div
                  className="event-icon"
                  style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
                >
                  📅
                </div>

                <h3
                  className="event-title"
                  style={{
                    fontSize: "1.75rem",
                    marginBottom: "1.5rem",
                    color: "#377eff",
                  }}
                >
                  Upcoming Event: To be Determined (TBD){" "}
                </h3>

                <h4
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "#1f2937",
                  }}
                >
                  Next Workshop Details
                </h4>

                <div
                  style={{
                    fontSize: "1.1rem",
                    color: "#374151",
                    marginBottom: "0.5rem",
                  }}
                >
                  📅 <strong>Date:</strong> TBD
                </div>

                <div
                  style={{
                    fontSize: "1.1rem",
                    color: "#374151",
                    marginBottom: "0.5rem",
                  }}
                >
                  🕙 <strong>Time:</strong> TBD
                </div>

                <div
                  style={{
                    fontSize: "1.1rem",
                    color: "#374151",
                    marginBottom: "1rem",
                  }}
                >
                  📍 <strong>Location:</strong> TBD
                </div>

                <p
                  style={{
                    fontSize: "15px",
                    color: "#4b5563",
                    marginTop: "1.5rem",
                    lineHeight: "1.7",
                  }}
                >
                  Details for the next workshop are{" "}
                  <strong>To Be Determined (TBD)</strong>. Please check back for
                  updates regarding future workshop dates and details.
                  <br />
                  <br />
                  <em>Note:</em> This upcoming community event may be
                  photographed and/or videotaped for possible use on the Tribe
                  (and library) websites and social media. Your participation
                  constitutes consent for the Tribe to publish your likeness for
                  publicity purposes.
                  <br />
                  <br />
                  Activities, events, and times listed above are subject to
                  change. Please check back for updates.
                </p>
              </div>

              {/* Past Events */}
            </div>
          </div>

          {/* Right Sidebar - Poll */}
          {/* Right Sidebar - Poll */}
          {/* The poll we don't need for this project */}
          {/*<QuickPoll isMobile={isMobile} /> */}
        </div>
      </div>

      <Timeline />
    </div>
  );
}
