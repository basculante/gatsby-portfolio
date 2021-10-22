import React from "react";
import { Link } from "gatsby";
import { AnimationControls, motion } from "framer-motion";

import "./Navbar.scss";

interface INavbarProps {
  mobileMenuControls: AnimationControls;
  toggleMenu: () => void;
}

const Navbar = ({ mobileMenuControls, toggleMenu }: INavbarProps) => {
  const mobileMenu = {
    visible: { x: "0", opacity: 1 },
    hidden: { x: "-100%" },
  };
  return (
    <motion.nav
      className="menu"
      initial={false}
      animate={mobileMenuControls}
      variants={mobileMenu}
      transition={{ type: "tween" }}
    >
      <ul>
        <li className="menu__item" id="home-menu">
          <Link to="/" className="menu__item-link" onClick={() => toggleMenu()}>
            <sup>01</sup>Home
          </Link>
          <div className="marquee">
            <div className="marquee__inner-wrap">
              <div className="marquee__inner" aria-hidden="true">
                {Array(32)
                  .fill("home")
                  .map((title: string, idx: number) => (
                    <React.Fragment key={`${title}-${idx}`}>
                      <span>{title}</span>
                      <div className="marquee__img"></div>
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </div>
        </li>
        <li className="menu__item" id="work-menu">
          <Link
            to="/work"
            className="menu__item-link"
            onClick={() => toggleMenu()}
          >
            <sup>02</sup>Work
          </Link>
          <div className="marquee">
            <div className="marquee__inner-wrap">
              <div className="marquee__inner" aria-hidden="true">
                {Array(32)
                  .fill("work")
                  .map((title: string, idx: number) => (
                    <React.Fragment key={`${title}-${idx}`}>
                      <span>{title}</span>
                      <div className="marquee__img"></div>
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </div>
        </li>
        <li className="menu__item" id="resume-menu">
          <Link
            to="/resume"
            className="menu__item-link"
            onClick={() => toggleMenu()}
          >
            <sup>03</sup>Resume
          </Link>
          <div className="marquee">
            <div className="marquee__inner-wrap">
              <div className="marquee__inner" aria-hidden="true">
                {Array(32)
                  .fill("resume")
                  .map((title: string, idx: number) => (
                    <React.Fragment key={`${title}-${idx}`}>
                      <span>{title}</span>
                      <div className="marquee__img"></div>
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </div>
        </li>
        <li className="menu__item" id="contact-menu">
          <a className="menu__item-link" href="mailto:wantechjoh@gmail.com">
            <sup>04</sup>Email
          </a>
          <div className="marquee">
            <div className="marquee__inner-wrap">
              <div className="marquee__inner email" aria-hidden="true">
                {Array(32)
                  .fill("wantechjoh@gmail.com")
                  .map((title: string, idx: number) => (
                    <React.Fragment key={`${title}-${idx}`}>
                      <span>{title}</span>
                      <div className="marquee__img"></div>
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </div>
        </li>
        <div className="menu__item-socials">
          <li className="menu__item" id="contact-menu">
            <a className="menu__item-link" href="https://github.com/basculante">
              GitHub
            </a>
            <div className="marquee social">
              <div className="marquee__inner-wrap">
                <div className="marquee__inner" aria-hidden="true">
                  {Array(32)
                    .fill("github")
                    .map((title: string, idx: number) => (
                      <React.Fragment key={`${title}-${idx}`}>
                        <span>{title}</span>
                        <div className="marquee__img"></div>
                      </React.Fragment>
                    ))}
                </div>
              </div>
            </div>
          </li>
          <li className="menu__item" id="contact-menu">
            <a
              className="menu__item-link"
              href="https://www.linkedin.com/in/victor-wan-teak-joh-924203ba/"
            >
              LinkedIn
            </a>
            <div className="marquee social">
              <div className="marquee__inner-wrap">
                <div className="marquee__inner" aria-hidden="true">
                  {Array(32)
                    .fill("linkedin")
                    .map((title: string, idx: number) => (
                      <React.Fragment key={`${title}-${idx}`}>
                        <span>{title}</span>
                        <div className="marquee__img"></div>
                      </React.Fragment>
                    ))}
                </div>
              </div>
            </div>
          </li>
        </div>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
