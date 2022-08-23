import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./paginas/Home";
import AppHeader from "./componentes/AppHeader.jsx";

const MainRoutes = () => {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </>
  );
};

export default MainRoutes;
