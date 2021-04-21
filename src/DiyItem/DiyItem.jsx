import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./DiyItem.module.css";
import DiyImage from "../DiyImage/DiyImage";



const DiyItem = (props) => {
  const [isTextShowing, setIsTextShowing] = useState(false);

  function onClick() {
    setIsTextShowing(!isTextShowing);
  }

  return (
    <li className={styles.container}>

        <header className={styles.header}>
          <DiyImage
            url={props.craft.image}
            name={props.craft.name}
          />
          <h2 className={styles.title}>
            <Link
              className={styles.link}
              to={`/diylist/${props.craft.id}`}
            >
              {props.craft.name}
            </Link>
          </h2>
        </header>
        <div className={styles.wrapper}>

              <time className={styles.time} dateTime={props.craft.timeStamp}>
                {props.craft.displayDate}
              </time>

        </div>

    </li>
  );
};

DiyItem.propTypes = {
  craft: PropTypes.object.isRequired,
};
export default DiyItem;
