import React, { useEffect } from "react";
import { AppRouter } from "./router";
import { RouterProvider } from "react-router-dom";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjects } from "./store/slices/subject";
import { BackgroundLoader } from "./components/loaders/BackgroundLoader";
import { fetchProjects } from "./store/slices/project/thunks";
import { loadLanguage } from "./store/slices/UI/thunks";

const loader = document.querySelector(".loader-container");
const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");

export const App = () => {
  const { loadingSubjects, subjects } = useSelector((state) => state.subject);
  const { loadingProjects, projects } = useSelector((state) => state.project);
  const { settingLanguage } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  useEffect(() => {
    hideLoader();

    if (loadingSubjects && !subjects) {
      dispatch(fetchSubjects());
    }

    if (loadingProjects && !projects) {
      dispatch(fetchProjects());
    }

    if (settingLanguage) {
      dispatch(loadLanguage());
    }
  }, []);

  return (
    <div className="App">
      {loadingSubjects || loadingProjects || settingLanguage ? (
        <BackgroundLoader />
      ) : (
        <RouterProvider router={AppRouter} />
      )}
    </div>
  );
};
