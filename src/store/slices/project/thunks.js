import { getProjects } from "../../../firebase/firestore";
import { setProjects } from "./projectSlice";

export const fetchProjects = () => {
  return async (dispatch) => {
    try {
      const projectsDocs = await getProjects();
      const projects = setProjectsData(projectsDocs);
      console.log("projects from thunk: ", projects);
      dispatch(setProjects(projects));
    } catch (e) {
      console.error(e);
      dispatch(setProjects([]));
    }
  };
};

const setProjectsData = (projectsDocs) => {
  let finalProjects = [];

  for (let projectDoc of projectsDocs) {
    let finalProject = projectDoc.data();
    finalProject.id = projectDoc.id;
    console.log(finalProject);

    finalProjects.push(finalProject);
  }

  console.log("projects from thunk fn: ", finalProjects);
  return finalProjects;
};
