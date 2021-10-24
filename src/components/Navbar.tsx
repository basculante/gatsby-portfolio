import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav className="menu">
      <ul>
        <Link to="/">
          <li className="menu__item" id="home-menu">
            <div className="menu__item-link">
              <sup>01</sup>Home
            </div>
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
        </Link>
        <Link to="/work">
          <li className="menu__item" id="work-menu">
            <div className="menu__item-link">
              <sup>02</sup>Work
            </div>
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
        </Link>
        <Link to="/resume">
          <li className="menu__item" id="resume-menu">
            <div className="menu__item-link">
              <sup>03</sup>Resume
            </div>
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
        </Link>
        <a href="mailto:wantechjoh@gmail.com">
          <li className="menu__item" id="contact-menu">
            <div className="menu__item-link">
              <sup>04</sup>Email
            </div>
            <div className="marquee">
              <div className="marquee__inner-wrap">
                <div className="marquee__inner email" aria-hidden="true">
                  {Array(8)
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
        </a>
        <div className="menu__item-socials">
          <a href="https://github.com/basculante">
            <li className="menu__item" id="contact-menu">
              <div className="menu__item-link">GitHub</div>
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
          </a>
          <a href="https://www.linkedin.com/in/victor-wan-teak-joh-924203ba/">
            <li className="menu__item" id="contact-menu">
              <div className="menu__item-link">LinkedIn</div>
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
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
