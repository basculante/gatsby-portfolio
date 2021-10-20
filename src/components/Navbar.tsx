import React from "react";
import { Link } from "gatsby";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="menu">
      <ul>
        <li className="menu__item" id="home-menu">
          <Link to="/" className="menu__item-link">
            <sup>01</sup>Home
          </Link>
          <div className="marquee">
            <div className="marquee__inner-wrap">
              <div className="marquee__inner" aria-hidden="true">
                {Array(8)
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
          <Link to="/work" className="menu__item-link">
            <sup>02</sup>Work
          </Link>
          <div className="marquee">
            <div className="marquee__inner-wrap">
              <div className="marquee__inner" aria-hidden="true">
                {Array(8)
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
          <a className="menu__item-link">
            <sup>03</sup>Resume
          </a>
          <div className="marquee">
            <div className="marquee__inner-wrap">
              <div className="marquee__inner" aria-hidden="true">
                {Array(8)
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
          <a className="menu__item-link">
            <sup>04</sup>Contact
          </a>
          <div className="marquee">
            <div className="marquee__inner-wrap">
              <div className="marquee__inner" aria-hidden="true">
                {Array(8)
                  .fill("contact")
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
                  {Array(8)
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
                  {Array(8)
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
    </nav>
  );
};

export default Navbar;
