import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();

export const downloadImage = async (subjectId) => {
  const subjectsRef = ref(storage, `subjects/${subjectId}`);

  try {
    const url = await getDownloadURL(subjectsRef);
    return url;
  } catch (e) {
    console.error(e);
    return null;
  }
};
