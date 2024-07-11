import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addModalState: false,
  updateModalState: false,
  deleteModalState: false,
};

const modalStateSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openAddModal: (state) => {
      state.addModalState = true;
    },
    closeAddModal: (state) => {
      state.addModalState = false;
    },
    openUpdateModal: (state) => {
      state.updateModalState = true;
    },
    closeUpdateModal: (state) => {
      state.updateModalState = false;
    },
    openDeleteModal: (state) => {
      state.deleteModalState = true;
    },
    closeDeleteModal: (state) => {
      state.deleteModalState = false;
    },
  },
});

export default modalStateSlice.reducer;
export const {
  openAddModal,
  closeAddModal,
  openUpdateModal,
  closeUpdateModal,
  openDeleteModal,
  closeDeleteModal,
} = modalStateSlice.actions;
