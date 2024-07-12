import { configureStore } from "@reduxjs/toolkit";
import taskApiSlice from "../features/taskApi/taskApiSlice";
import modalStateSlice from "../features/modalState/modalStateSlice";
import formValidationSlice from "../features/formValidation/formValidationSlice";

const store = configureStore({
  reducer: {
    modalState: modalStateSlice,
    formValidation: formValidationSlice,
    [taskApiSlice.reducerPath]: taskApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskApiSlice.middleware),
});

export default store;
