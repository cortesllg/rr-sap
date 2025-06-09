"use client";

import { useRef, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import InvolvedIntro from "../components/InvolvedIntro";
import Engagement from "../components/Engagement";
import Survey from "../components/Survey";
import Workshop from "../components/Workshop";
import Contact from "../components/Contact";
import "../styles/secondary-base.css";
// import QuickPoll from "../components/QuickPoll";

import "./get-involved.css";

export default function GetInvolvedClient() {
  const mainContentRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("InvolvedIntro");

  const searchParams = useSearchParams();
  const sectionParam = searchParams.get("section");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (
      sectionParam &&
      ["InvolvedIntro", "Engagement", "Survey", "Workshop", "Contact"].includes(
        sectionParam
      )
    ) {
      setActiveSection(sectionParam);
      setTimeout(() => {
        if (mainContentRef.current) {
          const offset = isMobile ? 80 : 120;
          const top =
            mainContentRef.current.getBoundingClientRect().top +
            window.scrollY -
            offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
    }
  }, [sectionParam, isMobile]);

  const participationItems = [
    { label: "Get Started", section: "InvolvedIntro" },
    { label: "Online Comment Map", section: "Engagement" },
    { label: "Online Feedback Form", section: "Survey" },
    { label: "Public Workshops", section: "Workshop" },
    { label: "Contact Us", section: "Contact" },
  ];

  return (
    <>
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
          <div className="bg-heading">GET INVOLVED</div>
          <div className="fg-subtitle">
            Learn how you can get involved with the Safety Action Plan in
            Robinson Rancheria
          </div>
        </div>
      </div>

      {/* backGroundColor usually nothing, added to see */}
      <section className="content-section">
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
          {/* marginTop is to align it with the Center Content */}
          <aside
            style={{
              flex: isMobile ? "unset" : "0 0 22%",
              backgroundColor: "#d6d6d6",
              padding: "1rem 1rem",
              borderRadius: "16px",
              marginTop: isMobile ? "1" : "2rem",
              fontSize: "14px",
              alignSelf: isMobile ? "center" : "flex-start",
              width: isMobile ? "80%" : "auto",
              transform: isMobile ? "none" : "translateX(3rem)",
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <h3
              className="sidebar-title fade-in"
              style={{
                textDecoration: "underline",
                textAlign: "center",
                color: "#377eff",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              How to Participate
            </h3>

            {participationItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveSection(item.section)}
                style={{
                  color: activeSection === item.section ? "#377eff" : "#005fa3",
                  fontWeight: activeSection === item.section ? "600" : "400",
                  fontSize: "16px",
                  cursor: "pointer",
                  marginBottom: "1.5rem",
                  transition:
                    "color 0.3s, transform 0.3s, background-color 0.3s",
                  textAlign: "center",
                  padding: "0.5rem",
                  borderRadius: "16px",
                }}
                onMouseOver={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = "#377eff";
                  target.style.transform = "scale(1.05)";
                  target.style.backgroundColor = "#efefef";
                }}
                onMouseOut={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color =
                    activeSection === item.section ? "#377eff" : "#005fa3";
                  target.style.transform = "scale(1)";
                  target.style.backgroundColor = "transparent";
                }}
              >
                {item.label}
              </div>
            ))}
          </aside>

          <main
            ref={mainContentRef}
            className="overview-text-group  fade-in"
            style={{
              padding: isMobile ? "1rem" : "2rem 2rem",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            <div
              className="project-overview-title with-underline fade-in"
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "0rem",
                borderBottom: "2px solid #ccc",
                paddingBottom: "0.5rem",
                textAlign: "center",
              }}
            >
              Get Involved in the Process
            </div>

            <Suspense fallback={<div>Loading...</div>}>
              {activeSection === "InvolvedIntro" && (
                <InvolvedIntro
                  isMobile={isMobile}
                  setActiveSection={setActiveSection}
                />
              )}
              {activeSection === "Engagement" && (
                <Engagement isMobile={isMobile} />
              )}
              {activeSection === "Survey" && <Survey isMobile={isMobile} />}
              {activeSection === "Workshop" && <Workshop isMobile={isMobile} />}
              {activeSection === "Contact" && <Contact isMobile={isMobile} />}
            </Suspense>
          </main>
        </div>
      </section>
    </>
  );
}
