import { configureStore } from "@reduxjs/toolkit";
import { UISlice } from "./slices/UI/UISlice";
import { subjectSlice } from "./slices/subject";

export const store = configureStore({
  reducer: {
    ui: UISlice.reducer,
    subject: subjectSlice.reducer,
  },
});
