import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { skills, socialss } from "./skills";
import { useSelector } from "react-redux";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Skills = ({ subject }) => {
  const { language } = useSelector((state) => state.ui);

  return (
    <div className="font-matrix text-center grow-0 mx-auto px-10">
      <Slider className="xl:w-96 mx-auto text-center pl-2 px-3" {...settings}>
        <div className="flex flex-col mx-auto">
          <hr className="h-1 border-0 bg-purple-300 w-full"></hr>
          <h2 className="text-purple-300 sm:text-center my-4">
            {language === "es"
              ? "habilidades principales"
              : "main known skills"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 w-full text-center gap-4 mx-auto">
            {subject.devSkills.map((devSkill) => {
              const foundSkill = skills.find((skill) => skill.id === devSkill);

              return (
                <div className="group flex relative">
                  <img
                    className="rounded-full w-10 h-10"
                    src={foundSkill.logo}
                  />
                  <span
                    class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute
     -translate-x-1/2 translate-y-0 opacity-0 m-4 mx-auto"
                  >
                    {devSkill}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col my-auto">
          <hr className="h-1 border-0 bg-matrix-light-green"></hr>
          <h2 className="text-matrix-light-green my-4">
            {" "}
            {language === "es" ? "otras habilidades" : "other known skills"}
          </h2>

          <div className="grid grid-cols-5 w-full text-center gap-4">
            {subject.otherSkills.map((otherSkill) => {
              const foundSkill = skills.find(
                (skill) => skill.id === otherSkill
              );

              return (
                <div className="group flex relative">
                  <img
                    className={`rounded-full w-10 h-10 my-auto ${
                      !["notion", "scrum"].includes(otherSkill) && "w-14 h-6"
                    }`}
                    src={foundSkill?.logo}
                  />
                  <span
                    class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute
     -translate-x-1/2 translate-y-0 opacity-0 m-4 mx-auo"
                  >
                    {otherSkill}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col">
          <hr className="h-1 border-0 bg-purple-300"></hr>
          <h2 className="text-center text-purple-300 my-4">
            {language === "es"
              ? "ubicaciones probables"
              : "most likely to be in"}
          </h2>
          <div className="grid grid-cols-5 w-full text-center gap-4">
            {Object.keys(subject.socials).map((social) => {
              const foundSocial = socialss.find(
                (sociall) => sociall.id === social
              );

              return (
                <a
                  className="group flex relative cursor-pointer"
                  href={subject.socials[social]}
                  target="_blank"
                >
                  <img
                    className="rounded-full w-10 h-10"
                    src={foundSocial?.logo}
                  />
                  <span
                    class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute
       -translate-x-1/2 translate-y-0 opacity-0 m-4 mx-auto"
                  >
                    {social}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </Slider>
    </div>
  );
};
