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
        "service_3t5eqhp",
        "template_jfgnaed",
        form.current,
        "SI8aWGGuqvqbjZp6x",
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
        },
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
        Thank you for reaching out! The online comment period has officially
        closed. We appreciate your feedback and interest in improving
        transportation safety in Robinson Rancheria. Your input helped us build
        a better, safer community for everyone.
      </p>
    </div>
  );
};

export default Contact;
