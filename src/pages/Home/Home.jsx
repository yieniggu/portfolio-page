import React, { useState } from "react";
import { Layout } from "../../layout";
import GreenCodeMatrix from "../../assets/videos/green-code-matrix2.mp4";
import Cameras from "../../assets/images/cameras.jpg";
import OpenFolder from "../../assets/images/open-folder2.png";
import ClosedFolder from "../../assets/images/closed-folder2.png";
import Disk from "../../assets/images/diskette2.png";
import { Modal } from "../../components/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/slices/UI/UISlice";
import { TypeAnimation } from "react-type-animation";

import "animate.css";
import { Helmet } from "react-helmet";

export const Home = () => {
  const dispatch = useDispatch();
  const { modalOpen, modalType } = useSelector((state) => state.ui);
  const { language } = useSelector((state) => state.ui);
  const { subjects } = useSelector((state) => state.subject);

  const toggleProjects = () => {
    !modalOpen && dispatch(openModal("projects"));

    modalOpen && dispatch(closeModal());
  };

  const toggleSubject = (subject) => {
    !modalOpen && dispatch(openModal(subject));
  };

  return (
    <div className="max-w-screen overflow-hidden">
      <Layout>
        <Helmet>
          <title>
            {language === "es" ? "desconocido" : "unknown"}@source:$ ~/
          </title>
        </Helmet>
        <Modal />
        <video
          className="w-screen min-h-screen grow-0  object-cover"
          src={GreenCodeMatrix}
          autoPlay
          loop
          muted
        />
        <div className="absolute flex flex-col overflow-hidden w-full animate__animated animate__zoomInUp animate__faster">
          <section className="rounded-lg border-2 mx-auto mt-20 flex flex-col bg-gray-700 w-11/12 bg-opacity-90 max-h-fit">
            <div className="flex flex-row bg-gray-400 h-10 rounded-md rounded-b-none">
              <div className="flex flex-row justify-between mr-auto my-auto px-2 gap-2">
                <div className="rounded-full bg-red-500 h-4 w-4"></div>
                <div className="rounded-full bg-yellow-500 h-4 w-4"></div>
                <div className="rounded-full bg-green-500 h-4 w-4"></div>
              </div>
              <div className="text-center mr-auto my-auto font-code-mono text-lg text-gray-900 hidden md:flex">
                {language === "es" ? "desconocido" : "unkown"}@source: ~/
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between  py-10">
              <div className="flex flex-col gap-2 mx-auto lg:w-1/2">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-xl 2xl:text-3xl 3xl:text-4xl text-center font-code-75 leading-relaxed tracking-tight text-matrix-light-green px-1">
                  {language === "es"
                    ? "NOS PROGRAMARON PARA SER"
                    : "WE WERE PROGRAMMED TO BE"}{" "}
                </h1>
                <span className="text-matrix-green sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-center font-code-75">
                  <TypeAnimation
                    sequence={[
                      "SOFTWARE ENGINEERS",
                      1000,
                      "FULL STACK DEVs",
                      1000,
                      "DATA SCIENTISTS",
                      1000,
                      "WEB3 DEVs",
                      1000,
                      "AI ENGINEERS",
                      1000,
                    ]}
                    speed={10}
                    repeat={Infinity}
                  />
                </span>
                <h2 className="ml-10 3xl:ml-0 3xl:text-center text-matrix-light-green text-lg xl:text-xl 3xl:text-2xl xl:mt-20 mt-10 font-code-75 tracking-tight">
                  <span className="text-cyan-400">
                    {"> "} {language === "es" ? "desconocido $ " : "unknown $ "}
                  </span>{" "}
                  {language === "es"
                    ? "cual es tu proxima jugada?"
                    : "what's your next move?"}
                  <span className="animate-ping transition duration-75">|</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-around mt-10 w-full">
                  <div
                    className="flex flex-col group cursor-pointer hover:-translate-y-4 transition duration-300 mx-auto my-auto animate__animated animate__fadeInUp"
                    onClick={toggleProjects}
                  >
                    <div className="relative">
                      <img
                        className="shadow-md shadow-matrix-dark-green rounded-md group-hover:shadow-lg group-hover:shadow-matrix-dark-green transition duration-300"
                        src={
                          modalOpen && modalType === "projects"
                            ? OpenFolder
                            : ClosedFolder
                        }
                        width={
                          modalOpen && modalType === "projects" ? 130 : 120
                        }
                      />

                      <h3
                        className={`absolute top-1/2 w-full text-center text-xl font-cyber text-gray-300 -rotate-6 bg-black ${
                          modalOpen && modalType === "projects" && "hidden"
                        }`}
                      >
                        Projects
                      </h3>
                    </div>
                  </div>

                  {subjects.map((subject) => (
                    <div
                      className="relative cursor-pointer hover:-translate-y-4 transition duration-300 mx-auto animate__animated animate__fadeInUp group"
                      onClick={() => toggleSubject(subject.id)}
                    >
                      <img
                        className="w-28 xl:w-36 my-auto mx-auto shadow-md rounded-md group-hover:shadow-lg group-hover:shadow-matrix-dark-green shadow-matrix-dark-green transition duration-300"
                        src={Disk}
                      />

                      <h3 className="absolute top-10 text-md text-center w-full border-2 border-red-700 font-cyber text-red-700 bg-red-500">
                        CONFIDENTIAL
                      </h3>
                      <h3 className="absolute top-20 w-full text-center text-xl font-cyber text-gray-300 -rotate-6 bg-black px-4">
                        {subject.id}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative lg:w-1/2 lg:mt-0 mt-10">
                <img
                  className="w-2/3 3xl:w-1/2 mx-auto rounded-md backdrop-blur-lg shadow-xl contrast-150 blur-sm cursor-pointer hover:ring-2 transition duration-300 ring-matrix-light-green"
                  src={Cameras}
                />
                <h2 className="w-full relative bottom-10 text-center text-xs sm:text-md md:text-xl lg:text-sm lg:text-md xl:text-xl font-matrix text-matrix-light-green">
                  {language === "es"
                    ? "TENEMOS UN MENSAJE PARA TI"
                    : "WE GOT A MESSAGE FOR YOU"}
                </h2>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};
