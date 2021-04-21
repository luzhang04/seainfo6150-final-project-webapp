
import React from "react";
import PropTypes from "prop-types";
import styles from "./DiyImage.module.css";

const DiyImage = (props) => {
  return <img className={styles.image} alt={props.name} src={props.url} />;
};

DiyImage.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default DiyImage;
