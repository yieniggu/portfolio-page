import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false,
  modalType: null,
  language: "es",
  settingLanguage: true,
};

export const UISlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.modalOpen = true;
      state.modalType = payload;
    },
    setLanguage: (state, { payload }) => {
      state.language = payload;
      state.settingLanguage = false;
    },
    closeModal: (state) => {
      state.modalOpen = false;
      state.modalType = null;
    },
  },
});

export const { openModal, closeModal, setLanguage } = UISlice.actions;
