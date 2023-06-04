import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./config";

export const getSubjects = async () => {
  const subjectsRef = collection(db, "subjects");

  const docSnap = await getDocs(subjectsRef);

  return docSnap.docs;
};

export const getProjects = async () => {
  const projectsRef = collection(db, "projects");

  const docSnap = await getDocs(projectsRef);

  return docSnap.docs;
};
