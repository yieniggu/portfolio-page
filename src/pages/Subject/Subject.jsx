import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Glitch from "../../assets/videos/glitch.mp4";
import { Layout } from "../../layout";
import { Modal } from "../../components/modal/Modal";
import { Terminal } from "../../components/terminal";
import { useSelector } from "react-redux";
import { BackgroundLoader } from "../../components/loaders/BackgroundLoader";
import { PowerGlitch } from "powerglitch";

import { skills, socialss } from "./skills";
import { Info } from "./Info";
import { Description } from "./Description";
import { Skills } from "./Skills";
import { Projects } from "../../components/projects/Projects";
import { Helmet } from "react-helmet";

export const Subject = () => {
  const { id } = useParams();

  const { subjects } = useSelector((state) => state.subject);
  const { projects } = useSelector((state) => state.project);
  const { language } = useSelector((state) => state.project);

  const [subject, setSubject] = useState(null);
  const [subjectProjects, setSubjectProjects] = useState(null);

  useEffect(() => {
    if (subjects) {
      const foundSubject = subjects.find((found) => found.id === id);

      setSubject(foundSubject);
    }
  }, [subjects]);

  useEffect(() => {
    if (projects) {
      const foundProjects = projects.filter((project) =>
        project.authors.includes(id)
      );

      setSubjectProjects(foundProjects);
    }
  }, []);

  useEffect(() => {
    console.log("glitching..");
    PowerGlitch.glitch(".glitch", {
      playMode: "always",
      createContainers: true,
      hideOverflow: false,
      timing: {
        duration: 1950,
      },
      glitchTimeSpan: {
        start: 0,
        end: 1,
      },
      shake: {
        velocity: 8,
        amplitudeX: 0.05,
        amplitudeY: 0.08,
      },
      slice: {
        count: 20,
        velocity: 10,
        minHeight: 0.02,
        maxHeight: 0.15,
        hueRotate: true,
      },
      pulse: false,
    });
  }, [subject]);

  return (
    <div className="w-full min-h-screen overflow-hidden">
      {subject ? (
        <Layout>
          <Helmet>
            <title>
              {language === "es" ? "desconocido" : "unknown"}@source:$ ~/{id}
            </title>
          </Helmet>
          <Modal />
          <video
            className="min-h-screen object-cover"
            src={Glitch}
            autoPlay
            loop
            muted
          />

          <div className="absolute flex flex-col xl:flex-row justify-between xl:1/3 w-11/12 ml-4 sm:mx-auto 3xl:gap-6 mt-14">
            <div className="2xl:w-2/5 xl:w-3/6 w-full sm:mx-6 mx-auto animate__animated animate__fadeInLeft animate__faster">
              <Terminal title={`${id}/info`}>
                <Info subject={subject} />
              </Terminal>
            </div>
            <div className="flex flex-col gap-4 w-full xl:w-3/5  sm:ml-6 mx-auto">
              <div className="animate__animated animate__fadeInRight animate__fast">
                <Terminal title={`${id}/description`}>
                  <Description subject={subject} />
                </Terminal>
              </div>
              <div className="animate__animated animate__fadeInRight">
                <Terminal title={`${id}/projects`}>
                  {subjectProjects && <Projects projects={subjectProjects} />}
                </Terminal>
              </div>
            </div>
          </div>
        </Layout>
      ) : (
        <BackgroundLoader />
      )}
    </div>
  );
};
