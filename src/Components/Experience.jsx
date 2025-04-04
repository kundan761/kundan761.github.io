import React from "react";
import "../Styles/experience.css";

const Experience = () => {
  return (
    <div className="experience section" id="experience">
      <h1 className="experience" style={{ paddingTop: "20px" }}>
        Work <span style={{ color: "#0e4166" }}>Experience</span>
      </h1>
      <div className="experience-content">
        <div className="experience-item">
          <h2 style={{ color: "#0e4166" }}>Cognisite Technologies Pvt Ltd</h2>
          <p className="job-duration">August 2024 - January 2025</p>
          <p className="job-role">Full Stack Developer</p>
          <p className="job-description">
            Managed both frontend and backend development. 
            Developed dynamic, responsive user interfaces using React.js and Redux, 
            implemented RESTful APIs, and ensured seamless integration with Mysql and Node.js. 
            Focused on optimizing application performance and collaborating with cross-functional teams 
            to deliver scalable web solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;

