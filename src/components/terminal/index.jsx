import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/slices/UI/UISlice";

export const Terminal = ({ children, title, modal = false }) => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.ui);

  return (
    <div>
      <div className="w-full md:w-full rounded-lg border-2 md:mx-auto mt-5 flex flex-col bg-gray-700 bg-opacity-90  mb-10 overflow-y-auto overflow-x-hidden">
        <div className="flex flex-row bg-gray-400 h-10 rounded-md rounded-b-none">
          <div className="flex flex-row justify-between mr-auto my-auto px-2 gap-2">
            <div
              className="rounded-full bg-red-500 h-4 w-4 cursor-pointer"
              onClick={() => dispatch(closeModal())}
            ></div>
            <div className="rounded-full bg-yellow-500 h-4 w-4"></div>
            <div className="rounded-full bg-green-500 h-4 w-4"></div>
          </div>
          <div
            className={`text-center mr-auto my-auto font-code-mono text-lg text-gray-900 hidden ${
              !modal ? "md:flex" : "md:flex"
            }`}
          >
            {`${
              language === "es" ? "desconocido" : "unknown"
            }@source: ~/${title}`}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
