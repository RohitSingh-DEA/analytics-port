import React from "react";
import "./styles.css";  // updated import

function App() {
  return (
    <div>
      <section className="hero">
        <h1>Rohit Singh</h1>
        <p>Analytics Manager | Driving Growth & Strategy through Analytics</p>
        <a href="#projects" className="button">Explore Work</a>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Analytics leader with 5+ years of experience delivering data-driven
          strategies that drive business growth, optimize operations, and enhance
          customer experience. I specialize in Power BI, SQL, Python, Tableau, GA4,
          and advanced analytics to convert complex data into actionable insights.
        </p>
      </section>

      <section className="skills">
        {[
          "SQL",
          "Power BI",
          "Tableau",
          "Python",
          "GA4",
          "Adobe Analytics",
          "Data Warehousing",
          "A/B Testing",
          "Customer Analytics"
        ].map((skill) => (
          <div key={skill} className="skill">{skill}</div>
        ))}
      </section>

      <section className="experience" id="projects">
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Projects & Impact</h2>

        {/* Project 1 */}
        <div className="card">
          <h3>Real-time Dashboard Automation</h3>
          <p><strong>Company:</strong> Physics Wallah</p>
          <ul>
            <li><strong>Situation:</strong> Reporting across Product, Growth, and Operations was slow.</li>
            <li><strong>Task:</strong> Build dashboards for real-time insights.</li>
            <li><strong>Action:</strong> Developed SQL pipelines and Power BI dashboards.</li>
            <li><strong>Result:</strong> Reduced reporting time by 70%.</li>
          </ul>
        </div>

        {/* Project 2 */}
        <div className="card">
          <h3>Inventory & Stock Management Optimization</h3>
          <p><strong>Company:</strong> Nicobar Design Pvt. Ltd</p>
          <ul>
            <li><strong>Situation:</strong> Stockouts affecting revenue.</li>
            <li><strong>Task:</strong> Monitor inventory and optimize stock levels.</li>
            <li><strong>Action:</strong> Implemented SQL & Python pipelines with automated dashboards.</li>
            <li><strong>Result:</strong> Reduced stockouts by 25% and increased repeat purchases by 27%.</li>
          </ul>
        </div>

        {/* Project 3 */}
        <div className="card">
          <h3>Marketing Funnel Optimization</h3>
          <p><strong>Company:</strong> Ferns N Petals</p>
          <ul>
            <li><strong>Situation:</strong> Conversion drop-offs affecting revenue.</li>
            <li><strong>Task:</strong> Identify and resolve funnel drop-offs.</li>
            <li><strong>Action:</strong> Analyzed GA4 & Adobe Analytics data; designed dashboards.</li>
            <li><strong>Result:</strong> Increased conversions by 20%.</li>
          </ul>
        </div>

      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:rowhit.singh99@gmail.com">rowhit.singh99@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/rohit-singh-64737212b/">linkedin.com/in/rohit-singh</a></p>
      </section>
    </div>
  );
}

export default App;
