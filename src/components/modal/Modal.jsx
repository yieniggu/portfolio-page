import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/slices/UI/UISlice";
import { Terminal } from "../terminal";
import { SubjectModal } from "./SubjectModal";
import { Projects } from "../projects/Projects";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Modal = () => {
  const { modalOpen, modalType } = useSelector((state) => state.ui);
  const { projects } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  const onCloseModal = (e) => {
    e.target.id.includes("close") && dispatch(closeModal());
  };

  if (!modalOpen) return null;

  return (
    <div
      id="close1"
      className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm h-screen w-screen overflow-y-hidden justify-center ${
        modalType !== "projects" && "items-center"
      } z-50 overflow-y-auto`}
      onClick={onCloseModal}
    >
      {modalType === "projects" && (
        <div className="w-11/12 3xl:w-1/2 sm:mx-auto mx-2 md:w-3/4">
          <Terminal title={"projects"}>
            <Projects projects={projects} modal={true} />
          </Terminal>
        </div>
      )}

      {modalType?.toLowerCase().includes("subject") && (
        <div className="w-3/4 mx-auto mt-40 ">
          <Terminal title={"warning"}>
            <SubjectModal />
          </Terminal>
        </div>
      )}
    </div>
  );
};
