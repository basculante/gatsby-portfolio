import React from "react";
import { motion, useAnimation } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";

const HomeLogo = () => {
  const controls = useAnimation();

  return (
    <div className="home-logo__wrapper">
      <div
        className="home-logo__container"
        onMouseEnter={() => {
          controls.start({
            y: 80,
          });
        }}
        onMouseLeave={() => {
          controls.start({
            y: 0,
          });
        }}
      >
        <div className="home-logo__black-bar" />
        <div className="home-logo__black-bar" />
        <div className="home-logo__black-bar" />
        <div className="home-logo__black-bar" />
        <motion.div className="home-logo__black-bar image" animate={controls}>
          <StaticImage
            src="../images/profile-pic-blue.png"
            alt="profile picture"
            className="home-logo__profile__picture"
            height={320}
            width={200}
            layout="fixed"
          />
        </motion.div>
        <div className="home-logo__black-bar" />
      </div>
      <section className="home-logo__title">
        <h1>victor joh</h1>
        <p>
          <b className="home-logo__job-title">Software Engineer</b> /
          Node / React 
        </p>
      </section>
    </div>
  );
};

export default HomeLogo;
