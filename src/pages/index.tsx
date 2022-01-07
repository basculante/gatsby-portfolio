import React from "react";
import HomeLogo from "../components/HomeLogo";

import "react-perfect-scrollbar/dist/css/styles.css";

const HomePage = () => {
  return (
    <main className="homepage__container">
      <HomeLogo />
      <section className="homepage__about-text">
        I am a software engineer at{" "}
        <a href="https://www.snapraise.com/">Snap! Raise</a>, a company focused
        on creating digital fundraising platforms to support children and group
        leaders in schools. Previously, I was the lead frontend software
        engineer at <a href="https://voicegain.ai">Voicegain</a>, a
        speech-to-text focused startup in Dallas. I graduated with a B.A. in
        Chemistry from <a href="https://www.nyu.edu/">NYU</a>. I enjoy bringing
        an analytical approach with a creative perspective to build products
        that I hope will help solve a problem.
        <p>
          When I'm not building commercial platforms or creating projects for
          myself, I enjoy taking a nice break from life by traveling the world.
        </p>
      </section>
    </main>
  );
};

export default HomePage;
