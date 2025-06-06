import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactProps {
  isMobile: boolean;
}

const Contact = ({ isMobile }: ContactProps) => {
  const form = useRef<HTMLFormElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    // UPDATE keys with your own EmailJS service ID, template ID, and user ID
    // Make sure to update the service ID, template ID, and user ID with your own EmailJS credentials
    // You can find these in your EmailJS dashboard
    emailjs
      .sendForm(
        "service_ay73hxk",
        "template_m5kfvif",
        form.current,
        "nGDyKMmDutAYPKxKK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsModalOpen(true); // Open the Thank You popup
          form.current?.reset(); // Reset form
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        maxWidth: "100%",
        padding: isMobile ? "1rem" : "2rem",
        position: "relative",
      }}
    >
      {/* Intro Text */}
      <p
        style={{
          fontSize: isMobile ? "15px" : "16px",
          color: "#4b5563",
          fontFamily: "Roboto, sans-serif",
          fontWeight: 500,
          textAlign: "justify",
          lineHeight: "1.75",
        }}
      >
        We&apos;d love to hear from you! Please share your transportation safety
        concerns or general suggestions to help shape the future of Robinson
        Rancheria.
      </p>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {/* Name Field */}
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          style={{
            padding: "0.75rem 1rem",
            fontSize: "14px",
            fontFamily: "Roboto, sans-serif",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
            transition: "all 0.3s ease",
          }}
          onFocus={(e) => {
            e.currentTarget.style.backgroundColor = "#b2cbf7";
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.backgroundColor = "white";
            e.currentTarget.style.transform = "scale(1)";
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#b2cbf7";
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseOut={(e) => {
            if (document.activeElement !== e.currentTarget) {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.transform = "scale(1)";
            }
          }}
        />

        {/* Email Field */}
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          style={{
            padding: "0.75rem 1rem",
            fontSize: "14px",
            fontFamily: "Roboto, sans-serif",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
            transition: "all 0.3s ease",
          }}
          onFocus={(e) => {
            e.currentTarget.style.backgroundColor = "#b2cbf7";
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.backgroundColor = "white";
            e.currentTarget.style.transform = "scale(1)";
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#b2cbf7";
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseOut={(e) => {
            if (document.activeElement !== e.currentTarget) {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.transform = "scale(1)";
            }
          }}
        />

        {/* Message Field */}
        <textarea
          name="message"
          placeholder="Your Message or Suggestions"
          rows={12}
          required
          style={{
            padding: "1rem",
            fontSize: "14px",
            fontFamily: "Roboto, sans-serif",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
            resize: "vertical",
            transition: "all 0.3s ease",
          }}
          onFocus={(e) => {
            e.currentTarget.style.backgroundColor = "#b2cbf7";
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.backgroundColor = "white";
            e.currentTarget.style.transform = "scale(1)";
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#b2cbf7";
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseOut={(e) => {
            if (document.activeElement !== e.currentTarget) {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.transform = "scale(1)";
            }
          }}
        />

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            backgroundColor: "#377eff",
            color: "white",
            fontWeight: "bold",
            padding: "0.5rem 1.5rem",
            fontSize: "14px",
            fontFamily: "Roboto, sans-serif",
            borderRadius: "9999px",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s",
            textTransform: "uppercase",
            alignSelf: "center",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#005fa3")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#377eff")
          }
        >
          Submit
        </button>
      </form>

      {/* Thank You Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "2rem",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            }}
          >
            <h2
              style={{
                marginBottom: "1rem",
                color: "#377eff",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Thank You!
            </h2>
            <p>
              Your message has been sent successfully. We&apos;ll get back to
              you soon.
            </p>
            <button
              onClick={closeModal}
              style={{
                marginTop: "1.5rem",
                backgroundColor: "#377eff",
                color: "white",
                fontWeight: "bold",
                fontFamily: "Roboto, sans-serif",
                padding: "0.5rem 1.5rem",
                fontSize: "14px",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#005fa3")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#377eff")
              }
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
