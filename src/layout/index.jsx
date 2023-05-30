import React from "react";
import { Header } from "./Header/Header";

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
    </div>
  );
};
