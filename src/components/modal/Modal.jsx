import React from "react";
import { useSelector } from "react-redux";
import { closeModal } from "../../store/slices/UI/UISlice";
import { Terminal } from "../terminal";

export const Modal = () => {
  const { modalOpen, modalType } = useSelector((state) => state.ui);

  const onCloseModal = (e) => {
    e.target.id.includes("close") && dispatch(closeModal());
  };

  if (!modalOpen) return null;

  return (
    <div
      id="close1"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50 overflow-y-auto"
      onClick={onCloseModal}
    >
      <Terminal>
        <div>Hola</div>
      </Terminal>
    </div>
  );
};
