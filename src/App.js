import React from "react";
import "./index.css";
import profilePic from "./linkedinpicRS.jpg";

function App() {
  return (
    <div className="app dark-theme">
      {/* Hero Section */}
      <section className="hero">
        <img src={profilePic} alt="Rohit Singh" className="profile-pic" />
        <h1>Hi, welcome to my portfolio!</h1>
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

      {/* Skills Section */}
      <section className="skills" id="skills">
        <h2>Key Skills</h2>
        <div className="dropdown">
          <button className="dropbtn">View Skills ▼</button>
          <div className="dropdown-content">
            <p>Data Analytics & Strategy</p>
            <p>SQL, Python, Power BI</p>
            <p>AI Tools (ChatGPT, Bard, Claude)</p>
            <p>ETL & Automation (Airflow, Pandas, APIs)</p>
            <p>Business Storytelling & Dashboards</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Sales Performance Dashboard</h3>
          <p>
            Built a scalable Power BI dashboard integrating real-time sales data with marketing KPIs, improving campaign ROI by 25%.
          </p>
        </div>
        <div className="project-card">
          <h3>Customer Segmentation using ML</h3>
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
      <section className="contact" id="contact">
        <h2>Contact</h2>
        <p>📞 9211344608</p>
        <p>📧 rowhit.singh99@gmail.com</p>
        <a href="https://github.com/RohitSingh-DEA" target="_blank" rel="noreferrer" className="button">Visit My GitHub</a>
      </section>
    </div>
  );
}

export default App;
