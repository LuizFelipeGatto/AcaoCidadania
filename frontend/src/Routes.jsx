import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./paginas/Home";
import AppHeader from "./componentes/AppHeader.jsx";
import Login from "./paginas/Login";
import Unidade from "./paginas/Unidade";


const MainRoutes = () => {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Unidade />} path="/unidade" />
      </Routes>
    </>
  );
};

export default MainRoutes;
