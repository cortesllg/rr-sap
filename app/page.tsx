"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./styles/base.css";
import "./styles/home-page.css";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("InvolvedIntro");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handles fade-in/fade-up on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll(".observe");
    targets.forEach((el) => observer.observe(el));

    return () => {
      targets.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div>
      <div className="image-container">
        <img
          src="/images/Buffered Bike Lane Photo.JPG"
          alt="Header Image"
          className="header-image"
        />
        <div className="overlay-text">
          <h2 className="fade-up observe">
            <span className="notranslate"> ROBINSON RANCHERIA</span>
            <br />
            SAFETY ACTION PLAN
          </h2>

          {/* Link to the survey form (IMPORTANT TO BE UDPATED WITH THE CORERCT LINK) */}
          <p className="p2 fade-up observe">Get involved by sharing your input!</p>
          {/* Button to the survey form  would go below*/}
          </div>
      </div>

      <section className="goal-box">
        <span className="goal-title fade-in observe">OUR GOAL</span>
        <div className="goal-divider"></div>
        <p className="goal-text fade-in observe">
          <strong>What we strive for</strong> – To prevent roadway fatalities
          and serious injuries by identifying high-risk areas and prioritizing
          investments in safety throughout Tribal lands.
        </p>
      </section>

      {/* description box "What is a(n)" */}

      <section className="description">
        {/* leaves */}
        <div className="description-content">
          <div className="description-title fade-in observe">
            <span className="arrow left">❂</span>
            <h2 className="title-text">What is a Safety Action Plan?</h2>
            <span className="arrow right">❂</span>
          </div>
          <div className="description-box">
            <p className="fade-in observe"
              style={{ padding: isMobile ? "1rem 2rem" : "2rem 3rem 1rem 3rem",  }}>
              A part of the Safe Roads for All (SS4A) program, a Safety Action
              Plan (SAP) is a plan developed to identify, analyze, and
              prioritize safety related improvements within the Tribal
              transportation system. The plan will apply a systemic safety
              approach to identify high-risk locations, engage stakeholders to
              understand the needs of the Tribal community and its visitors,
              develop strategies to implement safe designs that are effective
              and equitable to all road users, and aid in the process to secure
              funding for implementing safety improvements.
            </p>

            <div className="steps">
              <div className="step fade-in observe">
                <div className="icon">✔︎</div>
                <div className="title">Identify</div>
                <div className="text">
                  Analyze high-risk areas and prioritize safety improvements
                </div>
              </div>
              <div className="step fade-in observe">
                <div className="icon">👥</div>
                <div className="title">Engage</div>
                <div className="text">
                  Collaborate with stakeholders to understand community needs
                </div>
              </div>
              <div className="step fade-in observe">
                <div className="icon">⚡</div>
                <div className="title">Implement</div>
                <div className="text">
                  Develop and fund effective, equitable safety improvements
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW FULL-WIDTH IMAGE BETWEEN DESCRIPTION AND MISSION */}
      <div className="full-width-image">
        <img
          src="/images/Header Image.jpg"
          alt="Community biking and walking"
          className="full-width-img"
        />
      </div>

      <section className="mission-section">
        <div className="mission-title fade-in observe">
          <span className="arrow left">❂</span>
          <h2 className="title-text">Robinson Rancheria's Mission</h2>
          <span className="arrow right">❂</span>
        </div>
        <hr className="mission-divider" />
        <p className="mission-text fade-in observe">
          Robinson Rancheria is committed to fostering a safe, sustainable, and
          connected community through an equitable active transportation plan.
          By prioritizing the health, well-being, and mobility of our tribal
          members and neighbors, we aim to create accessible pathways, promote
          walking and cycling, and honor our ancestral lands while reducing our
          environmental impact. Together, we will build a future where every
          journey reflects our values of stewardship, unity, and resilience.
        </p>
      </section>

      <section className="objectives-section">
        <h2 className="objectives-title fade-up observe">Our Five Objectives:</h2>
        <div className="objective-item">
          <div className="objective-number fade-up observe">1</div>
          <div>
            <h3 className="objective-heading fade-up observe">
              Enhance Transportation Safety and Equity
            </h3>
            <p className="objective-text fade-up observe">
              Identify high-risk areas for crashes using crash history and
              transportation data while ensuring a safe, sustainable,
              integrated, and efficient system for all users, particularly
              disadvantaged Tribal communities.
            </p>
          </div>
        </div>
        <div className="objective-item">
          <div className="objective-number fade-up observe">2</div>
          <div>
            <h3 className="objective-heading fade-up observe">
              Target Key Emphasis Areas for Safety Interventions
            </h3>
            <p className="objective-text fade-up observe">
              Use crash analysis, tribal objectives, and tribal community
              insights to prioritize areas for safety improvements and
              transportation equity.
            </p>
          </div>
        </div>
        <div className="objective-item">
          <div className="objective-number fade-up observe">3</div>
          <div>
            <h3 className="objective-heading fade-up observe">
              Develop a Comprehensive Safety Strategy
            </h3>
            <p className="objective-text fade-up observe">
              Establish a structured safety program and toolbox that aligns with
              best practices, supports systemic safety improvements, and fosters
              opportunities for future initiatives.
            </p>
          </div>
        </div>
        <div className="objective-item">
          <div className="objective-number fade-up observe">4</div>
          <div>
            <h3 className="objective-heading fade-up observe">
              Plan and Prioritize Safety Improvements
            </h3>
            <p className="objective-text fade-up observe">
              Define short-, mid-, and long-term safety enhancements with
              funding considerations.
            </p>
          </div>
        </div>
        <div className="objective-item">
          <div className="objective-number fade-up observe">5</div>
          <div>
            <h3 className="objective-heading fade-up observe">
              Recommend Implementation and Fund Sources for Countermeasures
            </h3>
            <p className="objective-text fade-up observe">
              Develop, propose countermeasure projects and recommend funding
              programs, considering cost, effort, and timeline to maximize
              impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
