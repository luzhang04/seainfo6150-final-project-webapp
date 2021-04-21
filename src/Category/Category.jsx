import React from 'react'
import styles from "./Category.module.css";
import { Link } from "react-router-dom";
import DiyItem from "../DiyItem/DiyItem.jsx";
import PropTypes from "prop-types";


const Category = (props) => {
  let displayContent;




    displayContent = (
      <ul className={styles.container}>
        {props.crafts.map((craft) => (
          <div>
          <h2> {craft.category}</h2>
          <DiyItem craft={craft} key={craft.category} />

          </div>
        ))}
      </ul>
    );


    // displayContent = (
    //   <ul className={styles.container}>
    //     const items = {props.crafts.filter(craft => craft.category === "Easter-egg-diy")}
    //     {items.map((item) => (
    //       <DiyItem craft={item} key={item.category} />
    //     ))}
    //
    //   </ul>
    // );


  return (
    <div>
    <h1> 123 </h1>

      {displayContent}
    </div>
  );
};

Category.propTypes = {
    crafts: PropTypes.array.isRequired
}

export default Category;
