import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className="container mx-auto xl:px-20 md:px-10 sm:px-2 px-4 lg:pt-12 pt-8 font-inter">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
