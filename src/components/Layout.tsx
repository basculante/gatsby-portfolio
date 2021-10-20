import React, { ReactChildren } from "react";
import Navbar from "./Navbar";
import "./Layout.scss";

interface ILayoutProps {
  children: ReactChildren;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="layout__container">
      <Navbar />
      <div className="children__container">{children}</div>
    </div>
  );
};

export default Layout;
