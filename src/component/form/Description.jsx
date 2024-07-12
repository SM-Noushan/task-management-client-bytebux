import PropTypes from "prop-types";

const Description = ({ error }) => {
  return (
    <div className="space-y-1 text-sm">
      <label
        htmlFor="description"
        className={`block ${error ? "text-rose-600" : "text-gray-600"}`}
      >
        Description
      </label>

      <textarea
        id="description"
        placeholder="Write here"
        className={`block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border ${
          error
            ? "border-rose-300 focus:outline-rose-500 "
            : "border-blue-300 focus:outline-blue-500 "
        }`}
        name="description"
      />
      <span className="text-red-300 text-xs">{error && `*${error}`}</span>
    </div>
  );
};
Description.propTypes = {
  error: PropTypes.string,
};

export default Description;
