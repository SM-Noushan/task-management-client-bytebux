// FORM ERRORS
const formValidation = ({ name, description, status }) => {
  const newErrors = {};
  if (!name) newErrors.title = "Title is required";
  else if (name.length < 5)
    newErrors.title = "Title must be at least 5 characters";
  else newErrors.title = "";
  if (!description) newErrors.description = "Description is required";
  else if (description.length < 25)
    newErrors.description = "Description must be at least 25 characters";
  else newErrors.description = "";
  if (!status) newErrors.status = "Status is required";
  else newErrors.status = "";
  return newErrors;
};

export default formValidation;
