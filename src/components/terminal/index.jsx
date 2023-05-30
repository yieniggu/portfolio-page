import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/UI/UISlice";

export const Terminal = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="rounded-lg border-2 mx-20 mt-20 flex flex-col bg-gray-700 bg-opacity-90 max-h-fit">
        <div className="flex flex-row bg-gray-400 h-10 rounded-md rounded-b-none">
          <div className="flex flex-row justify-between mr-auto my-auto px-2 gap-2">
            <div
              className="rounded-full bg-red-500 h-4 w-4 cursor-pointer"
              onClick={() => dispatch(closeModal())}
            ></div>
            <div className="rounded-full bg-yellow-500 h-4 w-4"></div>
            <div className="rounded-full bg-green-500 h-4 w-4"></div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
