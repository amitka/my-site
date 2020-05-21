import React, { useContext } from "react";
import { AppContext } from "../../hooks/useAppContext";
import Header from "../../components/Header";
import Pic from "../../assets/pic.png";
import Arrow from "../../assets/arrow.png";

const App = () => {
  //const [state] = useContext(AppContext);
  return (
    <main className="App">
      <header>
        <div className="header-content">
          <img src={Pic} alt="amitka" />
          <div className="header-title">
            <span>UX</span>
            <img src={Arrow} alt="" />
            <span>Design</span>
            <img src={Arrow} alt="" />
            <span>Code</span>
          </div>
          <div className="toggle-theme">togg</div>
        </div>
      </header>
      <section>
        <div className="page-content">
          <div className="thumb-grid">Grid</div>
          <footer>Footer</footer>
        </div>
      </section>
    </main>
  );
};

export default App;
