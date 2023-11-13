import React from "react";
import { Link } from "react-router-dom";

import { PAGES } from "../../constants/Constants";

const PageSections = () => {
  return (
    <div className="offcanvas-body">
      <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
        <li className="nav-item">
          <Link to={PAGES.HOME} className="nav-link">INICIO</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
            aria-expanded="false"> DEPORTES </a>
          <ul className="dropdown-menu">
            <li>
              <Link to={PAGES.CHAMPIONSHIP} className="dropdown-item">CAMPEONATO</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default PageSections;