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
        We invite you to join our upcoming public workshop! Share your ideas,
        concerns, and feedback to help improve the Safety Action Plan in
        Robinson Rancheria. Your voice matters and we look forward to hearing
        from you.
      </p>

      {/* Workshop Details */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          marginTop: "0rem",
        }}
      >
        {/* Workshop details individualblock */}
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
            Community Workshop (Virtual)
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#1f2937",
              margin: 0,
            }}
          >
            📅 <strong>Date:</strong> February 4th, 2026 (Wednesday)
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#1f2937",
              margin: 0,
            }}
          >
            🕙 <strong>Time:</strong> 4:00 PM - 6:00 PM
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "#1f2937",
              margin: 0,
            }}
          >
            📍 <strong>Location:</strong> Virtual (Not In-Person)
          </p>
          {/* Registration Link */}
          <p
            style={{
              fontSize: "16px",
              color: "#1f2937",
              margin: 0,
            }}
          >
            📝{" "}
            <strong>
              Joining Details To Be Determined (TBD), come back soon!
            </strong>{" "}
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "#4b5563",
              marginTop: "1.5rem",
              lineHeight: "1.7",
            }}
          >
            The <strong>Community Workshop (Virtual)</strong> begins at 4:00 PM
            and will take place virtually (not in-person).
            <br />
            <br />
            <em>Note:</em> This community event may be photographed and/or
            videotaped for possible use on the Tribe (and library) websites and
            social media. Your participation constitutes consent for the Tribe
            to publish your likeness for publicity purposes.
            <br />
            <br />
            Activities, events, and times listed above are subject to change.
            Please check back for updates.
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
        Let&apos;s work together to make Robinson Rancheria safer and more
        connected!
      </p>
    </div>
  );
};

export default Workshop;
