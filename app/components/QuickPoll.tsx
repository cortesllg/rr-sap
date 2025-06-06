import { useState } from "react";

interface InvolvedIntroProps {
  isMobile: boolean;
}

const QuickPoll = ({ isMobile }: InvolvedIntroProps) => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const pollOptions = [
    "People driving too fast",
    "Drivers not yielding or stopping at intersections",
    "Distracted driving",
    "Lack of connected sidewalks/bikeways",
    "Poor maintenance of sidewalks/bikeways",
    "Lack of electronically enchanced crosswalks",
    "Lack of separated bike lanes",
    "Lack of lighting",
    "Poor visibility at intersections",
    "Lack of traffic violation enforcement",
    "Potholes",
    "Other",
  ];

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions((prevSelected) => {
      if (prevSelected.includes(option)) {
        return prevSelected.filter((item) => item !== option);
      } else {
        return [...prevSelected, option];
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedOptions.length === 0) {
      alert("Please select at least one option before submitting.");
      return;
    }

    try {
      await fetch("https://sheetdb.io/api/v1/4nu6h7j9p9z0u", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              Date: new Date().toISOString(),
              SelectedOptions: selectedOptions.join(", "),
            },
          ],
        }),
      });

      console.log("Data sent to SheetDB!");
      setShowThankYou(true);
      setSelectedOptions([]);
    } catch (error) {
      console.error("Error submitting to SheetDB:", error);
    }
  };

  const handleClose = () => {
    setShowThankYou(false);
  };

  return (
    <>
      <aside
        style={{
          flex: isMobile ? "unset" : "0 0 22%",
          backgroundColor: "white",
          padding: "1rem",
          fontSize: "14px",
          alignSelf: "flex-start",
          marginLeft: isMobile ? "0" : "1.5rem",
          position: "relative",
          transform: isMobile ? "none" : "translateX(-4.5rem)",
        }}
      >
        <h3
          className="sidebar-title"
          style={{
            textDecoration: "underline",
            textAlign: "center",
          }}
        >
          Quick Poll
        </h3>

        <p
          style={{
            marginBottom: "1.5rem",
            color: "#4b5563",
            fontSize: "16px",
            fontWeight: "bold",
            lineHeight: "1.5",
            textAlign: "justify",
          }}
        >
          What do you think are the top three (3) issues affecting your safety
          in Thousand Oaks?
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {pollOptions.map((option, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                id={`option-${index}`}
                name="safety-concerns"
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
                style={{
                  width: "18px",
                  height: "18px",
                  minWidth: "18px",
                  minHeight: "18px",
                  marginRight: "0.75rem",
                  border: "1.5px solid #d1d5db",
                  borderRadius: "0.25rem",
                  accentColor: "#16a34a",
                }}
              />
              <label
                htmlFor={`option-${index}`}
                style={{
                  fontSize: "14px",
                  color: "#313F58",
                  margin: 0,
                  cursor: "pointer",
                }}
              >
                {option}
              </label>
            </div>
          ))}

          <div style={{ paddingTop: "1.5rem", textAlign: "center" }}>
            <button
              type="submit"
              style={{
                backgroundColor: "#007a33",
                color: "white",
                fontWeight: "bold",
                padding: "0.5rem 1.5rem",
                fontSize: "14px",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.3s",
                textTransform: "uppercase",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#005fa3")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#007a33")
              }
            >
              Submit
            </button>
          </div>
        </form>
      </aside>

      {/* Thank You Modal outside of <aside> */}
      {showThankYou && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              animation: "fadeIn 0.3s ease", // Optional nice fade animation
            }}
          >
            <h2 style={{ marginBottom: "1rem", color: "#007a33" }}>
              Thank you!
            </h2>
            <p style={{ marginBottom: "1.5rem", fontSize: "1rem" }}>
              We appreciate your input to make Thousand Oaks safer.
            </p>
            <button
              onClick={handleClose}
              style={{
                backgroundColor: "#007a33",
                color: "white",
                fontWeight: "bold",
                padding: "0.5rem 1.5rem",
                fontSize: "14px",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.3s",
                textTransform: "uppercase",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#005fa3")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#007a33")
              }
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default QuickPoll;
