import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "../../Icons";

export const HomePage = () => {
  return (
    <section className="page-content">
      <div className="center-column">
        <div className="thumbs-grid">
          <ul className="thumbs-list">
            <li className="grid-item">
              <Link to="/watch-tower">
                <div className="item-back watch-tower">
                  <span className="item-title">Watch Tower</span>
                </div>
              </Link>
            </li>
            <li className="grid-item empthy" />
            <li className="grid-item empthy" />
            <li className="grid-item empthy" />
            <li className="grid-item empthy" />
            <li className="grid-item empthy" />
          </ul>
        </div>
        <footer>
          <div className="social-links">
            <a href="https://github.com/amitka">{Icons.GitHub}</a>
            <a href="https://www.linkedin.com/in/amitkaplinsky/">
              {Icons.LInkedIn}
            </a>
            <a href="https://dribbble.com/Amitka">{Icons.Dribbble}</a>
          </div>
          <span>Amit Kaplinsky © 2020 All Rights Reserved</span>
        </footer>
      </div>
    </section>
  );
};
