import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/UI/UISlice";
import { TypeAnimation } from "react-type-animation";

export const Subject = () => {
  const dispatch = useDispatch();

  const [showTexts, setShowTexts] = useState({
    first: true,
    second: false,
    third: false,
    fourth: false,
  });

  const { first, second, third, fourth } = showTexts;

  const onModalClose = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    setTimeout(() => {
      setShowTexts((showTexts) => ({
        ...showTexts,
        second: true,
      }));

      setTimeout(() => {
        setShowTexts((showTexts) => ({
          ...showTexts,
          third: true,
        }));

        setTimeout(() => {
          setShowTexts((showTexts) => ({
            ...showTexts,
            fourth: true,
          }));
        }, 3000);
      }, 2100);
    }, 1400);
  }, []);

  return (
    <div className="px-4 py-4 text-matrix-green font-code-mono">
      {first && (
        <div className="flex flex-row gap-2">
          <h3 className="text-cyan-400">desconocido$</h3>
          <TypeAnimation
            sequence={["estas a punto de visitar un documento clasificado"]}
            repeat={0}
            speed={80}
            cursor={false}
          />
        </div>
      )}

      {second && (
        <div className="flex flex-row gap-2">
          <h3 className="text-cyan-400">desconocido$</h3>
          <TypeAnimation
            sequence={[
              "el perfil que se te mostrara a continuacion corresponde a una de las mentes mas brillantes de la matrix.",
            ]}
            speed={80}
            repeat={0}
            cursor={false}
          />
        </div>
      )}

      {third && (
        <div className="flex flex-row gap-2">
          <h3 className="text-cyan-400">desconocido$</h3>
          <TypeAnimation
            sequence={[
              "es probable que muchos esten esperando que lo veas y sepan de ti. Quizas nunca vuelvas a ser el mismo. Continua bajo tu propio riesgo...",
            ]}
            speed={80}
            repeat={0}
            cursor={false}
          />
        </div>
      )}

      {fourth && (
        <div className="flex flex-row gap-2">
          <h3 className="text-cyan-400">desconocido$</h3>
          <TypeAnimation
            sequence={["deseas continuar?"]}
            speed={50}
            repeat={0}
            cursor={true}
          />
        </div>
      )}

      <div className="flex flex-row font-cyber justify-center gap-4 text-lg mt-10">
        <button
          className="rounded-full text-purple-500 bg-blue-700  hover:ring-2 ring-blue-900 px-4 py-2 hover:text-purple-300 transition duration-300 shadow-sm shadow-gray-300"
          onClick={onModalClose}
        >
          prefiero pasar...
        </button>
        <button className="rounded-full bg-red-700 px-4 py-2 text-gray-400 hover:ring-2 ring-red-900 hover:text-gray-100 transition duration-300 shadow-sm shadow-gray-300">
          llevame con el
        </button>
      </div>
    </div>
  );
};
