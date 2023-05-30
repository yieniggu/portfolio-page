import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false,
  modalType: null,
};

export const UISlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.modalOpen = true;
      state.modalType = payload;
    },
    closeModal: () => initialState,
  },
});

export const { openModal, closeModal } = UISlice.actions;
