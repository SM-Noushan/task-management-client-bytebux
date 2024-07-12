import { createSlice } from "@reduxjs/toolkit";

const formValidationSlice = createSlice({
  name: "validation",
  initialState: {
    errors: {
      title: "",
      description: "",
      status: "",
    },
  },
  reducers: {
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});

export default formValidationSlice.reducer;
export const { setErrors } = formValidationSlice.actions;
