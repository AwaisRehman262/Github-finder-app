import React from "react";
import PropTypes from "prop-types";
import "./Loader.css";

const Loader = (props) => {
  return (
    <div className="loader">
      <img className="loaderImg" src={props.imageSrc} />
    </div>
  );
};

Loader.defaultProps = {
  imageSrc: "/InfinityLoader 1.svg",
};

Loader.PropTypes = {
  imageSrc: PropTypes.string,
};

export default Loader;
