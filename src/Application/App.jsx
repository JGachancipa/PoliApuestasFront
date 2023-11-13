import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PAGES } from "./constants/Constants";
import Header from "./General/components/Header";
import { ChampionShip } from "./Sports/components/ChampionShip";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path={PAGES.HOME} />
          <Route path={PAGES.SPORTS} />
          <Route path={PAGES.CHAMPIONSHIP} Component={ChampionShip} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;