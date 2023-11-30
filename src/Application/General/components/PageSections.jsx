import React from "react";
import { Link } from "react-router-dom";

import { PAGES } from "../../constants/Constants";

/**
 * Links del Menu
 * @returns {HTMLElement}
 */
const PageSections = () => {
    return (
        <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                <li className="nav-item">
                    <Link to={PAGES.HOME} className="nav-link">
                        INICIO
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <a
                        href={PAGES.CHAMPIONSHIP}
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        {" "}
                        CAMPEONATO{" "}
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <Link
                                to={`${PAGES.CHAMPIONSHIP}add`}
                                className="dropdown-item"
                            >
                                CAMPEONATO
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={PAGES.CHAMPIONSHIP_TABLE}
                                className="dropdown-item"
                            >
                                LISTA CAMPEONATOS
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a
                        href={PAGES.ATHLETICS}
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        DEPORTES
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <Link
                                to={`${PAGES.ATHLETICS}add`}
                                className="dropdown-item"
                            >
                                DEPORTES
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={PAGES.ATHLETICSTABLE}
                                className="dropdown-item"
                            >
                                LISTA DE DEPORTES
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        PREMIOS
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <Link
                                to={`${PAGES.PRIZE}add`}
                                className="dropdown-item"
                            >
                                PREMIOS
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={PAGES.PRIZETABLE}
                                className="dropdown-item"
                            >
                                LISTA PREMIOS
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a
                        href={PAGES.RAFFLE_RESULTS}
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        {" "}
                        PUBLICACIÓN DE PREMIOS{" "}
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <Link
                                to={PAGES.RAFFLE_RESULTS_TABLE}
                                className="dropdown-item"
                            >
                                RIFAS
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={PAGES.BET_RESULTS_TABLE}
                                className="dropdown-item"
                            >
                                APUESTAS
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a
                        href={PAGES.SALES_RESULTS}
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        {" "}
                        RESULTADO DE VENTAS{" "}
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <Link
                                to={PAGES.SALES_RESULTS_TABLE}
                                className="dropdown-item"
                            >
                                VENTAS
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default PageSections;
