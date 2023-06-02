import { getSubjects } from "../../../firebase/firestore";
import { downloadImage } from "../../../firebase/storage";
import { setSubjects } from "./subjectSlice";

export const fetchSubjects = () => {
  return async (dispatch) => {
    try {
      const subjectsDocs = await getSubjects();
      const subjects = await setSubjectsData(subjectsDocs);
      dispatch(setSubjects(subjects));
    } catch (e) {
      console.error(e);
      dispatch(setSubjects([]));
    }
  };
};

const setSubjectsData = async (subjectsDocs) => {
  let finalSubjects = [];

  for (let subjectDoc of subjectsDocs) {
    let finalSubject = subjectDoc.data();
    finalSubject.id = subjectDoc.id;
    console.log(finalSubject);

    const url = await downloadImage(subjectDoc.id + ".jpg");
    finalSubject.imageUrl = url;

    finalSubjects.push(finalSubject);
  }

  console.log(finalSubjects);
  return finalSubjects;
};
