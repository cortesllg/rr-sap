"use client";
import React, { useEffect, useRef, useState } from "react";

const timelineEvents = [
  { title: "Project Kickoff", date: " ", completed: true },
  {
    title: "Review and Analyze Existing Conditions",
    date: "",
    current: true,
  },
  {
    title: "Public Outreach & Engagement",
    date: "",
    current: true,
  },
  { title: " Safety Analysis", date: "" },
  {
    title: "Draft Safety Action Plan",
    date: "",
  },
  { title: "Project Completion", date: "Spring 2026" },
];

const Timeline = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTranslated, setIsTranslated] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Recalculate timeline height on resize or translation
  useEffect(() => {
    const updateTimelineHeight = () => {
      if (timelineRef.current) {
        const timelineBox = timelineRef.current.getBoundingClientRect();
        setLineHeight(timelineBox.height - 60); // adjust as needed
      }
    };

    updateTimelineHeight(); // initial set

    const observer = new MutationObserver(() => {
      setIsTranslated(true); // track translation state
      updateTimelineHeight(); // recalculate on content change
    });

    const targetNode = document.body;
    if (targetNode) {
      observer.observe(targetNode, {
        childList: true,
        subtree: true,
        characterData: true,
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [isMobile]); // recalculates on mobile state change

  // Use this to calculate the progress height
  const completedIndex =
    timelineEvents.findIndex((e) => !e.completed && !e.current) === -1
      ? timelineEvents.length
      : timelineEvents.findIndex((e) => !e.completed && !e.current);

  const progressHeight = (completedIndex / timelineEvents.length) * lineHeight;

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "rgba(255, 255, 255, 0.92)",
        borderRadius: "16px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        maxWidth: "900px",
        margin: "0 auto",
        marginTop: "4rem",
        marginBottom: "2rem",
      
        transform: "translateY(-3rem)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "1.75rem",
          marginBottom: "2rem",
          color: "#377eff",
        }}
      >
        Project Timeline
      </h2>

      <div style={{ position: "relative" }} ref={timelineRef}>
        {/* Base Timeline Line */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            width: "4px",
            height: `${lineHeight}px`,
            backgroundColor: "#ddd",
            zIndex: 1,
            transform: "translateX(-50%)",
          }}
        />

        {/* Progress Line */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            width: "4px",
            height: `${progressHeight}px`,
            backgroundColor: "#377eff",
            zIndex: 2,
            transform: "translateX(-50%)",
          }}
        />

        {timelineEvents.map((event, index) => {
          const isDone = event.completed;
          const isCurrent = event.current;

          return (
            <div
              key={index}
              style={{
                position: "relative",
                width: "100%",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  padding: "1rem",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                  marginLeft: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 3,
                }}
              >
                {/* Circle Dot */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "-16px",
                    transform: "translateY(-50%)",
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    backgroundColor: isCurrent
                      ? "#377eff"
                      : isDone
                      ? "#fff"
                      : "#f0f0f0",
                    border: `3px solid ${
                      isCurrent ? "#377eff" : isDone ? "#377eff" : "#bbb"
                    }`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {isCurrent ? (
                    <span
                      style={{
                        color: "#fff",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      ★
                    </span>
                  ) : isDone ? (
                    <span style={{ color: "#377eff" }}>✔</span>
                  ) : (
                    <span style={{ color: "#ccc" }}>○</span>
                  )}
                </div>

                {/* Text */}
                <div style={{ textAlign: "center" }}>
                  {isCurrent && (
                    <div
                      style={{
                        color: "#377eff",
                        fontSize: "0.85rem",
                        fontWeight: "bold",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Current Phase
                    </div>
                  )}
                  <div style={{ fontWeight: "600" }}>{event.title}</div>
                  <div style={{ fontSize: "0.9rem", color: "#666" }}>
                    {event.date}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
