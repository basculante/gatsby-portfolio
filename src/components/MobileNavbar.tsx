import React from "react";
import { Link } from "gatsby";
import { AnimationControls, motion } from "framer-motion";

interface IMobileNavbarProps {
  mobileMenuControls: AnimationControls;
  toggleMenu: () => void;
}

const MobileNavbar = ({
  mobileMenuControls,
  toggleMenu,
}: IMobileNavbarProps) => {
  const mobileMenu = {
    visible: { x: "0", opacity: 1 },
    hidden: { x: "-100%" },
  };
  return (
    <motion.nav
      className="mobile-menu"
      initial={false}
      animate={mobileMenuControls}
      variants={mobileMenu}
      transition={{ type: "tween" }}
    >
      <ul>
        <li className="mobile-menu__item" id="mobile-home-menu">
          <Link
            to="/"
            className="mobile-menu__item-link"
            onClick={() => toggleMenu()}
          >
            <sup>01</sup>Home
          </Link>
          {/* <div className="mobile-marquee">
            <div className="mobile-marquee__inner-wrap">
              <div className="mobile-marquee__inner" aria-hidden="true">
                {Array(32)
                  .fill("home")
                  .map((title: string, idx: number) => (
                    <React.Fragment key={`${title}-${idx}`}>
                      <span>{title}</span>
                      <div className="mobile-marquee__img"></div>
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </div> */}
        </li>
        <li className="mobile-menu__item" id="mobile-work-menu">
          <Link
            to="/work"
            className="mobile-menu__item-link"
            onClick={() => toggleMenu()}
          >
            <sup>02</sup>Work
          </Link>
          {/* <div className="mobile-marquee">
            <div className="mobile-marquee__inner-wrap">
              <div className="mobile-marquee__inner" aria-hidden="true">
                {Array(32)
                  .fill("work")
                  .map((title: string, idx: number) => (
                    <React.Fragment key={`${title}-${idx}`}>
                      <span>{title}</span>
                      <div className="mobile-marquee__img"></div>
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </div> */}
        </li>
        <li className="mobile-menu__item" id="mobile-resume-menu">
          <Link
            to="/resume"
            className="mobile-menu__item-link"
            onClick={() => toggleMenu()}
          >
            <sup>03</sup>Resume
          </Link>
          {/* <div className="mobile-marquee">
            <div className="mobile-marquee__inner-wrap">
              <div className="mobile-marquee__inner" aria-hidden="true">
                {Array(32)
                  .fill("resume")
                  .map((title: string, idx: number) => (
                    <React.Fragment key={`${title}-${idx}`}>
                      <span>{title}</span>
                      <div className="mobile-marquee__img"></div>
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </div> */}
        </li>
        <li className="mobile-menu__item" id="mobile-contact-menu">
          <a
            className="mobile-menu__item-link"
            href="mailto:wantechjoh@gmail.com"
          >
            <sup>04</sup>Email
          </a>
          {/* <div className="mobile-marquee">
            <div className="mobile-marquee__inner-wrap">
              <div className="mobile-marquee__inner email" aria-hidden="true">
                {Array(32)
                  .fill("wantechjoh@gmail.com")
                  .map((title: string, idx: number) => (
                    <React.Fragment key={`${title}-${idx}`}>
                      <span>{title}</span>
                      <div className="mobile-marquee__img"></div>
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </div> */}
        </li>
        <div className="mobile-menu__item-socials">
          <li className="mobile-menu__item" id="mobile-contact-menu">
            <a
              className="mobile-menu__item-link"
              href="https://github.com/basculante"
            >
              GitHub
            </a>
            {/* <div className="mobile-marquee social">
              <div className="mobile-marquee__inner-wrap">
                <div className="mobile-marquee__inner" aria-hidden="true">
                  {Array(32)
                    .fill("github")
                    .map((title: string, idx: number) => (
                      <React.Fragment key={`${title}-${idx}`}>
                        <span>{title}</span>
                        <div className="mobile-marquee__img"></div>
                      </React.Fragment>
                    ))}
                </div>
              </div>
            </div> */}
          </li>
          <li className="mobile-menu__item" id="mobile-contact-menu">
            <a
              className="mobile-menu__item-link"
              href="https://www.linkedin.com/in/victor-wan-teak-joh-924203ba/"
            >
              LinkedIn
            </a>
            {/* <div className="mobile-marquee social">
              <div className="mobile-marquee__inner-wrap">
                <div className="mobile-marquee__inner" aria-hidden="true">
                  {Array(32)
                    .fill("linkedin")
                    .map((title: string, idx: number) => (
                      <React.Fragment key={`${title}-${idx}`}>
                        <span>{title}</span>
                        <div className="mobile-marquee__img"></div>
                      </React.Fragment>
                    ))}
                </div>
              </div>
            </div> */}
          </li>
        </div>
      </ul>
    </motion.nav>
  );
};

export default MobileNavbar;
