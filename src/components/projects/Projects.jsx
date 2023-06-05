import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import Link from "../../assets/images/link.png";
import Github from "../../assets/images/github.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Projects = ({ projects, modal = false }) => {
  const { language } = useSelector((state) => state.ui);

  return (
    <div className="relative">
      <h2 className="absolute top-1/2 md:top-2/3 py-0 right-0 font-cyber text-matrix-light-green text-xl z-50 font-bold tracking-widest px-2 bg-matrix-dark-green hover:opacity-10">
        {language === "es" ? "DESLIZAR" : "SWIPE"}
      </h2>
      <Slider {...settings}>
        {projects.map((project) => (
          <div className="flex flex-col w-3/4 md:text-md lg:text-lg text-xs">
            <div className="relative flex h-5/6">
              <img
                className="-z-50 blur-sm h-72 md:h-96 w-full"
                src={project?.cover}
              />

              {project.media.type === "video" ? (
                <video
                  className={`absolute z-50 top-10 rounded-lg mx-auto  w-full md:w-fit border-matrix-dark-green shadow-lg shadow-matrix-green h-4/5 ${
                    modal
                      ? "3xl:left-80 2xl:left-60 xl:left-56 lg:left-28 md:left-3"
                      : "md:left-20 lg:left-48 xl:left-20 2xl:left-28 3xl:left-52"
                  }`}
                  src={project?.media?.src}
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <img
                  className={`absolute w-full ${
                    modal
                      ? "top-10 md:w-11/12 md:left-6 lg:w-4/5 lg:h-4/5 lg:left-20 xl:w-3/5 xl:left-48"
                      : "lg:w-4/5 3xl:w-3/5 lg:left-20 3xl:left-1/4 lg:h-5/6  top-20 md:top-10 md:w-4/5 md:left-20 lg:top-6"
                  }   sm:top-8 mx-auto rounded-lg shadow-lg shadow-matrix-green  h-fit w-full  `}
                  src={project?.media?.src}
                />
              )}

              <div className="flex flex-row justify-end gap-4 absolute z-50 bottom-0 rounded-md right-0 bg-gray-600 bg-opacity-90 p-2 mb-2 rounded-r-none">
                {project.web && (
                  <a
                    className="cursor-pointer hover:-translate-x-1 transition duration-300"
                    href={project.web}
                    target="_blank"
                  >
                    <img className="w-8 h-8 rounded-full" src={Link} />
                  </a>
                )}
                {project.repository && (
                  <a
                    className="cursor-pointer hover:-translate-x-1 transition duration-300"
                    href={project.repository}
                    target="_blank"
                  >
                    <img className="w-10 h-10 rounded-full" src={Github} />
                  </a>
                )}
              </div>
            </div>
            <div className="p-4 bg-gray-700 bg-opacity-90 border-t-2 flex flex-col">
              <h2 className="font-code-mono text-cyan-300">
                {language === "es" ? "desconocido" : "unknown"}@source:$~
                <span className="text-matrix-light-green">
                  /projects/{project.name[language]}/descrip
                  {language === "es" ? "c" : "t"}ion.txt
                </span>
              </h2>
              <h3 className="text-gray-200 px-2 font-code-mono text-justify">
                {"> "}
                {project.description[language]}
              </h3>
              <h3 className="text-gray-200 px-2 font-code-mono ml-auto">
                <span className="text-purple-400">
                  {"> "}
                  {language === "es" ? "autores" : "authors"}:{" "}
                </span>
                {project.authors.join(", ")}
              </h3>
              <div className="grid sm:grid-cols-4 grid-cols-3  md:flex md:flex-row mt-4 gap-2">
                {project.stack.map((tech) => (
                  <h3 className="font-matrix px-2 rounded-full bg-gray-600 bg-opacity-80 text-matrix-dark-green w-fit">
                    {tech}
                  </h3>
                ))}
              </div>
              <div
                className={
                  "grid grid-cols-2 md:grid-cols-5 lg:flex lg:flex-row mt-4 gap-2 lg:w-fit justify-start "
                }
              >
                {project.tags.map((tag) => (
                  <h3 className="font-matrix rounded-full w-full text-center px-4 bg-gray-600 bg-opacity-80 text-matrix-green my-auto text-xs">
                    {tag}
                  </h3>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
