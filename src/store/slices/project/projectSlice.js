import { createSlice } from "@reduxjs/toolkit";

const initialState = { projects: null, loadingProjects: true };

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjects: (state, { payload }) => {
      state.projects = payload;
      state.loadingProjects = false;
    },
  },
});

export const { setProjects } = projectSlice.actions;
