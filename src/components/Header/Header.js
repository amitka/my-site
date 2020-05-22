import React from "react";
import { Link } from "react-router-dom";
import Pic from "../../assets/pic.png";
import Arrow from "../../assets/arrow.png";

export const Header = () => {
  return (
    <header>
      <div className="header-content">
        <Link to="/">
          <img src={Pic} alt="amitka" />
          <div className="header-title">
            <span>UX</span>
            <img src={Arrow} alt="" />
            <span>Design</span>
            <img src={Arrow} alt="" />
            <span>Code</span>
          </div>
        </Link>
        <div className="toggle-theme">
          <div className="dot"></div>
          <span>Dark</span>
        </div>
      </div>
    </header>
  );
};
