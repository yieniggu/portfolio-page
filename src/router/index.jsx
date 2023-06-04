import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Subject } from "../pages/Subject/Subject";

export const AppRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/subjects/:id", element: <Subject /> },
]);
