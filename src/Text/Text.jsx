import React from "react";
import PropTypes from "prop-types";
import styles from "./Text.module.css";


const Text = (props) => {
  return <div className={styles.content}dangerouslySetInnerHTML={{ __html: props.text }} />;
};

Text.propTypes = {
    tutorial: PropTypes.string.isRequired
}
export default Text;
