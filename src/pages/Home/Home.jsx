import React, { useState } from "react";
import { Layout } from "../../layout";
import GreenCodeMatrix from "../../assets/videos/green-code-matrix2.mp4";
import Cameras from "../../assets/images/cameras.jpg";
import OpenFolder from "../../assets/images/open-folder.png";
import ClosedFolder from "../../assets/images/closed-folder.png";
import File from "../../assets/images/file-icon.png";

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
                  {">"}DESCONOCIDO$ QUE DECISION TOMARAS
                  <span className="animate-ping transition duration-75">|</span>
                </h2>
                <div className="flex flex-row justify-between mt-10">
                  <div
                    className="flex flex-col group cursor-pointer hover:-translate-y-4 transition duration-300"
                    onClick={() => setProyectsToggled(!proyectsToggled)}
                  >
                    <div className="relative">
                      <img
                        className="w-1/2 mx-auto "
                        src={proyectsToggled ? OpenFolder : ClosedFolder}
                      />

                      <h3 className="absolute top-1/2 right-[100px] text-xl font-cyber text-gray-300 -rotate-6">
                        Proyectos
                      </h3>
                    </div>
                  </div>
                  <div className="relative cursor-pointer hover:-translate-y-4 transition duration-300">
                    <img
                      className="w-1/2 my-auto mx-auto shadow-xl"
                      src={File}
                    />

                    <h3 className="absolute top-1/4 right-1/3 text-md text-center font-cyber text-red-500">
                      SECRET
                    </h3>
                    <h3 className="absolute top-1/2 right-[110px] text-xl font-cyber text-gray-300 -rotate-6">
                      Sujeto1
                    </h3>
                  </div>
                  <div className="relative cursor-pointer hover:-translate-y-4 transition duration-300">
                    <img className="w-1/2 my-auto mx-auto" src={File} />

                    <h3 className="absolute top-1/4 right-1/3 text-md font-cyber text-red-500">
                      SECRET
                    </h3>
                    <h3 className="absolute top-1/2 right-[110px] text-xl font-cyber text-gray-300 -rotate-6">
                      Sujeto2
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
