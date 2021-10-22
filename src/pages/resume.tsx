import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";

const Resume = () => {
  return (
    <Layout pageTitle="Resume">
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
    </Layout>
  );
};

export default Resume;
