import React from "react";
import "./index.css";

function App() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>Rohit Singh</h1>
        <p>Analytics Manager | Driving Growth & Strategy | Building Scalable Systems</p>
        <a href="#projects" className="button">Deep Dive Into My Work</a>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          I’m a data-driven Analytics Manager passionate about transforming business strategy
          through actionable insights and scalable analytics systems. Over the years, I’ve led
          cross-functional teams to design Power BI frameworks, automate ETL pipelines, and
          enable real-time decision-making across product, growth, and operations.
        </p>
        <p>
          My approach combines analytical rigor with a deep business understanding —
          empowering teams to move from descriptive to predictive analytics using SQL, Python,
          and AI-driven tools. I enjoy solving complex problems that unlock measurable business value.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Reducing Stockouts & Increasing Repeat Purchases</h3>
          <p><strong>Situation:</strong> High stockout rate affecting retention.</p>
          <p><strong>Task:</strong> Build a real-time tracking system to monitor inventory.</p>
          <p><strong>Action:</strong> Designed SQL + Power BI dashboards for proactive stock management.</p>
          <p><strong>Result:</strong> 25% drop in stockouts and 20% uplift in repeat customer rate.</p>
        </div>

        <div className="project-card">
          <h3>Marketing ROI Optimization</h3>
          <p><strong>Situation:</strong> Campaigns lacked clear performance insights.</p>
          <p><strong>Task:</strong> Build unified campaign analytics to measure cross-channel ROI.</p>
          <p><strong>Action:</strong> Integrated GA4, SQL, and Power BI dashboards for unified reporting.</p>
          <p><strong>Result:</strong> 18% improvement in ROI and faster product adoption.</p>
        </div>

        <div className="project-card">
          <h3>Website & App Performance Enhancement</h3>
          <p><strong>Situation:</strong> Low engagement due to slow search and recommendation systems.</p>
          <p><strong>Task:</strong> Improve performance visibility and optimize funnel metrics.</p>
          <p><strong>Action:</strong> Built user journey analytics and conversion dashboards in Python.</p>
          <p><strong>Result:</strong> 30% boost in engagement and repeat visits.</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Technical & Analytical Skills</h2>
        <div className="skills-grid">
          <div className="skill-badge">SQL</div>
          <div className="skill-badge">Power BI</div>
          <div className="skill-badge">Tableau</div>
          <div className="skill-badge">Python</div>
          <div className="skill-badge">GA-4</div>
          <div className="skill-badge">ETL</div>
          <div className="skill-badge">Data Warehousing</div>
          <div className="skill-badge">AI Tools</div>
          <div className="skill-badge">A/B Testing</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact Me</h2>
        <p>
          <a href="mailto:rowhit.singh99@gmail.com">Email</a> | 
          <a href="https://www.linkedin.com/in/rohit-singh-64737212b/" target="_blank" rel="noreferrer">LinkedIn</a> | 
          <a href="tel:+919211344608">📞 +91 9211344608</a>
        </p>
      </section>
    </div>
  );
}

export default App;
