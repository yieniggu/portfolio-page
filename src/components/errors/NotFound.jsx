import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export const NotFound = () => {
  const [showInput, setShowInput] = useState(false);
  const { language } = useSelector((state) => state.ui);

  const navigate = useNavigate();

  const keyPressed = (e) => {
    navigate("/");
  };

  useEffect(() => {
    setTimeout(() => {
      setShowInput(true);
      document.addEventListener("keydown", keyPressed, true);

      document.addEventListener("click", keyPressed, true);
    }, 500);
  }, []);

  return (
    <div className="font-code-75 text-sm text-matrix-green bg-black w-full h-full flex flex-col gap-2">
      <div className="flex flex-row gap-2">
        <h1 className="text-cyan-400">source$</h1>
        <span>
          {language === "es" ? (
            <TypeAnimation
              sequence={[
                " el sujeto 404 no se ha encontrado, puede haber escapado, peligro...",
              ]}
              speed={90}
              repeat={0}
              cursor={false}
            />
          ) : (
            <TypeAnimation
              sequence={[
                " subject 404 not found, may have escaped, be aware...",
              ]}
              speed={90}
              repeat={0}
              cursor={false}
            />
          )}
        </span>
      </div>
      {showInput && (
        <div className="flex flex-row gap-2">
          <h1 className="text-cyan-400">source$</h1>
          <span>
            {language === "es" ? (
              <TypeAnimation
                sequence={[" presiona cualquier tecla para estar a salvo"]}
                speed={90}
                repeat={0}
                cursor={true}
              />
            ) : (
              <TypeAnimation
                sequence={[" press any key to be safe"]}
                speed={90}
                repeat={0}
                cursor={true}
              />
            )}
          </span>
        </div>
      )}
    </div>
  );
};
