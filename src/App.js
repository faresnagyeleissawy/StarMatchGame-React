import React, { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import WitherAPIAPP from "./WetherAPi/WitherAPIAPP";
import Game from "./Game/Game";
import HeaderHandel from "./WetherAPi/header";
import CardDetails from "./WetherAPi/CardDetails";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HeaderHandel />}>
        <Route index element={<WitherAPIAPP />} />
        <Route element={<Game />} path="/Game" />
        <Route element={<CardDetails />} path="posts/:id" />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
export default App;
