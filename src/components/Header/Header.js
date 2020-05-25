import React, { useContext } from "react";
import { AppContext } from "../../hooks/useAppContext";
import { Link } from "react-router-dom";
import Pic from "../../assets/pic.png";
//import Arrow from "../../assets/arrow.png";
import * as Icons from "../../Icons";

export const Header = () => {
  const [state, setState] = useContext(AppContext);
  return (
    <header>
      <nav className="header-content">
        <div className="header-data">
          <Link to="/">
            <img src={Pic} alt="amitka" />
            <div className="header-title">
              <span>UX</span>
              <span className="arrow">
                <Icons.ArrowRight />
              </span>
              <span>Design</span>
              <span className="arrow">
                <Icons.ArrowRight />
              </span>
              <span>Code</span>
            </div>
          </Link>
        </div>
        <div
          className="toggle-theme"
          onClick={() => setState({ ...state, theme: !state.theme })}
        >
          <div className="dot">
            <div className="dot-color">
              <div className="dot-icon">
                {state.theme ? Icons.Moon : Icons.Sun}
              </div>
            </div>
          </div>
          <span>{state.theme ? "Dark" : "Light"}</span>
        </div>
      </nav>
    </header>
  );
};
