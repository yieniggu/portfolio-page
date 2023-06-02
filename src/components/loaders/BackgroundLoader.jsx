import React from "react";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";

export const BackgroundLoader = () => {
  const { loadingSubjects } = useSelector((state) => state.subject);

  return (
    <div className="font-code-75 text-sm text-matrix-green bg-black w-full h-full flex flex-col gap-2">
      {
        <div className="flex flex-row gap-2">
          <h1 className="text-cyan-400">source$</h1>
          <span>
            <TypeAnimation
              sequence={[" fetching subjects info..."]}
              speed={90}
              repeat={0}
            />
          </span>
        </div>
      }

      {!loadingSubjects && (
        <div className="flex flex-row gap-2">
          <h1 className="text-cyan-400">source$</h1>
          <span className="text-red-500">
            <TypeAnimation sequence={[" done"]} speed={90} repeat={0} />
          </span>
        </div>
      )}
    </div>
  );
};
