import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./General/container/Home";
import { PAGES } from "./constants/Constants";
import Header from "./General/container/Header";
import APISContextProvider from "../Util/context/APISContextProvider";
import ChampionshipFormContainer from "./Sports/containers/ChampionshipFormContainer";
import ChampionshipListContainer from "./Sports/containers/ChampionshipListContainer";
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
            <Route path={PAGES.HOME} Component={Home}/>
            <Route path={PAGES.ERROR} Component={Errors}/>
            <Route path={`${PAGES.CHAMPIONSHIP}:id`} Component={ChampionshipFormContainer} />
            <Route path={PAGES.CHAMPIONSHIP_TABLE} Component={ChampionshipListContainer} />
          </Routes>
        </div>
      </APISContextProvider>
    </BrowserRouter>
  );
};

export default App;