import React from "react";
import PageSections from "../components/PageSections";
import "../css/Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary d-block">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>

            <a className="navbar-brand ps-4 pt-3" href="/">
              POLIAPUESTAS
            </a>
          </button>
          <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"> POLIAPUESTAS </h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <PageSections />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;