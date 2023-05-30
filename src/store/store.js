import { configureStore } from "@reduxjs/toolkit";
import { UISlice } from "./slices/UI/UISlice";

export const store = configureStore({
  reducer: {
    ui: UISlice.reducer,
  },
});
