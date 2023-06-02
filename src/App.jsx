import React, { useEffect } from "react";
import { AppRouter } from "./router";
import { RouterProvider } from "react-router-dom";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjects } from "./store/slices/subject";
import { BackgroundLoader } from "./components/loaders/BackgroundLoader";

const loader = document.querySelector(".loader-container");
const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");

export const App = () => {
  const { loadingSubjects, subjects } = useSelector((state) => state.subject);

  const dispatch = useDispatch();

  useEffect(() => {
    hideLoader();

    if (loadingSubjects && !subjects) {
      dispatch(fetchSubjects());
    }
  }, []);

  return (
    <div className="App">
      {loadingSubjects ? (
        <BackgroundLoader />
      ) : (
        <RouterProvider router={AppRouter} />
      )}
    </div>
  );
};
