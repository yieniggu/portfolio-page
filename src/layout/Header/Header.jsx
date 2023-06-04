import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Header.css";
import { selectLanguage } from "../../store/slices/UI/thunks";

export const Header = () => {
  const { language } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const toggleLanguage = () => {
    language === "es"
      ? dispatch(selectLanguage("en"))
      : dispatch(selectLanguage("es"));
  };

  return (
    <div className={`absolute z-50 top-8 right-20 font-bold font-matrix `}>
      <div
        className={`flex flex-row px-8 py-1 my-auto rounded-full border cursor-pointer transition duration-300 ${
          language === "es"
            ? "bg-red-900 shadow-red-900"
            : "bg-blue-900 shadow-blue-900"
        }`}
        onClick={toggleLanguage}
      >
        <h2 className={`text-red-500 ${language != "es" && "invisible"}`}>
          es
        </h2>
        <h2 className={`text-blue-500 ${language != "en" && "invisible"}`}>
          en
        </h2>
      </div>
    </div>
  );
};
