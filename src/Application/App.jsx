import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./General/container/Home";
import { PAGES } from "./constants/Constants";
import Header from "./General/container/Header";
import APISContextProvider from "../Util/context/APISContextProvider";
import ChampionshipFormContainer from "./Sports/containers/ChampionshipFormContainer";
import ChampionshipListContainer from "./Sports/containers/ChampionshipListContainer";
import PrizeFormContainer from "./Prizes/containers/PrizeFormContainer";
import PrizeListContainer from "./Prizes/containers/PrizeListContainer";
import AthleticsFormContainer from "./Sports/containers/AthleticsFormContainer";
import AthleticsListContainer from "./Sports/containers/AthleticsListContainer";
import RaffleResultsListContainer from "./AdwardsPublicatons/containers/RaffleResultsListContainer";
import BetResultsListContainer from "./AdwardsPublicatons/containers/BetResultsListContainer";
import SalesResultsListContainer from "./SalesResults/containers/SalesResultsListContainer";
import Errors from "./General/container/Errors";

/**
 * Renderizado Modulos Del Aplicativo
 * @returns {App}
 */
const App = () => {
    return (
        <BrowserRouter>
            <APISContextProvider>
                <Header />
                <div className="container mt-4">
                    <Routes>
                        <Route path={PAGES.HOME} Component={Home} />
                        <Route path={PAGES.ERROR} Component={Errors} />
                        <Route
                            path={`${PAGES.CHAMPIONSHIP}:id`}
                            Component={ChampionshipFormContainer}
                        />
                        <Route
                            path={PAGES.CHAMPIONSHIP_TABLE}
                            Component={ChampionshipListContainer}
                        />
                        <Route
                            path={`${PAGES.PRIZE}:id`}
                            Component={PrizeFormContainer}
                        />
                        <Route
                            path={PAGES.PRIZETABLE}
                            Component={PrizeListContainer}
                        />
                        <Route
                            path={`${PAGES.ATHLETICS}:id`}
                            Component={AthleticsFormContainer}
                        />
                        <Route
                            path={PAGES.ATHLETICSTABLE}
                            Component={AthleticsListContainer}
                        />
                        <Route
                            path={PAGES.RAFFLE_RESULTS_TABLE}
                            Component={RaffleResultsListContainer}
                        />
                        <Route
                            path={PAGES.BET_RESULTS_TABLE}
                            Component={BetResultsListContainer}
                        />
                        <Route
                            path={PAGES.SALES_RESULTS_TABLE}
                            Component={SalesResultsListContainer}
                        />
                    </Routes>
                </div>
            </APISContextProvider>
        </BrowserRouter>
    );
};

export default App;
