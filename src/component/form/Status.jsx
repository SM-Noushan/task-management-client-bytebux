import PropTypes from "prop-types";

const Status = ({ value = "", error }) => {
  return (
    <div>
      <div
        className={`space-y-1 text-sm flex justify-between items-center ${
          error ? "text-rose-600" : "text-gray-600"
        }`}
      >
        <label htmlFor="description" className="block mt-1">
          Status
        </label>
        <div className="flex-1 flex items-center justify-around">
          <div className="flex items-center gap-1.5">
            <input
              defaultChecked={value.toLowerCase() === "completed" && true}
              type="radio"
              className="radio"
              value="Completed"
              name="status"
            />
            <span>Completed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <input
              defaultChecked={value.toLowerCase() === "not completed" && true}
              type="radio"
              className="radio"
              value="Not Completed"
              name="status"
            />
            <span>Not Completed</span>
          </div>
        </div>
      </div>
      <span className="text-red-300 text-xs">{error && `*${error}`}</span>
    </div>
  );
};

Status.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
};

export default Status;
