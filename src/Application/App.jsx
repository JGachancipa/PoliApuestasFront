import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PAGES } from "./constants/Constants";
import Header from "./General/container/Header";
import APISContextProvider from "../Util/context/APISContextProvider";
import ChampionshipFormContainer from "./Sports/containers/ChampionshipFormContainer";
import ChampionshipListContainer from "./Sports/containers/ChampionshipListContainer";

const App = () => {
  return (
    <BrowserRouter>
      <APISContextProvider>
        <Header />
        <div className="container mt-4">
          <Routes>
            <Route path={PAGES.HOME} />
            <Route path={PAGES.SPORTS} />
            <Route path={PAGES.CHAMPIONSHIPFORM} Component={ChampionshipFormContainer} />
            <Route path={PAGES.CHAMPIONSHIPTABLE} Component={ChampionshipListContainer} />
          </Routes>
        </div>
      </APISContextProvider>
    </BrowserRouter>
  );
};

export default App;