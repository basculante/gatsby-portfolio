import React from "react";

import "./NavToggle.scss";

interface INavToggleProps {
  toggleMenu: () => void;
}

const NavToggle = ({ toggleMenu }: INavToggleProps) => {
  return (
    <div className="menu-toggle" onClick={() => toggleMenu()}>
      <div className="menu-icon">
        <div className="black-bar" />
        <div className="black-bar" />
        <div className="black-bar" />
      </div>
    </div>
  );
};

export default NavToggle;
