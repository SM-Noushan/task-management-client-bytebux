import { configureStore } from "@reduxjs/toolkit";
import taskApiSlice from "../features/taskApi/taskApiSlice";
import modalStateSlice from "../features/modalState/modalStateSlice";

const store = configureStore({
  reducer: {
    modalState: modalStateSlice,
    [taskApiSlice.reducerPath]: taskApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskApiSlice.middleware),
});

export default store;
