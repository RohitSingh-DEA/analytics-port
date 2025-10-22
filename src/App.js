import React from "react";
import "./index.css";

function App() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>Rohit Singh</h1>
        <p>Analytics Manager | Driving Growth & Strategy through Analytics</p>
        <a href="#projects" className="button">Explore Work</a>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Key Projects</h2>

        <div className="project-card">
          <h3>Reducing Stockouts & Increasing Repeat Purchases</h3>
          <p><strong>Situation:</strong> High stockout rate affecting retention.</p>
          <p><strong>Task:</strong> Build a real-time tracking system to monitor inventory.</p>
          <p><strong>Action:</strong> Designed SQL + Power BI dashboards for proactive stock management.</p>
          <p><strong>Result:</strong> 25% drop in stockouts and 20% uplift in repeat customer rate.</p>
        </div>

        <div className="project-card">
          <h3>Marketing ROI Optimization</h3>
          <p><strong>Situation:</strong> Marketing campaigns lacked clear performance insights.</p>
          <p><strong>Task:</strong> Improve campaign performance measurement.</p>
          <p><strong>Action:</strong> Integrated GA-4, Adobe Analytics, and SQL dashboards for cross-channel analysis.</p>
          <p><strong>Result:</strong> 18% improvement in marketing ROI and faster adoption of new features.</p>
        </div>

        <div className="project-card">
          <h3>Website & App Performance Enhancement</h3>
          <p><strong>Situation:</strong> Poor engagement due to slow search & recommendation systems.</p>
          <p><strong>Task:</strong> Optimize user experience and product discovery.</p>
          <p><strong>Action:</strong> Built advanced analytics models in Python & Power BI dashboards.</p>
          <p><strong>Result:</strong> 20–30% increase in engagement and conversions.</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Technical & Analytical Skills</h2>
        <div className="skill-badge">SQL</div>
        <div className="skill-badge">Power BI</div>
        <div className="skill-badge">Tableau</div>
        <div className="skill-badge">Python</div>
        <div className="skill-badge">GA-4</div>
        <div className="skill-badge">Data Warehousing</div>
        <div className="skill-badge">A/B Testing</div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact Me</h2>
        <p>
          <a href="mailto:rowhit.singh99@gmail.com">Email</a> | 
          <a href="https://www.linkedin.com/in/rohit-singh-64737212b/" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </section>
    </div>
  );
}

export default App;
