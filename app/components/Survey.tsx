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
        Your feedback will directly impact transportation planning efforts —
        thank you for taking this opportunity to share your voice!
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
            fontFamily: "Roboto, sans-serif",
            fontSize: "20px",
            fontWeight: "bold",
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
          📝 <strong>Deadline:</strong> February 22, 2026
        </p>

        <p
          style={{
            fontSize: "15px",
            color: "#4b5563",
            marginTop: "1rem",
          }}
        >
          Your feedback will directly impact transportation planning efforts —
          thank you for taking this opportunity to share your voice!
        </p>

        <div
          style={{
            backgroundColor: "#fffbeb",
            fontSize: "14px",
            color: "#92400e",
            fontWeight: "bold",
            padding: "12px 20px",
            borderRadius: "4px",
            borderLeft: "4px solid #f59e0b",
            textAlign: "center",
          }}
        >
          The feedback form period ended February 23, 2026
        </div>

        {/* Survey Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            marginTop: "1rem",
          }}
        >
          {/* English Survey Button */}
          {/* English Disabled Feedback Button */}
          <span
            title="Feedback form is now closed"
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
            Fill Out The Feedback Form (Closed)
          </span>
        </div>
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
