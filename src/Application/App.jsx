import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./General/container/Home";
import { PAGES } from "./constants/Constants";
import Header from "./General/container/Header";
import APISContextProvider from "../Util/context/APISContextProvider";
import ChampionshipFormContainer from "./Sports/containers/ChampionshipFormContainer";
import ChampionshipListContainer from "./Sports/containers/ChampionshipListContainer";
<<<<<<< HEAD
import PrizeFormContainer from "./Sports/containers/PrizeFormContainer";
//import PrizeListContainer from "./Sports/containers/PrizeListContainer";
=======
import Errors from "./General/container/Errors";
>>>>>>> f778f337dec91db536663398d70b449a6a0032f5

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
<<<<<<< HEAD
            <Route path={PAGES.HOME} />
            <Route path={PAGES.SPORTS} />
            <Route path={PAGES.CHAMPIONSHIPFORM} Component={ChampionshipFormContainer} />
            <Route path={PAGES.CHAMPIONSHIPTABLE} Component={ChampionshipListContainer} />
            <Route path={PAGES.PRIZEFORM} Component={PrizeFormContainer} />

=======
            <Route path={PAGES.HOME} Component={Home}/>
            <Route path={PAGES.ERROR} Component={Errors}/>
            <Route path={`${PAGES.CHAMPIONSHIP}:id`} Component={ChampionshipFormContainer} />
            <Route path={PAGES.CHAMPIONSHIP_TABLE} Component={ChampionshipListContainer} />
>>>>>>> f778f337dec91db536663398d70b449a6a0032f5
          </Routes>
        </div>
      </APISContextProvider>
    </BrowserRouter>
  );
};

export default App;