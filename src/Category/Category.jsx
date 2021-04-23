import React from 'react'
import styles from "./Category.module.css";
import { Link } from "react-router-dom";
import easter from "../images/easter.jpeg";
import halloween from "../images/halloween.jpeg";
import stpatricks from "../images/stpatricks.jpeg";
import valentines from "../images/valentines.jpeg";
import christmas from "../images/christmas.jpeg";
import PropTypes from "prop-types";


const Category = () => {

  return (
    <div className={styles.container}>
    <ul className={styles.ul}>
      <li className={styles.list}>
        <Link className={styles.diylink} to={`/diylist/easter`}>Easter DIY</Link>
        <Link to={`/diylist/easter`} ><img src={easter} alt="easter diy"/></Link>
      </li>
      <li className={styles.list}>
      <Link className={styles.diylink} to={`/diylist/halloween`}>Halloween DIY</Link>
      <Link to={`/diylist/halloween`} ><img src={halloween} alt="halloween diy"/></Link>
      </li>
      <li className={styles.list}>
      <Link className={styles.diylink} to={`/diylist/st-patricks`}>St Patricks DIY</Link>
      <Link to={`/diylist/st-patricks`} ><img src={stpatricks} alt="st-patricks diy"/></Link>
      </li>
      <li className={styles.list}>
      <Link className={styles.diylink} to={`/diylist/valentines`}>Valentines DIY</Link>
      <Link to={`/diylist/valentines`} ><img src={valentines} alt="valentines diy"/></Link>
      </li>
      <li className={styles.list}>
      <Link className={styles.diylink} to={`/diylist/christmas`}>Christmas DIY</Link>
      <Link to={`/diylist/christmas`} ><img src={christmas} alt="christmas diy"/></Link>
      </li>
    </ul>
    <br />

 

    </div>
  );
};

Category.propTypes = {
    crafts: PropTypes.array.isRequired
}

export default Category;
