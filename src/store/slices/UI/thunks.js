import { setLanguage } from "./UISlice";

export const selectLanguage = (language) => {
  return async (dispatch) => {
    dispatch(setLanguage(language));

    localStorage.setItem("language", language);
  };
};

export const loadLanguage = () => {
  return async (dispatch) => {
    const storedLanguage = localStorage.getItem("language");

    console.log("stl: ", storedLanguage);

    storedLanguage
      ? dispatch(selectLanguage(storedLanguage))
      : dispatch(selectLanguage("es"));
  };
};
