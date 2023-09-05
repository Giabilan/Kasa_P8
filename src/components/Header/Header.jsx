import React from "react";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <div className="containerHeader">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
