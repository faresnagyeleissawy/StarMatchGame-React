import React, { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import WitherAPIAPP from "./WetherAPi/WitherAPIAPP";
import Game from "./Game/Game";
import HeaderHandel from "./Game/header";
import CardDetails from "./WetherAPi/CardDetails";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HeaderHandel />}>
        <Route index element={<Game />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
export default App;
