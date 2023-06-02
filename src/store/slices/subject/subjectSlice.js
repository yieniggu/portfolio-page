import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSubject: null,
  loadingSubjects: true,
  subjects: null,
};

export const subjectSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {
    setSubjects: (state, { payload }) => {
      state.subjects = payload;
      state.loadingSubjects = false;
    },
    setSelectedSubject: (state, { payload }) => {
      state.selectedSubject = payload;
    },
  },
});

export const { setSubjects, setSelectedSubject } = subjectSlice.actions;
