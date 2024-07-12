import PropTypes from "prop-types";

const Title = ({ value = "", error }) => {
  return (
    <div className="space-y-1">
      <label
        htmlFor="name"
        className={`block ${error ? "text-rose-600" : "text-gray-600"}`}
      >
        Title
      </label>
      <input
        className={`w-full px-4 py-3 text-gray-800 border rounded-md ${
          error
            ? "border-rose-300 focus:outline-rose-500"
            : "border-blue-300 focus:outline-blue-500"
        }`}
        name="name"
        id="name"
        type="text"
        defaultValue={value}
        placeholder="Title"
        required
      />
      <span className="text-red-300 text-xs">{error && `*${error}`}</span>
    </div>
  );
};

Title.propTypes = {
  error: PropTypes.string,
  value: PropTypes.string,
};

export default Title;
