interface EngagementProps {
  isMobile: boolean;
}

const Engagement = ({ isMobile }: EngagementProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        maxWidth: "100%",
        padding: isMobile ? "1rem" : "2rem",
        marginTop: "0rem",
      }}
    >
      {/* Intro Text */}
      <p
        style={{
          fontSize: isMobile ? "15px" : "16px",
          color: "#4b5563",
          fontWeight: 500,
          fontFamily: "Roboto, sans-serif",
          textAlign: "justify",
          lineHeight: "1.75",
          width: "100%",
        }}
      >
        We want to hear from you! Share your experiences traveling on the
        roadways within the Tribe. We are working with Street Story, developed by
        SafeTREC and UC Berkeley, where you can mark locations where you&apos;ve
        encountered safety challenges—whether you&apos;re driving, walking,
        biking, or using another mode of transportation. You can also highlight
        specific concerns like speeding, poor lighting, or missing sidewalks.
        Check out the user guide for how to report on the Street Story:
      </p>

      {/* User Guide and StreetMap Links */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          fontFamily: "Roboto, sans-serif",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <a
          href="/User-Guide-for-Street-Story-RR.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#377eff",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "16px",
            fontWeight: 600,
            fontSize: isMobile ? "14px" : "16px",
            textAlign: "center",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#005fa3")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#377eff")
          }
        >
          View User Guide
        </a>

        <a
          href="https://streetstory.berkeley.edu/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#377eff",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "16px",
            fontWeight: 600,
            fontSize: isMobile ? "14px" : "16px",
            textAlign: "center",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#005fa3")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#377eff")
          }
        >
          Go to Street Story
        </a>
      </div>

      {/* Closing Statement */}
      <p
        style={{
          fontSize: "18px",
          color: "#377eff",
          fontWeight: "700",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        Your input makes a difference — start mapping today!
      </p>
    </div>
  );
};

export default Engagement;
