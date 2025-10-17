interface SurveyProps {
  isMobile: boolean;
}

const Survey = ({ isMobile }: SurveyProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        maxWidth: "100%",
        padding: isMobile ? "1rem" : "2rem",
      }}
    >
      {/* Survey Invitation */}
      <p
        style={{
          fontSize: isMobile ? "15px" : "16px",
          color: "#4b5563",
          fontWeight: 500,
          textAlign: "justify",
          lineHeight: "1.75",
        }}
      >
        Help shape the future of transportation in Robinson Rancheria! Take a
        few minutes to complete our online survey and share your experiences,
        concerns, and ideas.
      </p>

      {/* Survey Details */}
      <div
        style={{
          backgroundColor: "#f9fafb",
          padding: "1.5rem",
          borderRadius: "8px",
          border: "1px solid #d1d5db",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "Roboto, sans-serif",
            color: "#377eff",
            margin: 0,
          }}
        >
          Survey Details
        </h2>

        <p
          style={{
            fontSize: "16px",
            color: "red",
            margin: 0,
          }}
        >
          📝 <strong>Deadline:</strong> November 8, 2025
        </p>

        <p
          style={{
            fontSize: "15px",
            color: "#4b5563",
            marginTop: "1rem",
          }}
        >
          Your feedback will directly impact transportation planning efforts —
          don&apos;t miss this opportunity to share your voice!
        </p>

        {/* English Survey Button */}
        {/* English Disabled Feedback Button */}
        <a
          href="https://www.surveymonkey.com/r/TMY9RTM"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#e67528",
            color: "white",
            fontWeight: "bold",
            padding: "0.5rem 1.5rem",
            fontSize: "14px",
            borderRadius: "9999px",
            textDecoration: "none",
            display: "inline-block",
            alignSelf: "center",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#9c4a19")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#e67528")
          }
        >
          Fill Out The Feedback Form
        </a>
      </div>

      {/* Call to Action */}
      <p
        style={{
          fontSize: "18px",
          color: "#377eff",
          fontWeight: "700",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        Thank you for helping us create a safer, more connected community!
      </p>
    </div>
  );
};

export default Survey;
