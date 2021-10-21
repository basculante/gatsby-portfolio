import React from "react";
import { motion, useAnimation } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import "./HomeLogo.scss";

const HomeLogo = () => {
  const controls = useAnimation();

  return (
    <div className="logo__wrapper">
      <div
        className="logo__container"
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
        <div className="logo__black-bar" />
        <div className="logo__black-bar" />
        <div className="logo__black-bar" />
        <div className="logo__black-bar" />
        <motion.div className="logo__black-bar image" animate={controls}>
          <StaticImage
            src="../images/profile-pic-blue.png"
            alt="profile picture"
            className="logo__profile__picture"
            height={320}
            width={200}
            layout="fixed"
          />
        </motion.div>
        <div className="logo__black-bar" />
      </div>
      <section className="logo__title">
        <h1>victor joh</h1>
        <p>
          <b className="job-title">Frontend Software Engineer</b> / React /
          Typescript
        </p>
      </section>
    </div>
  );
};

export default HomeLogo;
