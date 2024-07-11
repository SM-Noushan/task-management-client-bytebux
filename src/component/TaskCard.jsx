import PropTypes from "prop-types";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDeleteModal,
  openDeleteModal,
} from "../features/modalState/modalStateSlice";
import DeleteModal from "./modals/DeleteModal";

const TaskCard = ({ task, deleteTask }) => {
  const dispatch = useDispatch();
  const { addModalState, updateModalState, deleteModalState } = useSelector(
    (state) => state.modalState
  );

  return (
    <div className="bg-gray-100 text-gray-950 rounded-md">
      <div className="flex flex-col justify-between p-6 lg:p-10 gap-2">
        <div className="space-y-2">
          {/* TASK STATUS */}
          <span
            className={`px-3.5 py-1.5 text-xs capitalize rounded-full w-fit ${
              task?.status.toLowerCase() === "completed"
                ? "bg-emerald-300"
                : "bg-amber-300"
            } `}
          >
            {task?.status}
          </span>
          {/* TASK TITLE */}
          <h1 className="text-xl font-semibold">{task?.name}</h1>
          {/* TASK DESCRIPTION */}
          <p className="pt-1.5 text-justify">{task?.description}</p>
        </div>
        <div className="flex items-center justify-between pt-2">
          {/* MARK AS COMPETE BUTTON */}
          <Button small={true} className="text-blue-700 border-0 !px-0">
            <span>Mark As Complete</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
          </Button>
          <div className="flex items-center justify-between gap-2">
            {/* UPDATE TASK BUTTON */}
            <Button
              small={true}
              title="Update Task"
              className="border-blue-700 text-blue-700"
            >
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
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </Button>
            {/* DELETE TASK BUTTON */}
            <Button
              onClick={() => dispatch(openDeleteModal())}
              small={true}
              title="Delete Task"
              className="text-white bg-red-400"
            >
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
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </Button>
            <DeleteModal
              isOpen={deleteModalState}
              closeModal={() => dispatch(closeDeleteModal())}
              handleDelete={() => deleteTask(task?._id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object,
  deleteTask: PropTypes.func,
};

export default TaskCard;
