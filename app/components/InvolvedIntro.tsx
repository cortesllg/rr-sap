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
        Rancheria has completed the Safety Action Plan, and thanks to your input,
        the plan has been crafted to reflect the community’s real needs. You can now read the Comprehensive Safety Action Plan.
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
            Read the{" "}
            <span
              onClick={() => {
                window.location.href = "/documentation";
              }}
              style={{
                color: "#005fa3",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Comprehensive Safety Action Plan
            </span>
              .
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
        what’s not — on our streets today. Your suggestions has helped us
        prioritize future improvements.
      </p>


    </div>
  );
};

export default InvolvedIntro;
