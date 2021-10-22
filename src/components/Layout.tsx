import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NavToggle from "./NavToggle";
import { Helmet } from "react-helmet";
import { useAnimation } from "framer-motion";

import "./Layout.scss";
import { useWindowSize } from "../hooks/useWindowSize";

interface ILayoutProps {
  pageTitle?: string;
  children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: ILayoutProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const windowSize = useWindowSize();
  const mobileMenuControls = useAnimation();
  const toggleMenu = () => {
    if (menuOpen) {
      mobileMenuControls.start("hidden");
      setMenuOpen(false);
    } else {
      mobileMenuControls.start("visible");
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    if (windowSize.width > 600) {
      mobileMenuControls.start("visible");
    } else {
      mobileMenuControls.start("hidden");
      setMenuOpen(false);
    }
  }, [windowSize.width]);

  return (
    <div className="layout__container">
      <Helmet title={`Victor Joh${pageTitle ? ` - ${pageTitle}` : ""}`} />
      <NavToggle toggleMenu={toggleMenu} />
      <Navbar mobileMenuControls={mobileMenuControls} toggleMenu={toggleMenu} />
      <div className="children__container">
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;
