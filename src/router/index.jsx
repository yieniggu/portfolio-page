import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";

export const AppRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
]);
