import { configureStore } from "@reduxjs/toolkit";
import taskApiSlice from "../features/taskApi/taskApiSlice";

const store = configureStore({
  reducer: {
    [taskApiSlice.reducerPath]: taskApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    getDefaultMiddleware().concat(taskApiSlice.middleware);
  },
});

export default store;
