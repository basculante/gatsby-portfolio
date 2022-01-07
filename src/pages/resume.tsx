import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../scss/main.scss";

const Resume = () => {
  return (
    <section className="resume__container">
      <div>
        <a href="./resume.pdf">View as PDF</a>
      </div>
      <StaticImage
        src="../images/resume.png"
        alt="resume"
        className="resume-img"
        placeholder="blurred"
        layout="fullWidth"
      />
    </section>
  );
};

export default Resume;
