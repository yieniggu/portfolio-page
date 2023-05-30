import React, { useState } from "react";
import { Layout } from "../../layout";
import GreenCodeMatrix from "../../assets/videos/green-code-matrix2.mp4";
import Cameras from "../../assets/images/cameras.jpg";
import OpenFolder from "../../assets/images/open-folder2.png";
import ClosedFolder from "../../assets/images/closed-folder2.png";
import Disk from "../../assets/images/diskette2.png";

export const Home = () => {
  const [proyectsToggled, setProyectsToggled] = useState(false);

  return (
    <div className="max-w-screen overflow-hidden">
      <Layout>
        <video className="w-screen" src={GreenCodeMatrix} autoPlay loop muted />
        <div className="absolute flex flex-col grow-0 overflow-hidden">
          <section className="rounded-lg border-2 mx-20 mt-20 flex flex-col bg-gray-700 bg-opacity-90 max-h-fit">
            <div className="flex flex-row bg-gray-400 h-10 rounded-md rounded-b-none">
              <div className="flex flex-row justify-between mr-auto my-auto px-2 gap-2">
                <div className="rounded-full bg-red-500 h-4 w-4"></div>
                <div className="rounded-full bg-yellow-500 h-4 w-4"></div>
                <div className="rounded-full bg-green-500 h-4 w-4"></div>
              </div>
              <div className="text-center mr-auto my-auto font-code-mono text-lg text-gray-900">
                welcome@Team: ~/
              </div>
            </div>
            <div className="flex flex-row justify-between  py-10">
              <div className="mx-auto w-1/2">
                <h1 className="text-4xl text-center font-code-75 leading-relaxed tracking-tight text-matrix-light-green">
                  NOS PROGRAMARON PARA SER{" "}
                  <span className="text-matrix-green">
                    {" "}
                    INGENIEROS DE SOFTWARE
                  </span>
                </h1>
                <h2 className="text-center text-matrix-dark-green text-2xl mt-20 font-code-75 tracking-tight">
                  {">"}DESCONOCIDO$ QUE DECISION TOMARAS?
                  <span className="animate-ping transition duration-75">|</span>
                </h2>
                <div className="flex flex-row justify-around mt-10">
                  <div
                    className="flex flex-col group cursor-pointer hover:-translate-y-4 transition duration-300 mx-auto my-auto"
                    onClick={() => setProyectsToggled(!proyectsToggled)}
                  >
                    <div className="relative">
                      <img
                        className="shadow-md shadow-matrix-dark-green rounded-md"
                        src={proyectsToggled ? OpenFolder : ClosedFolder}
                        width={proyectsToggled ? 130 : 120}
                      />

                      <h3
                        className={`absolute top-1/2 w-full text-center text-xl font-cyber text-gray-300 -rotate-6 bg-black ${
                          proyectsToggled && "hidden"
                        }`}
                      >
                        Projects
                      </h3>
                    </div>
                  </div>
                  <div className="relative cursor-pointer hover:-translate-y-4 transition duration-300 mx-auto">
                    <img
                      className="my-auto mx-auto shadow-md rounded-md shadow-matrix-dark-green"
                      src={Disk}
                      width={140}
                    />

                    <h3 className="absolute top-10 text-md text-center w-full border-2 border-red-700 font-cyber text-red-700 bg-red-500">
                      CONFIDENTIAL
                    </h3>
                    <h3 className="absolute top-20 w-full text-center text-xl font-cyber text-gray-300 -rotate-6 bg-black px-4">
                      SubjectX
                    </h3>
                  </div>
                  <div className="relative cursor-pointer hover:-translate-y-4 transition duration-300 mx-auto">
                    <img
                      className="my-auto mx-auto shadow-md rounded-md shadow-matrix-dark-green"
                      src={Disk}
                      width={140}
                    />

                    <h3 className="absolute top-10 text-md text-center w-full font-cyber border-2 border-red-700 text-red-700 bg-red-500">
                      CONFIDENTIAL
                    </h3>
                    <h3 className="absolute top-20 w-full text-center text-xl font-cyber text-gray-300 -rotate-6 bg-black px-4">
                      SubjectY
                    </h3>
                  </div>
                </div>
              </div>
              <div className="relative w-1/2">
                <img
                  className="w-1/2 mx-auto rounded-md backdrop-blur-lg shadow-xl contrast-150 blur-sm cursor-pointer hover:ring-2 transition duration-300 ring-matrix-light-green"
                  src={Cameras}
                />
                <h2 className="relative bottom-10 left-[270px] text-xl font-matrix text-matrix-light-green">
                  TENEMOS UN MENSAJE PARA TI
                </h2>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};
