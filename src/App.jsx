import Button from "./component/Button";
import Container from "./component/Container";
import EmptyState from "./component/EmptyState";
import LoadingSpinner from "./component/LoadingSpinner";
import TaskCard from "./component/TaskCard";
import { useGetTasksQuery } from "./features/taskApi/taskApiSlice";

function App() {
  const { data, isLoading } = useGetTasksQuery();
  return (
    <Container>
      {/* SECTION HEADING */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">TaskMaster</h1>
        <h3 className="font-light text-neutral-500 mt-2">
          Organize, Prioritize, and Achieve Your Goals
        </h3>
      </div>

      {/* TASK CONTAINER */}
      <div className="mt-6 space-y-4">
        {/* HEADING */}
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
              />
            </svg>
            <h1 className="text-2xl font-bold">Task List</h1>
          </div>
          {/* ADD TASK BUTTON */}
          <Button title={"Add New Task"} className="bg-blue-600 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            New
          </Button>
        </div>
        {/* TASKS */}
        {isLoading ? (
          <LoadingSpinner />
        ) : data.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {data.map((task) => (
              <TaskCard key={task?._id} task={task} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>

      {/* ADD NEW TASK BUTTON */}
      <div className="fixed bottom-[5.5%] right-[5.5%]">
        <Button
          title={"Add New Task"}
          className="border-blue-700 bg-gray-50 text-blue-700 !p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>
    </Container>
  );
}

export default App;
