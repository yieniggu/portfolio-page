import { configureStore } from "@reduxjs/toolkit";
import { UISlice } from "./slices/UI/UISlice";
import { subjectSlice } from "./slices/subject";
import { projectSlice } from "./slices/project/projectSlice";

export const store = configureStore({
  reducer: {
    ui: UISlice.reducer,
    subject: subjectSlice.reducer,
    project: projectSlice.reducer,
  },
});
