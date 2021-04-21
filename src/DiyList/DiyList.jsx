import React from "react";
import PropTypes from "prop-types";
import styles from "./DiyList.module.css";
import DiyItem from "../DiyItem/DiyItem.jsx";

const DiyList = (props) => {
  let displayContent;

  if (props.crafts.length) {
    displayContent = (
      <ul className={styles.container}>
        {props.crafts.map((craft) => (
          <DiyItem craft={craft} key={craft.id} />
        ))}
      </ul>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return (
    <div>
      {displayContent}
    </div>
  );
};

DiyList.propTypes = {
    crafts: PropTypes.array.isRequired
}
export default DiyList;
