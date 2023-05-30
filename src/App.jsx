import React from "react";
import { AppRouter } from "./router";
import { RouterProvider } from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <RouterProvider router={AppRouter} />
    </div>
  );
};
