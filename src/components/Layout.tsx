import React, { useState } from "react";
import NavToggle from "./NavToggle";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import Footer from "./Footer";

import { Helmet } from "react-helmet";
import { useAnimation } from "framer-motion";

interface ILayoutProps {
  pageTitle?: string;
  children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: ILayoutProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
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

  return (
    <div className="layout__container">
      <Helmet title={`Victor Joh${pageTitle ? ` - ${pageTitle}` : ""}`} />
      <NavToggle toggleMenu={toggleMenu} />
      <Navbar />
      <MobileNavbar
        mobileMenuControls={mobileMenuControls}
        toggleMenu={toggleMenu}
      />
      <div className="children__container">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
