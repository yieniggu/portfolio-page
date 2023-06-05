import React from "react";
import { Skills } from "./Skills";
import { useSelector } from "react-redux";

export const Info = ({ subject }) => {
  const { language } = useSelector((state) => state.ui);

  return (
    <div className="flex flex-col py-2 gap-4 w-full rounded-md mx-auto font-matrix text-lg">
      <div className="flex flex-col md:flex-row xl:flex-col">
        <div className="relative">
          <img
            className="w-3/4 md:w-1/2 xl:w-3/4 mx-auto rounded-3xl transition duration-300 glitch shadow-lg shadow-matrix-dark-green"
            src={subject?.imageUrl}
          />
          <h1 className="absolute w-full md:w-fit xl:w-full px-10 xl:left-0 lg:left-28 md:left-20 rounded-md bg-opacity-90 py-2 top-2/3 font-cyber text-sm sm:text-xl md:text-sm xl:text-xl -rotate-6 bg-red-800 text-red-500 text-center font-bold">
            {language === "es"
              ? "evitar - riesgo inminente"
              : "high treat - avoid if possible"}
          </h1>
        </div>
        <div className="flex flex-col w-full pr-1 xl:w-fit mt-2 xl:px-6 3xl:mt-8 gap-2 mx-auto">
          {" "}
          <h1 className=" text-cyan-400 text-center lg:text-lg">
            {language === "es" ? "conocido como" : "commonly known as"}{" "}
            {subject?.info?.name}
          </h1>
          <h1 className="text-cyan-400 text-center">
            {" "}
            aka{" "}
            {language === "es"
              ? subject.profile.handler.es
              : subject.profile.handler.en}
          </h1>
          <h2 className="text-matrix-light-green text-sm sm:text-lg md:text-sm lg:text-lg md:mx-0 sm:mx-auto text-center md:text-left">
            {" "}
            {language === "es"
              ? "visto por ultima vez en"
              : "last seen in"}{" "}
            {subject.info.location.city}, {subject.info.location.country}
          </h2>
          <h2 className="text-matrix-light-green text-sm sm:text-lg md:text-sm md:mx-0 lg:text-lg mx-auto">
            {language === "es"
              ? "buscalo en la matrix por"
              : "find it in the matrix as"}{" "}
            {subject.info.nickname}
          </h2>
        </div>
      </div>

      <div className="w-full xl:w-fit 3xl:w-3/4 mx-auto">
        <Skills subject={subject} />
      </div>
    </div>
  );
};
