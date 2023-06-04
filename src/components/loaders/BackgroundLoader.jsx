import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";

export const BackgroundLoader = () => {
  const { loadingSubjects } = useSelector((state) => state.subject);
  const { loadingProjects } = useSelector((state) => state.project);
  const { settingLanguage } = useSelector((state) => state.ui);

  const [showProjects, setShowProjects] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowProjects(true);
      setTimeout(() => {
        setShowLanguage(true);
      }, 200);
    }, 200);
  }, []);

  return (
    <div className="font-code-75 text-sm text-matrix-green bg-black w-full h-full flex flex-col gap-2">
      {loadingSubjects && (
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
      )}
      {loadingProjects && showProjects && (
        <div className="flex flex-row gap-2">
          <h1 className="text-cyan-400">source$</h1>
          <span>
            <TypeAnimation
              sequence={[" fetching projects info..."]}
              speed={90}
              repeat={0}
            />
          </span>
        </div>
      )}
      {settingLanguage && showLanguage && (
        <div className="flex flex-row gap-2">
          <h1 className="text-cyan-400">source$</h1>
          <span>
            <TypeAnimation
              sequence={[" setting language..."]}
              speed={90}
              repeat={0}
            />
          </span>
        </div>
      )}
    </div>
  );
};
