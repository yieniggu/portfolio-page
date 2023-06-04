import React from "react";
import { useSelector } from "react-redux";

export const Description = ({ subject }) => {
  const { language } = useSelector((state) => state.ui);
  return (
    <div className="font-code-mono w-full py-2 h-full md:text-md lg:text-lg text-sm">
      <div className="flex flex-col md:flex-row gap-2 px-4 w-full h-full ">
        <h2 className="text-cyan-300">
          {language === "es" ? "desconocido" : "unknown"}@source:$~{" "}
        </h2>
        <span className="text-matrix-green h-full">
          {language === "es"
            ? subject?.profile.description.es
            : subject?.profile.description.en}
          {language == "en" && (
            <p className="invisible">es conocido por desarrollar apps web,</p>
          )}
        </span>
      </div>
    </div>
  );
};
