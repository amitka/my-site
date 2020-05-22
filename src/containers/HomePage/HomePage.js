import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <section>
      <div className="page-content">
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
            <li className="grid-item empthy" />
            <li className="grid-item empthy" />
            <li className="grid-item empthy" />
          </ul>
        </div>
        <footer>
          <span>Amit Kaplinsky © 2020 All rights reserved</span>
        </footer>
      </div>
    </section>
  );
};
