interface InvolvedIntroProps {
  isMobile: boolean;
  setActiveSection: (section: string) => void;
}

const InvolvedIntro = ({ isMobile, setActiveSection }: InvolvedIntroProps) => {
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
      {/* Intro Paragraph */}
      <p
        style={{
          fontSize: isMobile ? "15px" : "16px",
          color: "#4b5563",
          fontWeight: 500,
          lineHeight: "1.75",
          textAlign: "justify",
          maxWidth: "100%",
        }}
      >
        We believe the best ideas come from the people who live, work, and
        travel in our community every day — and that includes you! Robinson
        Rancheria is working on the Safety Action Plan, and your input is
        critical to ensuring the plan reflects your real needs. There will be
        four ways to get involved:
      </p>

      {/* Steps List */}
      <ol
        style={{
          listStyle: "decimal inside",
          paddingLeft: isMobile ? "1rem" : "3rem",
          color: "#4b5563",
          fontSize: isMobile ? "15px" : "16px",
          lineHeight: "1.75",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginTop: "1rem",
        }}
      >
        <li>
          <strong>
            Visit Our{" "}
            <span
              onClick={() => setActiveSection("Engagement")}
              style={{
                color: "#005fa3",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Online Comment Map
            </span>
          </strong>
        </li>
        <li>
          <strong>
            Complete Our{" "}
            {/* Link to Survey TO BE UPDATED WITH THE ACTUAL SURVEY*/}
            <span
              title="The survey will be available soon"
              style={{
                color: "gray",
                textDecoration: "underline",
                cursor: "not-allowed",
              }}
            >
              Survey (To be Updated)
            </span>
          </strong>
        </li>
        <li>
          <strong>
            Attend a{" "}
            <span
              onClick={() => setActiveSection("Workshop")}
              style={{
                color: "#005fa3",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Public Workshop
            </span>
          </strong>
        </li>

        <li>
          <strong>
            <span
              onClick={() => setActiveSection("Contact")}
              style={{
                color: "#005fa3",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Contact Us
            </span>{" "}
            Directly
          </strong>
        </li>
      </ol>

      {/* Closing Paragraph */}
      <p
        style={{
          fontSize: isMobile ? "15px" : "16px",
          color: "#4b5563",
          fontWeight: 500,
          lineHeight: "1.75",
          textAlign: "justify",
          maxWidth: "100%",
          margin: "0 auto",
          marginTop: "1rem",
        }}
      >
        Your experiences are crucial to understanding what’s working — and
        what’s not — on our streets today. Your suggestions will help us
        prioritize future improvements.
      </p>

      {/* Call to Action */}
      <p
        style={{
          fontSize: isMobile ? "17px" : "18px",
          color: "#377eff",
          fontWeight: "700",
          textAlign: "center",
          marginTop: "2rem",
          maxWidth: "100%",
        }}
      >
        Get involved today — we’re excited to hear from you!
      </p>
    </div>
  );
};

export default InvolvedIntro;
