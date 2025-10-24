import React from "react";
import "./index.css";
import profilePic from "./linkedinpicRS.jpg";

function App() {
  return (
    <div className="app dark-theme">
      {/* Hero Section */}
      <section className="hero">
        <img src={profilePic} alt="Rohit Singh" className="profile-pic" />
        <h1>Hi, welcome to my page!👋</h1>
        <p>Analytics Manager | Driving Growth & Strategy | Building Scalable Systems</p>
        <a href="#projects" className="button">Deep Dive Into My Work</a>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          I’m passionate about solving business problems with data-driven insights. I specialize in analytics strategy, building scalable data systems, and using AI tools and ETL frameworks to optimize decision-making.
        </p>
      </section>

    {/* Skills Section - Cards */}
<section className="skills-cards" id="skills">
  <h2>Key Skills</h2>
  <div className="skills-grid">
    <div className="skill-card">
      <div className="skill-icon">📊</div>
      <h3>Data Analytics & Strategy</h3>
      <p>Driving insights from complex data</p>
    </div>
    <div className="skill-card">
      <div className="skill-icon">💻</div>
      <h3>Technical Tools</h3>
      <p>SQL, Python, Power BI, Tableau</p>
    </div>
    <div className="skill-card">
      <div className="skill-icon">🤖</div>
      <h3>AI Tools</h3>
      <p>ChatGPT, Bard, Claude</p>
    </div>
    <div className="skill-card">
      <div className="skill-icon">⚙️</div>
      <h3>ETL & Automation</h3>
      <p>Airflow, Pandas, APIs</p>
    </div>
    <div className="skill-card">
      <div className="skill-icon">📈</div>
      <h3>Business Intelligence</h3>
      <p>Storytelling & Dashboards</p>
    </div>
  </div>
</section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Campaign Performance Dashboard</h3>
          <p>
            Built a scalable Power BI dashboard integrating real-time marketing data & KPIs, improving campaign ROI by 25%.
          </p>
        </div>
        <div className="project-card">
          <h3>Customer Segmentation</h3>
          <p>
            Developed clustering models to identify high-value customers, leading to a 12% uplift in targeted engagement.
          </p>
        </div>
        <div className="project-card">
          <h3>Automated ETL Pipeline</h3>
          <p>
            Built an Airflow-based ETL system automating daily data ingestion from multiple APIs and databases.
          </p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications" id="certifications">
        <h2>Certifications</h2>
        <iframe
          src="https://www.hackerrank.com/certificates/iframe/d09d4da7ddaa"
          title="HackerRank Certificate"
          width="100%"
          height="400"
          style={{ border: "2px solid #00ffff", borderRadius: "12px" }}
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
