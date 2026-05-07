interface WorkshopProps {
  isMobile: boolean;
}

const Workshop = ({ isMobile }: WorkshopProps) => {
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
      {/* Workshop Invitation */}
      <p
        style={{
          fontSize: isMobile ? "15px" : "16px",
          color: "#4b5563",
          fontWeight: 500,
          textAlign: "justify",
          lineHeight: "1.75",
        }}
      >
        Thank you for joining our public workshops! We appreciate your participation and valuable feedback for the Safety Action Plan in
        Robinson Rancheria. The workshops have now been completed.
      </p>

      {/* Workshop Details */}
      {/*<div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          marginTop: "0rem",
        }}
      >
        Thank you for joining our public workshops! We appreciate your participation and valuable feedback for the Safety Action Plan in
        Robinson Rancheria. he workshops have now been completed.
      </p>

      {/* Workshop Details */}
      {/*<div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          marginTop: "0rem",
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
            Next Workshop Details
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#1f2937",
              margin: 0,
            }}
          >
            📅 <strong>Date:</strong> To Be Determined (TBD)
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#1f2937",
              margin: 0,
            }}
          >
            🕙 <strong>Time:</strong> TBD
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "#1f2937",
              margin: 0,
            }}
          >
            📍 <strong>Location:</strong> TBD
          </p>

          <p
            style={{
              fontSize: "15px",
              color: "#4b5563",
              marginTop: "1.5rem",
              lineHeight: "1.7",
            }}
          >
            Details for the next workshop is{" "}
            <strong>To Be Determined (TBD)</strong>. Please check back for
            updates regarding future workshop dates and details.
            <em>
              <br />
              <br />
              Note:
            </em>{" "}
            This community event may be photographed and/or videotaped for
            possible use on the Tribe (and library) websites and social media.
            Your participation constitutes consent for the Tribe to publish your
            likeness for publicity purposes. Activities, events, and times
            listed above are subject to change. Please check back for updates.
          </p>
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

export default Workshop;
