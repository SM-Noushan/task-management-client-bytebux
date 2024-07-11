import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const taskApiSlice = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ["Task"],
  endpoints: (builder) => {
    getTasks: builder.query({
      query: () => "/tasks",
      providesTags: ["Task"],
    });
  },
});

export default taskApiSlice;

export const { useGetTasksQuery } = taskApiSlice;
