import React from "react";

interface INavToggleProps {
  toggleMenu: () => void;
}

const NavToggle = ({ toggleMenu }: INavToggleProps) => {
  return (
    <div className="mobile-menu-toggle" onClick={() => toggleMenu()}>
      <div className="mobile-menu-icon">
        <div className="mobile-black-bar" />
        <div className="mobile-black-bar" />
        <div className="mobile-black-bar" />
      </div>
    </div>
  );
};

export default NavToggle;
