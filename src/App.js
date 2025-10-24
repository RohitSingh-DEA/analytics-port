import React, { useState } from "react";
import "./index.css";
import profilePic from "./linkedinpicRS.jpg";

function App() {
  const [showSkills, setShowSkills] = useState(false);

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, welcome to my page 👋</h1>
        <p>Analytics Manager | Driving Growth & Strategy | Building Scalable Systems</p>
        <a href="#projects" className="button">Deep Dive Into My Work</a>
      </section>

      {/* Profile Section */}
      <section className="about">
        <img src={profilePic} alt="Rohit Singh" className="profile-pic" />
        <p>
          I’m Rohit Singh — an Analytics Manager passionate about solving complex business
          problems through data, AI-driven insights, and scalable reporting systems. My work
          blends strategy, experimentation, and growth analytics to create measurable impact.
        </p>
      </section>

      {/* Dropdown Section */}
      <section className="skills-section">
        <button className="dropdown-button" onClick={toggleSkills}>
          {showSkills ? "Hide Key Skills ▲" : "View Key Skills ▼"}
        </button>
        {showSkills && (
          <div className="skills-dropdown">
            <ul>
              <li>Advanced SQL & Power BI</li>
              <li>Tableau & GA-4 Analytics</li>
              <li>Python (Pandas, NumPy)</li>
              <li>ETL Pipeline Development</li>
              <li>AI Tools for Automation</li>
              <li>Statistical Modelling & A/B Testing</li>
              <li>Data Strategy & Experimentation</li>
            </ul>
          </div>
        )}
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <p>
          From driving 25% uplift in retention to reducing reporting overhead by 70%, my
          analytics-led initiatives bridge insights and execution.
        </p>
      </section>

      {/* Certifications Section */}
      <section className="certifications">
        <h2>Certifications</h2>
        <iframe
          src="https://www.hackerrank.com/certificates/iframe/d09d4da7ddaa"
          title="HackerRank Certification"
          width="100%"
          height="450"
          style={{ border: "none", borderRadius: "10px" }}
        ></iframe>
      </section>

      {/* Contact Section */}
      <footer className="contact">
        <h2>Let’s Connect</h2>
        <p>📞 +91-9211344608 | +91-8882184107</p>
        <p>✉️ rowhit.singh99@gmail.com | rohitguna97@gmail.com</p>
        <a
          href="https://www.linkedin.com/in/rohit-singh-64737212b/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-button"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}

export default App;
