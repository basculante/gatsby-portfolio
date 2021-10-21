import React from "react";
import HomeLogo from "../components/HomeLogo";
import Layout from "../components/Layout";

import "../scss/main.scss";
import "./index.scss";
import "react-perfect-scrollbar/dist/css/styles.css";

const HomePage = () => {
  return (
    <Layout>
      <HomeLogo />
      <section className="homepage__about-text">
        I am the lead frontend software engineer at{" "}
        <a href="https://voicegain.ai">Voicegain</a>, a speech-to-text focused
        startup in Dallas. I graduated with a B.A. in Chemistry from{" "}
        <a href="https://www.nyu.edu/">NYU</a>. I enjoy bringing an analytical
        approach with a creative perspective to build products that I hope will
        help solve a problem.
        <p>
          When I'm not building commercial platforms or creating projects for
          myself, I enjoy taking a nice break from life by traveling the world.
        </p>
      </section>
    </Layout>
  );
};

export default HomePage;
