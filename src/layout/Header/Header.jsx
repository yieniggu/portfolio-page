import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Header.css";
import { selectLanguage } from "../../store/slices/UI/thunks";

import Logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { language } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    language === "es"
      ? dispatch(selectLanguage("en"))
      : dispatch(selectLanguage("es"));
  };

  return (
    <>
      <div
        className="absolute z-50 top-2 left-6 md:left-1/2 cursor-pointer rounded-full"
        onClick={() => navigate("/")}
      >
        <img
          className="w-14 h-14 shadow-md hover:shadow-lg hover:shadow-matrix-light-green shadow-matrix-light-green rounded-full transition duration-300"
          src={Logo}
        />
      </div>
      <div className={`absolute z-50 top-8 right-20 font-bold font-matrix `}>
        <div
          className={`flex flex-row px-8 py-1 my-auto rounded-full border shadow-md hover:shadow-lg cursor-pointer transition duration-300 ${
            language === "es"
              ? "bg-red-900 hover:shadow-red-900 shadow-red-900"
              : "bg-blue-900 hover:shadow-blue-900 shadow-blue-900"
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
    </>
  );
};
