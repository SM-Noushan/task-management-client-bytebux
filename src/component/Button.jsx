import PropTypes from "prop-types";

const Button = ({
  onClick,
  disabled,
  small,
  title,
  children,
  className: css = "",
}) => {
  return (
    <button
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={`
          relative
          disabled:opacity-70
          disabled:cursor-not-allowed
          rounded-lg
          hover:brightness-90
          transition
          px-4
          w-fit
          inline-flex
          justify-between
          items-center
          gap-2
          ${css}
          ${small ? "text-sm" : "text-lg"}
          ${small ? "py-1" : "py-2.5"}
          ${small ? "font-light" : "font-semibold"}
          ${small ? "border" : "border-2"}
        `}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
