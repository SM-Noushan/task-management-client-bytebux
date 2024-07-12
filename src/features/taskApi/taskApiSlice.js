import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const taskApiSlice = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ["Task"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
      providesTags: ["Task"],
    }),
    createTask: builder.mutation({
      query: (newTask) => ({
        url: "tasks",
        method: "POST",
        body: newTask,
      }),
      invalidatesTags: ["Task"],
    }),
    updateTask: builder.mutation({
      query: ({ id, updatedTask }) => ({
        url: `/tasks/${id}`,
        method: "PUT",
        body: updatedTask,
      }),
      invalidatesTags: (result, error, id) => [{ type: "Task", _id: id }],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Task", _id: id }],
    }),
  }),
});

export default taskApiSlice;

export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApiSlice;
