import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Subject } from "../pages/Subject/Subject";
import { NotFound } from "../components/errors/NotFound";

export const AppRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/subjects/:id", element: <Subject /> },
  { path: "/*", element: <NotFound /> },
]);
